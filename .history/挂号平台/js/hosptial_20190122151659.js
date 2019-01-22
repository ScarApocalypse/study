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
});