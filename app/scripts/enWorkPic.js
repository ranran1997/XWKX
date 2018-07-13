var EnWorkPic = {}

EnWorkPic.init = function () {
    EnWorkPic.vueItem = new Vue({
        el: '#container',
        data: initData,
        methods: {
            saveWorkPic: function () {
                this.itemInfo.pic.push('../images/test3.jpg')
                setTimeout(function () {
                    $("#picList").createImgWin()
                },1000)

            }
        },
    })
}

$(function(){
    EnWorkPic.init()
    var newImgs = document.getElementsByClassName("imgs");
    console.log(newImgs);
    for(var i = 0; i < newImgs.length; i++){
        changeImage(newImgs[i]);
    }
    $("#picList").createImgWin()
})