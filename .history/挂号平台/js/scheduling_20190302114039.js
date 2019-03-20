$(function(){
    // alert(window.location.href);
    var scheduleItem=$('.scheduling .con-middle .schedule .schedule-item');
    var schedule=scheduleItem.parent();
    var days=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    var newItem=scheduleItem.eq(0).clone();
        var month=newItem.html().split("-")[1];
        var day=parseInt(newItem.html().split("-")[2].split("<")[0]);
    for(var i=0;i<50;i++){
        var date=days[(i+5)%7];
       
        newItem=scheduleItem.eq(0).clone();
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
        
    }
    var prevBtn=$('.scheduling .con-left img');
    var nextBtn=$('.scheduling .con-right img');
    prevBtn.click(function(){
        var newLeft=0;
       var Left=schedule.position().left; 
       
       if(Left<0){
            newLeft=Left+651;
       }
      
       schedule.filter(':not(:animated)').animate({left:newLeft+"px"},300);
    });
    nextBtn.click(function(){
        
        var newLeft=0;
       var Left=schedule.position().left; 
       
       if(Left>-651*6){
            newLeft=Left-651;
       }else{
           newLeft=Left;
       }
        schedule.filter(':not(:animated)').animate({left:newLeft+"px"},600);
     });
     var hospitalName=window.location.href.split("?")[1];
     console.log(hospitalName);
     $('.scheduling .back').click(function(){
        var name=decodeURI(hospitalName);
        name=encodeURI(name);
        window.location.href="hospital_detail.html?"+name;
        
        
        
   
    });
});