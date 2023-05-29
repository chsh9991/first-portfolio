$(function(){
    let container = $('.work-section'),
        navItems = $('.tabs-nav li'),
        highLight = $('.tabs-highlight');
/*
        container.tabs({
            show: { duration: 120 },
            hide: { duration: 120 },
            create: moveHighLight,  //열자마자 현재의 활성화된 탭에서 할 일
            activate: moveHighLight, //클릭해서 새로운 탭이 활성화 되면 할 일
          });
        function moveHighLight(event, ui){
            let newNavItem = ui.newTab || ui.tab;  //열자마자 활성화된 탭 ui.tab , 클릭활성화 ui.neWtab
            let newLeftValue = newNavItem.position().left;
            highLight.animate({left:newLeftValue},300);
        }
});
*/
container.tabs({
    show: { duration: 120 },
    hide: { duration: 120 }
});
    navItems.click(function(){
        let newLeftValue = $(this).position().left
        highLight.animate({left:newLeftValue},300);
    });
    navItems.eq(0).trigger('click');
});









 // 논리연산자
// a && b  : a 라는값 b 라는값이있는데 둘다 true 일때 저장

// a || b  : a 또는 b  둘중하나에 값이 있으면 저장

// !       : 조건 반대