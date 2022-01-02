$(function(){

 // Show The Scroll To Top Btn And Make It Scroll To Top Of The Page
 let scrollToTopBtn = $(".scroll-to-top");
 $(window).on("scroll", function(){

    $(this).scrollTop() >= 300 ? $(".scroll-to-top").fadeIn(600):$(".scroll-to-top").fadeOut(600);
 });

 scrollToTopBtn.on("click",function(){

    $("html,body").animate({
        scrollTop: 0
    },600);
 });

});
