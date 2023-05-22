//document.getElementsByTagName('h1')[0].style.color='red';
        /*
        document.addEventListener('DOMContentLoaded', function(){
            document.getElementsByTagName('h1')[0].style.color='red';
        });
        자바스크립트 예시*/
                
        //$('h1').css({'color':'red'});

        /*
        $(document).ready(function(){      실행을 위해 
            $('h1').css({'color':'red'});
        });
        제이쿼리 예시 
        
        아래는 리팩토링 한 코드 계속..*/
                
        //$(function(){
            //$('h1').css('color','red'); //css 속성 하나를 변경
            //$('h1').css('text-decoration','underline';);
            //$('h1').css('border-bottom','5px solid red');
            //$('h1').css('transform','rotate(45deg)');
            //$('h1').css('opacity',0.5); 스크립트에서 숫자는 다움표(')를 안써도된다 그치만 %를 쓰면 써야한다
            
            /*
            $('h1').css({
                'text-decoration':'underline',
                'borderbottom':'5px solid red',
                'transform':'rotate(45deg)',
                'opacity':0.5,
                'text-align':'center',
            });
       });
       */

      /*
      매개변수1 에 있던 ' - 를 없애고 가능하다 -없애버린 매개변수는 대문자를 넣어야한다. */
       
//       $('h1').css({
//         textDecoration:'underline',
//         borderBottom:'5px solid red',
//         transform:'rotate(45deg)',
//         opacity:0.5,
//         textAlign:'center',
//     });
// });

//  (JQuery 객체)   (변경을 위한 명령)
// $(HTML 요소).메서드('매개변수','매개변수2') 제이쿼리 양식


//실행 지점 제어 -event종류 - mouseover 마우스가 올라왔을 때
//on 메서드, bind('click'... ) --> .on .off
// $('#typo').on('이벤트 종류' 할일);
// 할일 = 임의 함수 = function(){}
    
    /*$(function(){
        $('h1').css('color','red');
        $('#typo').on('mouseover',function(){
        //아이디 typo의 배경색을 green
            $('#typo').css('background-color','green');
        });//typo mouseover
        $('#typo').on('mouseout',function(){
                $('#typo').css('background-color','#3498db');
            });//typo mouseout
   });
   아래 리팩토링*/
   /*
   $(function(){
    
    $('h1').css('color','red');
    $('#typo').mouseover(function(){   //아이디 typo의 배경색을 green
    
        $('#typo').css('background-color','green');
    })//typo mouseover
   .mouseout(function(){
            $('#typo').css('background-color','#3498db');
        });//typo mouseout
});
*/
/*
$(function(){
    
    $('h1').css('color','red');

    $('#typo, h1').mouseover(function(){   //h1: hover, #typo:hover {background-color:green}; css로 적으면
    

        $('#typo, h1').css('background-color','green');
    })
   .mouseout(function(){
            $('#typo, h1').css('background-color','#3498db');
        });
});
typo h1 둘중 하나만 마우스 오버해도 같이 변경된다.*/
$(function(){
    
    $('h1').css('color','red');

    $('#typo, h1').mouseover(function(){
        $(this).css('background-color','green');
    })
   .mouseout(function(){
            $(this).css('background-color','#3498db');
        });
});
 //이벤트가 일어난 그거 (this)  #typo,h1 따로 됨 그리고 cpu 과부화도 덜 됨 빠르게 찾아줌


