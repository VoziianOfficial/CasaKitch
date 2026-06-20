'use strict';

/* =========================================================
   CasaKitch — Homepage JS
   File: assets/js/home.js
   ========================================================= */

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        initHomeHeroSlider();
    });

    function initHomeHeroSlider() {
        const slider = document.querySelector('[data-home-hero-slider]');

        if (!slider || typeof Swiper === 'undefined') {
            return;
        }

        const pagination = document.querySelector('[data-home-hero-pagination]');
        const nextButton = document.querySelector('[data-home-hero-next]');
        const prevButton = document.querySelector('[data-home-hero-prev]');

        const swiper = new Swiper(slider, {
            loop: true,
            speed: 950,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 4300,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                el: pagination,
                clickable: true
            },
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            a11y: {
                enabled: true,
                prevSlideMessage: 'Previous kitchen photo',
                nextSlideMessage: 'Next kitchen photo',
                firstSlideMessage: 'This is the first kitchen photo',
                lastSlideMessage: 'This is the last kitchen photo'
            }
        });

        slider.addEventListener('mouseenter', () => {
            if (swiper.autoplay && typeof swiper.autoplay.stop === 'function') {
                swiper.autoplay.stop();
            }
        });

        slider.addEventListener('mouseleave', () => {
            if (swiper.autoplay && typeof swiper.autoplay.start === 'function') {
                swiper.autoplay.start();
            }
        });

        if (window.CasaKitch?.prefersReducedMotion?.()) {
            swiper.autoplay.stop();
        }

        window.CasaKitch?.refreshIcons?.();
        window.CasaKitch?.refreshAos?.();
    }
})();