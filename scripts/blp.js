
	/* Be Like Pablo - Love is for the Living - Kinetic Type */
	
	// JavaScript is used to switch on and off classes on individual elements
	// All the animation is achieved using CSS3 only
	
	$(document).ready(function(){
	
		$("#vignette").click(function(){
			$(".songtitle").hide(1500);
			audio = document.getElementById('song');
			audio.play();
			fire("#verse1","line1",0);
			fire("#verse1 .line:eq(0) span:eq(0)","active",4000);
			fire("#verse1","word2",4200);
			fire("#verse1 .line:eq(0) span:eq(1)","active",4400);
			fire("#verse1","word3",400);
			fire("#verse1 .line:eq(0) span:eq(2)","active",4800);
			fire("#verse1","word4",400);
			fire("#verse1 .line:eq(0) span:eq(3)","active",5200);
			fire("#verse1","word5",400);
			fire("#verse1 .line:eq(0) span:eq(4)","active",5600);
			// Reset the position of verse1
			killclass("#verse1","line1",1200);
			killclass("#verse1","word2",0);
			killclass("#verse1","word3",0);
			killclass("#verse1","word4",0);
			killclass("#verse1","word5",0);
			fire("#verse1","line2",0);
			fire("#verse1 .line:eq(1) span:eq(0)","active",7000);
			fire("#verse1 .line:eq(1) span:eq(1)","active",7400);
			fire("#verse1 .line:eq(1) span:eq(2)","active",7800);
			fire("#verse1 .line:eq(1) span:eq(3)","active",8200);
			fire("#verse1","word4",1000);
			fire("#verse1 .line:eq(1) span:eq(4)","active",8700);
			fire("#verse1 .line:eq(1) span:eq(4) strong","shake",9200);
			killclass("#verse1 .line:eq(1) span:eq(4) strong","shake",1000);
			// Reset the position of verse1
			killclass("#verse1","line2",2000);
			killclass("#verse1","word4",0);
			fire("#verse1","line3",0);
			fire("#verse1 .line:eq(2) span:eq(0)","active",10500);
			fire("#verse1 .line:eq(2) span:eq(1)","active",10900);
			fire("#verse1 .line:eq(2) span:eq(2)","active",11300);
			fire("#verse1 .line:eq(2) span:eq(3)","active",11700);
			fire("#verse1","word4",2000);
			fire("#verse1 .line:eq(2) span:eq(4)","active",12100);
			fire("#verse1 .line:eq(2) span:eq(5)","active",12500);
			fire("#verse1 .line:eq(2) span:eq(6)","active",12900);
			killclass("#verse1","word4",500);
			fire("#verse1 .line:eq(2) span:eq(7)","active",13300);
			fire("#verse1 .line:eq(2) span:eq(8)","active",13900);
			fire("#verse1 .line:eq(2) span:eq(9)","active",14600);
			// Reset the position of verse1
			killclass("#verse1","line3",4000);
			killclass("#verse1","word4",0);
			fire("#verse1","line4",0);
			fire("#verse1","scene2",0);
			fire("#verse1 .line:eq(3) span:eq(0)","active",16600);
			fire("#verse1 .line:eq(3) span:eq(1)","active",17000);
			fire("#verse1 .line:eq(3) span:eq(2)","active",17400);
			fire("#verse1 .line:eq(3) span:eq(3)","active",17800);
			fire("#verse1 .line:eq(3) span:eq(4)","active",18200);
			fire("#verse1 .line:eq(3)","shadow",17500);
			fire("#verse1 .line:eq(3) span:eq(5)","active",18600);
			fire("#verse1 .line:eq(4) span:eq(0)","active",19400);
			fire("#verse1 .line:eq(4) span:eq(1)","active",19800);	
			fire("#verse1 .line:eq(3)","halfleading",5000);
			fire("#verse1","line5",3000);
			fire("#verse1 .line:eq(4) span:eq(2)","active",20600);
			fire("#verse1 .line:eq(4) span:eq(3)","active",21000);
			fire("#verse1 .line:eq(4) span:eq(4)","active",21200);
			fire("#verse1 .line:eq(4) span:eq(5)","active",21600);
			fire("#verse1 .line:eq(4) span:eq(6)","active",22000);
			fire("#verse1","line6",4000);
			killclass("#verse1","line4",0);
			killclass("#verse1","line5",0);
			fire("#verse1 .line:eq(5) span:eq(0)","active",23800);
			fire("#verse1 .line:eq(5) span:eq(1)","active",24400);
			fire("#verse1 .line:eq(5) span:eq(2)","active",24800);
			fire("#verse1 .line:eq(5) span:eq(3)","active",25200);
			fire("#verse1 .line:eq(5) span:eq(4)","active",25600);
			fire("#verse1","word5",1600);
			fire("#verse1 .line:eq(5) span:eq(5)","active",26000);
			fire("#verse1 .line:eq(5) span:eq(6)","active",26600);
			fire("#verse1 .line:eq(5) span:eq(7)","active",27000);
			fire("#verse1","line7",2000);
			killclass("#verse1","line6",0);
			killclass("#verse1","word5",0);
			killclass("#verse1","scene2",0);
			fire("#verse1 .line:eq(6) span:eq(0)","active",28000);
			fire("#verse1 .line:eq(6) span:eq(1)","active",28400);
			fire("#verse1 .line:eq(6) span:eq(2)","active",28800);
			fire("#verse1 .line:eq(6) span:eq(3)","active",29200);	
			fire("#verse1 .line:eq(6) span:eq(3)","grow",200);		
			fire("#verse1 .line:eq(7) span:eq(0)","active",30400);
			fire("#verse1 .line:eq(7) span:eq(1)","active",30800);
			fire("#verse1 .line:eq(7) span:eq(2)","active",31200);
			fire("#verse1","word3",4500);
			fire("#verse1 .line:eq(7) span:eq(3)","active",31600);
			fire("#verse1 .line:eq(7) span:eq(4)","active",32000);
			fire("#verse1 .line:eq(7) span:eq(5)","active",32400);	
			fire("#verse1 .line:eq(7) span:eq(6)","active",32800);
			fire("#verse1 .line:eq(7) span:eq(6)","colour",800);
			killclass("#verse1 .line:eq(7) span:eq(6)","colour",1800);		
			fire("#verse1","word7",1000);
			fire("#verse1","scene3",0);
			fire("#verse1 .line:eq(8) span:eq(0)","active",33400);
			fire("#verse1 .line:eq(8) span:eq(1)","active",33800);
			fire("#verse1 .line:eq(8) span:eq(2)","active",34200);
			fire("#verse1 .line:eq(8) span:eq(3)","active",34600);
			fire("#verse1 .line:eq(8) span:eq(4)","active",35000);
			fire("#verse1 .line:eq(8) span:eq(5)","active",35400);	
			fire("#verse1 .line:eq(8) span:eq(6)","active",36000);
			fire("#verse1","mono",3000);
			killclass("#verse1","mono",2000);
			killclass("#verse1","word7",0);
			killclass("#verse1","line7",0);
			killclass("#verse1","word3",0);
			fire("#verse1","line10",0);
			fire("#verse1 .line:eq(9) span:eq(0)","active",39000);
			fire("#verse1 .line:eq(9) span:eq(1)","active",39400);
			fire("#verse1 .line:eq(9) span:eq(2)","active",40200);
			fire("#verse1 .line:eq(9) span:eq(2)","pulse", 500);
			fire("#verse1 .line:eq(9) span:eq(3)","active",40600);
			killclass("#verse1","line10",7000);
			killclass("#verse1","scene3",0);
			setTimeout(function(){audio.pause();audio.currentTime=0;$("#verse1 span").removeClass("active");$(".line").removeClass("halfleading");$(".songtitle").show();},44500);
			
		});
	});
	
	// Add the class after a specified delay. This is a bit of a hack!
	function fire(selector,classname, waittime) {
		$(selector).delay(waittime).animate({1:1},1,function(){$(this).addClass(classname);});
	}
	
	// Remove the class after a specfied delay. This is a similar hack!
	function killclass(selector,classname,waittime) {
		$(selector).delay(waittime).animate({1:1},1,function(){$(this).removeClass(classname);});
	}