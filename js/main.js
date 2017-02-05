
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
        $('.all-click').click(function () {
            $('.grid-work-items').isotope({filter: '*', layoutMode: 'fitRows'});
            $(this).addClass('filter-type-active');
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
            }
        });
        $('.standart-post-image').owlCarousel();
    });
});

