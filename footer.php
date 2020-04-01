<footer class="footer">
        
                <div class="footer-container">
                    <div class="copyright">
                    Copyright © 2020 Company Name
                    </div>
                </div>
        
</footer>


<script src="/pb2a/assets/js/jquery-3.3.1.min.js"></script>
<!-- <script src="assets/js/jquery-migrate-3.0.0.min.js"></script> -->

<!-- <script src="js/jquery-3.4.1.min.js"></script> -->
<script src="/pb2a/js/popper.min.js"></script>
<script src="/pb2a/assets/js/jquery.backstretch.min.js"></script>
<script src="/pb2a/assets/js/wow.min.js"></script>
<script src="/pb2a/assets/js/scripts.js"></script>

<script type="text/javascript">
    jQuery(document).ready(function($) {
        $("#global-tab").tabs();

        $("#sidr ul").append('<li><a href="#" title="">Premier Banking</a></li>');
        $("#sidr ul").append('<li><a href="#" title="">Private Banking</a></li>');
        $("#sidr ul").append('<li><a href="#">Nyala Bisnis</a></li>');

    });
</script>
<!-- end right menu -->


<script src="/pb2a/js/app.min.js"></script>

<script src="/pb2a/plugin/slick/slick.js"></script>
<script src="/pb2a/plugin/slick/slick.min.js"></script>
<script src="/pb2a/js/jquery.matchHeight-min.js"></script>
<script src="/pb2a/js/bootstrap.min.js"></script>
<script src="/pb2a/js/bootstrap.bundle.js "></script>
<script>
    $('.single-item').slick({
        // autoplay: true,
        // speed: 1500,
        // autoplaySpeed: 1000,

    });


    $('.premier-slide').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    //Insight
    $('.insight-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },


        ]
    });
</script>
<script>
    $('.solution-simpanan').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: false,
        arrows: true,
        responsive: [

            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
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
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },


        ]
    });

    $('#solution-proteksi').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: false,
        responsive: [

            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
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
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },


        ]
    });
</script>