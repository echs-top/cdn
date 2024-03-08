/*
 * @Author: Jin
 * @Date: 2020-04-22 17:02:34
 * @LastEditors: Jin
 * @LastEditTime: 2021-05-17 16:36:51
 * @FilePath: /link-card/chrome.js
 */
const linkCard = async (dom, op='0' ,divite = '|') => {
    const linkCardTemplate = (url, textContent, image = null) => {
        /*<span style="display:inline-flex;">​*/
        return (`<a target="_blank" href="${url}" class="${(image ? 'LinkCard LinkCard-hasImage' : 'LinkCard LinkCard-noImage')}">
          ${(image ? `<span class="LinkCard-backdrop" style="background-image:url(${image});"></span>` : '')}
          <span class="LinkCard-content">
            <span class="LinkCard-text">
              <span class="LinkCard-title">${textContent}</span>
              <span class="LinkCard-meta">
                  <svg class="inline-flex" fill="currentColor" viewBox="0 0 24 24" width="17" height="17"><path d="M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z" fill-rule="evenodd"></path></svg>
                <span>${matchDomain(url, true)}</span>
              </span>
            </span>
            <span class="LinkCard-imageCell">
              ${(image ?
                (`<img class="LinkCard-image LinkCard-image-square nofancybox" alt="图标" src="${image}" no-view>`) :
                (`<span class="LinkCard-image LinkCard-image-default">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M11.991 3C7.023 3 3 7.032 3 12s4.023 9 8.991 9C16.968 21 21 16.968 21 12s-4.032-9-9.009-9zm6.237 5.4h-2.655a14.084 14.084 0 0 0-1.242-3.204A7.227 7.227 0 0 1 18.228 8.4zM12 4.836A12.678 12.678 0 0 1 13.719 8.4h-3.438A12.678 12.678 0 0 1 12 4.836zM5.034 13.8A7.418 7.418 0 0 1 4.8 12c0-.621.09-1.224.234-1.8h3.042A14.864 14.864 0 0 0 7.95 12c0 .612.054 1.206.126 1.8H5.034zm.738 1.8h2.655a14.084 14.084 0 0 0 1.242 3.204A7.188 7.188 0 0 1 5.772 15.6zm2.655-7.2H5.772a7.188 7.188 0 0 1 3.897-3.204c-.54.999-.954 2.079-1.242 3.204zM12 19.164a12.678 12.678 0 0 1-1.719-3.564h3.438A12.678 12.678 0 0 1 12 19.164zm2.106-5.364H9.894A13.242 13.242 0 0 1 9.75 12c0-.612.063-1.215.144-1.8h4.212c.081.585.144 1.188.144 1.8 0 .612-.063 1.206-.144 1.8zm.225 5.004c.54-.999.954-2.079 1.242-3.204h2.655a7.227 7.227 0 0 1-3.897 3.204zm1.593-5.004c.072-.594.126-1.188.126-1.8 0-.612-.054-1.206-.126-1.8h3.042c.144.576.234 1.179.234 1.8s-.09 1.224-.234 1.8h-3.042z"></path></svg>
                  </span>`
                ))}
            </span>
          </span>
          </a>`);
    }

String.prototype.endWith=function(endStr){
  var d=this.length-endStr.length;
  return (d>=0&&this.lastIndexOf(endStr)==d)
}

    const matchDomain = (url, onlyDemo = false) => {
        if(!url.endWith("/")){url=url+'/';}
        const re = /^http(s)?:\/\/(.*?)(\/)/
        return onlyDemo ? re.exec(url)[2] : re.exec(url);
    }

    const getImage = async url => {
        url = url.charAt(url.length - 1) == '/' ? url : url + '/'
        url = "https://store.typecho.work/api/ico?sq="+globals.ajax_url+"&url="+matchDomain(url)[0]+"";
        //if(url.indexOf('http://') !== -1) {return null;}
        try {
            await fetch(url, {
                method: 'GET',
                mode: 'no-cors',
            })
        } catch (e) {
            return null;
        }
        return url;
    }

    if (!document.querySelector('#LinkCard')) {
        let LinkCard = document.createElement('style');
        LinkCard.type = 'text/css';
        LinkCard.id = 'LinkCard'
        LinkCard.innerHTML = ".LinkCard{position: relative; display: block; margin: 1em auto; width: 390px; -webkit-box-sizing: border-box; box-sizing: border-box; border-radius: 4px; max-width: 100%; overflow: hidden;}.LinkCard,.LinkCard:hover{text-decoration: none; border: none!important; color: inherit!important;}.LinkCard .LinkCard-backdrop{position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-repeat: no-repeat; -webkit-filter: blur(20px); filter: blur(20px); background-size: cover; background-position: 50%;}.LinkCard .LinkCard-content{position: relative; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; padding: 12px; border-radius: inherit; background-color: rgba(246, 246, 246, 0.88);}.LinkCard .LinkCard-content .LinkCard-text{overflow: hidden;margin-bottom: -4px;}.LinkCard .LinkCard-content .LinkCard-text .LinkCard-title{display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; max-height: 40px; font-size: 16px; font-weight: 500; line-height: 1.25;}.LinkCard .LinkCard-content .LinkCard-text .LinkCard-meta{display: -webkit-box; display: -ms-flexbox; display: flex; margin-top: 4px; font-size: 14px; line-height: 20px; color: #999; white-space: nowrap;}.LinkCard .LinkCard-content .LinkCard-imageCell{margin-left: 8px; border-radius: 4px;}.LinkCard .LinkCard-content .LinkCard-imageCell .LinkCard-image{display: block; width: 60px; height: 60px; -o-object-fit: cover; object-fit: cover; border-radius: inherit;max-width: revert;}.LinkCard .LinkCard-content .LinkCard-imageCell .LinkCard-image.LinkCard-image-default{display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; background-color: #ebebeb; color: #d3d3d3;}.LinkCard.LinkCard-noImage .LinkCard-content{background-color: #f6f6f6;}.dark .LinkCard .LinkCard-content {background-color: rgba(0,0,0,0.38);}";
        document.getElementsByTagName('head').item(0).appendChild(LinkCard);
    }

    document.querySelectorAll(`${dom} a`).forEach(async (ele, i) => {
        const text = ele.textContent;
        const attributes = ele.attributes;
        const href = attributes.href?.value;
        let url, image, temp, template, pa=0;
        if(href){
        if (href.indexOf(divite) !== -1) {
            temp = href.split(divite);
            url = temp[0]; param = temp[1];
            if (param.indexOf('useFavicon') !== -1) {
                let faviconUrl = await getImage(href);
                template = linkCardTemplate(url, text, faviconUrl);
            } else {
                url = temp[0]; image = param;
                template = linkCardTemplate(url, text, image);
            }
        } else {
            if(ele.parentNode.innerHTML==ele.outerHTML&&ele.parentNode.nodeName=="P"&&!ele.classList.contains("shortcode")){
                pa=1;
            }
           if(op=='1'||pa==1){
            let faviconUrl = await getImage(href);if(faviconUrl){
            template = linkCardTemplate(href, text,faviconUrl);}else{
            template = linkCardTemplate(href, text);
               }}
        }
if ((href.indexOf(divite) !== -1||op=='1'||pa==1)&&!ele.classList.contains("shortcode")) {
        const templateTemp = document.createElement('div');
        templateTemp.innerHTML = template;
        const templateDom = templateTemp.firstChild;
        ele.replaceWith(templateDom);
}
}
//console.info(op);
    });
}