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
                },
                commitRepair: function () {
                    var phone = $('#phone').val()
                    var name = $('#name').val()
                    var id = $('#id').val()
                    var address = $('#address').val()
                    var info = $('#info').val()
                    if (phone === ""){
                        alertBox("联系人不能为空")
                        return false
                    } else if (name === ""){
                        alertBox("姓名不能为空")
                        return false
                    }
                    if (!localStorage.getItem('userInfo') ){
                        getUserInfo()
                    }
                    var id = localStorage.getItem('userId')
                    var data = {
                        linkPhone: phone,
                        linkMan: name,
                        createdType: 0,
                        proposer:{
                            id: id
                        },
                        serviceType: 1,
                        errorDescription: info,
                        equipment: {
                            address: address,
                            code: id
                        }
                    }
                    jqPost('/work/api/workorder',JSON.stringify(data), function (json) {
                            if (json.code === 200){
                                var result = json.data
                                jumpPage('repairSuccess.html')
                            }
                        },function (json) {
                            console.log(json)
                        })
                }
            },
        })
}

$(function(){
    RepairService.init()
})