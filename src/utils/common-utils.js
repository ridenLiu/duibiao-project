/**
 * 是一个dom元素的宽高与浏览器窗口宽高一致
 * @param domId 元素id
 */
export function setDomFullScreenSize(domId) {
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    const dom = document.getElementById(domId);
    dom.style.width = innerWidth + 'px ';
    dom.style.height = +innerHeight + 'px';

    window.addEventListener("resize", ev => {
        const wind = ev.target;
        dom.style.width = wind.innerWidth + 'px ';
        dom.style.height = wind.innerHeight + 'px';
    })
}
