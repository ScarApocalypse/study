




$(document).ready(function(event){
	// 顶部区域子菜单
	var headerMenu=$('.header-right>ul>li').not('#devide');
	var hMenuSubBox=$('.header-right ul li .subBox');
	console.log(headerMenu);
	headerMenu.hover(function(){
		$(this).addClass('active')
		.find('img')
		.attr('src','images/icon/24.png')
		.end()
		.find('a')
		.css({
			'color':'#f01414',
		});
		hMenuSubBox.eq($(this).index()).show();
	},function(){
		$(this).removeClass('active')
		.find('img')
		.attr('src','images/icon/21.png')
		.end()
		.find('a')
		.css({
			'color':'#666',
		});
		hMenuSubBox.hide();
	});
	var subBoxMenu=headerMenu.find('ul li');
	subBoxMenu.hover(function(){
		$(this).css({
			'background':'#cdd0d4',
		});
	},function(){
		$(this).css({
			'background':'#fff',
		});
	});

	
	//购物车
	var cart=$('.cart');
	cart.hover(function(){
		$(this).css({
			'background':'#fff',
			'box-shadow': '1px 1px 10px #555',
		})
		.find("li:lt(3)").css({
			'color':'#f01414',

		}).end().find('img').eq(0).attr("src","images/icon/25.png")
		.end().eq(1).attr("src","images/icon/24.png");
		$('.cartDetail').show();

	},function(){
		$(this).css({
			'background':'#f01414',
			'box-shadow': '1px 1px 10px #fff',
		})
		.find("li:lt(3)").css({
			'color':'#fff',

		}).end().find('img').eq(0).attr("src","images/icon/26.png")
		.end().eq(1).attr("src","images/icon/23.png");
		$('.cartDetail').hide();
	});
	var cartMenu=cart.find("li:gt(2)");
	cartMenu.hover(function(){
		$(this).css({
			'background':'#cdd0d4'
		});
	},function(){
		$(this).css({
			'background':'#fff'
		});
	});

	//菜单栏切换
	var menuList=$('.banner .menu ul').eq(0).find('li').eq(0).nextAll();
	var menuDetail=$('.banner .menu .menuDetail>li');
	var detailBox=menuDetail.find('detailBox');
	console.log(menuDetail.eq(0));

	menuList.hover(function(){
		var index=$(this).index();
		console.log(index);
		$(this).addClass('active').find('a').css({'color':'#f01414'});
		menuDetail.eq(index).show();
		$('.slide').css({
			'zIndex' : '-2',
		});

	},function(){
		var index=$(this).index();
		$(this).removeClass('active').find('a').css({'color':'#fff'});
		menuDetail.eq(index).hide();
		$('.slide').css({
			'zIndex' : '1',
		});

	});
	menuDetail.hover(function(){
		$(this).show();
		$('.slide').css({
			'zIndex' : '-2',
		});
		console.log('11');

	},function(){
		$(this).hide();
		$('.slide').css({
			'zIndex' : '1',
		});
	});


	//楼层区商品切换
	var goodsList=$('.floorBox .choice li');
	var floorArrow=$('.floorBox .choice li img');
	var goods=$('.floorBox .goods');
	var goodsListTitle=goodsList.find('s');
	console.log(goodsListTitle);
	goodsList.hover(function(){
		var index=$(this).index('.floorBox .choice li');
		if(index>2){
			$('.floorBox .choice li img:gt(2)').removeClass('active');
			floorArrow.eq(index).addClass('active');
			$('.floorBox .goods:gt(2)').removeClass('active');
			goods.eq(index).addClass('active');
			$('.floorBox .choice li s:gt(2)').removeClass('active');
			goodsListTitle.eq(index).addClass('active');
		}else{
			$('.floorBox .choice li img:lt(3)').removeClass('active');
			floorArrow.eq(index).addClass('active');
			$('.floorBox .goods:lt(3)').removeClass('active');
			goods.eq(index).addClass('active');
			$('.floorBox .choice li s:lt(3)').removeClass('active');
			goodsListTitle.eq(index).addClass('active');
		}

	});
	//添加鼠标移动到商品上的阴影效果
	var goodsBox=$('.goodsBox');
	console.log(goodsBox);
	goodsBox.hover(function(){
		console.log("1");
		$(this).css({
			'boxShadow' : '1px 1px 10px rgba(0,0,0,0.4)',

		});
	},function(){
		$(this).css({
			'boxShadow' : '1px 1px 10px rgba(0,0,0,0)',
		});
	});

// 轮播图start
var index=0;
var imgBox=$('.imgBox');
	var img=$('.imgBox').find('img');//获取img的jQuery对象

	// 更改图片函数
	function changeImg(){
		img.eq(index).addClass('active').siblings().removeClass();
		$('.dotBox li').eq(index).addClass('checked').siblings().removeClass();
	}
	//自动播放函数
	function autoPlay(){
		index++;
		if(index==img.last().index()+1)
			index=0;
		changeImg();
	}
	// 设置定时器
	var timeout=setInterval(autoPlay,2000);
	//注册点击选项圆点更换图片事件
	$('li').on('change',function(){
		var dotIndex=$(this).index();

		index=dotIndex;
		changeImg();
	}).click(function(){
		$(this).trigger("change");
	});
	//注册鼠标进入停止轮播事件
	$('.slide').on("stopSlide",function(){
		clearInterval(timeout);
	}).mouseenter(function(){
		$(this).trigger("stopSlide");
	});
	//注册鼠标离开重新开始轮播事件
	$('.slide').on("startSlide",function(){

		timeout=setInterval(autoPlay,2000);
	}).mouseleave(function(){
		$(this).trigger("startSlide");
	});
	//注册点击左箭头切换上一张图片
	$('.preBtn').on("preImg",function(){
		index--;
		index<0?index=img.last().index():index;
		changeImg();
	}).click(function(){
		$(this).trigger("preImg");
	});
	//注册点击右箭头切换下一张图片
	$('.nextBtn').on("nextImg",function(){
		index++;
		index>img.last().index()?index=0:index;
		changeImg();
	}).click(function(){
		$(this).trigger("nextImg");
	});
	//注册按钮鼠标进入和离开样式变化事件
	$('.preBtn').add('.nextBtn').on("btnHover",function(){
		$(this).addClass('btnHover');
	}).mouseenter(function(){
		$(this).trigger("btnHover");
	}).on("btnOut",function(){
		$(this).removeClass('btnHover');
	}).mouseleave(function(){
		$(this).trigger("btnOut");
	});

// 轮播图end
//右侧导航栏
	var navRightList=$('.navRight ul li');
	navRightList.hover(function(){
		$(this).find('div').css({
			'background':'#71777d',
		}).end().find('span').animate({right:'50px'},300);

	},function(){
		$(this).find('div').css({
			'background':'#b7bbbf',
		}).end().find('span').animate({right:'-30px'},100);
	});
	var backToTop=$('.navRight ul li:last');
	backToTop.click(function(){
		$(window).scrollTop(0);
	});
	$('dfasdfa').click(function(){
		console.log(11);
	});
	$('fsdfds').on('click',function(){
		var i=1;
		var j=1;
	});
	
});
