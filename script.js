$(document).ready(function () {

// ==========================================
// NAVBAR + UP BUTTON SCROLL SYSTEM
// ==========================================

const scrollBtn = $('.scroll-up-btn');
let scrollTimer;
let lastScrollY = window.scrollY;

$(window).on('scroll', function () {

    const currentScrollY = window.scrollY;

    // Sticky Navbar
    if (currentScrollY > 20) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }

    // Scroll Up Button
    if (currentScrollY > 500) {

        if (Math.abs(currentScrollY - lastScrollY) > 2) {

            scrollBtn
                .removeClass('dim')
                .addClass('show');

            clearTimeout(scrollTimer);

            scrollTimer = setTimeout(function () {

                if (window.scrollY > 500) {
                    scrollBtn
                        .removeClass('show')
                        .addClass('dim');
                }

            }, 900);
        }

    } else {

        scrollBtn.removeClass('show dim');

        clearTimeout(scrollTimer);
    }

    lastScrollY = currentScrollY;

});


    // ==========================================
    // SCROLL UP BUTTON CLICK
    // ==========================================

 scrollBtn.on('click', function () {

    $('html, body').animate(
        {
            scrollTop: 0
        },
        700
    );

});


    // ==========================================
    // NAVBAR MENU CLICK
    // ==========================================

    $('.navbar .menu li a').on('click', function () {

        $('html').css('scrollBehavior', 'smooth');

    });


    // ==========================================
    // MOBILE MENU
    // ==========================================

    $('.menu-btn').on('click', function () {

        $('.navbar .menu').toggleClass('active');

        $('.menu-btn i').toggleClass('active');

    });


    // ==========================================
    // PROFILE TYPING ANIMATION
    // ==========================================

    if (document.querySelector('.profile-typing')) {

        new Typed('.profile-typing', {

            strings: [
                'a Poet',
                'an Engineer',
                'a Researcher'
            ],

            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1200,
            startDelay: 500,
            loop: true,
            showCursor: false

        });

    }


    // ==========================================
    // BIOGRAPHY TYPING ANIMATION
    // ==========================================

    if (document.querySelector('.typing-2')) {

        new Typed('.typing-2', {

            strings: [
                'a Poet',
                'an Engineer',
                'an IT Expert',
                'a Researcher'
            ],

            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1200,
            startDelay: 500,
            loop: true,
            showCursor: false

        });

    }


    // ==========================================
    // OWL CAROUSEL
    // ==========================================

    $('.carousel').owlCarousel({

        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,

        responsive: {

            0: {
                items: 1,
                nav: false
            },

            600: {
                items: 2,
                nav: false
            },

            1000: {
                items: 3,
                nav: false
            }

        }

    });

});


// ==========================================
// AWARD POPUP
// ==========================================

function openAward(image, description) {

    document.getElementById('awardModalImage').src = image;

    document.getElementById('awardModalDescription').innerText =
        description;

    document.getElementById('awardModal').style.display = 'block';

}


function closeAward() {

    document.getElementById('awardModal').style.display = 'none';

}


// ==========================================
// CLOSE AWARD POPUP BY CLICKING OUTSIDE
// ==========================================

window.addEventListener('click', function (event) {

    const modal = document.getElementById('awardModal');

    if (event.target === modal) {

        closeAward();

    }

});
