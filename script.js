$(document).ready(function () {

// ==========================================
// NAVBAR + UP BUTTON SCROLL SYSTEM
// ==========================================

const scrollBtn = $('.scroll-up-btn');
let scrollTimer;

function handleScroll() {

    const currentScrollY = window.scrollY;

    // Sticky Navbar
    if (currentScrollY > 20) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }

    // Scroll Up Button
    if (currentScrollY > 500) {

        // Scrolling = Bright
        scrollBtn.removeClass('dim').addClass('show');

        clearTimeout(scrollTimer);

        // Scroll stop = Dim
        scrollTimer = setTimeout(function () {

            if (window.scrollY > 500) {
                scrollBtn.removeClass('show').addClass('dim');
            }

        }, 1000);

    } else {

        scrollBtn.removeClass('show dim');
        clearTimeout(scrollTimer);

    }
}


// Normal scrolling
window.addEventListener('scroll', handleScroll, {
    passive: true
});


// Mobile browser-এর scroll শেষ হলে
if ('onscrollend' in window) {

    window.addEventListener('scrollend', function () {

        if (window.scrollY > 500) {

            clearTimeout(scrollTimer);

            scrollTimer = setTimeout(function () {

                if (window.scrollY > 500) {
                    scrollBtn.removeClass('show').addClass('dim');
                }

            }, 300);

        }

    });

}


    // ==========================================
    // SCROLL UP BUTTON CLICK
    // ==========================================

 scrollBtn.on('click', function () {

    $('html, body').animate(
        {
            scrollTop: 0
        },
        500
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

    $('.navbar > .max-width > .menu-btn').on('click', function () {

    $('.navbar .menu').toggleClass('active');

    $('.navbar > .max-width > .menu-btn i')
        .toggleClass('active');

});

$('.navbar .menu li a').on('click', function () {

    if (window.innerWidth <= 947) {

        $('.navbar .menu').removeClass('active');

        $('.navbar > .max-width > .menu-btn i')
            .removeClass('active');

    }

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
// ACTIVE MOBILE MENU ITEM
// ==========================================

const sections = document.querySelectorAll('section[id]');

const menuLinks = document.querySelectorAll(
    '.navbar .menu li a'
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            // সব active class সরানো
            menuLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // বর্তমান section-এর menu link খোঁজা
            const activeLink = document.querySelector(
                '.navbar .menu li a[href="#' + entry.target.id + '"]'
            );

            // active করা
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

    });

}, {
    rootMargin: '-35% 0px -55% 0px'
});

sections.forEach(function(section) {
    observer.observe(section);
});
