$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   // ==============================
// TYPING TEXT ANIMATION
// ==============================

// Profile section
if (document.querySelector(".profile-typing")) {
    new Typed(".profile-typing", {
        strings: [
            "a Poet",
            "an Engineer",
            "a Researcher"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1200,
        startDelay: 500,
        loop: true,
        showCursor: false
    });
}

// Biography section
if (document.querySelector(".typing-2")) {
    new Typed(".typing-2", {
        strings: [
            "a Poet",
            "an Engineer",
            "an IT Expert",
            "a Researcher"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1200,
        startDelay: 500,
        loop: true,
        showCursor: false
    });
}
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
/* ==============================
   AWARD POPUP
   ============================== */

function openAward(image, description) {

    document.getElementById("awardModalImage").src = image;

    document.getElementById("awardModalDescription").innerText =
        description;

    document.getElementById("awardModal").style.display = "block";
}


function closeAward() {

    document.getElementById("awardModal").style.display = "none";

}


window.addEventListener("click", function(event) {

    const modal = document.getElementById("awardModal");

    if (event.target === modal) {
        closeAward();
    }

});
// ==============================
// FADE UP BUTTON WHEN NOT SCROLLING
// ==============================

let scrollTimer;

window.addEventListener("scroll", function () {

    const btn = document.querySelector(".scroll-up-btn");

    if (!btn) return;

    // Scrolling করলে button আবার পরিষ্কার দেখা যাবে
    btn.classList.remove("idle");

    // আগের timer বাতিল
    clearTimeout(scrollTimer);

    // 1.5 seconds scrolling বন্ধ থাকলে fade হবে
    scrollTimer = setTimeout(function () {

        if (btn.classList.contains("show")) {
            btn.classList.add("idle");
        }

    }, 900);

});
