// 헤더 스크롤 
$(function(){
    let $header = $('header');
    let $container1 = $('.container1');

    $(window).scroll(function(){
        if($(this).scrollTop() >0){
            $header.addClass('sticky');
        }else{
            $header.removeClass('sticky');
        }
    });
});

// // 햄버거 버튼
// $(function(){
//     $('.ham_button').on('click', function(event){
//         event.preventDefault();

//         $(this).toggleClass('active');
//         $('.ham_menu').toggleClass('visible');
//     });
// });


//컨테이너1 슬라이드

$(function(){
    let slideWrapper = $('.container1 .slide_wrapper'),
        slides = slideWrapper.find('.slides'),
        slide = slides.find('li'),
        currentIdx = 0,
        slideCount = slide.length,
        slideWidth = 1900,
        slideMargin = 0,
        moveAmt,
        maxslides = 1,
        responsiveMargin = 0,
        newSlides,
        newSlideWidth,
        prevBtn = slideWrapper.find('.prev'),
        nextBtn = slideWrapper.find('.next');
    
    newslideWidth =slideWidth;
    
    // let clonedSlides = slide.clone().addClass('clone');


    //복사본 생성하기 뒤에 5개추가
slides.append(slide.clone().addClass('clone'));
    //복사본 생성하기 앞에 5개추가
slides.prepend(slide.clone().addClass('clone'));

    //가로배열하기
    function slideLayout(sw,sm){
        newSlides = $('.slide_wrapper li');
        moveAmt = sw + sm;
        newSlides.each(function(idx){
            $(this).css({left:moveAmt*idx +'px', width:sw +'px'});
        });
    }
    slideLayout(slideWidth, slideMargin);

    //중앙배치
    function setSlidePos(){
        let ulMoveAmt = -moveAmt * slideCount + 'px'
        slides.css({transform:'translateX('+ulMoveAmt+')'});
    }
    setSlidePos();

    //좌우 버튼 슬라이드 작동하기
    nextBtn.click(function(){
        moveSlide(currentIdx + 1);
    });
    prevBtn.click(function(){
        moveSlide(currentIdx - 1);
    });
    
    //슬라이드 이동 함수
    function moveSlide(num){
        
        slides.stop().animate({left:moveAmt * -num + 'px'},500,function(){
            if(currentIdx == slideCount || currentIdx == -slideCount){
                slides.css({left:'0'});
                currentIdx = 0;
            }
        });
        currentIdx = num;
        // console.log(currentIdx, slideCount)    
    }

    

    //자동슬라이드
    let timer = undefined;
        slideOnoff = $('.slide_stop')
    function autoSlide(){
        if(timer == undefined){
            timer = setInterval(function(){
                moveSlide(currentIdx + 1);
            }, 3000);
        }
    }
    autoSlide();

    function stopSlide(){
        clearInterval(timer);
        timer = undefined;
    }
    
    
    slideWrapper.mouseenter(function(){
       stopSlide(); 
    });
    slideWrapper.mouseleave(function(){
        autoSlide();
    });

    //반응형 슬라이드
    /*
    $(window).resize(function(){
        responsiveMargin = 0;
        if($(this).width() < 1024){
            newSlideWidth = (slides.width() - responsiveMargin*(maxslides-1))/maxslides;
        }else{
            newSlideWidth = slideWidth;
            responsiveMargin = slideMargin;
        }
        if($(this).width() <= 768){
            newSlideWidth =slides.width();
            responsiveMargin = 0;
        }
        slideLayout(newSlideWidth,responsiveMargin);
        setSlidePos()
    });
    */
});
/* 컨테이너 3 */
$(function(){
    let tabCate = $('.container3 .cate_list_wrap ul li a'),
        tabList = $('.container3 .product_list');

        //링크를 클릭하면 할 일
        
        tabCate.click(function(e){
            e.preventDefault();

            tabCate.removeClass('active');  //클래스 active를 모두 빼고
            $(this).addClass('active');  // 클릭한 거만 active 추가
            
            // $(this).addClass('active').siblings().removeClass('active');
            tabList.hide();
            let target = $(this).attr('href')
            
           // console.log(target);
           $(target).show();
        });
        tabCate.eq(0).trigger('click');
});


/* 컨테이너 4 */ 

$(function(){
    let slideWrapper = $('.container4 .slide4_wrap'),
        slides = slideWrapper.find('ul'),
        slide = slides.find('li'),
        currentIdx = 0,
        slideCount = slide.length,
        slideWidth = 1200,
        slideMargin = 0,
        moveAmt,
        maxslides = 1,
        responsiveMargin = 0,
        newSlides,
        newSlideWidth,
        prevBtn = slideWrapper.find('.prev_4'),
        nextBtn = slideWrapper.find('.next_4');
    
    newslideWidth = slideWidth;
 
 
 
//복사 생성하기 뒤에 5개추가
 slides.append(slide.clone().addClass('clone'));
 
 //복사 생성하기 앞에 5개추가
 slides.prepend(slide.clone().addClass('clone'));

//가로배열
function slideLayout(sw,sm){
    newSlides = $('.slide4_wrap li');
    moveAmt = sw + sm;

    newSlides.each(function(idx){
        $(this).css({left:moveAmt*idx +'px', width:sw +'px'});
    });
}
    slideLayout(slideWidth, slideMargin);

//중앙배치
function setSlidePos(){
    let ulMoveAmt = -moveAmt * slideCount + 'px';
    slides.css({transform:'translateX('+ulMoveAmt+')'});
}
    setSlidePos();

// 좌우 버튼
nextBtn.click(function(){
    showNextSlide(currentIdx + 1);
});
prevBtn.click(function(){
    showNextSlide(currentIdx - 1);
});

// 슬라이드 이동 함수
// function moveSlide(num){
//     slides.stop().animate({left:moveAmt * -num +'px'},500,function(){
//         if(currentIdx == slideCount || currentIdx == -slideCount){
//             slide.css({left:'0px'});
//             currentIdx = 0;
//         }
//     });
//     currentIdx = num;
//     console.log(currentIdx, slideCount);
// }

// slide.eq(currentIdx).fadeIn();
//     setInterval(showNextSlide, 5500);

//     function showNextSlide(){

//         let nextIndex = (currentIdx + 1) % slideCount;

//         slide.eq(currentIdx).fadeOut();
//         slide.eq(nextIndex).fadeIn();
//         currentIdx = nextIndex;
//         console.log(currentIdx);
//     }


//자동슬라이드
// let timer = undefined;

// function autoSlide(){
//     if(timer == undefined){
//         timer = setInterval(function(){
//             moveSlide(currentIdx + 1);
//         }, 3000);
//     }
// }
// autoSlide();

// function stopSlide(){
//     clearInterval(timer);
//     timer = undefined;
// }
// slideWrapper.mouseenter(function(){
//     stopSlide();
// });
// slideWrapper.mouseleave(function(){
//     showNextSlide();
// });

// 반응형 슬라이드
// $(window).resize(function(){
//     responsiveMargin = 0;
//     if($(this).width() < 1024){
//         newSlideWidth = (slides.width() - responsiveMargin*(maxslides-1))/maxslides;
//     }else{
//         newSlideWidth = slideWidth;
//         responsiveMargin = slideMargin;
//     }
//     if($(this).width() <= 768){
//         newSlideWidth =slides.width();
//         responsiveMargin = 0;
//     }
//     slideLayout(newSlideWidth,responsiveMargin);
//     setSlidePos();
// });
});
