

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").fadeOut();
    //     $("#preloder").delay(200).fadeOut("slow");

    //     /*------------------
    //         Gallery filter
    //     --------------------*/
    //     $('.featured__controls li').on('click', function () {
    //         $('.featured__controls li').removeClass('active');
    //         $(this).addClass('active');
    //     });
    //     if ($('.featured__filter').length > 0) {
    //         var containerEl = document.querySelector('.featured__filter');
    //         var mixer = mixitup(containerEl);
    //     }
    // });
    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });
    
    /*-----------------------
		Price Range Slider
	------------------------ */
    
    // var rangeSlider = $(".price-range"),
    //     minamount = $("#minamount"),
    //     maxamount = $("#maxamount"),
    //     minPrice = rangeSlider.data('min'),
    //     maxPrice = rangeSlider.data('max');
    // rangeSlider.slider({
    //     range: true,
    //     min: minPrice,
    //     max: maxPrice,
    //     values: [minPrice, maxPrice],
    //     slide: function (event, ui) {
    //         minamount.val('$' + ui.values[0]);
    //         maxamount.val('$' + ui.values[1]);
    //     }
    // });
    // minamount.val('$' + rangeSlider.slider("values", 0));
    // maxamount.val('$' + rangeSlider.slider("values", 1));

    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    // var rangeSlider = $(".price-range"),
    //     rangeInput = $("#price"),
    //     minPrice = rangeSlider.data('min'),
    //     maxPrice = rangeSlider.data('max');
    // rangeSlider.slider({
    //     min: minPrice,
    //     max: maxPrice,
    //     value: minPrice,
    //     slide: function (event, ui) {
    //         rangeInput.val('$' + ui.value);
    //         $(".ui-slider-horizontal").css("width", (ui.value / maxPrice) * 100 + "%");
    //     }
    // });
    // rangeInput.val('$' + rangeSlider.slider("value"));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    // $('.product__details__pic__slider img').on('click', function () {

    //     var imgurl = $(this).data('imgbigurl');
    //     var bigImg = $('.product__details__pic__item--large').attr('src');
    //     if (imgurl != bigImg) {
    //         $('.product__details__pic__item--large').attr({
    //             src: imgurl
    //         });
    //     }
    // });


})(jQuery);
