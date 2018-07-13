var EnApplySpare = {}

EnApplySpare.init = function () {
    EnApplySpare.vueItem = new Vue({
        el: '#container',
        data: initData,
        methods: {
            saveWorkPic: function () {
                this.itemInfo.pic.push('../images/test3.jpg')
                setTimeout(function () {
                    $("#picList").createImgWin()
                },1000)
            },
            addItem: function () {
                // var html = $('.top')
                // $(".add-item").before(html)
                var o = {}
                this.expenseList.push(o)
            }
        },
    })
}

$(function(){
    EnApplySpare.init()

    //   $("#picList").createImgWin()
})