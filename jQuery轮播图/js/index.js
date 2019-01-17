$(function(){
	var index=0;
	var imgBox=$('.imgBox');
	var img=$('.imgBox').find('img');//获取img的jQuery对象
	
	// 更改图片函数
	function changeImg(){
		img.eq(index).addClass('active').siblings().removeClass();
		$('li').eq(index).addClass('checked').siblings().removeClass();
	}
	//自动播放函数
	function autoPlay(){
		index++;
		if(index==img.last().index()+1)
			index=0;
		changeImg();
	}
	// 设置定时器
	var timeout=setInterval(autoPlay,2000);
	//注册点击选项圆点更换图片事件
	$('li').on('change',function(){
		var dotIndex=$(this).index();
		
		index=dotIndex;
		changeImg();
	}).click(function(){
		$(this).trigger("change");
	});
	//注册鼠标进入停止轮播事件
	$('.slide').on("stopSlide",function(){
		clearInterval(timeout);
	}).mouseenter(function(){
		$(this).trigger("stopSlide");
	});
	//注册鼠标离开重新开始轮播事件
	$('.slide').on("startSlide",function(){
		
		timeout=setInterval(autoPlay,2000);
	}).mouseleave(function(){
		$(this).trigger("startSlide");
	});
	//注册点击左箭头切换上一张图片
	$('.preBtn').on("preImg",function(){
		index--;
		index<0?index=img.last().index():index;
		changeImg();
	}).click(function(){
		$(this).trigger("preImg");
	});
	//注册点击右箭头切换下一张图片
	$('.nextBtn').on("nextImg",function(){
		index++;
		index>img.last().index()?index=0:index;
		changeImg();
	}).click(function(){
		$(this).trigger("nextImg");
	});
	//注册按钮鼠标进入和离开样式变化事件
	$('.preBtn').add('.nextBtn').on("btnHover",function(){
		$(this).addClass('btnHover');
	}).mouseenter(function(){
		$(this).trigger("btnHover");
	}).on("btnOut",function(){
		$(this).removeClass('btnHover');
	}).mouseleave(function(){
		$(this).trigger("btnOut");
	});
});