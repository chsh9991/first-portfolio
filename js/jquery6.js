// $(function(){
//     let tabAnchor = $('.tabs-nav li a'),
//         tabPanel = $('.tabs-panel');

//         tabAnchor.click(function(e){
//             e.preventDefault();

            
//             tabAnchor.removeClass('active'); //엑티브를 뺀다
//             $(this).addClass('active'); //클릭한거만 추가

//             tabPanel.hide();
//             let $target = $(this).attr('href');

//             $($target).show();
            
//         });
// });



            /*
            //그요소에만 active를 추가하고 나머지요소에서 뺀다.
            $(this).addClass('active').siblings().removeClass('active') 
            형제가없는 상태라 사용이안된다
            */
/*
            $(function(){
    let tabAnchor = $('.tabs-nav li a'),
        tabPanel = $('.tabs-panel');

        //링크를 클릭하면 할 일

        tabAnchor.click(function(e){
            e.preventDefault();

            
            tabAnchor.removeClass('active'); //모두 active 를 빼고
            $(this).addClass('active'); //클릭한 그 요소만 active 추가
            
            let target = $(this).attr('href');
           tabPanel.hide();
           $(target).show();
        });
});
*/

/*
            $(this).addClass('active').siblings().removeClass('active');
            //그 요소에만 active를 추가하고 나머지요소에서 뺀다.
            siblings 는 쓸수없다 a태그는 지금 형제 자매가없는 상태라 못쓴다 
            */


$(function(){
      let tabAnchor = $('.tabs-nav li'),
          tabPanel = $('.tabs-panel');
            
     //링크를 클릭하면 할 일
            
    tabAnchor.click(function(e){
       e.preventDefault();

       $(this).find('a').addClass('active'); // 내가 클릭한거 안에있는 a태그만 active를 추가하고
       $(this).siblings().find('a').removeClass('active'); //내가 클릭한거 나머지들 안에있는 a태그는 뻄
                        
       tabPanel.hide();
       
       let $targetIdx = $(this).index();
       console.log($targetIdx);
       
       tabPanel.eq($targetIdx).show() //tabPanel 에 eq(상응하는)는 $targetIdx(순번)을 통해서 show 보여주겠다
    });      //eq 상응하는 동등한 이라는 뜻?
    
    // .trigger 방아쇠를 당기다 ,열자마자 강제로 실행된다
    tabAnchor.eq(0).trigger('click');  // 
    

   });

   /* 제이쿼리 ui 방법
$(function(){
    $('.work-section').tabs({
        show: {duration: 300},
        hide: {duration: 300}
      });
});
*/