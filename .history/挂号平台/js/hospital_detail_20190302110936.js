$(function(){
    $('.order-content-tab').UiTab('.caption > .item','.block > .item');
    
    var hospitalName=window.location.href.split("?")[1];
    
    var hospitalData={};
    var arr;
    $('.species').click(function(){
            
        // var name=decodeURI(hospitalName);
        // name=encodeURI(name);
        window.location.href="scheduling.html?name="+name;
        
        
        
   
    });
    
        if(hospitalName){
            hospitalName=decodeURI(hospitalName);
            hospitalName=hospitalName.split("=")[1];
    
            arr=AjaxRemoteGetData.getLevelAreaSoftByHospitalName(hospitalName);
   
            hospitalData={
            "name":arr[3],
            "level":arr[1],
            "area":arr[0],
            "type":arr[2]
    
            };
        }else{
            hospitalData={
                "name":"北京协和医院",
                "level":"三级甲等",
                "area":"东城区",
                "type":"中国医科院所属医院"
            }
        };
       
  
   
    
       

    $('.hospitalDetail .hospitalDetail-title>span').html(hospitalData.name);
    var hospitalSpan=$('.hospitalDetail-title-info span');
    hospitalSpan.eq(1).text(hospitalData.level);
    hospitalSpan.eq(3).text(hospitalData.area);
    hospitalSpan.eq(5).text(hospitalData.type);
//    $('.introduce p').eq(0).replaceAll("{name}",hospitalName);
   
});