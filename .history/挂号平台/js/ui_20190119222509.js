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
	var tips=$('.ui-slider-process .item',ui);
	// 预定义
	var current=0;
	var size=items.size();
	var width=items.eq(0).width();
	var enableAuto=true;
	// 具体操作
	ui.on('mouseover',function(){
		enableAuto=false;
	}).on('mouseout',function(){
		enableAuto=true;
	});
	wrap
	.on('move_to',function(evt,index){
		wrap.css('left',index*width*-1);
		tips.removeClass('item_focus').eq(index).addClass('item_focus');
	})
	.on('move_prev',function(){
		if(current<=0){
			current=size-1;
		}
		current=current-1;
		wrap.triggerHandler('move_to',current);
	})
	.on('move_next',function(){
		if(current==size-1){
			current=-1;
		}
		current=current+1;
		wrap.triggerHandler('move_to',current);
	})
	.on('auto_move',function(){
		setInterval(function(){
			enableAuto&&wrap.triggerHandler('move_next');
		},2000)
	});
	btn_prev.on('click',function(){
		wrap.triggerHandler('move_prev');
	});
	btn_next.on('click',function(){
		wrap.triggerHandler('move_next');
	});
	wrap.triggerHandler('auto_move');
};
// 级联菜单
$.fn.UiCascading=function(){
	var ui=$(this);
	var selects=$('select',ui);
	selects
	.on('reloadOption',function(){
		var method=$(this).attr('data-search');
		var args=$(this).attr('data-where').split(',');
		var data =AjaxRemoteGetData[ method ].apply(this,args);
		var select=$(this);
		
		select.find('option').remove();
		console.log(select[0]);
		$.each(data,function(i,item){
			var el=$('<option value="'+item+'">'+item+'</option>');
			console.log(el[0]);

			select.append(el);
		});
		
	});
	
	selects.eq(0).triggerHandler('reloadOption');

};
$(function(){
	console.log("hello");
	$('.ui-search').UiSearch();
	$('.ui-slider').UiSlider();
	$('.ui-cascading').UiCascading();
	
	console.log(AjaxRemoteGetData.getDistinctArea());
});