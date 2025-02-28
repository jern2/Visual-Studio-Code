//js > scroll.js
// 1.<div id="bar"></div> //동적 추가
// 2.css적용
// 3.이벤트 적용

$('<div class="scroll-bar-indicator"></div>')
    .css({
        width:0,
        height:'7px',
        backgroundColor: 'tomato',
        position: 'fixed',
            top: 0,
            left: 0,
            border:0

    })
    .prependTo('body')

    $(document).scroll(function(){
        
        let x = $(document).scrollTop() *100 / ($(document).outerHeight()-$(window).outerHeight());

        $('.scroll-bar-indicator').css('width',x +'%');


    });