
(function () {
    function getPageScroll(){
        let x,y;
        if (window.pageXOffset){
            x=window.pageXOffset;
            y=window.pageYOffset;
        }else if (document.compatMode==="CSS1compat"){
            x=document.documentElement.scrollLeft;
            y=document.documentElement.scrollTop;
        }else {
            x=document.body.scrollLeft;
            y=document.body.scrollTop;
        }
        return {
            x:x,
            y:y,
        }
    }
    function getScreen(){
        let width,height;
        if (window.innerWidth){
            width=window.innerWidth;
            height=window.innerHeight;
        }else if (document.compatMode==="CSS1compat"){
            width=document.documentElement.clientWidth;
            height=document.documentElement.clientHeight;
        }else {
            width=document.body.clientWidth;
            height=document.body.clientHeight;
        }
        return {
            width:width,
            height:height,
        }
    }
    function addEvent(ele,name,fn) {
        if (ele.attachEvent){
            ele.attachEvent("on"+name,fn);
        }else {
            ele.addEventListener(name,fn);
        }
    }
    function getStyleAttr(obj,name) {
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else {
            return getComputedStyle(obj)[name];
        }
    }
    function debounce(fn,delay) {
        let timerID=null;
        return function () {
            let self=this;
            let args=arguments;
            timerID && clearTimeout(timerID);
            timerID=setTimeout(function () {
                fn.apply(self,args);
            },delay || 1500);
        }
    }
    function throttle(fn,delay) {
        let timerID=null;
        let flag=true;
        return function () {
            if (!flag) return;
            flag=false;
            let self=this;
            let args=arguments;

            timerID && clearTimeout(timerID);
            timerID=setTimeout(function () {
                flag=true;
                fn.apply(self,args);
            },delay || 1500);
        }
    }
    window.getPageScroll=getPageScroll;
    window.getScreen=getScreen;
    window.addEvent=addEvent;
    window.getStyleAttr=getStyleAttr;
    window.debounce=debounce;
    window.throttle=throttle;
})();