var EnMySpareCenter = {}

EnMySpareCenter.init = function () {
    EnMySpareCenter.vueItem = new Vue({
        el: '#container',
        data: initData,
        methods: {
            chooseBar: function (event) {
                var self = this
                console.log()
                var el = event.currentTarget
                console.log(el.getAttribute("class"))
                if (self.Gparam.type === 1) {
                    if (el.getAttribute("class") === 'marking') {
                        return false
                    } else {
                        self.Gparam.type = 2
                    }
                } else {
                    if (el.getAttribute("class") === 'marking') {
                        return false
                    } else {
                        self.Gparam.type = 1
                    }
                }
            },
            applySpace: function () {
                alert('申请备件')
            },
            backSpace: function () {
                alert('坏件退回')
            },
            mark: function(item){
                if(item.isMark) {
                    item.isMark = false
                } else {
                    item.isMark = true
                }
            },
            changeNum: function (a,b) {
                if (a === 'sub'){
                    b.usedNum--
                } else {
                    b.usedNum++
                }
            }
        },
    })
}

$(function(){
    EnMySpareCenter.init()

    //   $("#picList").createImgWin()
})