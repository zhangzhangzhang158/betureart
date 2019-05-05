function vw() {
    var oHtml=document.documentElement;
    var vW=document.documentElement.clientWidth;
    oHtml.style.fontSize=vW/12+"px";
}
function getId(id) {
    return document.getElementById(id);
}
function getClass(classname) {
    return document.getElementsByClassName(classname)[0];
}
/*index.html*/
/*下拉部分*/
$('.head span').tap(function () {
    /*    $('.tap_list').dropdown('toggle');*/
    $('.tap_list').toggle();
})
$('.taps').tap(function () {
    $(this).addClass('taps active').siblings().removeClass('active');
});
/*专业推荐的轮播图*/
/*function whirligig() {
    var arr=[{
        width:200,
        height:292,
        left:0,
        top:0,
        zIndex:4
    },
        {
            width:200,
            height:292,
            left:144,
            top:38,
            zIndex:5
        }
    ,
        {
            width:250,
            height:365,
            left:180,
            top:0,
            zIndex:6
        }
        ,
        {
            width:200,
            height:292,
            left:250,
            top:40,
            zIndex:5
        }
        ,
        {
            width:200,
            height:292,
            left:300,
            top:0,
            zIndex:4
        }
    ]
  var aLi=getClass('whirl').getElementsByTagName('li');
    var flag=true;
    function discript() {
        for (var i=0;i<aLi.length;i++) {
            changem(aLi[i],arr[i],function () {
                flag=true;
            })
        }
    }
    discript();
    
}
whirligig();*/


/*undergraduate.html*/
$('.nav_right').tap(function () {
    $(this).addClass('active').siblings('span').removeClass('active');
    $('.graduate_content').show();
    $('.undergraduate_content').hide();

})
$('.nav_left').tap(function () {
    $(this).addClass('active').siblings('span').removeClass('active');
    $('.graduate_content').hide();
    $('.undergraduate_content').show();
})






