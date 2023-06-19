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
        // prevBtn = slideWrapper.find(''),
        // nextBtn = slideWrapper.find('');
    
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

// 중앙배치
function setSlidePos(){
    let ulMoveAmt = -moveAmt * slideCount + 'px';
    slides.css({transform:'translateX('+ulMoveAmt+')'});
}
    setSlidePos();
});