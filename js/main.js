//첫 방문 시 보임
$('#about').css({
    'opacity': '1', 'transition-delay': '1.5s',
    "transform": "translateX(0px)"
});
$('#imgbox').css({
    'opacity': '1', 'transition-delay': '2s',
    "transform": "translateX(0px)"
});


$(function(){
    //글씨 올라옴
    var text = $('#full p')
    for (var i in text) {
        let delay = i * 0.2;
        text.eq(i).css({ "transform": "translateY(0px)", "opacity": "1", 'transition-delay': delay + 's' });
    };
});




//menu hover 하면 slide
$('#menu > ul > li').eq(2).hover(function(){
    $(this).children('.fil').stop().slideDown();
},function(){
    $('.fil').stop().slideUp();
});



//검색창 focus,blur
$('.type').focus(function () {
    $(this).val('')
});
$('.type').blur(function () {
    $(this).val('Type something')
});




//section 찾아가기
var nav = $("#menu > ul > li");
var contents = $("#contents > div");

nav.click(function () {
    var target = $(this);
    var index = target.index();
    var section = contents.eq(index);
    var offset = section.offset().top;

    $("html, body").animate({ scrollTop: offset }, 400);
});



//hover 하면 메뉴 원 보임
$('#menu li a').hover(function () {
    $(this).prev().css('opacity', '1')
}, function () {
    $(this).prev().css('opacity', '0')
});