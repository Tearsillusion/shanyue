var windowHeight = $(window).height();
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
// 解决方案效果
$(".plan-wrapper .plan-slide").click(function() {
	$(this).addClass("open").children(".plan-card-collapse").css({
		opacity: 0
	}).siblings(".plan-card-open").css({
		opacity: 1
	})
	$(this).siblings(".plan-slide").removeClass("open").children(".plan-card-collapse").css({
		opacity: 1
	}).siblings(".plan-card-open").css({
		opacity: 0
	})
})
// 显示联系方式
$(".topCall").mouseover(function() {
	$(".callPhone").css('visibility', 'visible');
})
$(".topCall").mouseout(function() {
	$(".callPhone").css('visibility', 'hidden');
})
//一级菜单跳转
$(".dropdown-toggle").click(function() {
	if ($(this).attr("href")) {
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