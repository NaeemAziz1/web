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
// =====================================================
// EXTRA EDUCATIONAL ACHIEVEMENTS
// 3D PAGE FLIP + POWERFUL SWIPE
// =====================================================

(function () {

    const book =
        document.getElementById('extraEducationBook');

    if (!book) return;


    const currentImage =
        document.getElementById(
            'extraEducationCurrent'
        );

    const nextImage =
        document.getElementById(
            'extraEducationNextImage'
        );

    const flip =
        document.getElementById(
            'extraEducationFlip'
        );

    const flipFront =
        document.getElementById(
            'extraEducationFlipFront'
        );

    const flipBack =
        document.getElementById(
            'extraEducationFlipBack'
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


    // =================================================
    // PAGES
    // =================================================

    const pages = [

        'images/R.jgp',
        'images/R0.jpg',
        'images/R1.jpg',
        'images/R2.jpg',
        'images/R3.jpg',
        'images/R4.jpg',
        'images/R5.jpg',
        'images/R6.jpg',
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

    let animating = false;


    // =================================================
    // IMAGE LOADER
    // =================================================

    function setImage(image, source) {

        image.onerror = null;

        image.src = source;


        /*
         If R.jgp is actually R.jpg,
         automatically try R.jpg.
        */

        image.onerror = function () {

            if (source === 'images/R.jgp') {

                image.onerror = null;

                image.src = 'images/R.jpg';

            }

        };

    }


    // =================================================
    // PRELOAD
    // =================================================

    const cache = new Map();


    function preload(index) {

        if (
            index < 0 ||
            index >= pages.length
        ) {
            return;
        }


        const source = pages[index];


        if (cache.has(source)) {
            return;
        }


        const image = new Image();

        image.decoding = 'async';

        image.onload = function () {

            cache.set(source, image);

        };


        image.onerror = function () {

            if (source === 'images/R.jgp') {

                image.onerror = null;

                image.src = 'images/R.jpg';

            }

        };


        image.src = source;

    }


    function preloadNearby() {

        preload(pageIndex);

        preload(pageIndex + 1);

        preload(pageIndex - 1);

    }


    // =================================================
    // UI
    // =================================================

    function updateUI() {

        counter.textContent =
            (pageIndex + 1) +
            ' / ' +
            pages.length;


        previousButton.disabled =
            pageIndex === 0;


        nextButton.disabled =
            pageIndex === pages.length - 1;

    }


    // =================================================
    // DISPLAY PAGE
    // =================================================

    function displayPage() {

        setImage(
            currentImage,
            pages[pageIndex]
        );


        if (
            pageIndex + 1 <
            pages.length
        ) {

            setImage(
                nextImage,
                pages[pageIndex + 1]
            );

        }


        updateUI();

        preloadNearby();

    }


    // =================================================
    // NEXT PAGE
    // =================================================

    function nextPage() {

        if (
            animating ||
            pageIndex >= pages.length - 1
        ) {
            return;
        }


        animating = true;


        const newIndex =
            pageIndex + 1;


        setImage(
            flipFront,
            pages[pageIndex]
        );


        setImage(
            flipBack,
            pages[newIndex]
        );


        setImage(
            nextImage,
            pages[newIndex]
        );


        flip.style.transformOrigin =
            'left center';

        flip.style.transition =
            'none';

        flip.style.transform =
            'rotateY(0deg)';


        flip.classList.add('active');


        requestAnimationFrame(function () {

            requestAnimationFrame(function () {

                flip.style.transition =
                    'transform .78s cubic-bezier(.22,.61,.36,1)';

                flip.style.transform =
                    'rotateY(-180deg)';

            });

        });


        setTimeout(function () {

            pageIndex =
                newIndex;


            setImage(
                currentImage,
                pages[pageIndex]
            );


            flip.classList.remove('active');


            flip.style.transition =
                'none';

            flip.style.transform =
                'rotateY(0deg)';


            updateUI();

            preloadNearby();


            animating = false;

        }, 820);

    }


    // =================================================
    // PREVIOUS PAGE
    // =================================================

    function previousPage() {

        if (
            animating ||
            pageIndex <= 0
        ) {
            return;
        }


        animating = true;


        const newIndex =
            pageIndex - 1;


        setImage(
            flipFront,
            pages[pageIndex]
        );


        setImage(
            flipBack,
            pages[newIndex]
        );


        setImage(
            nextImage,
            pages[newIndex]
        );


        flip.style.transformOrigin =
            'right center';

        flip.style.transition =
            'none';

        flip.style.transform =
            'rotateY(0deg)';


        flip.classList.add('active');


        requestAnimationFrame(function () {

            requestAnimationFrame(function () {

                flip.style.transition =
                    'transform .78s cubic-bezier(.22,.61,.36,1)';

                flip.style.transform =
                    'rotateY(180deg)';

            });

        });


        setTimeout(function () {

            pageIndex =
                newIndex;


            setImage(
                currentImage,
                pages[pageIndex]
            );


            flip.classList.remove('active');


            flip.style.transition =
                'none';

            flip.style.transform =
                'rotateY(0deg)';


            updateUI();

            preloadNearby();


            animating = false;

        }, 820);

    }


    // =================================================
    // BUTTONS
    // =================================================

    nextButton.addEventListener(
        'click',
        nextPage
    );


    previousButton.addEventListener(
        'click',
        previousPage
    );


    // =================================================
    // POWERFUL SWIPE SYSTEM
    // =================================================

    let startX = 0;
    let startY = 0;

    let startTime = 0;

    let tracking = false;


    book.addEventListener(
        'touchstart',
        function (event) {

            if (
                animating ||
                event.touches.length !== 1
            ) {
                return;
            }


            const touch =
                event.touches[0];


            startX =
                touch.clientX;

            startY =
                touch.clientY;

            startTime =
                Date.now();

            tracking = true;

        },
        {
            passive: true
        }
    );


    book.addEventListener(
        'touchend',
        function (event) {

            if (
                !tracking ||
                animating
            ) {
                return;
            }


            tracking = false;


            const touch =
                event.changedTouches[0];


            const endX =
                touch.clientX;

            const endY =
                touch.clientY;


            const distanceX =
                endX - startX;

            const distanceY =
                endY - startY;


            const distance =
                Math.abs(distanceX);


            const elapsed =
                Math.max(
                    Date.now() - startTime,
                    1
                );


            const velocity =
                distance / elapsed;


            /*
             Strong swipe:
             - 35px minimum for fast swipe
             - 55px normal swipe
             - Ignore vertical movement
            */

            const horizontalDominance =
                distance >
                Math.abs(distanceY) * 1.15;


            const strongSwipe =
                distance >= 35 &&
                velocity >= .35;


            const normalSwipe =
                distance >= 55;


            if (
                !horizontalDominance
            ) {
                return;
            }


            if (
                !strongSwipe &&
                !normalSwipe
            ) {
                return;
            }


            if (distanceX < 0) {

                nextPage();

            } else {

                previousPage();

            }

        },
        {
            passive: true
        }
    );


    // =================================================
    // INITIALISE
    // =================================================

    displayPage();

})();
