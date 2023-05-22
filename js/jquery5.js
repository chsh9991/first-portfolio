$(function(){
    let $aside = $('aside'),
        $button = $aside.find('button'),
        $duration = 300;
        
        
        //버튼을 클릭하면 aside가 나오도록 해
        //선택자.classList.add ='open';  < 자바스크립트
        //제이쿼리
        //A.addClass('b');     <클래스 추가 
        //A.removeClass('b');  <클래스 삭제
        //A.toggleClass('b');  <클릭할때마다 추가 삭제 됨
        //A.hasClass('b') < 조건문에서만 사용 a요소에 b라는 클래스가 있으면 true 없으면 false
        
        //속성변경하기, 속성의 값을 변환하기
        //let c = A.attr('b'); a라는 요소의 b라는 속성의 값을 변수명 c에 저장.
        //A.attr('b','c') a라는 요소의 b라는 속성의 값을 c로 변경
        console.log($button.find('img').attr('src'));
        $button.click(function(){
            $aside.toggleClass('open');
            //$aside.stop().animate({left:'0px'},duration);
            if($aside.hasClass('open')){
                //$aside.stop().animate({right:'-70px'},$duration,'easeOutBack');
                $button.find('img').attr('src','/image/btn_close.png');
            }else{
                //$aside.stop().animate({right:'-350px'},$duration,'easeInBack');
                $button.find('img').attr('src','/image/btn_open.png')
            }
        });
});
// * 큐빅 베지어- css transition 효과
// 제이쿼리- cpu//  버벅거림
//CSS- GPU// cpu까지 갈 필요없이 처리함 성능향상