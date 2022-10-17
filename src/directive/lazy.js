export default {
    mounted(el) {
        const imgSrc = el.src;
        el.src = "";
       const observer = new IntersectionObserver(([{isIntersecting}]) => {
        // 元素出现在可视区域触发
        if(isIntersecting) {
            // 加载图片
            el.src = imgSrc;
            // 加载完成，停止观察
            observer.unobserve(el);
        }
       })
       observer.observer(el);
    },
}