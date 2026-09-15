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
// ==========================================
// EXTRA EDUCATIONAL ACHIEVEMENTS
// 3D BOOK PAGE FLIP + SWIPE
// ==========================================

(function () {

    const book =
        document.getElementById('extraAchievementsBook');

    if (!book) return;


    const currentPage =
        document.getElementById(
            'extraAchievementsCurrent'
        );

    const currentImg =
        document.getElementById(
            'extraAchievementsCurrentImg'
        );

    const underImg =
        document.getElementById(
            'extraAchievementsUnderImg'
        );

    const flip =
        document.getElementById(
            'extraAchievementsFlip'
        );

    const flipFront =
        document.getElementById(
            'extraAchievementsFlipFront'
        );

    const flipBack =
        document.getElementById(
            'extraAchievementsFlipBack'
        );

    const nextBtn =
        document.getElementById(
            'extraAchievementsNext'
        );

    const prevBtn =
        document.getElementById(
            'extraAchievementsPrev'
        );

    const counter =
        document.getElementById(
            'extraAchievementsCounter'
        );


    // ==========================================
    // PAGE IMAGES
    // ==========================================

    const extraAchievementPages = [

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


    let currentIndex = 0;

    let isAnimating = false;

    let touchStartX = 0;
    let touchStartY = 0;


    // ==========================================
    // IMAGE PRELOADER
    // ==========================================

    const imageCache = new Map();


    function preloadImage(index) {

        if (
            index < 0 ||
            index >= extraAchievementPages.length
        ) {
            return;
        }


        const src =
            extraAchievementPages[index];


        if (imageCache.has(src)) {
            return;
        }


        const img = new Image();

        img.decoding = 'async';

        img.src = src;

        imageCache.set(src, img);

    }


    // ==========================================
    // PRELOAD NEARBY PAGES
    // ==========================================

    function preloadNearbyPages() {

        preloadImage(currentIndex);

        preloadImage(currentIndex + 1);

        preloadImage(currentIndex - 1);

    }


    // ==========================================
    // UPDATE UI
    // ==========================================

    function updateUI() {

        counter.textContent =
            (currentIndex + 1) +
            ' / ' +
            extraAchievementPages.length;


        prevBtn.disabled =
            currentIndex === 0;


        nextBtn.disabled =
            currentIndex ===
            extraAchievementPages.length - 1;

    }


    // ==========================================
    // SHOW CURRENT PAGE
    // ==========================================

    function showCurrentPage() {

        currentImg.src =
            extraAchievementPages[currentIndex];


        underImg.src =
            extraAchievementPages[currentIndex];


        flip.classList.remove('active');


        flip.style.transition = 'none';

        flip.style.transform =
            'rotateY(0deg)';


        updateUI();

        preloadNearbyPages();

    }


    // ==========================================
    // NEXT PAGE
    // ==========================================

    function nextPage() {

        if (
            isAnimating ||
            currentIndex >=
            extraAchievementPages.length - 1
        ) {
            return;
        }


        isAnimating = true;


        const nextIndex =
            currentIndex + 1;


        flipFront.src =
            extraAchievementPages[currentIndex];


        flipBack.src =
            extraAchievementPages[nextIndex];


        underImg.src =
            extraAchievementPages[nextIndex];


        flip.style.transform =
            'rotateY(0deg)';


        flip.style.transformOrigin =
            'left center';


        flip.classList.add('active');


        requestAnimationFrame(function () {

            requestAnimationFrame(function () {

                flip.style.transition =
                    'transform .72s cubic-bezier(.22,.61,.36,1)';

                flip.style.transform =
                    'rotateY(-180deg)';

            });

        });


        setTimeout(function () {

            currentIndex =
                nextIndex;


            currentImg.src =
                extraAchievementPages[currentIndex];


            flip.classList.remove('active');


            flip.style.transition =
                'none';

            flip.style.transform =
                'rotateY(0deg)';


            updateUI();

            preloadNearbyPages();


            isAnimating = false;

        }, 760);

    }


    // ==========================================
    // PREVIOUS PAGE
    // ==========================================

    function previousPage() {

        if (
            isAnimating ||
            currentIndex <= 0
        ) {
            return;
        }


        isAnimating = true;


        const previousIndex =
            currentIndex - 1;


        flipFront.src =
            extraAchievementPages[currentIndex];


        flipBack.src =
            extraAchievementPages[previousIndex];


        underImg.src =
            extraAchievementPages[previousIndex];


        flip.style.transform =
            'rotateY(0deg)';


        flip.style.transformOrigin =
            'right center';


        flip.classList.add('active');


        requestAnimationFrame(function () {

            requestAnimationFrame(function () {

                flip.style.transition =
                    'transform .72s cubic-bezier(.22,.61,.36,1)';

                flip.style.transform =
                    'rotateY(180deg)';

            });

        });


        setTimeout(function () {

            currentIndex =
                previousIndex;


            currentImg.src =
                extraAchievementPages[currentIndex];


            flip.classList.remove('active');


            flip.style.transition =
                'none';

            flip.style.transform =
                'rotateY(0deg)';


            updateUI();

            preloadNearbyPages();


            isAnimating = false;

        }, 760);

    }


    // ==========================================
    // BUTTONS
    // ==========================================

    nextBtn.addEventListener(
        'click',
        nextPage
    );


    prevBtn.addEventListener(
        'click',
        previousPage
    );


    // ==========================================
    // TOUCH / SWIPE
    // ==========================================

    book.addEventListener(
        'touchstart',
        function (event) {

            if (
                event.touches.length !== 1 ||
                isAnimating
            ) {
                return;
            }


            touchStartX =
                event.touches[0].clientX;


            touchStartY =
                event.touches[0].clientY;

        },
        {
            passive: true
        }
    );


    book.addEventListener(
        'touchend',
        function (event) {

            if (isAnimating) {
                return;
            }


            const touchEndX =
                event.changedTouches[0].clientX;


            const touchEndY =
                event.changedTouches[0].clientY;


            const deltaX =
                touchEndX - touchStartX;


            const deltaY =
                touchEndY - touchStartY;


            // Ignore mostly vertical swipes
            if (
                Math.abs(deltaX) <
                Math.abs(deltaY)
            ) {
                return;
            }


            // Minimum swipe distance
            if (
                Math.abs(deltaX) < 45
            ) {
                return;
            }


            if (deltaX < 0) {

                // Swipe left = Next
                nextPage();

            } else {

                // Swipe right = Previous
                previousPage();

            }

        },
        {
            passive: true
        }
    );


    // ==========================================
    // MOUSE DRAG SUPPORT
    // ==========================================

    let mouseStartX = 0;

    let mouseDown = false;


    book.addEventListener(
        'mousedown',
        function (event) {

            if (isAnimating) {
                return;
            }


            mouseDown = true;

            mouseStartX =
                event.clientX;

        }
    );


    window.addEventListener(
        'mouseup',
        function (event) {

            if (!mouseDown) {
                return;
            }


            mouseDown = false;


            const deltaX =
                event.clientX -
                mouseStartX;


            if (
                Math.abs(deltaX) < 60
            ) {
                return;
            }


            if (deltaX < 0) {

                nextPage();

            } else {

                previousPage();

            }

        }
    );


    // ==========================================
    // KEYBOARD SUPPORT
    // ==========================================

    book.setAttribute(
        'tabindex',
        '0'
    );


    book.addEventListener(
        'keydown',
        function (event) {

            if (
                event.key === 'ArrowRight'
            ) {

                event.preventDefault();

                nextPage();

            }


            if (
                event.key === 'ArrowLeft'
            ) {

                event.preventDefault();

                previousPage();

            }

        }
    );


    // ==========================================
    // INITIALISE
    // ==========================================

    showCurrentPage();

})();
