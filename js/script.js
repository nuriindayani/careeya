// membuat Event pada saat di klick

// $('.page-scroll').on('click', function() {

//     //console.log('Oke'); //untuk mengetes console

//     var Tujuan = $(this).attr('href');

//     //Tangkap element bersangkutan
//     var elementTujuan = $(Tujuan);


//     //$('body').scrollTop(elementTujuan.offset().top); //cara ini bisa langsung

//     $('body').animate({
//         scrollTop: elementTujuan.offset().top - 50
//     }, 1000, 'swing');

//     //e.preventDefault();
// });


// //Parallax II

// $(window).Scroll(function() {

//     var wScroll = $(this).scrollTop();

//     console.log(wScroll);
// });



// Scrolling Bottom

$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $(".carousel-item")
                        .eq(i)
                        .appendTo(".carousel-inner");
                } else {
                    $(".carousel-item")
                        .eq(0)
                        .appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    });
});

//Ade Test

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
    interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function() {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});