
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    
    //스크롤 내리면 해당 메뉴에 원 생김
    for (i = 0; i < nav.length; i++) {
        if (wScroll >= contents.eq(i).offset().top) {
            nav.find('.circle').removeClass("active");
            nav.eq(i).find('.circle').addClass("active");
        }
    };

    


    //scroll event
    var currentScrollTop = $(this).scrollTop();
    //vincent 사라짐
    var section1 = $('#section1').offset().top;
    var section2 = $('#section2').offset().top;
   
    if(0 < currentScrollTop < section2){
        $('#vincent div:first-of-type').css("transform","translateX(-200px)").css("opacity","0");
        $('#vincent div:nth-of-type(2)').css("transform","translateY(200px)").css("opacity","0");
        $('#vincent div:nth-of-type(3)').css("transform","translateX(200px)").css("opacity","0");
    }

    //vincent 나타남
    var vincent = $('#vincent').offset().top;
    if(currentScrollTop > vincent - 700){
        $('#vincent div:first-of-type').css("transform","translateX(0px)").css("opacity","1");
        $('#vincent div:nth-of-type(2)').css("transform","translateY(0px)").css("opacity","1");
        $('#vincent div:nth-of-type(3)').css("transform","translateX(0px)").css("opacity","1");
    }console.log(vincent-700)
});