var EnRepairInfo = {}

EnRepairInfo.init = function () {
    EnRepairInfo.vueItem = new Vue({
        el: '#container',
        data: initData,
        methods: {
            orderSocre: function (num) {
                //       this.Gparam.orderSocre = num;
            },
            selectType: function (a,b) {
                //       Vue.set(this.Gparam.appraise, a, b)
            },
            jumpPage: function (url) {
                window.location.href = url
            },
            readVioce: function () {

                var audio = $('audio')[0]
                audio.load()
                audio.play()
                console.log('111')
            },
        },
    })
}

$(function(){
    EnRepairInfo.init()
})