$(document).ready(function () {

// ==========================================
// NAVBAR + UP BUTTON SCROLL SYSTEM
// ==========================================

const scrollBtn = $('.scroll-up-btn');
let scrollTimer;

function handleScroll() {

    const currentScrollY = window.scrollY;


    // ==========================================
    // MOBILE FLOATING MENU
    // ==========================================

    if (window.innerWidth <= 947) {

        if (currentScrollY > 150) {

            $('.mobile-menu-toggle').addClass('floating-menu');

        } else {

            $('.mobile-menu-toggle').removeClass('floating-menu');

        }

    } else {

        $('.mobile-menu-toggle').removeClass('floating-menu');

    }


    // ==========================================
    // STICKY NAVBAR
    // ==========================================

    if (currentScrollY > 20) {

        $('.navbar').addClass('sticky');

    } else {

        $('.navbar').removeClass('sticky');

    }


    // ==========================================
    // SCROLL UP BUTTON
    // ==========================================

    if (currentScrollY > 500) {

        // Scrolling = Bright
        scrollBtn.removeClass('dim').addClass('show');

        clearTimeout(scrollTimer);

        // Scroll stop = Dim
        scrollTimer = setTimeout(function () {

            if (window.scrollY > 500) {

                scrollBtn
                    .removeClass('show')
                    .addClass('dim');

            }

        }, 1000);

    } else {

        scrollBtn.removeClass('show dim');

        clearTimeout(scrollTimer);

    }

}


// ==========================================
// NORMAL SCROLLING
// ==========================================

window.addEventListener('scroll', handleScroll, {
    passive: true
});


// ==========================================
// MOBILE BROWSER SCROLL END
// ==========================================

if ('onscrollend' in window) {

    window.addEventListener('scrollend', function () {

        if (window.scrollY > 500) {

            clearTimeout(scrollTimer);

            scrollTimer = setTimeout(function () {

                if (window.scrollY > 500) {

                    scrollBtn
                        .removeClass('show')
                        .addClass('dim');

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

$('.mobile-menu-toggle').on('click', function () {

    const menu = $('.navbar .menu');
    const icon = $(this).find('i');

    // Open / Close menu
    menu.toggleClass('active');


    // Change icon
    if (menu.hasClass('active')) {

        icon
            .removeClass('fa-bars')
            .addClass('fa-times');

    } else {

        icon
            .removeClass('fa-times')
            .addClass('fa-bars');

    }

});


// ==========================================
// CLOSE MOBILE MENU AFTER CLICKING LINK
// ==========================================

$('.navbar .menu li a').on('click', function () {

    if (window.innerWidth <= 947) {

        $('.navbar .menu').removeClass('active');

        $('.mobile-menu-toggle i')
            .removeClass('fa-times')
            .addClass('fa-bars');

    }

});


// ==========================================
// PROFILE TYPING ANIMATION
// ==========================================

if (document.querySelector('.profile-typing')) {

    new Typed('.profile-typing', {

        strings: [
            'A Poet',
            'An Engineer',
            'A Researcher'
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

function openAward(image, description, extraImage = '') {

    document.getElementById('awardModalImage').src = image;

    document.getElementById('awardModalDescription').innerText =
        description;

    const extraImg =
        document.getElementById('awardModalExtraImage');

    if (extraImage) {

        extraImg.src = extraImage;
        extraImg.style.display = 'block';

    } else {

        extraImg.src = '';
        extraImg.style.display = 'none';

    }

    document.getElementById('awardModal').style.display = 'flex';

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
                '.navbar .menu li a[href="#' +
                entry.target.id +
                '"]'
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


// ==========================================
// PRELOADER
// ==========================================

// ==========================================
// PRELOADER — MINIMUM 1.5 SECONDS
// ==========================================

const preloaderStart = Date.now();

window.addEventListener('load', function () {

    const preloader =
        document.getElementById('preloader');

    if (!preloader) return;

    const elapsedTime =
        Date.now() - preloaderStart;

    // Minimum 1.5 seconds
    const remainingTime =
        Math.max(400 - elapsedTime, 0);

    setTimeout(function () {

        preloader.classList.add('hide');

        setTimeout(function () {

            preloader.remove();

        }, 700);

    }, remainingTime);

});


// ==========================================
// PRELOAD m10.jpg
// ==========================================

const m10Image = new Image();

m10Image.src = 'images/m10.jpg';
/* =========================================================
   EXTRA EDUCATIONAL ACHIEVEMENTS
   BUTTON ONLY PAGE NAVIGATION
   CLICK IMAGE = LARGE VIEW
   ========================================================= */

(function () {

    const currentImage =
        document.getElementById(
            'extraEducationCurrent'
        );

    const previousButton =
        document.getElementById(
            'extraEducationPrev'
        );

    const nextButton =
        document.getElementById(
            'extraEducationNext'
        );

    const counter =
        document.getElementById(
            'extraEducationCounter'
        );

    const lightbox =
        document.getElementById(
            'extraEducationLightbox'
        );

    const lightboxImage =
        document.getElementById(
            'extraEducationLightboxImage'
        );

    const lightboxClose =
        document.getElementById(
            'extraEducationLightboxClose'
        );


    /* =====================================================
       PAGE LIST
       ===================================================== */

    const pages = [
 
        'images/R4.jpg',
        'images/R6.jpg',
        'images/R.jgp',
        'images/R0.jpg',
        'images/R1.jpg',
        'images/R2.jpg',
        'images/R3.jpg',
        'images/R5.jpg',
        'images/R7.jpg',
        'images/R8.jpg',
        'images/R9.jpg',
        'images/R10.jpg',
        'images/R11.jpg',
        'images/R12.jpg',
        'images/R13.jpg',
        'images/R14.jpg',
        'images/R15.jpeg',
        'images/R16.jpg',
        'images/R17.jpg'

    ];


    let pageIndex = 0;


    /* =====================================================
       SET IMAGE
       ===================================================== */

    function setPageImage(source) {

        currentImage.onerror = null;

        currentImage.src = source;


        /*
         If R.jgp does not exist,
         automatically try R.jpg
        */

        if (source === 'images/R.jgp') {

            currentImage.onerror =
                function () {

                    currentImage.onerror = null;

                    currentImage.src =
                        'images/R.jpg';

                };

        }

    }


    /* =====================================================
       UPDATE PAGE NUMBER + BUTTON STATE
       ===================================================== */

    function updatePageUI() {

        counter.textContent =
            (pageIndex + 1) +
            ' / ' +
            pages.length;


        previousButton.disabled =
            pageIndex === 0;


        nextButton.disabled =
            pageIndex === pages.length - 1;

    }


    /* =====================================================
       SHOW CURRENT PAGE
       ===================================================== */

    function showPage() {

        setPageImage(
            pages[pageIndex]
        );


        updatePageUI();

    }


    /* =====================================================
       NEXT PAGE
       BUTTON ONLY
       ===================================================== */

    function nextPage() {

        if (
            pageIndex >=
            pages.length - 1
        ) {
            return;
        }


        pageIndex++;

        showPage();

    }


    /* =====================================================
       PREVIOUS PAGE
       BUTTON ONLY
       ===================================================== */

    function previousPage() {

        if (
            pageIndex <= 0
        ) {
            return;
        }


        pageIndex--;

        showPage();

    }


    /* =====================================================
       BUTTON EVENTS
       ===================================================== */

    previousButton.addEventListener(
        'click',
        previousPage
    );


    nextButton.addEventListener(
        'click',
        nextPage
    );


    /* =====================================================
       CLICK IMAGE → LARGE VIEW
       ===================================================== */

    currentImage.addEventListener(
        'click',
        function () {

            let source =
                pages[pageIndex];


            lightboxImage.onerror = null;


            lightboxImage.src =
                source;


            /*
             R.jgp → R.jpg fallback
            */

            if (
                source ===
                'images/R.jgp'
            ) {

                lightboxImage.onerror =
                    function () {

                        lightboxImage.onerror = null;

                        lightboxImage.src =
                            'images/R.jpg';

                    };

            }


            lightbox.classList.add(
                'show'
            );


            lightbox.setAttribute(
                'aria-hidden',
                'false'
            );


            document.body.style.overflow =
                'hidden';

        }
    );


    /* =====================================================
       CLOSE LIGHTBOX
       ===================================================== */

    function closeLightbox() {

        lightbox.classList.remove(
            'show'
        );


        lightbox.setAttribute(
            'aria-hidden',
            'true'
        );


        document.body.style.overflow =
            '';

    }


    lightboxClose.addEventListener(
        'click',
        closeLightbox
    );


    /* Click outside image */

    lightbox.addEventListener(
        'click',
        function (event) {

            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );


    /* Click large image to close */

    lightboxImage.addEventListener(
        'click',
        closeLightbox
    );


    /* ESC key */

    document.addEventListener(
        'keydown',
        function (event) {

            if (
                event.key === 'Escape' &&
                lightbox.classList.contains('show')
            ) {

                closeLightbox();

            }

        }
    );


    /* =====================================================
       INITIAL PAGE
       ===================================================== */

    showPage();


})();
