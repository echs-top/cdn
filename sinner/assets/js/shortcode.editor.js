/* 增加自定义功能 */
const items = [
    {
        title: '插入音乐',
        id: 'wmd-audio-button',
        type: 'audio',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="music" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path data-v-11241ba2="" fill="currentColor" d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z" class=""></path></svg>',
    },
    {
        title: '插入视频',
        id: 'wmd-video-button',
        type: 'video',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path data-v-11241ba2="" fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z" class=""></path></svg>',
    },
    {
        title: '登录可见',
        id: 'wmd-login-button',
        type: 'login',
        svg: '登',
    },
    {
        title: '文本属性',
        id: 'wmd-text-button',
        type: 'text',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path data-v-11241ba2="" fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" class=""></path></svg>',
    },
    {
        title: '短代码 - 按钮样式的链接',
        id: 'wmd-a-button',
        type: 'button',
        svg: '<svg class="icon" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4395"><path d="M896 853.333333H128a85.333333 85.333333 0 0 1-85.333333-85.333333V256a85.333333 85.333333 0 0 1 85.333333-85.333333h768a85.333333 85.333333 0 0 1 85.333333 85.333333v512a85.333333 85.333333 0 0 1-85.333333 85.333333zM128 256v512h768V256z" fill="#1A1A1A" p-id="4396"></path><path d="M298.666667 469.333333m42.666666 0l341.333334 0q42.666667 0 42.666666 42.666667l0 0q0 42.666667-42.666666 42.666667l-341.333334 0q-42.666667 0-42.666666-42.666667l0 0q0-42.666667 42.666666-42.666667Z" fill="#FF0000" p-id="4397"></path><path d="M682.666667 597.333333H341.333333a85.333333 85.333333 0 0 1 0-170.666666h341.333334a85.333333 85.333333 0 0 1 0 170.666666z m0-85.333333z" fill="#1A1A1A" p-id="4398"></path></svg>',
    },
    {
        title: '插入短代码 - 文章目录树',
        id: 'wmd-postindex-button',
        type: 'postindex',
        svg: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>',
    },
    {
        title: '插入短代码 - 下载文件',
        id: 'wmd-file-button',
        type: 'file',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path data-v-11241ba2="" fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" class=""></path></svg>',
    },
    {
        title: '插入短代码 - 提示及警告框',
        id: 'wmd-tip-button',
        type: 'tip',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path data-v-11241ba2="" fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" class=""></path></svg>',
    },
    {
        title: '插入短代码 - 相册排版',
        id: 'wmd-photo-button',
        type: 'photo',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="images" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path data-v-11241ba2="" fill="currentColor" d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" class=""></path></svg>',
    },
    {
        title: '插入短代码 - 引用文章',
        id: 'wmd-post-button',
        type: 'post',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="archive" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path data-v-11241ba2="" fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" class=""></path></svg>',
    },
    {
        title: '插入短代码 - 标签卡',
        id: 'wmd-tabs-button',
        type: 'tabs',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-restore" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path data-v-11241ba2="" fill="currentColor" d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z" class=""></path></svg>',
    },
    {
        title: '插入短代码 - 折叠框',
        id: 'wmd-collapse-button',
        type: 'collapse',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path data-v-11241ba2="" fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg>',
    },
    {
        title: '插入Github仓库控件',
        id: 'wmd-github-button',
        type: 'github',
        svg: '<svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path data-v-11241ba2="" fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" class=""></path></svg>',
    },
    {
        title: '短代码使用说明',
        id: 'wmd-about-button',
        type: 'link',
        svg: '<a href="https://store.typecho.work/archives/shortcode.html" target="_blank"><svg class="icon" data-v-11241ba2="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path data-v-11241ba2="" fill="currentColor" d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z" class=""></path></svg></a>',
    },
];
        let nextTabIndex = 1;
        let nextTabTitleIndex = 1;

        let createNewTab = () => {
            $(".content-tabs-head").append(`<div class="content-tab-title" role="tab" data-tab-index="${nextTabIndex}">标签页 ${nextTabTitleIndex}</div>`);
            $(".content-tabs-body").append(`
        <div class="content-tab-content" data-tab-index="${nextTabIndex}">
            <div class="form-group">
                <label>标签页名称<span style="color: red">*</span>:</label>
                <input type="text" class="input-tab-title" name="tabs[${nextTabIndex - 1}].title" value="标签页 ${nextTabTitleIndex}">
            </div>
            <div class="form-group">
                <label>标签页内容<span style="color: red">*</span>:</label>
                <textarea type="text" class="input-tab-content" name="tabs[${nextTabIndex - 1}].content" rows="6"></textarea>
            </div>
            <button type="button" class="btn btn-s btn-warn btn-tab-delete">删除此标签页</button>
        </div>`);
            nextTabIndex ++;
            nextTabTitleIndex ++;
        };
        let bindTabEvent = () => {
            $(".content-tab-title").off('click').on('click', function (e) {
                let _this = $(this);
                let tabTitleHead = _this.parent();
                let container = tabTitleHead.parent();
                let selectedIndex = _this.attr('data-tab-index');

                container.find('.content-tab-title').each(function () {
                    let tabIndex = $(this).attr('data-tab-index');
                    if (tabIndex === selectedIndex) {
                        $(this).addClass('selected');
                    } else {
                        $(this).removeClass('selected');
                    }
                });

                container.find('.content-tab-content').each(function () {
                    let tabIndex = $(this).attr('data-tab-index');
                    if (tabIndex === selectedIndex) {
                        $(this).addClass('selected');
                    } else {
                        $(this).removeClass('selected');
                    }
                });

                let scrollTabTo = function(scrollTo) {
                    if (scrollTo < 0) {
                        scrollTo = 0
                    }
                    try {
                        if (scrollTo > tabTitleHead[0].scrollWidth - tabTitleHead.innerWidth()) {
                            scrollTo = tabTitleHead[0].scrollWidth - tabTitleHead.innerWidth()
                        }
                    } catch (e) {
                        console.error(e)
                    }

                    tabTitleHead.animate(
                        {scrollLeft: scrollTo}, 500
                    );
                };

                let headOffsetLeft = tabTitleHead.offset().left;
                let tabOffsetLeft = _this.offset().left;
                let headWidth = tabTitleHead.innerWidth();
                let tabWidth = _this.outerWidth();
                let headScrollLeft = tabTitleHead.scrollLeft();

                scrollTabTo((tabOffsetLeft + headScrollLeft - headOffsetLeft) - (headWidth - tabWidth) / 2);
            });
            $(".btn-tab-delete").off('click').on('click', function (e) {
                if (!confirm("确定要删除此标签页吗？")) {
                    return;
                }
                let _this = $(this);
                let tabContent = _this.parent();
                let container = tabContent.parent().parent();
                let selectedIndex = parseInt(tabContent.attr('data-tab-index'));
                let nextIndex = selectedIndex - 1;
                if (selectedIndex <= 1) {
                    nextIndex = selectedIndex + 1;
                }

                container.find('.content-tab-title').each(function () {
                    let tabIndex = parseInt($(this).attr('data-tab-index'));

                    if (tabIndex === nextIndex) {
                        $(this).addClass('selected');
                    } else if (tabIndex === selectedIndex) {
                        $(this).remove();
                    } else {
                        $(this).removeClass('selected');
                    }
                });

                container.find('.content-tab-content').each(function () {
                    let tabIndex = parseInt($(this).attr('data-tab-index'));

                    if (tabIndex === nextIndex) {
                        $(this).addClass('selected');
                    } else if (tabIndex === selectedIndex) {
                        $(this).remove();
                    } else {
                        $(this).removeClass('selected');
                    }
                });

                nextTabIndex = 1;
                container.find('.content-tab-title').each(function (index) {
                    if (index + 2 > nextTabIndex) {
                        nextTabIndex = index + 2;
                    }
                    let _this = $(this);
                    let tabIndex = parseInt(_this.attr('data-tab-index'));
                    _this.attr('data-tab-index', index + 1);
                    let content = container.find(`.content-tab-content[data-tab-index=${tabIndex}]`);
                    if (content) {
                        content.attr('data-tab-index', index + 1);
                        content.find('.input-tab-title').attr('name', `tabs[${index}].title`);
                        content.find('.input-tab-content').attr('name', `tabs[${index}].content`);
                    }
                });
            });
            $(".input-tab-title").off("input propertychange").on("input propertychange", function (e) {
                let _this = $(this);
                let tabContent = _this.parents('.content-tab-content');
                let container = tabContent.parent().parent();
                let selectedIndex = parseInt(tabContent.attr('data-tab-index'));

                let val = _this.val();
                if (val.length <= 0) {
                    val = "标签页";
                }
                container.find(`.content-tab-title[data-tab-index=${selectedIndex}]`).text(val);
            });
        };
       
window.ze = {};
ze.serializeFormData=function(formValue) {
        let result = {};
        for (let i = 0; i < formValue.length; i++) {
            let item = formValue[i];
            if (/^([a-zA-Z0-9]+)\[(\d+)]$/i.test(item.name)) {
                let match = item.name.match(/^([a-zA-Z0-9]+)\[(\d+)]$/i);
                let array = match[1];
                let index = match[2];
                if (!result[array]) {
                    result[array] = [];
                }
                result[array][index] = item.value;
            } else if (/^([a-zA-Z0-9]+)\[(\d+)]\.([a-zA-Z0-9]+)$/i.test(item.name)) {
                let match = item.name.match(/^([a-zA-Z0-9]+)\[(\d+)]\.([a-zA-Z0-9]+)$/i);
                let array = match[1];
                let index = match[2];
                let key = match[3];

                if (!result[array]) {
                    result[array] = [];
                }
                if (!result[array][index]) {
                    result[array][index] = {};
                }
                result[array][index][key] = item.value;
            } else if (/^([a-zA-Z0-9]+)\.([a-zA-Z0-9]+)$/i.test(item.name)) {
                let match = item.name.match(/^([a-zA-Z0-9]+)\.([a-zA-Z0-9]+)$/i);
                let array = match[1];
                let key = match[2];

                if (!result[array]) {
                    result[array] = {};
                }
                result[array][key] = item.value;
            } else {
                result[item.name] = item.value;
            }
        }
        return result;
    }
ze.close=function(){
   $('.ze-close').on('click', function () {
        $('.ze-dialog').remove();
    });    
}
ze.ok=function(type){var text='';

if(type=="button"||type=='file'){
var title=$('.ze-dialog .title').val();
var url=$('.ze-dialog .url').val();
var atype='';
if($(".ze-dialog select option:selected").length>0){
atype=$(".ze-dialog select option:selected").val();
if(atype){atype=' type="'+atype+'"';}
    
}
if(title.length == 0){title="链接名称";}
if(url.length == 0){url="超链接";}
text='{'+type+' href="'+url+'"'+atype+'}'+title+'{/'+type+'}'} 

if(type=="text"){
var title=$('.ze-dialog .title').val();
var atype='';
var textdecoration='';
var n=0,y='';
if($(".ze-dialog #text-color-decoration option:selected").val()!='none'){
    textdecoration=$(".ze-dialog #text-color-decoration option:selected").val();
    n++;
}
if($(".ze-dialog #text-color option:selected").val()!='none'){   
atype='text-'+$(".ze-dialog #text-color option:selected").val()+'-'+$(".ze-dialog #text-color-du option:selected").val();
n++;
}
if(n>1){y=' ';}
atype=' class="'+atype+y+textdecoration+'"';

if(title.length == 0){title="文本内容";}
if(atype.length>10){
text='{span'+atype+'}'+title+'{/span}';
}else{
text=title;
}

} 

if(type=="post"){
var cid=$('.ze-dialog .cid').val();
if(cid.length == 0){cid="请在此处填写引用的文章cid";}
text='{'+type+' cid="'+cid+'"}';   
}
if(type=="tip"){
var atype=$(".ze-dialog select option:selected").text(); 
var txt=$('.ze-dialog .text').val();
if(txt.length == 0){txt="提示内容";}
text='{'+type+' type="'+atype+'"}'+txt+'{/'+type+'}';
}
if(type=="postindex"){
text='{'+type+'}';
}

if(type=="photo"){
var bili=$(".ze-dialog .bili option:selected").val(); 
var x1=$(".ze-dialog .x1 option:selected").text();
var x2=$(".ze-dialog .x2 option:selected").text();
var x3=$(".ze-dialog .x3 option:selected").text();
var x4=$(".ze-dialog .x4 option:selected").text(); 
var txt=x1+','+x2+','+x3+','+x4;
if(bili.length == 0){bili="";}else{bili=' bili="'+bili+'"';}
text='{'+type+' set="'+txt+'"'+bili+'}\n请将需要排版的图片放置到此处\n{/'+type+'}';
}

if(type=="video"){var txt=' ';
var furl=$('.ze-dialog .furl').val();
var vurl=$('.ze-dialog .vurl').val();
var auto=$(".ze-dialog .auto option:selected").val(); 
var loop=$(".ze-dialog .loop option:selected").val(); 
if(auto=='1'){txt=txt+'autoplay ';}
if(loop=='1'){txt=txt+'loop';}
if(furl.length != 0){furl=' poster="'+furl+'"';}
if(vurl.length == 0){vurl="请在此处填写视频地址";}
text='\n!!!\n<video width="100%" controlsList="nodownload" oncontextmenu="return false" src="'+vurl+'" controls="controls"'+furl+txt+' playsinline></video>\n!!!\n';
}

if(type=="audio"){var txt=' ';
var vurl=$('.ze-dialog .vurl').val();
var auto=$(".ze-dialog .auto option:selected").val(); 
var loop=$(".ze-dialog .loop option:selected").val(); 
if(auto=='1'){txt=txt+'autoplay ';}
if(loop=='1'){txt=txt+'loop';}
if(vurl.length == 0){vurl="请在此处填写视频地址";}
text='\n!!!\n<audio src="'+vurl+'" controls="controls"'+txt+' controlsList="nodownload" oncontextmenu="return false">您的浏览器不支持 audio 标签。</audio>\n!!!\n';
}

if(type=="collapse"){
var txt='';
var title=$('.ze-dialog .title').val();
var con=$(".ze-dialog .text").val(); 
var auto=$(".ze-dialog .auto option:selected").val(); 
if(auto=='1'){txt=' show="true"';}
if(title.length == 0){title="请在此处填入标题";}
if(con.length == 0){con="请在此处填入内容";}
text='{'+type+' title="'+title+'"'+txt+'}\n'+con+'\n{/'+type+'}';
}

if(type=="github"){
var url=$('.ze-dialog .url').val();
if(url.length == 0){url="Github仓库所属用户及仓库名";}
text='{'+type+' repo="'+url+'"}';} 

if(type=="login"){
var text=$('.ze-dialog .login-content').val();
if(text.length == 0){text="登录可见内容";}
text='{login}'+text+'{/login}';} 


if(type=="tabs"){

let formValue = $('#tabs').serializeArray();
let result = ze.serializeFormData(formValue);
        let tabs = result.tabs;
        if (!tabs || tabs.length <= 0) {
            alert("没有创建标签页");
            return false;
        }
        let shortCode = ``;
        [].forEach.call(tabs, (tab) => {
            if (!tab.title) {
                tab.title = "标签页";
            }
            if (!tab.content) {
                tab.content = "标签页内容";
            }

            shortCode += `{tab name="${tab.title}"}
${tab.content}
{/tab}\n`;
        });

text='{'+type+'}\n'+shortCode+'{/'+type+'}';
}



$('#text').insertContent(text); 
 $('.ze-dialog').remove();
}

ze.dialog=function(type,title){
   let html='<div class="wmd-prompt-background ze-dialog" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 1674px; left: 0px; width: 100%;"></div><div class="wmd-prompt-dialog ze-dialog" role="dialog" style="top: 20%;"><div><p><b>'+title+'</b></p></div>';

if(type=='post'){
 html=html+'<form><p>请填写引用文章的cid<span style="color: red">*</span></p><input type="text" class="cid"><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>'  
}

if(type=="button"){
html=html+'<form><p class="form-group"><label>按钮颜色<span style="color: red">*</span>：</label><select name="type"><option selected="" value="red">红</option><option value="green">绿</option><option value="blue">蓝</option><option value="purple">紫</option><option value="yellow">黄</option><option value="gray">灰</option></select></p><p>链接名称<span style="color: red">*</span></p><input type="text" class="title"><p>链接地址<span style="color: red">*</span></p><input type="text" class="url"><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>';}

if(type=="text"){
var ttt=$('#text').changeText();

html=html+'<form><p class="form-group"><label>文本颜色<span style="color: red">*</span>：</label><select id="text-color" name="type"><option selected="" value="none">默认</option><option value="red">红色</option><option value="green">绿色</option><option value="blue">蓝色</option><option value="yellow">黄色</option><option value="purple">紫色</option></select></p><p class="form-group"><label>颜色深浅<span style="color: red">*</span>：</label><select id="text-color-du" name="type"><option value="50">50</option><option value="100">100</option><option value="200">200</option><option value="300">300</option><option value="400">400</option><option value="500">500</option><option selected="" value="600">600</option><option value="700">700</option><option value="800">800</option><option value="900">900</option></select></p><p class="form-group"><label>文本装饰<span style="color: red">*</span>：</label><select id="text-color-decoration" name="type"><option selected="" value="none">无</option><option value="underline">下划线</option><option value="underline decoration-double">双下划线</option><option value="line-through">删除线</option><option value="underline decoration-dashed">虚线</option><option value="underline decoration-wavy">波浪线</option><option value="decoration-red-500 underline decoration-wavy">红色波浪线</option><option value="transition duration-200 ease-in-out bg-black text-black hover:text-white">黑幕文字效果</option></select></p><p>文字内容<span style="color: red">*</span></p><input type="text" class="title" value="'+ttt+'"><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>';}


if(type=='file'){
html=html+'<form><p>链接名称<span style="color: red">*</span></p><input type="text" class="title"><p>链接地址<span style="color: red">*</span></p><input type="text" class="url"><p><label>是否居中：</label><select name="type" class="auto"><option value="justify-center">是</option><option value="" selected="">否</option></select></p><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>';}

if(type=='postindex'){
html=html+'<p>点击下方按钮插入文章目录树，一般插入文章开头或末尾即可，一个文章仅限插入一个！</p><button type="button" class="ze-ok btn btn-s primary">点击插入文章目录树</button>';}

if(type=='tip'){
 html=html+'<form><p class="form-group"><label>提示类型<span style="color: red">*</span>：</label><select name="type"><option selected="">info</option><option>success</option><option>warning</option><option>danger</option></select></p><p>请填写提示内容<span style="color: red">*</span></p><input type="text" class="text"><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>'  
}

if(type=='photo'){
 html=html+'<form><p class="form-group"><label>图片宽高比<span style="color: red">*</span>：</label><select class="bili" name="type"><option selected="" value="">1:1</option><option value="21x9">21:9</option><option value="16x9">16:9</option><option value="4x3">4:3</option><option value="2x3">2:3</option><option value="10x14">10:14</option><option value="3x4">3:4</option><option value="1x2">1:2</option><option value="2x1">2:1</option><option value="3x1">3:1</option><option value="4x1">4:1</option></select></p><p>一行显示的图片数量<span style="color: red">*</span></p><p><select class="w-20 x1" name="type"><option>1</option><option selected="">2</option><option>3</option><option>4</option></select><select class="w-20 x2" name="type"><option>1</option><option>2</option><option>3</option><option selected="">4</option><option>5</option><option>6</option><option>7</option><option>8</option></select><select class="w-20 x3" name="type"><option>1</option><option>2</option><option>3</option><option selected="">4</option><option>5</option><option>6</option><option>7</option><option>8</option></select><select class="w-20 x4" name="type"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option selected="">8</option></select></p><p>这四个数字参数，为手机端、大手机端、平板端、电脑端一行显示的图片数量，第一个数字参数为必填</p><p><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></p></form>'  
}

if(type=='video'){
 html=html+'<form><p>视频链接 (建议使用 MP4 格式)<span style="color: red">*</span></p><input type="text" class="vurl"><p>视频封面</p><input type="text" class="furl"><p class="form-group"><label>是否自动播放<span style="color: red">*</span>：</label><select name="type" class="auto"><option value="1">是</option><option value="0" selected="">否</option></select></p><p class="form-group"><label>是否循环播放<span style="color: red">*</span>：</label><select name="type" class="loop"><option selected="" value="1">是</option><option value="0">否</option></select></p><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>'  
}

if(type=='audio'){
 html=html+'<form><p>音乐链接 (建议使用 MP3 格式)<span style="color: red">*</span></p><input type="text" class="vurl"><p class="form-group"><label>是否自动播放<span style="color: red">*</span>：</label><select name="type" class="auto"><option value="1">是</option><option value="0" selected="">否</option></select></p><p class="form-group"><label>是否循环播放<span style="color: red">*</span>：</label><select name="type" class="loop"><option selected="" value="1">是</option><option value="0">否</option></select></p><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>'  
}

if(type=='tabs'){
 html=html+'<form id="tabs" name="tabs"><button type="button" class="btn btn-s primary" id="btn-tab-add">新建标签页</button><div class="content-tabs"><div class="content-tabs-head"></div><div class="content-tabs-body"></div></div><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>';
}

if(type=='collapse'){
 html=html+'<form><p>标题<span style="color: red">*</span></p><input type="text" class="title"><p>内容</p><textarea type="text" class="text input-tab-content" name="content" rows="6"></textarea><p class="form-group"><label>是否默认展开<span style="color: red">*</span>：</label><select name="type" class="auto"><option value="1">是</option><option value="0" selected="">否</option></select></p><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>'  
}

if(type=='github'){
html=html+'<form><p>Github Repo<span style="color: red">*</span></p><input type="text" class="url"><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>';}

if(type=='login'){
html=html+'<form><p>登录可见<span style="color: red">*</span></p><textarea type="text" class="login-content" rows="6"></textarea><button type="button" class="ze-ok btn btn-s primary">确定</button><button type="button" class="ze-close btn btn-s">取消</button></form>';
}


   html=html+'</div>'; 
   $('body').append(html); 
 if(type=='tabs'){  
        nextTabIndex = 1;
        nextTabTitleIndex = 1;
         createNewTab();
        createNewTab();
        $(`.content-tabs .content-tab-title:first`).addClass("selected");
        $(`.content-tabs .content-tab-content:first`).addClass("selected");
        bindTabEvent();
        $("#btn-tab-add").off('click').on('click', (e) => {
            createNewTab();
            bindTabEvent();
            $(`.content-tab-title[data-tab-index="${nextTabIndex - 1}"]`).trigger('click');
        });
 }   
ze.close();
$('.ze-ok').on('click', function () {
ze.ok(type);
    });  
}





$(document).ready(function () {
 
    
    
    
items.forEach(_ => {
    let item = $(`<li class="wmd-button" id="${_.id}" title="${_.title}">${_.svg}</li>`);
    if(_.type!='link'){
    item.on('click', function () {
        ze.dialog(_.type,_.title);
    });}
    $('#wmd-button-row').append(item);
});
});