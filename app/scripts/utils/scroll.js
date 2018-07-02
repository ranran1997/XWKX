/**
 * @author  meiliujun <meiliujun@myhexin.com>
 * @date    14-10-30
 * @desc	上拉下拉效果，基于zepto,jquery
 			使用方法： $('滑动的元素外壳').pullScroll({el:'滑动的元素'});
			downPullEvent 下拉触发的函数，必须 scrollTopFlag函数返回为真、downPullEnable开关打开、手势是下拉情况下触发
			upPullEvent	  上拉触发的函数，必须 scrollBottomFlag函数返回为真、upPullEnable开关打开、手势是上拉情况下触发
			这两个函数都支持promise调用，可以直接写 downPullEvent = $.ajax({...});来锁定ajax防止多次调用
 */
 
;(function($){
	$.fn.pullScroll = function(obj) {
		var defaults ={
			el:'.scrollBox',//需要滑动的元素
			downPullEnable:true,
			//downPullEvent:function(){},
			upPullEnable:true,
			//upPullEvent:function(){},
			scrollJudgeSize : 150,//触发downPullEvent和upPullEvent的拉动尺寸最小值
			scrollTopFlag : function (){//判断是否在顶部的标识
				return $(window).scrollTop() === 0;
			},
			scrollBottomFlag : function (){//判断是否在底部的标识
				return ($(window).height() + $(window).scrollTop()) >= document.body.scrollHeight;
			},
			downHTML : '↓下拉可以刷新',
			downTriggerHTML : '↑松开可以刷新',
			upHTML : '↑上拉加载更多',
			upTriggerHTML : '↓松开加载数据',
			loadHTML : '<img class="loading" src="http://i.thsi.cn/m/static/loading.png" height="20">加载中',
			loadScrollPX : 38,//等待状态下的横条显示高度
			startY:0,
			distY:0,
			touchstart:function(e){
				param.startY = e.touches[0].pageY;
				param.distY = 0;
			},
			touchmove:function(e){
				param.distY = e.touches[0].pageY - param.startY;
				if( param.downPullEnable && param.scrollTopFlag() && param.distY > 0  ){
					e.preventDefault();
	
					if( param.distY > param.scrollJudgeSize ){
						$down.html(param.downTriggerHTML);
					}
					else{
						$down.html(param.downHTML);
					}
					
					$box.css({
						'-webkit-transition': '0ms',
						'-webkit-transform': 'translate(0, '+ Math.abs(param.distY/4) +'px)',
					});
				}
				
				if( param.upPullEnable && param.scrollBottomFlag() && param.distY < 0){
					e.preventDefault();
									
					if( param.distY < -param.scrollJudgeSize ){
						$up.html(param.upTriggerHTML);
					}
					else{
						$up.html(param.upHTML);
					}
					
					
					$box.css({
						'-webkit-transition': '0ms',
						'-webkit-transform': 'translate(0, '+ param.distY/4 +'px)',
					});
				}	
			},
			touchend:function(e){
				if( param.downPullEnable && param.scrollTopFlag() && param.distY > param.scrollJudgeSize ){
					//等待动画
					$obj.find('.down_pull').html(param.loadHTML);
					$box.css({
						'-webkit-transition': '100ms',
						'-webkit-transform': 'translate(0, '+param.loadScrollPX+'px)',
					});
	
					// do something top down pull
					if( typeof param.downPullEvent === 'function' ){
						//禁止多次重复下拉
						param.downPullEnable = false;
						$.when( param.downPullEvent() ).then(function(){
							param.downPullEnable = true;
							param.end();
						}, function(){
							param.downPullEnable = true;
							param.end();
						});
					}
					else{
						param.end();
					}
				}
				else if ( param.upPullEnable && param.scrollBottomFlag() && param.distY < -param.scrollJudgeSize) {
					//等待动画			
					$obj.find('.up_pull').html(param.loadHTML);
					$box.css({
						'-webkit-transition': '100ms',
						'-webkit-transform': 'translate(0, -'+param.loadScrollPX+'px)',
					});
	
					//do somethis bottom up pull
					if( typeof param.upPullEvent === 'function' ){
						//禁止多次重复上拉
						param.upPullEnable = false;
						$.when( param.upPullEvent() ).then(function(){
							param.upPullEnable = true;
							param.end();
						}, function(){
							param.upPullEnable = true;
							param.end();
						});
					}
					else{
						param.end();
					}
				}
				else{
					param.end();
				}
			},
			end:function(e){
				if( param.downPullEnable ){
					$down.html(param.downHTML);
				}
				if( param.upPullEnable ){
					$up.html(param.upHTML);
				}
				$box.css({
					'-webkit-transition': '300ms',
					'-webkit-transform': 'translate(0, 0px)',
				});
			},
			destory:function(){
				$obj.unbind('touchstart', param.touchstart);		
				$obj.unbind('touchmove', param.touchmove);		
				$obj.unbind('touchend', param.touchend);
				$obj.unbind('touchcancel', param.end);
			}
			
			
		}
		var param = $.extend(defaults, obj); 
		
		var $obj = this;
		var $box = [];
		
		
		if( param.el ){
			$box = $obj.find(param.el);
		}
		if( !$box[0] ){
			$box = $obj.children().first();
		}

/*		$box.css({
			'position':'relative',
			'z-index':'2',
		});
		
		if( $obj.css('position') === 'static' ){
			$obj.css({
				'position':'relative',
			});
		}*/
		
		$obj.append('<div class="down_pull"></div>');
		$obj.append('<div style="position:relative;width:100%;height:0;"><div class="up_pull"></div></div>');
		$('head').append('<style>.up_pull, .down_pull{position: absolute;left: 0;z-index: 1;text-align: center;width: 100%;height: 40px;line-height: 40px;}.down_pull{top: 0;}.up_pull{bottom:0}</style>');
		
		var $down = $obj.find('.down_pull');
		var $up = $obj.find('.up_pull');

		if( param.downPullEnable ){
			$down.html(param.downHTML);
		}
		if( param.upPullEnable ){
			$up.html(param.upHTML);
		}

		$obj.bind('touchstart', param.touchstart);		
		$obj.bind('touchmove', param.touchmove);		
		$obj.bind('touchend', param.touchend);
		$obj.bind('touchcancel', param.end);

		return param;  
	}; 
	
})($);