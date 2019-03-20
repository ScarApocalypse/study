$(function(){
    var scheduleItem=$('.scheduling .con-middle .schedule .schedule-item');
    var schedule=scheduleItem.parent();
    var days=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    var newItem=scheduleItem.eq(0).clone();
        var month=newItem.html().split("-")[1];
        var day=parseInt(newItem.html().split("-")[2].split("<")[0]);
    for(var i=0;i<40;i++){
        var date=days[(i+5)%7];
       
        var newItem=scheduleItem.eq(0).clone();
        day=parseInt(day);
        day++;
        if(day>31){
            day=01;
            month++;
            month="0"+month;
        }
        if(day<10){
            day="0"+day;
        }
        newItem.find('.date').html(date+"<br>"+"2017-"+month+"-"+day);
        schedule.append(newItem);
        console.log(date);
        
    }
    
    
});