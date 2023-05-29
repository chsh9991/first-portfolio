$(document).ready(function(){
			
    $('.posts_list').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth:370,
        slideMargin : 30,
        pager:false,
        nextSelector: '.recent_posts .controls .next',
        prevSelector :'.recent_posts .controls .prev' 
    });
    
    $(".toggle").click(function(){
        $(".main-menu").slideToggle();
    }); 
    
    $(window).resize(function(){
        if($(window).width() > 768){
            //참이면 할일
            $(".main-menu").show();
        } else{
            //거짓이면 할일
            $(".main-menu").hide();
        }
    });	
    
     //상단 헤더 스크롤 영역
    let $header = $('header');
    let $service = $('.services');
    $(window).scroll(function(){
        let $currentSct = $(this).scrollTop();
        let $offset = 300;
        
        if($currentSct > 0){
            $header.addClass('sticky');
        }else{
            $header.removeClass('sticky');
        }

        //service-item 보이게하기
        let $serviceThreshold = $service.offset().top - $offset;
        let $serviceExecuted = false;
        if(!$serviceExecuted){
        if($currentSct > $serviceThreshold){
            $service.addClass('active');
            $serviceExecuted = true;
        }
    }
    });
    
    

    
});