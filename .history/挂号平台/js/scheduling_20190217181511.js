$(function(){
    var scheduleItem=$('.scheduling .con-middle .schedule .schedule-item');
    var schedule=scheduleItem.parent();
    var days=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    var newItem=scheduleItem.eq(0).clone();
        var month=newItem.html().split("-")[1];
        var day=parseInt(newItem.html().split("-")[2].split("<")[0])+i+1;
    for(var i=0;i<10;i++){
        var date=days[(i+5)%7];
       
        var newItem=scheduleItem.eq(0).clone();
        
        if (day>31){
            day=1;
            
        }
        newItem.find('.date').html(date+"<br>"+"2017-"+month+"-"+day);
        schedule.append(newItem);
        console.log(date);
        
    }
    
    
});