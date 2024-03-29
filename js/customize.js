// 自行加入的JS請寫在這裡
$(function() {
    $(document).on('touchend click', function(e) {
        var container = $(".font_size , .search_btnblock "); //點這些以外的區塊
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.font_size ul, .search_btnblock .search').slideUp(); //要被收起來的區塊
        }
    });
    // 字型大小
    $('.font_size ul').hide();
    $('.font_size .fontselect').click(function() {
        $('.font_size ul').slideDown();
        $('.search_btnblock .search').slideUp();
    })
    //$('.font_size .fontselect').focus(function() {
    //    $('.font_size ul').slideDown();
    //})
    //$('.font_size ul li:last-child button').focusout(function() {
    //    $('.font_size ul').slideUp();
    //})
    // Search
    $('.search_btnblock .search_btn').click(function() {
        $('.search_btnblock .search').slideDown().addClass('addflex');
        $('.font_size ul').slideUp();
    })
    $('.search_btnblock .search_btn').focus(function() {
        $('.search_btnblock .search').slideDown();
    })
    $('.search_btnblock .search .keywordideas ul li:last-child>a').focusout(function() {
        $('.search_btnblock .search').slideUp();
    })

    

    //sticky sidebar
    if ($('.stickySidebar').length > 0) {
        var stickySidebar = new StickySidebar('.stickySidebar', {
            containerSelector: '.main',
            topSpacing: 93,
            bottomSpacing: 0,
            minWidth: 768,
            resizeSensor: true,
        });
    }
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        pauseOnHover: false,
        pauseOnFocus: false,
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
    // 首頁輪播
    $('.bigpicture_Slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        fade: true,
        // ease: 'ease',
        pauseOnHover: true,
        pauseOnFocus: true,
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
    // 資訊圖像化
    $('.infographics_Slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        fade: true,
        // ease: 'ease',
        pauseOnHover: true,
        pauseOnFocus: true,
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
    // 廣告輪播
    $('.adSlider').slick({
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 首頁分享
    $('.fixed_share_group_right .share_btn a').click(function() {
        $('.fixed_share_group_right .sidebar_group').slideToggle();
    })
    // lp條件查詢
    $('.conditional_query_block .query_btn').click(function() {
        $('.conditional_query_block .flex-form').slideToggle();
    })
    // cppic_slider
    $('.cppic_slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        }, {
            breakpoint: 545,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });
    // password_toggle
    var passShow = false;
    $('.password_toggle').each(function(index, el) {
        $(this).find('.btn-icon').off().click(function(e) {
            if (!passShow) {
                $(this).children('i').removeClass().addClass('i_show');
                $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
                passShow = true;
                // console.log(passShow);
            } else {
                $(this).children('i').removeClass().addClass('i_hide');
                $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
                passShow = false;
                // console.log(passShow);
            }
            e.preventDefault();
        });
    });
});
// 快捷列
$(function() {
    // 了解出國資訊
    $('.abroad').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.travel_block').offset().top - 60 }, 0, 'easeOutExpo');
        $('.travel_block').find('a:first').focus();
    });
    // 申辦護照
    $('.passport').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.apply_passport_block').offset().top - 60 }, 0, 'easeOutExpo');
        $('.apply_passport_block').find('button:first').focus();
    });
    // 國人旅外及外籍人士來臺資訊
    $('.contact').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.people_exchanges_block').offset().top - 60 }, 0, 'easeOutExpo');
        $('.people_exchanges_block').find('a:first').focus();
    });
    // 辦理文件證明
    $('.document').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.documentary_proof_block').offset().top - 60 }, 0, 'easeOutExpo');
        $('.documentary_proof_block').find('a:first').focus();
    });
    // 最新消息
    $('.news').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.news_block').offset().top - 60 }, 0, 'easeOutExpo');
        $('.news_block').find('button:first').focus();
    });
    // 影音專區
    $('.video').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.public_use_block').offset().top - 60 }, 0, 'easeOutExpo');
        $('.public_use_block').find('button:first').focus();
    });
    // 資訊圖像化 
    $('.picture').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.public_use_group2').offset().top - 140 }, 0, 'easeOutExpo');
        $('.public_use_group2').find('button:first').focus(); //可以這樣加
    });
})

// 示警地區
$(function(){
    $('.area01_btn').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $(' #area01').offset().top - 100}, 0, 'easeOutExpo');
        
    });
    $('.area02_btn').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#area02').offset().top - 100 }, 0, 'easeOutExpo');
        
    });
    $('.area03_btn').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#area03').offset().top - 100 }, 0, 'easeOutExpo');
        
    });
    $('.area04_btn').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#area04').offset().top - 100 }, 0, 'easeOutExpo');
        
    });
    $('.area05_btn').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#area05').offset().top - 100 }, 0, 'easeOutExpo');
        
    });
    $('.area06_btn').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('#area06').offset().top - 100 }, 0, 'easeOutExpo');
        
    });
})

// keywordideas 錨點

function keywordideasClick(id) { if ($("#" + id).length > 0) { $("html, body").animate({ scrollTop: $("#" + id).offset().top - 140 }, 600); } }