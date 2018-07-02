var RepairService = {}

RepairService.init = function () {
        RepairService.vueItem = new Vue({
            el: '#container',
            data: initData,
            methods: {
                sweepCode: function () {
                    //扫码
                    alert('扫码')
                },
                selectType: function (num) {
                    initData.Gparam.repairType = num;
                },
                jumpPage: function (url) {
                    window.location.href = url
                }

            },
        })
}

$(function(){
    RepairService.init()
})