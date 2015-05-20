(function($){
  jQuery(document).ready(function(){
    
    // Match Height
    $('.l-header .l-region').matchHeight();
    $('.l-footer .l-region').matchHeight();
    
    // Featured content tweaks
    $('.view-featured-content .views-row').each(function() {
      var title = $(this).find('h2');
      var titleNew = title.html().replace(' ', '<br />');
      title.html(titleNew);
    });
    
  });
})(jQuery);