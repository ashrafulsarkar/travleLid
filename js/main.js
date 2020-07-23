(function ($) {
    "use strict";
    
        //    magnificPopup
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });

        // datepicker
        $( "#datepicker" ).datepicker();

        // datepicker toogle class
        $("input").focus(function(){
            $(".dateSelect").addClass("open");
          });
        $("input").focusout(function(){
            $(".dateSelect").removeClass("open");
          });
        
        //nice select
        $('select').niceSelect();

            // isotope masonary
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-item'
      }
  });
      // project menu active
      $('.destination-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.destination-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
        
    
    
    
    
    
    
    
})(jQuery);