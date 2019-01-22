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


$(function(){
	console.log("hello");
	$('.ui-search').UiSearch();
});