var EnMyOrders = {}

EnMyOrders.init = function () {
    EnMyOrders.vueItem = new Vue({
        el: '#container',
        data: initData,
        methods: {
            jumpBar: function (num){
                this.Gparam.bar = num
                if(num == 2){
                    this.Gparam.querenNew = 0
                } else if(num==3){
                    this.Gparam.fukuanNew = 0
                } else if(num==4){
                    this.Gparam.pingjiaNew = 0
                }
            },
            orderSocre: function (num) {
                this.Gparam.orderSocre = num
            },
            selectType: function (a,b) {
                Vue.set(this.Gparam.appraise, a, b)
            },
            jumpPage: function (url) {
                if (url === 2){
                    window.location.href = 'confirmMoney.html'
                } else if(url === 3) {
                    window.location.href = '微信支付调起'
                } else if(url === 4) {
                    window.location.href = 'orderAppraise.html'
                } else {
                    window.location.href = url
                }
            },
        },
    })
}

$(function(){
    EnMyOrders.init()
})