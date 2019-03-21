$(function(){
    var hospitalName=window.location.href.split("?")[1];
    var arr=AjaxRemoteGetData.getLevelAreaSoftByHospitalName(hospitalName);
    console.log(arr);

    $('.order-content-tab').UiTab('.caption > .item','.block > .item');
});
