function getId(id) {
    return document.getElementById(id);
}
//改变多个属性的动画（width,height,left）
function qu(ele,attr) {//获取width,height,left等值，带单位的字符串
    if (window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else {
        return ele.currentStyle[attr];
    }
}
function changem(ele,json,fn) {
    clearInterval(ele.timer);
    ele.timer=setInterval(function () {
            var flag=true;
            if (flag) {
                for (var i in json) {
                    if (i=="opacity"){
                        var current=qu(ele,i)*100;//i代表着属性，
                        var target=json[i]*100;
                        var step=(target-current)/10;
                        current+=step;
                        ele.style[i]=current/100;

                    }else if(i=="zIndex"){
                        ele.style[i]=json[i];
                    }
                    else {
                        var current=parseInt(qu(ele,i));//i代表着属性，
                        var target=parseInt(json[i]);
                        var step=(target-current)/10;
                        step=target>current?Math.ceil(step):Math.floor(step);
                        current+=step;
                        ele.style[i]=current+'px';
                        if (target!=current){
                            flag=false;
                        }
                    }

                }
            }
            if (flag){
                clearInterval(ele.timer);
                if (fn){//如果要传fn函数的时候则执行下面的函数
                    fn()
                }
            }
        }
        ,50)
}