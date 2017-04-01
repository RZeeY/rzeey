window.onload = function() {
	// var oSlide = document.getElementById("slide");
	// // oSlide.style.position = "relative";
	// var speed = 1552;
	// var i = 0;
	// setInterval(function(){
	// 	// i=oSlide.style.marginLeft;
	// 	oSlide.style.marginLeft = oSlide.offsetLeft - 12 +"px";
			
	// },1000)
	// console.log(oSlide.offsetLeft);	

	var mySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable :true,
		nextButton: '.swiper-button-next',
    	prevButton: '.swiper-button-prev',
		autoplay: 3000,//可选选项，自动滑动

})
}

