$(function(){
    var scheduleItem=$('.scheduling .con-middle .schedule .schedule-item');
    console.log(scheduleItem);
    scheduleItem.parents().eq(0).append(scheduleItem);
});