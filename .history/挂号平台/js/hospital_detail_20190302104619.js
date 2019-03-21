$(function(){
    $('.order-content-tab').UiTab('.caption > .item','.block > .item');
    
    var hospitalName=window.location.href.split("?")[1];
    var hospitalData={};
    var arr;
        if(undefined){
            hospitalName=decodeURI(hospitalName);
            hospitalName=hospitalName.split("=")[1];
    
            arr=AjaxRemoteGetData.getLevelAreaSoftByHospitalName(hospitalName);
   
            hospitalData={
            "name":arr[3],
            "level":arr[1],
            "area":arr[0],
            "type":arr[2],
    
            };
        }else{
            hospitalData={
                "name":"NaN",
                "level":"NaN",
                "area":"NaN",
                "type":"NaN",
        };
       
  
   
    
    

    $('.hospitalDetail .hospitalDetail-title>span').html(hospitalData.name);
    var hospitalSpan=$('.hospitalDetail-title-info span');
    hospitalSpan.eq(1).text(hospitalData.level);
    hospitalSpan.eq(3).text(hospitalData.area);
    hospitalSpan.eq(5).text(hospitalData.type);
//    $('.introduce p').eq(0).replaceAll("{name}",hospitalName);

});
