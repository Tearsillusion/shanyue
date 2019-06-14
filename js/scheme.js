// 获取连接数据
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
var Request = new Object();
Request = GetRequest();

/* 方案列表 */
$(".scheme-list .thumbnail").hover(function() {
	$(this).find(".scheme-list-model").animate({
		top: 0
	}, 500)
	$(this).find(".scheme-list-icon").animate({
		top: '-200%'
	}, 500)
}, function() {
	$(this).find(".scheme-list-model").animate({
		top: '100%'
	}, 500)
	$(this).find(".scheme-list-icon").animate({
		top: '0'
	}, 500)
});
// 产品情况
var type = Request["type"];
$(".schems-list-tab-list span").eq(type).addClass("sapnColor");
$(".schems-list-tab-list span").eq(type).find("a").addClass("aColor")
$(".project-list .row").eq(type).show().siblings().hide();
$(".schems-list-tab-list span").click(function(){
	var index = $(this).index();
	$(".project-list .row").eq(index).show().siblings().hide();
	$(this).find("a").addClass("aColor").parent().siblings().find("a").removeClass("aColor");
	$(this).addClass("sapnColor").siblings().removeClass("sapnColor")
})
// 产品详情
$(".product-list-title-imgTitle").attr("src",$(".product-list-title-imgList span").find("img").eq(0).attr("src"));
$(".product-list-title-imgList span").eq(0).addClass("imgCss")
$(".product-list-title-imgList span").click(function(){
	var url = $(this).find("img").attr("src");
	$(".product-list-title-imgTitle").attr("src",url);
	$(this).addClass("imgCss").siblings().removeClass("imgCss")
})
// 手滑动
var flagX = 0;
var flagXM = 0;

function getFlag() {
	flagX = event.touches[0].pageX;
	flagXM = flagX;
}

function setFlag() {
	flagXM = event.touches[0].pageX;
}

function change() {
	var range = flagXM - flagX;
	//如果水平滑动距离小于30，就不切换
	if (Math.abs(range) < 30) {
		return false;
	}
	var direction = range < 0 ? 'next' : 'prev';
	$("#carousel-example-generic").carousel(direction);
	
}
// 导航控制
$(".navbar-nav li a").click(function(){
	console.log($(this).text())
})
//一级菜单跳转
$(".dropdown-toggle").click(function() {
	if ($(this).attr("href")){
		window.location = $(this).attr("href");
	} 
})
// 返回顶部
$(document).scroll(function() { //页面加载时，获取滚动条初始高度
	var distance = $(document).scrollTop(); //获取滚动条初始高度的值 ：0
	// console.log(distance); //打印滚动条不同高度的位置的值
	if (distance < 280) { //当滚动条高度为0时
		$(".backTop").css('visibility', 'hidden');//移除某某css
	} else if (distance > 750) {
		$(".backTop").css('visibility', 'visible');
	}

})
// 显示联系方式
$(".topCall").mouseover(function() {
	$(".callPhone").css('visibility', 'visible');
})
$(".topCall").mouseout(function() {
	$(".callPhone").css('visibility', 'hidden');
})
// 在线客服
$(document).ready(function(){

	/* ----- 侧边悬浮 ---- */
	$(document).on("mouseenter", ".suspension .a", function(){
		var _this = $(this);
		var s = $(".suspension");
		var isService = _this.hasClass("a-service");
		var isServicePhone = _this.hasClass("a-service-phone");
		var isQrcode = _this.hasClass("a-qrcode");
		if(isService){ s.find(".d-service").show().siblings(".d").hide();}
		if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
		if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
	});
	$(document).on("mouseleave", ".suspension, .suspension .a-top", function(){
		$(".suspension").find(".d").hide();
	});
	$(document).on("mouseenter", ".suspension .a-top", function(){
		$(".suspension").find(".d").hide(); 
	});
	$(document).on("click", ".suspension .a-top", function(){
		$("html,body").animate({scrollTop: 0});
	});
	$(window).scroll(function(){
		var st = $(document).scrollTop();
		var $top = $(".suspension .a-top");
		if(st > 400){
			$top.css({display: 'block'});
		}else{
			if ($top.is(":visible")) {
				$top.hide();
			}
		}
	});
	
});	
// 面包屑
var example = $("#bs-example-navbar-collapse-1 ul").find("li");
var exampleCode;
for(var i=0;i<example.length;i++){
	if(example.eq(i).hasClass("active")){
		var text = example.eq(i).find("a").text();
		var textAfter = $(".exampleText").text();
		var hrefUrl = example.eq(i).find("a").attr("href")
		exampleCode = '<ol class="breadcrumb">'+
			'<li><a href="index.html">首页</a></li>'+
			'<li><a href="'+hrefUrl+'">'+text+'</a></li>'+
			'<li class="active">'+textAfter+'</li>'+
		'</ol>'
		$(".exampleCode").append(exampleCode)
	}
}
var width = $(window).width();
if(width<768){
	$(".exampleCode").hide();
	$(".exampleText").hide();
}
// 招聘详情
var personType = Request["personType"];
$(".person-list-hide").eq(personType).show().siblings(".person-list-hide").hide()