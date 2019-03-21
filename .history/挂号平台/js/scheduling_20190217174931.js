$(function(){
    var scheduleItem=$('.scheduling .con-middle .schedule .schedule-item');
    var schedule=scheduleItem.parent();
    var newItem=scheduleItem.eq(0).clone();
    schedule.append(newItem);
    
    
});