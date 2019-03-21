$(function(){
    var hospitalName=window.location.href.split("?")[1];
    
    hospitalName=decodeURI(hospitalName);
    hospitalName=hospitalName.split("=")[1];
    alert(hospitalName);

    $('.order-content-tab').UiTab('.caption > .item','.block > .item');
});
