//span 누르면 텍스트 바뀜
$('#change p').click(function () {
    let idx = $(this).index();
    $(this).parent().next().children().slideUp();
    $(this).parent().next().children().eq(idx).slideDown('slow');                
    
});


//button click popup modal
$('.wednesday > h2')
.click(function(){
    $('.wednesday .hwrap').fadeIn()
});
$('.wednesday .hwrap p:last-of-type').click(function(){
    $('.wednesday .hwrap').fadeOut()
});

$('.enid > h2')
.click(function(){
    $('.enid .hwrap').fadeIn()
});
$('.enid .hwrap p:last-of-type').click(function(){
    $('.enid .hwrap').fadeOut()
});

$('.mom > h2')
.click(function(){
    $('.mom .hwrap').fadeIn()
});
$('.mom .hwrap p:last-of-type').click(function(){
    $('.mom .hwrap').fadeOut()
});

$('.thing > h2')
.click(function(){
    $('.thing .hwrap').fadeIn()
});
$('.thing .hwrap p:last-of-type').click(function(){
    $('.thing .hwrap').fadeOut()
});

$('.father > h2')
.click(function(){
    $('.father .hwrap').fadeIn()
});
$('.father .hwrap p:last-of-type').click(function(){
    $('.father .hwrap').fadeOut()
});

$('.brother h2')
.click(function(){
    $('.brother .hwrap').fadeIn()
});
$('.brother .hwrap p:last-of-type').click(function(){
    $('.brother .hwrap').fadeOut()
});

$('.xavier > h2')
.click(function(){
    $('.xavier .hwrap').fadeIn()
});
$('.xavier .hwrap p:last-of-type').click(function(){
    $('.xavier .hwrap').fadeOut()
});

$('.tyler > h2')
.click(function(){
    $('.tyler .hwrap').fadeIn()
});
$('.tyler .hwrap p:last-of-type').click(function(){
    $('.tyler .hwrap').fadeOut()
});



//footer slideup
function slide(){
    $('#footerwrap').animate({marginTop:'-365px'},7990,function(){
        $('#footerwrap > div:first-of-type').appendTo('#footerwrap');
        $('#footerwrap').css('margin-top',0)
    });
}
slide();
setInterval(slide,8000)