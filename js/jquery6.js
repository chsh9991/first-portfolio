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

/*
            $(this).addClass('active').siblings().removeClass('active');
            //그 요소에만 active를 추가하고 나머지요소에서 뺀다.
            siblings 는 쓸수없다 a태그는 지금 형제 자매가없는 상태라 못쓴다 
            */