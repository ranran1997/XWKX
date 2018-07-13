var api = '//192.168.1.218:9003/work/api/'
//初始化页面字体
function initFontSize(flag){
    if(flag){
        var viewPort = document.querySelector('meta[name="viewport"]')
        viewPort.setAttribute('content', 'user-scalable=no')
    }
    flag && metaSet(flag)
    var sizeRate = document.documentElement.clientWidth/375.0*100
    $('html').css('font-size',sizeRate)
    $('html').addClass('fontinit')
    return sizeRate
}

// alertBox
function alertBox(msg,time){
    if($('.alertbox').length > 0){
        return;
    }

    $('<div class="alertbox"><span class="alertboxmsg">'+msg+'</span><div class="alertboxbg"></div></div>').appendTo('body');

    if($('html').hasClass('fontinit')){
        $('.alertbox').css({
            'font-size':'0.16rem'
        });
    }else{
        $('.alertbox').css('font-size','16px');
    }

    var stime = time || 2000;

    window.setTimeout(function(){
        if($('.alertbox').length){
            $('.alertbox').remove();
        }
    },stime);
}
initFontSize()

function jumpPage(url) {
    window.location.href = url
}

function getUserInfo() {
    if(!localStorage.getItem('userInfo')){
        jqGet('/work/api/userInfo',{},function (json) {
            localStorage.setItem('userId',json.data.id)
            console.log(localStorage.getItem('userId'))
        },function (json) {
            alert(json.data.msg)
        })
    }
}

function getUser() {
        jqGet('/work/api/userInfo',{},function (json) {
            localStorage.setItem('userId',json.data.id)
            console.log(localStorage.getItem('userId'))
        },function (json) {
            alert(json.data.msg)
        })
}

// 剪切图片
function changeImage (dom) {

    var img=new Image()
    img.src=$(dom).attr('src');
    img.onload=function(){
        var imgW = img.width;
        var imgH = img.height;
//      var parentW = $(dom).parent().width();
//      var parentH = $(dom).parent().height();
        if(imgW > imgH){
            $(dom).css({
                'width':'100%',
                'height':'auto',
            });
        }else{
            $(dom).css({
                'width':'100%',
                'height':'auto',
            });
        }
        $(dom).attr('src',$(dom).attr('src'));
    }
}