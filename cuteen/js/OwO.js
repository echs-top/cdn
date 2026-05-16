class OwO {
    constructor(option) {
        const defaultOption = {
            logo: 'OwO表情',
            button: document.getElementById('OwO-btn'),
            container: document.getElementById('OwO'),
            target: document.getElementById('comment-textarea'),
            position: 'down',
            width: '100%',
            maxHeight: '250px',
            api: CuteenConfig.static_cdn_url + '/img/emoji/emoji.json'
        };
        option = Object.assign({}, defaultOption, option);

        this.container = option.container;
        this.button = option.button;
        this.target = option.target;
        if (option.position === 'up') {
            this.container.classList.add('OwO-up');
        }


        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    this.odata = JSON.parse(xhr.responseText);
                    this.init(option);
                } else {
                    console.log('OwO data request was unsuccessful: ' + xhr.status);
                }
            }
        };
        xhr.open('get', option.api, true);
        xhr.send(null);
    }

    init(option) {
        this.area = option.target;
        this.packages = Object.keys(this.odata);

        // fill in HTML <div class="OwO-logo"><span>${option.logo}</span></div>
        let html = `
            
            <div class="OwO-body" style="width: ${option.width}">`;

        for (let i = 0; i < this.packages.length; i++) {

            html += `
                <ul class="OwO-items OwO-items-${this.odata[this.packages[i]].type}" style="max-height: ${parseInt(option.maxHeight) - 53 + 'px'};">`;

            let opackage = this.odata[this.packages[i]].container;
            for (let i = 0; i < opackage.length; i++) {

                html += `
<li class="OwO-item" title="${opackage[i].text}" data-id="${opackage[i].data}">
<img class="emoji lazy" data-src="${CuteenConfig.static_cdn_url }/img/${ opackage[i].icon}" alt="${opackage[i].text}"/></li>`;
            }
            html += `
                </ul>`;
        }

        html += `
                <div class="OwO-bar">
                    <ul class="OwO-packages">`;

        for (let i = 0; i < this.packages.length; i++) {

            html += `<li><span>${this.packages[i]}</span></li>`
        }

        html += `
                    </ul>
                </div>
            </div>
            `;
        this.container.innerHTML = html;

        this.button.addEventListener('click', () => {
            this.toggle();
        });

        this.container.getElementsByClassName('OwO-body')[0].addEventListener('click', (e) => {
            let target = null;
            if (e.target.classList.contains('OwO-item')) {
                target = e.target;
            } else if (e.target.parentNode.classList.contains('OwO-item')) {
                target = e.target.parentNode;
            }
            if (target) {
                const cursorPos = this.area.selectionEnd;
                let areaValue = this.area.value;
                this.area.value = areaValue.slice(0, cursorPos) + target.dataset.id + areaValue.slice(cursorPos);
                this.area.focus();
                this.toggle();
            }
        });

        this.packagesEle = this.container.getElementsByClassName('OwO-packages')[0];
        for (let i = 0; i < this.packagesEle.children.length; i++) {
            ((index) => {
                this.packagesEle.children[i].addEventListener('click', () => {
                    this.tab(index);
                });
            })(i);
        }

        this.tab(0);
    }

    toggle() {
        if (this.container.classList.contains('OwO-open')) {
            this.container.classList.remove('OwO-open');
        } else {
            this.container.classList.add('OwO-open');
            Cuteen.LazyLoad()
        }
    }

    tab(index) {
        const itemsShow = this.container.getElementsByClassName('OwO-items-show')[0];
        if (itemsShow) {
            itemsShow.classList.remove('OwO-items-show');
        }
        this.container.getElementsByClassName('OwO-items')[index].classList.add('OwO-items-show');

        const packageActive = this.container.getElementsByClassName('OwO-package-active')[0];
        if (packageActive) {
            packageActive.classList.remove('OwO-package-active');
        }
        this.packagesEle.getElementsByTagName('li')[index].classList.add('OwO-package-active');
    }
}