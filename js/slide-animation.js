

//SLIDES ANIMATIONS
/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function() {

    //window and animation items
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);
  
    //check to see if any animation containers are currently in view
    function check_if_in_view() {
      //get current window information
      var window_height = web_window.height();
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
  
      //iterate through elements to see if its in view
      $.each(animation_elements, function() {
  
        //get the element sinformation
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = (element_top_position + element_height);
  
        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          element.addClass('in-view');
        } else {
          element.removeClass('in-view');
        }
      });
  
    }
  
    //on or scroll, detect elements in view
    $(window).on('scroll resize', function() {
        check_if_in_view()
      })
      //trigger our scroll event on initial load
    $(window).trigger('scroll');
  
  });


//HORIZONTAL SCROLL

  $( window ).on('scroll', function(){

    var scrollTop = $(this).scrollTop();
    $( '.hscroll' ).css({
      transform: 'translateX('+  ( 500 - scrollTop) +'px)',
    });

  });


// VERTICAL SCROLL TESTING
//   $(document).ready(function () {

//        //run on scroll
//        $(window).scroll(function () {
//                 var element = $('#object'),
//                 originalY = element.offset().top;

//                 var container = $('#object-container');
//                 var containerTop = container.offset().top;

//             // Space between element and top of screen (when scrolling)
//             var topMargin = 300;

//             // Should probably be set in CSS; but here just for emphasis
//             element.css('position', 'relative');

//             $(window).on('scroll', function(event) {
//                 var scrollTop = $(window).scrollTop();

//                 element.stop(false, false).animate({
//                     top: scrollTop < originalY
//                             ? 0
//                             : scrollTop - originalY + topMargin
//                 }, 500);
//             });
//        });
//    });
   