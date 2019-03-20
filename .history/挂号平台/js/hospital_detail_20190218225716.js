$(function(){
    var hospitalName=window.location.href.split("?")[1];
    
    hospitalName=decodeURI(hospitalName);
    hospitalName=hospitalName.split("=")[1];
    
    var arr=AjaxRemoteGetData.getLevelAreaSoftByHospitalName(hospitalName);
    var hospitalData={
        "name":arr[3],
        "level":arr[1],
        "area":arr[0],
        "type":arr[2],

    };

    $('.hospitalDetail .hospitalDetail-title div').html(hospitalData.name);
    $('.order-content-tab').UiTab('.caption > .item','.block > .item');
});
