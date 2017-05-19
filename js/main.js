jQuery(function ($) {
    $(document).ready(function () {
        $('.profile-click').click(function () {
           $(this).addClass('tab-active');
           if ( $(this).hasClass('tab-active') ) {
               $('.work-click').removeClass('tab-active');
               $('.resume-click').removeClass('tab-active');
               $('.blog-click').removeClass('tab-active');
               $('.contact-click').removeClass('tab-active');
           }
        });
        $('.work-click').click(function () {
            $(this).addClass('tab-active');
            if ( $(this).hasClass('tab-active') ) {
                $('.profile-click').removeClass('tab-active');
                $('.resume-click').removeClass('tab-active');
                $('.blog-click').removeClass('tab-active');
                $('.contact-click').removeClass('tab-active');
            }
        });
        $('.resume-click').click(function () {
            $(this).addClass('tab-active');
            if ( $(this).hasClass('tab-active') ) {
                $('.work-click').removeClass('tab-active');
                $('.profile-click').removeClass('tab-active');
                $('.blog-click').removeClass('tab-active');
                $('.contact-click').removeClass('tab-active');
            }
        });
        $('.blog-click').click(function () {
            $(this).addClass('tab-active');
            if ( $(this).hasClass('tab-active') ) {
                $('.work-click').removeClass('tab-active');
                $('.profile-click').removeClass('tab-active');
                $('.resume-click').removeClass('tab-active');
                $('.contact-click').removeClass('tab-active');
            }
        });
        $('.contact-click').click(function () {
            $(this).addClass('tab-active');
            if ( $(this).hasClass('tab-active') ) {
                $('.work-click').removeClass('tab-active');
                $('.profile-click').removeClass('tab-active');
                $('.resume-click').removeClass('tab-active');
                $('.blog-click').removeClass('tab-active');
            }
        });
        if(window.location.pathname == "/work.php") {
            $('.grid-work-items').isotope({filter: '*', layoutMode: 'fitRows'});
            $('.all-click').addClass('filter-type-active');
            $('.fa.fa-th').addClass('active');
            $('.all-click').click(function () {
                $('.grid-work-items').isotope({filter: '*', layoutMode: 'fitRows'});
                $(this).addClass('filter-type-active');
                $('.fa.fa-th').addClass('active');
                if ( $(this).hasClass('filter-type-active') ) {
                    $('.branding-click').removeClass('filter-type-active');
                    $('.wallpapers-click').removeClass('filter-type-active');
                    $('.photography-click').removeClass('filter-type-active');
                    $('.illustrations-click').removeClass('filter-type-active');
                    $('.logos-click').removeClass('filter-type-active');
                }
            });
            $('.branding-click').click(function () {
                $('.grid-work-items').isotope({ filter: '.branding', layoutMode: 'fitRows'});
                $('.grid-work-items').removeClass('last');
                $(this).addClass('filter-type-active');
                if ( $(this).hasClass('filter-type-active') ) {
                    $('.all-click').removeClass('filter-type-active');
                    $('.wallpapers-click').removeClass('filter-type-active');
                    $('.photography-click').removeClass('filter-type-active');
                    $('.illustrations-click').removeClass('filter-type-active');
                    $('.logos-click').removeClass('filter-type-active');
                    $('.fa.fa-th').removeClass('active');
                }
            });
            $('.wallpapers-click').click(function () {
                $('.grid-work-items').isotope({ filter: '.wallpapers', layoutMode: 'fitRows'});
                $('.grid-work-items').removeClass('last');
                $(this).addClass('filter-type-active');
                if ( $(this).hasClass('filter-type-active') ) {
                    $('.branding-click').removeClass('filter-type-active');
                    $('.all-click').removeClass('filter-type-active');
                    $('.photography-click').removeClass('filter-type-active');
                    $('.illustrations-click').removeClass('filter-type-active');
                    $('.logos-click').removeClass('filter-type-active');
                    $('.fa.fa-th').removeClass('active');
                }
            });
            $('.photography-click').click(function () {
                $('.grid-work-items').isotope({ filter: '.photography', layoutMode: 'fitRows'});
                $('.grid-work-items').removeClass('last');
                $(this).addClass('filter-type-active');
                if ( $(this).hasClass('filter-type-active') ) {
                    $('.branding-click').removeClass('filter-type-active');
                    $('.wallpapers-click').removeClass('filter-type-active');
                    $('.all-click').removeClass('filter-type-active');
                    $('.illustrations-click').removeClass('filter-type-active');
                    $('.logos-click').removeClass('filter-type-active');
                    $('.fa.fa-th').removeClass('active');
                }
            });
            $('.illustrations-click').click(function () {
                $('.grid-work-items').isotope({ filter: '.illustrations', layoutMode: 'fitRows'});
                $('.grid-work-items').removeClass('last');
                $(this).addClass('filter-type-active');
                if ( $(this).hasClass('filter-type-active') ) {
                    $('.branding-click').removeClass('filter-type-active');
                    $('.wallpapers-click').removeClass('filter-type-active');
                    $('.all-click').removeClass('filter-type-active');
                    $('.photography-click').removeClass('filter-type-active');
                    $('.logos-click').removeClass('filter-type-active');
                    $('.fa.fa-th').removeClass('active');
                }
            });
            $('.logos-click').click(function () {
                $('.grid-work-items').isotope({ filter: '.logos', layoutMode: 'fitRows'});
                $('.grid-work-items').removeClass('last');
                $(this).addClass('filter-type-active');
                if ( $(this).hasClass('filter-type-active') ) {
                    $('.branding-click').removeClass('filter-type-active');
                    $('.wallpapers-click').removeClass('filter-type-active');
                    $('.all-click').removeClass('filter-type-active');
                    $('.photography-click').removeClass('filter-type-active');
                    $('.illustrations-click').removeClass('filter-type-active');
                    $('.fa.fa-th').removeClass('active');
                }
            });
        }
        // $('i.fa.fa-picture-o').hover(function() {
        //         $('i.fa.fa-picture-o').addClass('active');
        //     });
        if(window.location.pathname == "/blog.php"){
            $('.standart-post-image.gallery').owlCarousel({
                        loop:true,
                        nav:true,
                        dots:true,
                        items:1
                    });
        }
            

        
    });
});


if(window.location.pathname == "/contact.php"){
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(-37.818460, 144.965180)
        };
        var mapElement = document.getElementById('google-map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-37.818460, 144.965180),
            map: map,
            icon: {
                url: "../img/marker.png",
                scaledSize: new google.maps.Size(100, 100)
            }
        });
    }
}

