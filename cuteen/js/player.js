const Util = {
    leftDistance: (el) => {
        let left = el.offsetLeft;
        let scrollLeft;
        while (el.offsetParent) {
            el = el.offsetParent;
            left += el.offsetLeft;
        }
        scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
        return left - scrollLeft;
    },
    timeFormat: (time) => {
        let tempMin = parseInt(time / 60);
        let tempSec = parseInt(time % 60);
        let curMin = tempMin < 10 ? ('0' + tempMin) : tempMin;
        let curSec = tempSec < 10 ? ('0' + tempSec) : tempSec;
        return curMin + ':' + curSec;
    },
    percentFormat: (percent) => {
        return (percent * 100).toFixed(2) + '%';
    },
    ajax: (option) => {
        option.beforeSend && option.beforeSend();
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    option.success && option.success(xhr.responseText);
                } else {
                    option.fail && option.fail(xhr.status);
                }
            }
        };
        xhr.open('GET', option.url);
        xhr.send(null);
    }
};

let instance = false;
const baseUrl = CuteenConfig .theme_url + '/api/music.php';

class Player {
    constructor(option) {
        if (instance) {
            console.error('只能存在一个实例！');
            return Object.create(null);
        } else {
            instance = true;
        }

        const defaultOption = {
            element: document.getElementById('musicPop'),
            autoplay: false,                             //true/false
            mode: 'listloop',                            //singleloop/listloop
            listshow: true                               //true/false
        };
        // this.option = Object.assign({},defaultOption,option);
        for (let defaultKey in defaultOption) {
            if (!option.hasOwnProperty(defaultKey)) {
                option[defaultKey] = defaultOption[defaultKey];
            }
        }
        this.option = option;

        if (!(this.option.music && this.option.music.type && this.option.music.source)) {
            console.error('请正确配置对象！');
            return Object.create(null);
        }
        this.root = this.option.element;
        this.type = this.option.music.type;
        this.music = this.option.music.source;
        this.media = this.option.music.media;
        this.isMobile = /mobile/i.test(window.navigator.userAgent);

        this.toggle = this.toggle.bind(this);
        this.toggleList = this.toggleList.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.switchMode = this.switchMode.bind(this);

        if (this.type === 'file') {
            this.root.innerHTML = this.template();
            this.init();
            this.bind();
        } else if (this.type === 'cloud') {
            this.root.innerHTML = '<p class="music-tip-loading">LOADING</p>';
            Util.ajax({
                url: baseUrl + '?type=collect&media=' + this.media + "&id=" + this.music,
                beforeSend: () => {
                  //  console.log('正在努力的拉取歌单 ...');
                },
                success: (data) => {
                   // console.log('歌单拉取成功！');
                    this.music = JSON.parse(data);
                    this.root.innerHTML = this.template();
                    this.init();
                    this.bind();
                },
                fail: (status) => {
                    console.error('歌单拉取失败！ 错误码：' + status);
                }
            });
        }
    }

    template() {
        let html = `
<audio class="music-source" src="${this.type === 'file' ? this.music[0].src : ''}" preload="metadata"></audio>
            <div class="music-picture">
                <img class="music-cover" src="${this.music[0].cover}" alt="">
                <div class="controls d-inline-flex align-items-center">
            <span class="music-prev-btn d-inline-flex rounded-circle me-1" onclick="player.prev();">
                <svg class="icon text-secondary m-2" aria-hidden="true"><use xlink:href="#prev"></use></svg>
            </span>
                <span class="music-play-btn d-inline-flex rounded-circle">
                <svg class="icon icon-20 text-secondary" aria-hidden="true"><use id="play-btn-icon" xlink:href="#bofang"></use></svg>
            </span>
                <span class="music-next-btn d-inline-flex rounded-circle ms-1" onclick="player.next();">
                <svg class="icon text-secondary m-2" aria-hidden="true"><use xlink:href="#next"></use></svg>
            </span>
            </div>
            </div>
            <div class="music-control">
                <p class="music-name">${this.music[0].name}</p>
                <p class="music-author">${this.music[0].author}</p>
                <div class="music-percent">
                    <div class="music-line-loading"></div>
                    <div class="music-line"></div>
                </div>
                <p class="music-time">
                    <span class="music-cur">${'00:00'}</span>/<span class="music-total">${'00:00'}</span>
                </p>
                <div class="music-volume" style="${this.isMobile ? 'display:none;' : ''}">
                    <i class="music-icon"></i>
                    <div class="music-percent">
                        <div class="music-line"></div>
                    </div>
                </div>
                <div class="music-list-switch">
                    <i class="music-list-icon"></i>
                </div>
                <i class="${this.option.mode === 'singleloop' ? 'music-mode music-mode-loop' : 'music-mode'}"></i>
            </div>
            <ul class="music-list">
        `;
        for (let index in this.music) {
            html += `
                <li data-index="${index}">
                    <i class="music-list-sign"></i>
                    <span class="music-list-index">${parseInt(index) + 1}</span>
                    <span class="music-list-name" title="${this.music[index].name}">${this.music[index].name}</span>
                    <span class="music-list-author" title="${this.music[index].author}">${this.music[index].author}</span>
                </li>
            `;
        }
        html += `
            </ul>
        `;
        return html;
    }

    init() {
        this.dom = {
            cover: this.root.querySelector('.music-cover'),
            playbutton: this.root.querySelector('.music-play-btn'),
            playbuttonicon:this.root.querySelector('#play-btn-icon'),
            name: this.root.querySelector('.music-name'),
            author: this.root.querySelector('.music-author'),
            timeline_total: this.root.querySelector('.music-percent'),
            timeline_loaded: this.root.querySelector('.music-line-loading'),
            timeline_played: this.root.querySelector('.music-percent .music-line'),
            timetext_total: this.root.querySelector('.music-total'),
            timetext_played: this.root.querySelector('.music-cur'),
            volumebutton: this.root.querySelector('.music-icon'),
            volumeline_total: this.root.querySelector('.music-volume .music-percent'),
            volumeline_value: this.root.querySelector('.music-volume .music-line'),
            switchbutton: this.root.querySelector('.music-list-switch'),
            modebutton: this.root.querySelector('.music-mode'),
            musiclist: this.root.querySelector('.music-list'),
            musicitem: this.root.querySelectorAll('.music-list li')
        };
        this.audio = this.root.querySelector('.music-source');
        if (this.option.listshow) {
            this.root.className = 'music-list-on';
        }
        if (this.option.mode === 'singleloop') {
            this.audio.loop = true;
        }
        this.dom.musicitem[0].className = 'music-curMusic';
        if (this.type === 'cloud') {
            Util.ajax({
                url: baseUrl + "?type=song&media=" + this.media + "&id=" + this.music[0].song_id,
                beforeSend: () => {
                   // console.log('正在努力的拉取歌曲 ...');
                },
                success: (data) => {
                    let url = JSON.parse(data).url;
                    if (url) {
                      //  console.log('歌曲拉取成功！');
                        this.audio.src = url;
                    } else {
                        console.log('歌曲拉取失败！ 资源无效！');
                        if (this.music.length !== 1) {
                            this.next();
                        }
                    }
                },
                fail: (status) => {
                    console.error('歌曲拉取失败！ 错误码：' + status);
                }
            });
        }
    }

    bind() {
        this.updateLine = () => {
            let percent = this.audio.buffered.length ? (this.audio.buffered.end(this.audio.buffered.length - 1) / this.audio.duration) : 0;
            this.dom.timeline_loaded.style.width = Util.percentFormat(percent);
        };

        this.audio.addEventListener('durationchange', (e) => {
            this.dom.timetext_total.innerHTML = Util.timeFormat(this.audio.duration);
            this.updateLine();
        });
        this.audio.addEventListener('progress', (e) => {
            this.updateLine();
        });
        this.audio.addEventListener('canplay', (e) => {
            if (this.option.autoplay && !this.isMobile) {
                this.play();
            }
        });
        this.audio.addEventListener('timeupdate', (e) => {
            let percent = this.audio.currentTime / this.audio.duration;
            this.dom.timeline_played.style.width = Util.percentFormat(percent);
            this.dom.timetext_played.innerHTML = Util.timeFormat(this.audio.currentTime);
        });
        this.audio.addEventListener('seeked', (e) => {
            this.play();
        });
        this.audio.addEventListener('ended', (e) => {
            this.next();
        });

        this.dom.playbutton.addEventListener('click', this.toggle);
        this.dom.switchbutton.addEventListener('click', this.toggleList);
        if (!this.isMobile) {
            this.dom.volumebutton.addEventListener('click', this.toggleMute);
        }
        this.dom.modebutton.addEventListener('click', this.switchMode);
        this.dom.musiclist.addEventListener('click', (e) => {
            let target, index, curIndex;
            if (e.target.tagName.toUpperCase() === 'LI') {
                target = e.target;
            } else if (e.target.parentElement.tagName.toUpperCase() === 'LI') {
                target = e.target.parentElement;
            } else {
                return;
            }
            index = parseInt(target.getAttribute('data-index'));
            curIndex = parseInt(this.dom.musiclist.querySelector('.music-curMusic').getAttribute('data-index'));
            if (index === curIndex) {
                this.play();
            } else {
                this.switchMusic(index + 1);
            }
        });
        this.dom.timeline_total.addEventListener('click', (event) => {
            let e = event || window.event;
            let percent = (e.clientX - Util.leftDistance(this.dom.timeline_total)) / this.dom.timeline_total.clientWidth;
            if (!isNaN(this.audio.duration)) {
                this.dom.timeline_played.style.width = Util.percentFormat(percent);
                this.dom.timetext_played.innerHTML = Util.timeFormat(percent * this.audio.duration);
                this.audio.currentTime = percent * this.audio.duration;
            }
        });
        if (!this.isMobile) {
            this.dom.volumeline_total.addEventListener('click', (event) => {
                let e = event || window.event;
                let percent = (e.clientX - Util.leftDistance(this.dom.volumeline_total)) / this.dom.volumeline_total.clientWidth;
                this.dom.volumeline_value.style.width = Util.percentFormat(percent);
                this.audio.volume = percent;
                if (this.audio.muted) {
                    this.toggleMute();
                }
            });
        }
    }

    prev() {
        let index = parseInt(this.dom.musiclist.querySelector('.music-curMusic').getAttribute('data-index'));
        if (index === 0) {
            if (this.music.length === 1) {
                this.play();
            } else {
                this.switchMusic(this.music.length - 1 + 1);
            }
        } else {
            this.switchMusic(index - 1 + 1);
        }
    }

    next() {
        let index = parseInt(this.dom.musiclist.querySelector('.music-curMusic').getAttribute('data-index'));
        if (index === (this.music.length - 1)) {
            if (this.music.length === 1) {
                this.play();
            } else {
                this.switchMusic(0 + 1);
            }
        } else {
            this.switchMusic(index + 1 + 1);
        }
    }

    switchMusic(index) {
        if (typeof index !== 'number') {
            console.error('请输入正确的歌曲序号！');
            return;
        }
        index -= 1;
        if (index < 0 || index >= this.music.length) {
            console.error('请输入正确的歌曲序号！');
            return;
        }
        if (index == this.dom.musiclist.querySelector('.music-curMusic').getAttribute('data-index')) {
            this.play();
            return;
        }
        //if(!this.isMobile){
        //    this.audio.pause();
        //    this.audio.currentTime = 0;
        //}
        this.dom.musiclist.querySelector('.music-curMusic').classList.remove('music-curMusic');
        this.dom.musicitem[index].classList.add('music-curMusic');
        this.dom.name.innerHTML = this.music[index].name;
        this.dom.author.innerHTML = this.music[index].author;
        this.dom.cover.src = this.music[index].cover;
        if (this.type === 'file') {
            this.audio.src = this.music[index].src;
            this.play();
        } else if (this.type === 'cloud') {
            Util.ajax({
                url: baseUrl + "?type=song&media=" + this.media + "&id=" + this.music[index].song_id,
                beforeSend: () => {
                    console.log('正在努力的拉取歌曲 ...');
                },
                success: (data) => {
                    let url = JSON.parse(data).url;
                    if (url) {
                        console.log('歌曲拉取成功！');
                        this.audio.src = url;
                        this.play();
                        //暂存问题，移动端兼容性
                    } else {
                        console.log('歌曲拉取失败！ 资源无效！');
                        if (this.music.length !== 1) {
                            this.next();
                        }
                    }
                },
                fail: (status) => {
                    console.error('歌曲拉取失败！ 错误码：' + status);
                }
            });
        }
    }

    play() {
        if (this.audio.paused) {
            this.audio.play();
            this.dom.playbutton.classList.add('music-pause');
            this.dom.playbuttonicon.setAttribute("xlink:href", "#pause");
            this.dom.cover.classList.add('music-pause');
            document.getElementById('musicSvg').classList.add('active');
        }
    }

    pause() {
        if (!this.audio.paused) {
            this.audio.pause();
            this.dom.playbutton.classList.remove('music-pause');
            this.dom.playbuttonicon.setAttribute("xlink:href", "#bofang");
            this.dom.cover.classList.remove('music-pause');
            document.getElementById('musicSvg').classList.remove('active');
        }
    }

    toggle() {
        this.audio.paused ? this.play() : this.pause();
    }

    toggleList() {
        this.root.classList.contains('music-list-on') ? this.root.classList.remove('music-list-on') : this.root.classList.add('music-list-on');
    }

    toggleMute() {
        //暂存问题，移动端兼容性
        if (this.audio.muted) {
            this.audio.muted = false;
            this.dom.volumebutton.classList.remove('music-quiet');
            this.dom.volumeline_value.style.width = Util.percentFormat(this.audio.volume);
        } else {
            this.audio.muted = true;
            this.dom.volumebutton.classList.add('music-quiet');
            this.dom.volumeline_value.style.width = '0%';
        }
    }

    switchMode() {
        if (this.audio.loop) {
            this.audio.loop = false;
            this.dom.modebutton.classList.remove('music-mode-loop');
        } else {
            this.audio.loop = true;
            this.dom.modebutton.classList.add('music-mode-loop');
        }
    }

    destroy() {
        instance = false;
        this.audio.pause();
        this.root.innerHTML = '';
        for (let prop in this) {
            delete this[prop];
        }
        console.log('该实例已销毁，可重新配置 ...');
    }
}
