//ui-search组件
$.fn.UiSearch=function(){
	var ui=$(this);
	var flag=0;
	$('.ui-search-selected',ui).on('click',function(){
		if(flag){
			$('.ui-search-selected-list').hide();
			flag=0;
		}else{
			$('.ui-search-selected-list').show();
			flag=1;
		}
		
		return false;
	});
	$('.ui-search-selected-list a',ui).on('click',function(){
		$('.ui-search-selected').text($(this).text());
		$('.ui-search-selected-list').hide();
		flag=0;
		return false;
	});
	$('body').on('click',function(){
		if(flag){
			$('.ui-search-selected-list').hide();
			flag=0;
		}
		
	});
};	
$.fn.UiSlider=function(){
	var ui=$(this);
	var wrap=$('.ui-slider-wrap');
	var btn_prev=$('.ui-slider-arrow .left',ui);
	var btn_next=$('.ui-slider-arrow .right',ui);
	var items=$('.ui-slider-wrap .item',ui);
	var tips=$('.ui-slider-process',ui);
	// 预定义
	var current=0;
	var size=items.size();
	var width=items.eq(0).width();
	var enableAuto=true;
	console.log(items);
	// debugger
	
};

$(function(){
	console.log("hello");
	$('.ui-search').UiSearch();
	$('.ui-slider').UiSlider();
});