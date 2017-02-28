/**
 * Created by RZeeY on 2017/2/15.
 */

window.onload=function(){

	var firstSlide = document.getElementsByTagName("ul")[0];

	// 第一个幻灯左箭头事件
	var arrowLeft = document.getElementById("arrowLeft") 
	arrowLeft.onmouseover = function() {
		arrowLeft.style.opacity = '1';
		arrowLeft.style.cursor = 'pointer';
	}
	arrowLeft.onmouseout = function() {
		arrowLeft.style.opacity = '0.5';
		arrowLeft.style.cursor = 'defalut';
	}

	var b = 0;
	arrowLeft.onclick = function() {
		var timer1 = setInterval(
			function slip() {
				if(b<(-100*(firstSlide.getElementsByTagName("li").length-1))) {
					// b=b+5;
					var timer2 = setInterval(
						function slip2() {
							b=b+10;
							if(b>=0) clearInterval(timer2);
							firstSlide.style.marginLeft = b + "%";
						},"10");
				}
				b=b-5;				
				firstSlide.style.marginLeft = b + "%";
				if(b%100==0) clearInterval(timer1);
			},"10");
	} 

	// 第一个幻灯右箭头事件
	var arrowRight = document.getElementById("arrowRight") 
	arrowRight.onmouseover = function() {
		arrowRight.style.opacity = '1';
		arrowRight.style.cursor = 'pointer';
	}
	arrowRight.onmouseout = function() {
		arrowRight.style.opacity = '0.5';
		arrowRight.style.cursor = 'defalut';
	}

	// var rightCheckTimes = 4;
	arrowRight.onclick = function() {
		var timer1 = setInterval(
			function slip() {
				if(b>=0) {
					// b=b-5;
					var timer2 = setInterval(
						function slip2() {
							b=b-10;
							if(b<(-100*(firstSlide.getElementsByTagName("li").length-1))) clearInterval(timer2);
							firstSlide.style.marginLeft = b + "%";
						},"10");
				}
				b=b+5;
				firstSlide.style.marginLeft = b + "%";
				if(b%100==0) clearInterval(timer1);
			},"10");
	} 

	// 职业切换
	var raceUl = document.getElementsByTagName("ul")[1];
	var raceDetailsUl = document.getElementsByTagName("ul")[2];
	raceUl.children[0].getElementsByTagName('img')[0].src = "images/itemes/racehover1.png"
	raceUl.onmouseover = function() {
		raceUl.style.cursor = 'pointer';		
	}
	raceUl.onmouseout = function() {
		raceUl.style.cursor = 'defalut';		
	}	
	// 鼠标点击 职业介绍和图标切换
	var tmp = 0;
	raceUl.onclick = function(event) {
		for(var i=0;i<raceUl.children.length;i++){
			if(event.target == raceUl.getElementsByTagName('li')[i].getElementsByTagName('img')[0]){
				// console.log(tmp+1);
				raceUl.getElementsByTagName('li')[tmp].getElementsByTagName('img')[0].src = "images/itemes/race"+(tmp+1)+".png";
				// console.log(i)
				raceUl.getElementsByTagName('li')[i].getElementsByTagName('img')[0].src = "images/itemes/racehover"+(i+1)+".png";
				tmp = i;	
				raceDetailsUl.style.top = (-255*i) + "px";
				// console.log(raceDetailsUl.style.top)
			}
		}
	}

	// 区间百叶窗幻灯
	var areaClass = document.getElementsByClassName('area-picwrap')[0];
	var tmp = 0;
	var k = 10;
	var h = 0;
	var coverClass = document.getElementsByClassName('cover');
	// var areaPicClass = areaClass.getElementsByTagName('div')[0];
	// var coverClass = areaPicClass.getElementsByTagName('div')[0];
	// var areanumberClass = areaPicClass.getElementsByTagName('div')[1];
	coverClass[0].style.visibility = 'hidden';
	document.getElementById('areanumber1').style.visibility = 'hidden';

	document.getElementById('areapic'+1).style.left = parseInt(getComputedStyle(document.getElementById('areapic'+1), null).left) + "px";
	document.getElementById('areapic'+2).style.left = parseInt(getComputedStyle(document.getElementById('areapic'+2), null).left) + "px";
	document.getElementById('areapic'+3).style.left = parseInt(getComputedStyle(document.getElementById('areapic'+3), null).left) + "px";
	document.getElementById('areapic'+4).style.left = parseInt(getComputedStyle(document.getElementById('areapic'+4), null).left) + "px";
	document.getElementById('areapic'+5).style.left = parseInt(getComputedStyle(document.getElementById('areapic'+5), null).left) + "px";
	areaClass.onmouseover = function(event) {
		for(var i=0;i<coverClass.length;i++)
		{
			if(event.target == coverClass[i]){
				// document.getElementById('areapic'+z).style.left = -630+"px";
				// document.getElementById('areapic'+i).style.left = -630+"px";

				if(tmp > i)
				{
					coverClass[i].style.visibility = 'hidden';
					document.getElementById('areanumber'+(i+1)).style.visibility = 'hidden';
					
							for(var z=i;z<tmp;z++){
								document.getElementById('areapic'+(z+1)).style.left = parseInt(document.getElementById('areapic'+(z+1)).style.left)+630+"px";
								coverClass[z+1].style.visibility = 'visible';
								document.getElementById('areanumber'+(z+2)).style.visibility = 'visible';
							}		

		
				}

				else if  (tmp < i){
					coverClass[i].style.visibility = 'hidden';
					document.getElementById('areanumber'+(i+1)).style.visibility = 'hidden';
					for(var z=i;z>tmp;z--){
						document.getElementById('areapic'+z).style.left = parseInt(document.getElementById('areapic'+z).style.left)-630+"px";
						coverClass[z-1].style.visibility = 'visible';
						document.getElementById('areanumber'+z).style.visibility = 'visible';
					}
					
				}
				else  if  (tmp == i){
					;
				}
								
				tmp=i;		
			}
		}
	}


}

