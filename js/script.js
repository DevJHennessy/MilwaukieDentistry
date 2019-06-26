let today = new Date();
let currentYear = today.getFullYear();
let footerText = document.getElementById('footerText');

footerText.innerText = 'Made with love by John Hennessy | \u00A9 ' + currentYear;




// Functionality for Navigation
$(document).ready(function() {

/* the Responsive menu script */
 	$('body').addClass('js');
		  var $menu = $('#menu'),
		  	  $menulink = $('.menu-link'),
		  	  $menuTrigger = $('.has-subnav > a');

	$menulink.click(function(e) {
			e.preventDefault();
			$menulink.toggleClass('active');
			$menu.toggleClass('active');

	});

	var add_toggle_links = function() {
	 	if ($('.menu-link').is(":visible")){
	 		if ($(".toggle-link").length > 0){
	 		}
	 		else{
	 			$('.has-subnav > a').before('<span class="toggle-link fas"></span>');
	 			$('.toggle-link').click(function(e) {
					var $this = $(this);
					$this.toggleClass('active').siblings('ul').toggleClass('active');
          $this.toggleClass('.menuStructureOne');
          $this.toggleClass('.menuStructureTwo');
				});
	 		}
	 	}
		else{
			// $('.toggle-link').empty();
		}
	 }
	add_toggle_links();
	$(window).bind("resize", add_toggle_links);

		});


  // Team Section Slider - Homepage
  $(document).ready(function() {
    $('.myslider').slick({
      autoplay: false,
      dots: false,
      cssEase: 'ease-out',
      speed: 4000,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      pauseOnFocus: false,
      arrows: true,
    });
  });

// Review Section Slider - Homepage
  $(document).ready(function() {
    $('.reviewSlider').slick({
      autoplay: true,
      dots: false,
      fade: true,
      cssEase: 'ease-in',
      // cssEase: 'cubic-bezier(.75,.25,.5,.5)',
      speed: 6000,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      arrows: false,
    });
  });

// Awards Section Slider - Homepage
  $(document).ready(function() {
    $('.awardsSlider').slick({
      autoplay: true,
      dots: false,
      slidesToShow: 2,
      cssEase: 'ease-out',
      speed: 4000,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      pauseOnFocus: false,
      arrows: false,
    });
  });

  // Navbar stick function
window.onscroll = function() {myFunction();};

var navbar = document.getElementById("topNav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
