"use strict";

class App {
    constructor() {
        console.log(" %c Theme Cuteen Version " + CuteenConfig.theme_version + " %c blog.zwying.com", "color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;", "color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;");
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
        const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))
        window.onscroll = () => {
            this.HeroNavbar()
        };
        this.PjaxLoad()
        this.CheckDarkMode()
    }

    PjaxLoad() {
        this.OwOInit()
        this.LazyLoad()
        this.RandomTagsColor()
        this.RandomTimelineColor()
        this.AjaxGetCommentInfo()
    }

    stopPropagation(e) {
        e = e || window.event;
        if (e.stopPropagation) { //W3C阻止冒泡方法
            e.stopPropagation();
        } else {
            e.cancelBubble = true; //IE阻止冒泡方法
        }
    }

    OwOInit() {
        if (document.getElementById('comment-textarea')) {
            const owo = new OwO();
        }
    }

    LazyLoad() {
        const lazyLoadInstance = new LazyLoad({
            elements_selector: "div.lazy,img.lazy"
        });
    }

    CheckDarkMode() {
        const svg = document.querySelectorAll('.darkMode use');
        const night = localStorage.getItem('dark')
        const html = document.getElementsByTagName('html')[0]
        const lightLogo = document.getElementById('light-logo')
        const darkLogo = document.getElementById('dark-logo')
        if (night === 'true') {
            svg.forEach(x => x.setAttribute('xlink:href', '#sun'));
            html.classList.add("dark")
            localStorage.setItem('dark', 'true')
            if (lightLogo) {
                lightLogo.classList.remove("d-block")
                lightLogo.classList.add("d-none")
            }
            if (darkLogo) {
                darkLogo.classList.add("d-block")
                darkLogo.classList.remove("d-none")
            }
        }
        if (night === 'false') {
            svg.forEach(x => x.setAttribute('xlink:href', '#moon'));
            html.classList.remove("dark")
            localStorage.setItem('dark', 'false')
            if (lightLogo) {
                lightLogo.classList.add("d-block")
                lightLogo.classList.remove("d-none")
            }
            if (darkLogo) {
                darkLogo.classList.remove("d-block")
                darkLogo.classList.add("d-none")
            }
        }
    }

    DarkModeToggle() {
        const night = localStorage.getItem('dark') || 'false'
        const html = document.getElementsByTagName('html')[0]
        const lightLogo = document.getElementById('light-logo')
        const darkLogo = document.getElementById('dark-logo')
        const svg = document.querySelectorAll('.darkMode use');
        if (night === 'true') {
            svg.forEach(x => x.setAttribute('xlink:href', '#moon'));
            localStorage.setItem('dark', 'false')
            html.classList.remove("dark")
            if (lightLogo) {
                lightLogo.classList.add("d-block")
                lightLogo.classList.remove("d-none")
            }
            if (darkLogo) {
                darkLogo.classList.remove("d-block")
                darkLogo.classList.add("d-none")
            }
        }
        if (night === 'false') {
            svg.forEach(x => x.setAttribute('xlink:href', '#sun'));
            html.classList.add("dark")
            localStorage.setItem('dark', 'true')
            if (lightLogo) {
                lightLogo.classList.remove("d-block")
                lightLogo.classList.add("d-none")
            }
            if (darkLogo) {
                darkLogo.classList.add("d-block")
                darkLogo.classList.remove("d-none")
            }
        }
    }

    RandomTagsColor() {
        const color = ['primary', 'info', 'success', 'danger', 'warning']
        const el = document.querySelectorAll('#tag a')
        if (el) {
            el.forEach((element, index) => {
                element.classList.add('badge', 'rounded-pill', 'text-bg-' + color[index % 5])
            })
        }
    }

    RandomTimelineColor() {
        const color = ['primary', 'info', 'success', 'danger', 'warning']
        const icon = ['book', 'label', 'navigate', 'launch', 'pen']
        const el = document.querySelectorAll('.timeline-icon')
        const icons = document.querySelectorAll('.timeline-icon use')
        if (el) {
            el.forEach((element, index) => {
                element.classList.add('text-bg-' + color[index % 5])
            })
        }
        if (icons) {
            icons.forEach((element, index) => {
                element.setAttribute('xlink:href', '#' + icon[index % 5])
            })
        }
    }

    PostLike() {
        const like = document.getElementsByClassName('like-button')[0],
            num = document.getElementById('likeNumber');
        if (like.classList.contains('liked')) {
            Qmsg.warning("您已经点过赞啦💦")
            return;
        }
        like.classList.add('liked')
        fetch(CuteenConfig.index + '/action/cuteen', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({type: "likes", cid: CuteenConfig.post_cid})
        }).then(res => res.json()).then(() => {
            num.innerText++;
            Qmsg.success("点赞成功~💖")
        }).catch(err => console.log(err))
    }

    Comment(btn) {
        const fm = document.getElementById('comment-form');
        const action = fm.getAttribute('data-action');
        fm.onsubmit = function (e) {
            e.preventDefault();
            let fmData = new FormData(fm);
            btn.setAttribute('disabled', true)
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>提交中…'
            fetch(action, {method: 'POST', body: fmData}).then(res => res.text()).then(res => {
                const error = new RegExp('Typecho_Widget_Exception');
                if (error.test(res.data)) {
                    Qmsg.error("评论失败，请刷新重试❌")
                    console.log(res.data)
                    btn.removeAttribute('disabled')
                    btn.innerHTML = '提交评论'
                    return
                }
                document.getElementById("comment-textarea").value = "";//清空回复
                let parser = new DOMParser(), dom = parser.parseFromString(res, "text/html");//字符串转DOM
                let newIdNumber = res.match(/id=\"?comment-\d+/g).join().match(/\d+/g).sort(
                    (a, b) => {
                        return a - b
                    }).pop();
                let newId = 'comment-' + newIdNumber,
                    list = document.getElementById('comments'),
                    newList = dom.getElementById('comments');
                list.innerHTML = newList.innerHTML;
                //替换回复可见
                let old = document.getElementsByClassName("hide-box")
                let now = dom.getElementsByClassName("hide-box")
                if (old.length > 0) {
                    for (let i = 0; i < old.length; i++) {
                        old[i].innerHTML = now[i].innerHTML
                    }
                }

                Qmsg.success("评论成功🎯")
                document.getElementById(newId).scrollIntoView({behavior: "smooth"});//滚动到对应锚点
                btn.removeAttribute('disabled')
                btn.innerHTML = '提交评论'
            }).catch(err => {
                console.log(err);
                Qmsg.error("评论失败！请检查控制台输出错误")
                btn.removeAttribute('disabled')
                btn.innerHTML = '提交评论'
            })
        }
    }

    AjaxGetCommentInfo() {
        const input = document.getElementById('comment-qq');
        if (!input) return;
        input.onblur = function () {
            const QQ = input.value;
            const reg = /^[1-9]\d{4,9}$/;
            if (!reg.test(QQ)) return;
            //Qmsg.info("获取信息中…………")
            document.getElementById('comment-author-avatar').setAttribute('src', "https://q.qlogo.cn/headimg_dl?dst_uin="+QQ+"&spec=4");
            document.getElementById('mail').value = QQ+"@qq.com";
            Qmsg.success("头像拉取成功！")
        }
    }

    AjaxLoadPost(btn) {
        const link = document.getElementsByClassName('next')[0];
        const href = link.getAttribute('href');
        if (!href) return;
        link.onclick = (e) => e.preventDefault();
        btn.setAttribute('disabled', true)
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>加载中…'
        fetch(href).then(res => res.text()).then(res => {
            let parser = new DOMParser(), dom = parser.parseFromString(res, "text/html");//字符串转DOM
            const error = new RegExp('Typecho_Widget_Exception');
            if (error.test(res)) {
                console.log(res)
                Qmsg.error("加载失败！请刷新！")
                return
            }
            const posts = dom.getElementById('article-list')
            document.getElementById('article-list').insertAdjacentHTML('beforeend', posts.outerHTML)
            this.LazyLoad()
            this.OwOInit()
            let newHref = '';
            const newHrefPosition = dom.getElementsByClassName('next')[0];
            if (newHrefPosition) {
                newHref = newHrefPosition.getAttribute('href');
                btn.removeAttribute('disabled')
                btn.innerHTML = '点击加载更多'
            } else {
                btn.innerHTML = '已经到底啦~'
            }
            link.setAttribute('href', newHref);//更新href
        }).catch(err => {
            console.log(err);
            Qmsg.error("加载失败！请刷新！")
        })
    }

    HeroNavbar() {
        let b = document.documentElement.scrollTop || document.body.scrollTop,
            d = document.getElementById('navPC');
        if (b > 250) {
            d.classList.add('bg-blur');
            d.classList.remove('bg-transparent', 'has-img');
        } else {
            d.classList.add('bg-transparent', 'has-img');
            d.classList.remove('bg-blur');
        }
    }

    CloseOffcanvas() {
        const offcanvasElementList = document.querySelectorAll('.offcanvas')
        const offcanvasList = [...offcanvasElementList].map(offcanvasEl => bootstrap.Offcanvas.getInstance(offcanvasEl))
        if (document.querySelectorAll('.offcanvas.show').length) {
            offcanvasList.forEach(item => {
                item.hide()
            })
        }
    }
}

document.addEventListener('DOMContentLoaded', function (event) {
    window.Cuteen = new App();
});
document.addEventListener('pjax:complete', function (event) {
    Cuteen.CloseOffcanvas()
});