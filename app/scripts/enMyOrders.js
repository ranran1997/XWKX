var EnMyOrders = {}

EnMyOrders.init = function () {
    EnMyOrders.vueItem = new Vue({
        el: '#container',
        data: initData,
        methods: {
            jumpBar: function (num){
                this.Gparam.bar = num
                if(num == 2){
                    this.Gparam.chuliNew = 0
                } else if(num==3){
                    this.Gparam.wanchengNew = 0
                }
            },
            orderSocre: function (num) {
                this.Gparam.orderSocre = num
            },
            selectType: function (a,b) {
                Vue.set(this.Gparam.appraise, a, b)
            },
            jumpPage: function (url) {
                if (url === 0){
                    window.location.href = 'enRepairInfo.html'
                } else if(url === 1) {
                    window.location.href = 'enOederHandle.html'
                } else if(url === 2) {
                    window.location.href = 'enRepairInfo.html'
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