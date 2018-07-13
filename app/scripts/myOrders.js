var MyOrders = {}

MyOrders.init = function () {

    if (!localStorage.getItem('userInfo') ){
        getUserInfo()
    }
    var id = localStorage.getItem('userId')
    var GData = {
        data: {},
    }
    $.extend(true,GData,initData)
    MyOrders.vueItem = new Vue({
        el: '#container',
        data: GData,
        beforeCreate:function(){
            var _self=this;
            jqGet('work/api/workorder?search.fields='+id,{},function (json) {
                console.log(json)
                if (json.code === 200){
                    GData.data = json.data
                }
            },function (json) {
                alertBox(msg)
            })
            console.log(_self)
        },
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
    MyOrders.init()
})