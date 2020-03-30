$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

// Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

})

//Navbar easy collapse

function OnwindowClick(elem , action){
    $(document).on('click',function(e){
        if (!$(elem).is(e.target) // if target is not in container
            && $(elem).has(e.target).length === 0) //
        {
            action();
        }
    });
}
OnwindowClick('#navbar-collapse-first , #navbar-collapse-second', function(){
   $('.navbar-collapse-first, .navbar-collapse-second').collapse('hide');
});
