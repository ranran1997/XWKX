var ConfirmMoney = {}

ConfirmMoney.init = function () {
    ConfirmMoney.vueItem = new Vue({
        el: '#container',
        data: initData,
        methods: {
            orderSocre: function (num) {
                this.Gparam.orderSocre = num;
            },
            selectType: function (a,b) {
                Vue.set(this.Gparam.appraise, a, b)
            },
            jumpPage: function (url) {
                window.location.href = url
            },

        },
    })
}

$(function(){
    ConfirmMoney.init()
})