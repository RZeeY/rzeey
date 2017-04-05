window.onload = function() {
	var mySwiper = new Swiper('.swiper-container',{
	effect : 'coverflow',
	slidesPerView : 2,
	centeredSlides : true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	autoplay: 3000,//可选选项，自动滑动
	initialSlide :1,//默认第一个显示的图片
	slideToClickedSlide:true,//点击的slide会居中
	loop : true,//循环显示
	coverflow: {
	            rotate: 0,
	            stretch: 40,
	            depth: 200,
	            modifier: 2,
	            slideShadows : true
	        }
	})
}

