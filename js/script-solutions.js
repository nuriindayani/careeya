// $('.post-wrapper').slick({
//     // infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     infinite: true,
//     autoplaySpeed: 2000,
//     // nextArrow: $('.next'),
//     // prevArrow: $('.prev')

// });
$(document).ready(function () {

    $('.post-item-slide-solutions').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [

            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },


        ]
    });



    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents: function () {
            var obj = this;

            obj.dd.on('click', function (event) {
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click', function () {
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue: function () {
            return this.val;
        },
        getIndex: function () {
            return this.index;
        }
    }

    $(function () {

        var dd = new DropDown($('#dd'));

        $(document).click(function () {
            // all dropdowns
            $('.wrapper-dropdown-insight').removeClass('active');
        });
    });



    function DropDown(ela) {
        this.ff = ela;
        this.placeholder = this.ff.children('span');
        this.opts = this.ff.find('ul.dropdown > li');
        this.val = '';
        this.index = 5;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents: function () {
            var obj = this;

            obj.ff.on('click', function (event) {
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click', function () {
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue: function () {
            return this.val;
        },
        getIndex: function () {
            return this.index;
        }
    }

    $(function () {

        var ff = new DropDown($('#ff'));

        $(document).click(function () {
            // all dropdowns
            $('.wrapper-dropdown-insight').removeClass('active');
        });


    });



    // var DropDown = new DropDown(document.querySelector('[.wrapper-dropdown-insight]'), {
    //     onOpen: function () { },
    //     onClose: function () { },
    //     beforeOpen: function () { },
    //     beforeClose: function () { },
    // });





});



// function myFunction() {
//     document.getElementById("dd").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('#wrapper-dropdown-3')) {

//         var dropdowns = document.getElementsByClassName("dropdown");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
