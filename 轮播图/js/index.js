function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var index=0;
var main=byId("main");
var subBox=byId("sub-box");
var pic=subBox.getElementsByTagName("div");
var menuBox=byId("menu-box");
console.log(menuBox);
var picIndex=menuBox.getElementsByTagName("li");
console.log(picIndex);
var timeout;
timeout=setInterval(slideShow,1000);
picIndex[0].style.background = "#ffcc00"
for(var m=0;m<picIndex.length;m++){
	picIndex[m].setAttribute("index",m);
	picIndex[m].onclick=function(){
		index=this.getAttribute("index");
		//console.log(index);
		changeImg();

	};

}
function changeImg(){
	for(var i=0;i<pic.length;i++){
		pic[i].style.display="none";
		picIndex[i].style.background = '#fff';
	}
	pic[index].style.display="block";
	picIndex[index].style.background = '#ffcc00';
}
function slideShow(){
	index++;
	if(index==pic.length)
		index=0;
	changeImg();

}
main.onmouseover=function(){
	clearInterval(timeout);
};
main.onmouseout=function(){
	timeout=setInterval(slideShow,1000);
};