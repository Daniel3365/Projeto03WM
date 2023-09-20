$(function(){

    var delay = 3000;
    var curIndex = 0;
    var amt;

    autoPlay();
    initSlider();

    $('.mobile-menu').click(function(){
        $('.mobile-menu').find('ul').slideToggle();
    }); 

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offsetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offsetTop});

        return false;
    });


    function initSlider(){
        amt = $('.sobre-autor').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.sobre-autor').css('width',sizeBoxSingle+'%')
        $('.scrollWraper').css('width',sizeContainer+'%')

        for(var i = 0; i < amt; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style="background-color: rgb(170, 170, 170);"></span>')
            else
                $('.slider-bullets').append('<span></span>');
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt)
                curIndex = 0;
            goToSlider(curIndex);
        },delay);
    }

    function goToSlider(curIndex){
        var offsetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scrollWraper').offset().left;
        $('.slider-bullets span').css('background-color','rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
        $('.scrollEquipe').stop().animate({'scrollLeft':offsetX});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0});
    })

});
