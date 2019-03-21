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
        // 分页设置事件监听&处理数据渲染
        var pageSize=3;//每页显示条数
        var pageCount=0;//总共页数
        var currentPage=0;//当前页数，0=1页
        $('.pagination')
        .on('initPageNumber',function(){
            pageCount=Math.ceil(DataHospital.length/pageSize);
            currentPage=0;
            var page_wrap=$('.page_wrap',this);
            page_wrap.empty();
        })
        $('.filter').triggerHandler('initEvent');
        $('body').click(function(){
            console.log("sss");
        });  
});