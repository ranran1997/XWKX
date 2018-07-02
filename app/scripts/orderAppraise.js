var OrderAppraise = {}

OrderAppraise.init = function () {
    OrderAppraise.vueItem = new Vue({
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
    OrderAppraise.init()
})