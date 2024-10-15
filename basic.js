// Navbar scroll
console.log("basic.js loaded");
$("body").on( "scroll", function() {
    var $nav = $("#navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
} );
$("body").scroll(function () {
    // console.log("scrolling");
    // console.log($(this).scrollTop());
    
    var $nav = $("#navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    // console.log($nav.height());
});