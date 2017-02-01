
jQuery(function ($) {
    $(document).ready(function () {
        $('#profile-click').click(function () {
           $(this).addClass('tab-active');
           if ( $(this).hasClass('tab-active') ) {
               $('#profile-tab-img img').attr('src', './img/profile.png');
               $('#work-click').removeClass('tab-active');
               $('#work-tab-img img').attr('src', './img/work_gray.png');
               $('#resume-click').removeClass('tab-active');
               $('#resume-tab-img img').attr('src', './img/resume_gray.png');
               $('#blog-click').removeClass('tab-active');
               $('#blog-tab-img img').attr('src', './img/blog_gray.png');
               $('#contact-click').removeClass('tab-active');
               $('#contact-tab-img img').attr('src', './img/contact_gray.png');
           }
           else {
               $('#profile-tab-img img').attr('src', './img/profile/profile_gray.png');
           }
        });
        $('#work-click').click(function () {
            $(this).addClass('tab-active');
            if ( $(this).hasClass('tab-active') ) {
                $('#work-tab-img img').attr('src', './img/work.png');
                $('#profile-click').removeClass('tab-active');
                $('#profile-tab-img img').attr('src', './img/profile_gray.png');
                $('#resume-click').removeClass('tab-active');
                $('#resume-tab-img img').attr('src', './img/resume_gray.png');
                $('#blog-click').removeClass('tab-active');
                $('#blog-tab-img img').attr('src', './img/blog_gray.png');
                $('#contact-click').removeClass('tab-active');
                $('#contact-tab-img img').attr('src', './img/contact_gray.png');
            }
            else {
                $('#work-tab-img img').attr('src', './img/profile/work_gray.png');
            }
        });
        $('#resume-click').click(function () {
            $(this).addClass('tab-active');
            if ( $(this).hasClass('tab-active') ) {
                $('#resume-tab-img img').attr('src', './img/resume.png');
                $('#work-click').removeClass('tab-active');
                $('#work-tab-img img').attr('src', './img/work_gray.png');
                $('#profile-click').removeClass('tab-active');
                $('#profile-tab-img img').attr('src', './img/profile_gray.png');
                $('#blog-click').removeClass('tab-active');
                $('#blog-tab-img img').attr('src', './img/blog_gray.png');
                $('#contact-click').removeClass('tab-active');
                $('#contact-tab-img img').attr('src', './img/contact_gray.png');
            }
            else {
                $('#resume-tab-img img').attr('src', './img/resume_gray.png');
            }
        });
        $('#blog-click').click(function () {
            $(this).addClass('tab-active');
            if ( $(this).hasClass('tab-active') ) {
                $('#blog-tab-img img').attr('src', './img/blog.png');
                $('#work-click').removeClass('tab-active');
                $('#work-tab-img img').attr('src', './img/work_gray.png');
                $('#profile-click').removeClass('tab-active');
                $('#profile-tab-img img').attr('src', './img/profile_gray.png');
                $('#resume-click').removeClass('tab-active');
                $('#resume-tab-img img').attr('src', './img/resume_gray.png');
                $('#contact-click').removeClass('tab-active');
                $('#contact-tab-img img').attr('src', './img/contact_gray.png');
            }
            else {
                $('#blog-tab-img img').attr('src', './img/blog_gray.png');
            }
        });
        $('#contact-click').click(function () {
            $(this).addClass('tab-active');
            if ( $(this).hasClass('tab-active') ) {
                $('#contact-tab-img img').attr('src', './img/contact.png');
                $('#work-click').removeClass('tab-active');
                $('#work-tab-img img').attr('src', './img/work_gray.png');
                $('#profile-click').removeClass('tab-active');
                $('#profile-tab-img img').attr('src', './img/profile_gray.png');
                $('#resume-click').removeClass('tab-active');
                $('#resume-tab-img img').attr('src', './img/resume_gray.png');
                $('#blog-click').removeClass('tab-active');
                $('#blog-tab-img img').attr('src', './img/blog_gray.png');
            }
            else {
                $('#contact-tab-img img').attr('src', './img/contact_gray.png');
            }
        });
        $('#all-click').click(function () {
            $('.grid-work-items').isotope({filter: '*', layoutMode: 'fitRows'});
            $(this).addClass('filter-type-active');
            if ( $(this).hasClass('filter-type-active') ) {
                $('#branding-click').removeClass('filter-type-active');
                $('#wallpapers-click').removeClass('filter-type-active');
                $('#photography-click').removeClass('filter-type-active');
                $('#illustrations-click').removeClass('filter-type-active');
                $('#logos-click').removeClass('filter-type-active');
            }
        });
        $('#branding-click').click(function () {
            $('.grid-work-items').isotope({ filter: '.branding', layoutMode: 'fitRows'});
            $(this).addClass('filter-type-active');
            if ( $(this).hasClass('filter-type-active') ) {
                $('#all-click').removeClass('filter-type-active');
                $('#wallpapers-click').removeClass('filter-type-active');
                $('#photography-click').removeClass('filter-type-active');
                $('#illustrations-click').removeClass('filter-type-active');
                $('#logos-click').removeClass('filter-type-active');
            }
        });
        $('#wallpapers-click').click(function () {
            $('.grid-work-items').isotope({ filter: '.wallpapers', layoutMode: 'fitRows'});
            $(this).addClass('filter-type-active');
            if ( $(this).hasClass('filter-type-active') ) {
                $('#branding-click').removeClass('filter-type-active');
                $('#all-click').removeClass('filter-type-active');
                $('#photography-click').removeClass('filter-type-active');
                $('#illustrations-click').removeClass('filter-type-active');
                $('#logos-click').removeClass('filter-type-active');
            }
        });
        $('#photography-click').click(function () {
            $('.grid-work-items').isotope({ filter: '.photography', layoutMode: 'fitRows'});
            $(this).addClass('filter-type-active');
            if ( $(this).hasClass('filter-type-active') ) {
                $('#branding-click').removeClass('filter-type-active');
                $('#wallpapers-click').removeClass('filter-type-active');
                $('#all-click').removeClass('filter-type-active');
                $('#illustrations-click').removeClass('filter-type-active');
                $('#logos-click').removeClass('filter-type-active');
            }
        });
        $('#illustrations-click').click(function () {
            $('.grid-work-items').isotope({ filter: '.illustrations', layoutMode: 'fitRows'});
            $(this).addClass('filter-type-active');
            if ( $(this).hasClass('filter-type-active') ) {
                $('#branding-click').removeClass('filter-type-active');
                $('#wallpapers-click').removeClass('filter-type-active');
                $('#all-click').removeClass('filter-type-active');
                $('#photography-click').removeClass('filter-type-active');
                $('#logos-click').removeClass('filter-type-active');
            }
        });
        $('#logos-click').click(function () {
            $('.grid-work-items').isotope({ filter: '.logos', layoutMode: 'fitRows'});
            $(this).addClass('filter-type-active');
            if ( $(this).hasClass('filter-type-active') ) {
                $('#branding-click').removeClass('filter-type-active');
                $('#wallpapers-click').removeClass('filter-type-active');
                $('#all-click').removeClass('filter-type-active');
                $('#photography-click').removeClass('filter-type-active');
                $('#illustrations-click').removeClass('filter-type-active');
            }
        });
    });
});

