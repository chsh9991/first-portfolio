$(function(){
    let $duration = 300;
        $button = $('#buttons2 button')

        /*  자바스트립트 코드
        //버튼들의 높이 -40, 0, 40, 80, 120....
        //자바스크립트 요소들마다 할 일
    let $buttons = document.getElementsByTagName('button');//자바스크립트 button선택
    console.log($buttons);
    //$buttons[0].style.top = '-40';    반복문 for
    //$buttons[1].style.top = '0'; 
    //$buttons[2].style.top = '80';
    for(let i = 0; i<=$buttons.length;i++){
        $buttons[0].style.top = i*40 -40 + 'px';
        // i 0 = -40 , i 1 = 0 i 2 = 40 (i가 0부터 시작해서 점점 높이값이 올라감)
    }
     아래는 제이쿼리 코드*/
    $button.each(function(idx){
        console.log(idx);
        //선택자.css({속성:값,})
        
        // $(this).css({top:idx*40 - 40 + 'px'});  아래방법도 가능
         let newTop = idx*40 - 40 + 'px';
        $(this).css({top:newTop});
    })
    .mouseover(function(){
        $(this).stop().animate({backgroundColor:'yellow',color:'#000'},$duration);
        $(this).find('img:first-child').stop().animate({opacity:0});
        $(this).find('img:nth-child(2)').stop().animate({opacity:1});
    })
    .mouseout(function(){
        $(this).stop().animate({backgroundColor:'#fff',color:'#01b169'},$duration);
        $(this).find('img:first-child').stop().animate({opacity:1});
        $(this).find('img:nth-child(2)').stop().animate({opacity:0});
    });
});

//제이쿼리 ui 플러그인 없이 배경색변경이 작동이안되서 고생함..