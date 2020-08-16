/* SERVICES*/
$(function () {

    // animate on scroll
    new WOW().init();
});

/*STATS*/
$(function () {
    $('.counter').counterUp({
        delay: 12,
        time: 2100
    });

});



/*NAVIGATION*/
// Show/Hide transparent black navigation
//Source stackoverfow.com, w3schools.com
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});


// Close mobile menu on click
//Sourcestackoverflow.com
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});





















