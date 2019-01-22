$(function(){
//    给出所有的筛选条件 
    var arrConditionArea=AjaxRemoteGetData.getDistinctArea().slice(1);
    console.log(arrConditionArea);
    var arrConditionLevel =AjaxRemoteGetData.getDistinctLevel().slice(1);
    var arrConditionType=AjaxRemoteGetData.getDistinctType().slice(1);
    $('.filter .group>.condition').remove();
    $.each(arrConditionArea,function(i,item){
        var c=$('<a href="#" class="condition">'+item+'</a>');
        $('.filter .group').eq(0).append(c);
    });
    $.each(arrConditionLevel,function(i,item){
        var c=$('<a href="#" class="condition">'+item+'</a>');
        $('.filter .group').eq(1).append(c);
    });
    $.each(arrConditionType,function(i,item){
        var c=$('<a href="#" class="condition">'+item+'</a>');
        $('.filter .group').eq(2).append(c);
    });
    // 筛选条件事件监听,动态获取新的数据,AjaxRemoteGetData.getHospitalArrByFilter
    var DataHospital=[];
    $('.filter')
        .on('initEvent',function(){
            var filter=$(this);
            filter.find('.condition').on('click',function(){
                var condition=$(this);
                var group=condition.parents('.group').eq(0);
                group.find('.condition').removeClass('condition_focus');
                condition.addClass('condition_focus');
                filter.triggerHandler('reloadData');
                return false;
            });

        })
        .on('reloadData',function(){
            var type=$('.filter .group').eq(0).find('.condition_focus').text();
            var level=$('.filter .group').eq(1).find('.condition_focus').text();
            var area=$('.filter .group').eq(2).find('.condition_focus').text();
            DataHospital=AjaxRemoteGetData.getHospitalArrByFilter(type,level,area).slice(1);
            $('.pagination').triggerHandler('initPageNumber');
        });
        $('.filter').triggerHandler('initEvent');
        $('body').click(function(){
            console.log("sss");
        });  
});