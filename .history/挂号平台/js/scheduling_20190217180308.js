$(function(){
    var scheduleItem=$('.scheduling .con-middle .schedule .schedule-item');
    var schedule=scheduleItem.parent();
    var days=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    // var newItem=scheduleItem.eq(0).clone();

    for(var i=0;i<10;i++){
        var date=days[(i+5)%7];
        var j=9;
        var newItem=scheduleItem.eq(0).clone();
        newItem.find('.date').html(date+"<br>"+"2017-03-"+(j+i));
        schedule.append(newItem);
        console.log(date);
        
    }
    
    
});