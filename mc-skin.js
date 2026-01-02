/**
 * MC-Skin 自动资源加载版
 */
(function() {
    'use strict';

    // 1. 配置项：优先使用全局定义的 CONFIG_skin_url
    const SKIN_URL = window.CONFIG_skin_url || "https://cdn.echs.top/skin/B0MBIES.png";
    
    // 2. 依赖资源列表
    const resources = [
        "https://fastly.jsdelivr.net/npm/three@0.128.0/build/three.min.js",
        "https://fastly.jsdelivr.net/npm/skinview3d@3.4.1/bundles/skinview3d.bundle.min.js"
    ];

    // 3. 异步加载脚本函数
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // 4. 初始化模型逻辑
    async function initMcSkin() {
        try {
            // 按顺序加载依赖
            for (const res of resources) {
                await loadScript(res);
            }
            
            console.log("%cMcSkin.js: Resources loaded, initializing...", "color:orange");
            renderModel();
        } catch (err) {
            console.error("McSkin.js: Failed to load resources", err);
        }
    }

    function renderModel() {
        const w = 130;
        const h = 200;
        
        // 创建 Canvas 元素
        const canvas = document.createElement("canvas");
        canvas.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999999;
            pointer-events: none;
            opacity: 0.85;
            background: transparent;
            transition: opacity 0.3s;
        `;
        document.body.appendChild(canvas);

        // 初始化 SkinViewer
        const skinViewer = new skinview3d.SkinViewer({
            canvas: canvas,
            width: w,
            height: h,
            skin: SKIN_URL
        });

        // 基础动画 (呼吸/摆臂)
        const idleAnimation = new skinview3d.FunctionAnimation((player, pr) => {
            const t = pr * 2;
            player.skin.leftArm.rotation.z = Math.cos(t) * 0.03 + Math.PI * 0.02;
            player.skin.rightArm.rotation.z = Math.cos(t + Math.PI) * 0.03 - Math.PI * 0.02;
            player.rotation.y = -0.25; // 默认稍微侧身
        });
        skinViewer.animation = idleAnimation;

        // 视口限制与交互优化
        skinViewer.controls.enablePan = false;
        skinViewer.controls.enableZoom = false;
        skinViewer.controls.enableRotate = false;

        // 头部跟随鼠标逻辑
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -10);
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const pointOfIntersection = new THREE.Vector3();

        window.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            // 计算归一化坐标
            mouse.x = (((e.clientX - rect.left) / rect.width) * 2 - 1) / (window.innerWidth / rect.width);
            mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1) / (window.innerHeight / rect.height);
            
            raycaster.setFromCamera(mouse, skinViewer.camera);
            raycaster.ray.intersectPlane(plane, pointOfIntersection);
            skinViewer.playerObject.skin.head.lookAt(pointOfIntersection);
        }, { passive: true });

        // 页面隐藏时停止渲染节省性能
        document.addEventListener("visibilitychange", () => {
            skinViewer.animation.paused = document.hidden;
            canvas.style.display = document.hidden ? "none" : "block";
        });
    }

    // 5. 确保在 DOM 加载完成后执行
    if (document.readyState === "complete" || document.readyState === "interactive") {
        initMcSkin();
    } else {
        window.addEventListener("DOMContentLoaded", initMcSkin);
    }
})();