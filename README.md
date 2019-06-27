<h1>Milwaukie Dentistry Demo Site</h1>

<p>I am building this demo site from scratch (no CMS) and currently the homepage is complete. Check out the <a href="http://milwaukiedentistry.x10host.com/">demo</a>, which I have uploaded to a free web server instead of using the spotty GitHub previewer. This is a mobile-first, responsive site built using CSS grids. When viewed on small screens (<35em or 768px if viewed at 16px), the grid is set up with only one fraction, with every section taking up 100% of the width. When viewed on medium screens and larger (>=768px), the grid changes to have two fractions. The welcome and team sections are then displayed side by side, each taking up one fraction, of 50% of the page. The deals section switches from a layered vertical image to a horizontal side-by-side image. The reviews section changes to display side-by-side as well. The images in the services section change from being one image one a line to two. And finally, the office info and map are also changed so that they are display side-by-side. At screen sizes larger than 1023px, the mobile nav disappears in favor of an inline nav with standard drop-down menues.</p>

<p>It was a struggle for to find a way for the mobile navigation to scroll while also sticking to the top. At first it seemed like I could only have one or the other. The problem was if the navigation stuck to the top and you expanded the nav, when you scrolled it only scrolled the body and the navigation would only come into view when the scrollbar went far enough down the page. This was obviously a bad UX practice and would leave the user confused and flustered about the shotty navigation. It seemed to take forever to find a solution, as I tried several different methods, and finally I figured out how to make it work with a method I had tried before but it failed to work because setting the height of the sub-nav container would not work because of the Slick Slider, and 100vh had to be used instead. An easy enough fix, but not one that was apparent and seems to be specific to using Slick Slider.</p>
