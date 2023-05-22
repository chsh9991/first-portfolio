//1 
$('.img_box').bxSlider({
    mode: 'fade',
    captions: true,
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 1903
});

//2
$('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
});

//3
$(function(){
    let $images = $('.container4 .bg_box li'),
        $over = $('.container4 .txt_box li ');

    $over.filter(':nth-child(1)').mouseover(function(){
        $images.stop().css({opacity:0});
        $images.filter('.bg1').stop().css({opacity:1});
    });
    $over.filter(':nth-child(2)').mouseover(function(){
        $images.stop().css({opacity:0});
        $images.filter('.bg2').stop().css({opacity:1});
    });
    $over.filter(':nth-child(3)').mouseover(function(){
        $images.stop().css({opacity:0});
        $images.filter('.bg3').stop().css({opacity:1});
    });
    $over.filter(':nth-child(4)').mouseover(function(){
        $images.stop().css({opacity:0});
        $images.filter('.bg4').stop().css({opacity:1});
    });
    $over.filter(':nth-child(5)').mouseover(function(){
        $images.stop().css({opacity:0});
        $images.filter('.bg5').stop().css({opacity:1});
    });
});

//4
$('.item_wrap').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  });

 //5
 $('.re_wrap').slick({
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    });
//6
$('.event_box').slick({
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
});
//7
$('.con9_box').slick({
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
});