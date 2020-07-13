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
        
    
    
    
    
    
    
    
})(jQuery);