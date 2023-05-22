$(function(){
    let duration = 300,
        $image = $('#images p')

    // 첫번째 캡션,span animate메서드
    /*
    css= #images p span{} ->   jquery=   $image.find('span')      <공백이있으면 find
    #images p.strong{} ->           $image.filter('strong')  <공백이없으면 filter

    */
    $image.filter(':nth-child(1)').mouseover(function(){
        $(this).find('span, strong').stop().animate({opacity:1},duration);
    }).mouseout(function(){
        $(this).find('span, strong').stop().animate({opacity:0},duration);
    });

    //  css=    #images p:nth-child(2)
    // jquery=  $images.filter(':nth-child(2)')
    $image.filter(':nth-child(2)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1},duration);
        $(this).find('strong').stop().animate({opacity:1,left:'0%'},duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0},duration);
        $(this).find('strong').stop().animate({opcity:0,left:'-200%'},duration);
    });
    $image.filter(':nth-child(3)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1},duration);
        $(this).find('strong').stop().animate({opacity:1,bottom:'0%'},duration);
        $(this).find('img').stop().animate({top:'-40px'},duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0},duration);
        $(this).find('strong').stop().animate({opacity:0,bottom:'-80px'},duration);
        $(this).find('img').stop().animate({top:'0px'},duration);
    });
});