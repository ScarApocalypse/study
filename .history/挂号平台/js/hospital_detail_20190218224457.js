$(function(){
    var hospitalName=window.location.href.split("?")[1];
    alert(hospitalName);
    $('.order-content-tab').UiTab('.caption > .item','.block > .item');
});
