<h1>Milwaukie Dentistry Demo Site</h1>

<p>I am building this demo site from scratch (no CMS) and currently the homepage is complete. Check out the <a href="">demo</a>. This is a mobile-first, responsive site built using CSS grids. While viewed on small screens ()</p>

<p>It was a struggle for to find a way for the mobile navigation to scroll while also sticking to the top. At first it seemed like I could only have one or the other. The problem was if the navigation stuck to the top and you expanded the nav, when you scrolled it only scrolled the body and the navigation would only come into view when the scrollbar went far enough down the page. This was obviously a bad UX practice and would leave the user confused and flustered about the shotty navigation. It seemed to take forever to find a solution, as I tried several different methods, and finally I figured out how to make it work with a method I had tried before but it failed to work because setting the height of the sub-nav container would not work because of the Slick Slider, and 100vh had to be used instead. An easy enough fix, but not one that was apparent and seems to be specific to using Slick Slider.</p>
