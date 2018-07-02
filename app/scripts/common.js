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

initFontSize()

function jumpPage(url) {
    window.location.href = url
}