$(function(){
    var scheduleItem=$('.scheduling .con-middle .schedule .schedule-item');
    var schedule=scheduleItem.parent();
    var newItem=scheduleItem.eq(0).clone();
    for(var i=0;i<10;i++){
        schedule.append(newItem);
    }
    
    
});