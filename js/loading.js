function slideToPage($page){
    var $wrapper = $('.address_panel');
    var width = $wrapper.outerWidth();
    var height = $wrapper.outerWidth();
    
    // Set size of all children and stop previous animations
    $wrapper.children().css({width: width, height: height}).stop();
    
    // Find the current page (positioned at 0)
    var $currentpage = $wrapper.find('.currentpage');
    if ($page.is($currentpage)){
        console.log("Stay on current page");
        return;
    }
    console.log("$currentpage.index() " + $currentpage.index());
    console.log("$page.index() " + $page.index());
    
    // Is the new page index before or after (left or right scroll)
    var slideRight = $page.index() > $currentpage.index();
    var delta = slideRight ? 1 : -1;
    
    // Position offscreen (to left or right of the screen)
    $page.css({left: delta * width});
               
    // Animate new panel to positon 0
    $page.animate({left: 0}, 1000).show();
    
    // Animation old panels offscreen (left or right) then hide
    $currentpage.animate({left: -delta * width}, 1000, function(){
        $currentpage.hide();
    });
    
    $currentpage.removeClass('currentpage');
    $page.addClass('currentpage');
    
    // hide all other pages (just to be sure)
    $wrapper.children().not($currentpage).not($page).hide();
}

// Use wrapped DOM ready event to provide local $ for jQuery
jQuery(function ($) {
    $('.scrollitem').on('click', function () {
        var $link = $(this);
        var target = $link.attr('href').substr(1);

        // If the div has any content it is "loaded" (if you know the page has child elements use children().length as it will be faster)
        var $page = $('#' + target);
        var $target = $page.find('.page-container');
        if ($target.html().length) {
            console.log('loaded');
            slideToPage($page);
        } else {
            // Dummy test code - REMOVE THIS
            $target.html("I AM LOADED:" + target + "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur deleniti eum illo itaque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur deleniti eum illo itaque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur deleniti eum illo itaque");
            slideToPage($page);
            $page.css('display', '');
            // End dummy test code
            $.get("pages/" + target + ".html", function (data) {
                $target.html(data);
                slideToPage($page);
                $page.css('display', '');
            });
        }

        return false;
    }).each(function (index) {
        // create an empty placeholder DIV (in order) with unique matching id for each new entry
        var $link = $(this);
        var id = $link.attr("href").substr(1);
        // If page not already present...
        if (!$('#' + id).length) {
            $('.address_panel').append($('<div class="address_carouse"></div>').attr("id", id).css('display', 'none'));
        }
    });
});