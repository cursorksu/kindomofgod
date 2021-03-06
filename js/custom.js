$(function () {
    $('.top-slider').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        speed: 1200,
        fade: true,
        autoplaySpeed: 3000,
        // autoplay: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipeToSlide: true,
        responsive: [
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    $('.form input[type = "submit"]').on('click', function(e){
        e.preventDefault()
        document.querySelector('.pop-up-gift').classList.add('active')
    });
    $('.license').on('click', function (e) {
        e.preventDefault()
        document.querySelector('.pop-up-license').classList.add('active')
    });
    $('.btn-close').on('click', function (e) {
        console.log( e.target.closest('.pop-up'))
        e.target.closest('.pop-up').classList.remove('active')
    });
    if($('.hs-items').length){
        $('.hs-items').slick({
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '430px',
            autoplay: true,
            autoplaySpeed: 4000,
            swipeToSlide: true,
            infinite: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 5000,
                    settings: {
                        centerPadding: '100px',
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1620,
                    settings: {
                        centerPadding: '300px'
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        centerPadding: '150px'
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        centerPadding: '80px'
                    }
                },
                {
                    breakpoint: 567,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '0'
                    }
                }
            ]
        });
    }
    $(".paralax").paroller({ factor: '0.3', type: 'foreground', direction: 'horizontal' });
    //прикрепляем клик по заголовкам acc-head
    $('#accordeon .acc-head').on('click', f_acc);

    function f_acc(){
//скрываем все кроме того, что должны открыть
        $('#accordeon .fqa_body').not($(this).next()).slideUp(500);
// открываем или скрываем блок под заголовком, по которому кликнули
        $(this).next().slideToggle(500);
    }
});
