/**
 * MC-Skin 网页全功能版
 * 集成资源加载、自动交互、挂机动画、打字反馈及设置菜单
 */
(function() {
    'use strict';

    // 1. 基础配置
    const CONFIG = {
        skinUrl: window.CONFIG_skin_url || "https://cdn.echs.top/skin/B0MBIES.png",
        resources: [
            "https://fastly.jsdelivr.net/npm/three@0.128.0/build/three.min.js",
            "https://fastly.jsdelivr.net/npm/skinview3d@3.4.1/bundles/skinview3d.bundle.min.js"
        ]
    };

    // 2. 脚本加载器
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // 3. 核心功能逻辑
    async function init() {
        for (const res of CONFIG.resources) await loadScript(res);
        
        const storage = {
            get: (k, def) => localStorage.getItem('mc_skin_' + k) || def,
            set: (k, v) => localStorage.setItem('mc_skin_' + k, v)
        };

        let skin = storage.get('skin', CONFIG.skinUrl);
        let opacity = storage.get('opacity', '0.85');
        let defaultRotation = parseFloat(storage.get('rotation', '-0.25'));

        const canvas = document.createElement("canvas");
        canvas.style.cssText = `position:fixed; bottom:20px; right:20px; z-index:999999; pointer-events:none; opacity:${opacity}; background:transparent;`;
        document.body.appendChild(canvas);

        const skinViewer = new skinview3d.SkinViewer({
            canvas: canvas, width: 130, height: 200, skin: skin
        });

        // --- 交互与动画逻辑 ---
        let addAnimation = () => {};
        let isPlayingAfk = false;
        let afkTimeout, actionTimeout;

        // 基础呼吸动画
        skinViewer.animation = new skinview3d.FunctionAnimation((player, pr) => {
            if (canvas.style.display === "none") return;
            const t = pr * 2;
            player.skin.leftArm.rotation.z = Math.cos(t) * 0.03 + 0.06;
            player.skin.rightArm.rotation.z = Math.cos(t + Math.PI) * 0.03 - 0.06;
            player.rotation.y = defaultRotation;
            addAnimation(player, pr);
        });

        // Afk 挂机动画 (保留原文件复杂逻辑)
        const startAfk = () => {
            isPlayingAfk = true;
            addAnimation = (pl, pr) => {
                const kT = 13.5;
                const sin0 = (x) => Math.sin(x) > 0 ? Math.pow(Math.abs(Math.sin(x)), 0.66) : -Math.pow(Math.abs(Math.sin(x)), 0.66);
                const t = sin0(pr * kT) * 1.5;
                pl.skin.leftLeg.position.x = t + 1.9;
                pl.skin.rightLeg.position.x = t - 1.9;
                pl.skin.body.position.x = t / 2;
            };
        };

        const resetAfk = () => {
            clearTimeout(afkTimeout);
            if (isPlayingAfk) {
                addAnimation = () => {};
                const p = skinViewer.playerObject;
                [p.skin.head, p.skin.leftArm, p.skin.rightArm, p.skin.leftLeg, p.skin.rightLeg, p.skin.body].forEach(part => {
                    part.rotation.set(0, 0, 0);
                    part.position.set(part.name === 'leftArm' ? 5 : (part.name === 'rightArm' ? -5 : 0), -2, 0);
                });
                isPlayingAfk = false;
            }
            afkTimeout = setTimeout(startAfk, 300000);
        };

        // --- 事件监听 (打字、滚轮、点击) ---
        
        // 鼠标跟随
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -10);
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        
        window.addEventListener("mousemove", (e) => {
            resetAfk();
            const rect = canvas.getBoundingClientRect();
            mouse.x = (((e.clientX - rect.left) / rect.width) * 2 - 1) / (window.innerWidth / rect.width);
            mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1) / (window.innerHeight / rect.height);
            raycaster.setFromCamera(mouse, skinViewer.camera);
            const intersect = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, intersect);
            skinViewer.playerObject.skin.head.lookAt(intersect);
        }, { passive: true });

        // 点击攻击动画
        window.addEventListener("mousedown", () => {
            resetAfk();
            let startPr = null;
            addAnimation = (player, pr) => {
                if (startPr === null) startPr = pr;
                const t = (pr - startPr) * 20;
                player.skin.rightArm.rotation.x = -0.9 + Math.sin(t + Math.PI) * 0.3;
                if (t >= Math.PI * 2) { addAnimation = () => {}; startPr = null; }
            };
        }, { passive: true });

        // 打字动作
        window.addEventListener("keydown", () => {
            resetAfk();
            let startPr = null;
            addAnimation = (player, pr) => {
                if (startPr === null) startPr = pr;
                const p = pr - startPr;
                player.skin.leftArm.rotation.x = -Math.abs(Math.PI/6 * Math.sin(p * 15)) - 0.6;
                player.skin.rightArm.rotation.x = -Math.abs(Math.PI/6 * Math.cos(p * 15)) - 0.6;
            };
            clearTimeout(actionTimeout);
            actionTimeout = setTimeout(() => { addAnimation = () => {}; }, 500);
        }, { passive: true });

        // 滚轮缩放感应
        window.addEventListener("wheel", (e) => {
            resetAfk();
            let startPr = null;
            addAnimation = (player, pr) => {
                if (startPr === null) startPr = pr;
                player.skin.rightArm.rotation.x = e.deltaY > 0 ? -0.5 : -1.2;
            };
            clearTimeout(actionTimeout);
            actionTimeout = setTimeout(() => { addAnimation = () => {}; }, 300);
        }, { passive: true });

        // 初始化挂机检测
        resetAfk();
    }

    // 启动
    if (document.readyState === "complete") init();
    else window.addEventListener("DOMContentLoaded", init);
})();
