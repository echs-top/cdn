document.addEventListener("DOMContentLoaded", function () {
    // 获取 DOM 元素
    var itemEls = document.querySelectorAll(".aside .item");
    var formEl = document.querySelector(".cuteen > form");
    var ctxEls = document.querySelectorAll(".ctx");
    var currentConfig = sessionStorage.getItem("cuteen_config_current")||'global';

    // 绑定事件
    itemEls.forEach(function (itemEl) {
        itemEl.addEventListener("click", function () {
            itemEls.forEach(function (e) {
                e.classList.remove("active");
            });
            itemEl.classList.add("active");

            var currentName = itemEl.getAttribute("data-name");
            sessionStorage.setItem("cuteen_config_current", currentName);
            ctxEls.forEach(function (ctxEl) {
                ctxEl.style.display = "none";
                if (ctxEl.classList.contains(currentName)) {
                    ctxEl.style.display = "block";
                }
            });
        });
    });

    // 初始化状态
    if (currentConfig) {
        itemEls.forEach(function (itemEl) {
            var name = itemEl.getAttribute("data-name");
            if (name === currentConfig) {
                itemEl.classList.add("active");
            }
        });
        ctxEls.forEach(function (ctxEl) {
            if (ctxEl.classList.contains(currentConfig)) {
                ctxEl.style.display = "block";
            }
        });
    } else {
        itemEls[0].classList.add("active");
    }
    var key = document.getElementsByName("key")[0];   
});