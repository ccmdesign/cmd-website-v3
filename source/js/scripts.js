$(document).ready(function () {
    // Smooth Scrolling Function
    $('a[href*=#]:not([href=#])').click(function () {
        var $targ = $(this.hash),
            host1 = this.hostname,
            host2 = location.hostname,
            path1 = this.pathname.replace(/^\//, ''),
            path2 = location.pathname.replace(/^\//, '');

        if (!$targ.length) {
            $targ = $('[name=' + this.hash.slice(1) + ']');
        }

        if ($targ.length && (host1 === host2 || path1 === path2)) {
            $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);

            return false;
        }

        return true;
    });

    $( window ).scroll(function() {
      console.log($('.main-logo').offset);
    });

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      // console.log(y);

      if (y > 190) {
        $('.js-master-header--homepage').addClass('js-scrolled');
      } else {
        $('.js-master-header--homepage').removeClass('js-scrolled');
      }
    });

    $('.js-open-modal').click(function () {
      if ($('.js-target-modal').hasClass('js-active')) {
        $('.js-target-modal').removeClass('js-active');
        $('#overlay').removeClass('js-active');
        $('body').removeClass('js-body-modal-active');
      } else {
        $('.js-target-modal').addClass('js-active');
        $('#overlay').addClass('js-active');
        $('body').addClass('js-body-modal-active');
      }
    });

    // Slider
    // $('.slider').slick({
    //     arrows: true,
    //     draggable: false,
    //     autoplay: true,
    //     autoplaySpeed: 3000
    // });

    var $grid = $('.filterable-grid');
    $grid.isotope({
      // options
      itemSelector: '.filterable-grid-item'
    });



    $(".filter").click(function() {
      var $this = $(this);
      var filter_type = $this.attr('data-filter');
      $grid.isotope({ filter: filter_type });
      $('.filter').removeClass('filter--active');
      $this.addClass('filter--active');
    });
    
    
    var hero_n = Math.floor(Math.random() * 10);

    $('.js-hero-bg').addClass('js-hero-' + hero_n);

    

    
    


    // Modal Click Behavior
    // $('.js-open-modal').click(function () {
    //     $('.js-target-modal').addClass('js-active');
    //     $('#overlay').addClass('js-active');
    //     $('body').addClass('js-body-modal-active');
    // });

    // $('.js-close-modal').click(function () {
    //     $('.js-target-modal').removeClass('js-active');
    //     $('#overlay').removeClass('js-active');
    //     $('body').removeClass('js-body-modal-active');
    // });

    // // Sticky Click Behavior
    // $('.js-close-sticky').click(function () {
    //     $('.js-target-sticky').removeClass('js-active');
    // });

    // // Search Click Behavior
    // $('.js-trigger-search').click(function (e) {
    //     e.preventDefault();
    //     $(this).parent().addClass('js-active');
    //     $('#overlay').addClass('js-active');
    // });

    // // Main Menu Click Behavior
    // $('.js-trigger-menu').click(function (e) {
    //     $(this).next().addClass('js-active-menu');
    //     $('#overlay').addClass('js-active');
    // });

    // // General Click Behavior for Overlay
    // $('#overlay').click(function () {
    //     $('.js-active').removeClass('js-active');
    //     $('.js-active-menu').removeClass('js-active-menu');
    // });

    
}); // doc.ready
