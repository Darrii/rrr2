var sideNav = $('.sidenav');
M.Sidenav.init(sideNav, {});

var slider = $('.slider');
M.Slider.init(slider, {
   indicators: false,
   height: 500,
   transition: 500,
   interval: 6000
 });

 var ss = $('.scrollspy');
 M.ScrollSpy.init(ss, {});

 var a = $('.autocomplete');
 M.Autocomplete.init(a, {
     data: {
       "Hilton": null,
       "Rixos": null,
       "Ritz-Carlton": null,
       "Whyndham Garden": null,
       "Sheraton": null,
       "Burj Al Arab": null,
     }
   });
