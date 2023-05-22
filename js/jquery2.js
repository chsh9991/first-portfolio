$(function(){
    $('#typo .inner').click(function(){
        //선택자.animate({속성:값, 속성값}, 시간, 이징, 할일, 다른할일);
        // linear, swing
        // function(){실제 할일}
        $(this).animate({opacity:0, fontSize:'0px'},1500, 'easeOutElastic',
        function(){
            $(this).animate({opacity:1, fontSize:'110px'},500);
        });
        
    });
});


/*
마우스 오버시 배경 회색 아웃시 흰색
$(function(){
	$('.menu li').mouseover(function(){
		$(this).css({backgroundColor:'#ccc'});
	}).mouseout(function(){
		$(this).css({backgroundColor:'#fff'});
	});
});
*/

/* .stop을 쓰면  전부기억해서 하지않음 원래.stop(true)를
    써주는데 기본값이라 생략해도 됨 
$(function(){
	$('div').mouseover(function(){
		$(this).stop().animate({backgroundColor:'blue'},500);
	}).mouseout(function(){
		$(this).stop().animate({backgroundColor:'green'},500);
	});
}); 
*/