// @charset "utf-8";
    /**
     * 获取远程文件中的内容
     * @param  {[type]}   url      [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    function jqGet(urlPath,param,successCallback,errorCallback,async) {
        param = param || {};
        async = async || true;
        $.ajax({ 
            type:'get',
            url: urlPath, 
            data:param,
            dataType: "json",
            timeout : 15000,
            cache : false ,
            async: async,
            success: function(d){
                if(typeof successCallback == 'function'){
                    successCallback(d);
                }    
            },
            error:function(d){
                if(typeof errorCallback  == 'function'){
                    errorCallback(d);
                } 
            }
        });
    }
    /**
     * [jqPost post请求]
     * @param  {[type]} urlPath         [description]
     * @param  {[type]} param           [description]
     * @param  {[type]} successCallback [description]
     * @param  {[type]} errorCallback   [description]
     * @return {[type]}                 [description]
     */
     function jqPost(urlPath,param,successCallback,errorCallback) {
        param = param || {};
        $.ajax({ 
            type:'post',
            url: urlPath, 
            data:param,
            dataType: "json",
            timeout : 15000,
            cache : false ,
            success: function(d){
                if(typeof successCallback == 'function'){
                    successCallback(d);
                }     
            },
            error:function(d){
                if(typeof errorCallback  == 'function'){
                    errorCallback(d);
                } 
            }
        });

    }


    function jqJSONP(urlPath,param,successCallback,errorCallback,callbackName) {
        callbackName = callbackName.replace(/\@/g, '');
        param = param || {};
        $.ajax({ 
            type:'get',
            url: urlPath, 
            data:param,
            dataType: "jsonp",
            timeout : 15000,
            cache : false ,
            jsonpCallback:callbackName,
            success: function(d){
                if(typeof successCallback == 'function'){
                    successCallback(d);
                }    
            },
            error:function(d){
                if(typeof errorCallback  == 'function'){
                    errorCallback(d);
                } 
            }
        });
    }


    var Xhr = {
        jqGet : jqGet,
        jqPost:jqPost,
        jqJSONP : jqJSONP
    }
    