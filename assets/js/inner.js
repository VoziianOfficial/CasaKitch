'use strict';

/* =========================================================
   CasaKitch — Inner Pages JS
   File: assets/js/inner.js
   Used for: about.html, all-services.html, contact.html, service pages
   ========================================================= */

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        initTestimonialsSlider();
        initIconMarquees();
        initServicesShowcase();
        initServiceCounters();
        initServicePageContent();
        initContactQuestionBoard();
    });

    /* =========================================================
       Testimonials Swiper
       ========================================================= */

    function initTestimonialsSlider() {
        const slider = document.querySelector('[data-testimonials-slider]');

        if (!slider || typeof Swiper === 'undefined') {
            return;
        }

        const prevButton = document.querySelector('[data-testimonials-prev]');
        const nextButton = document.querySelector('[data-testimonials-next]');

        const swiper = new Swiper(slider, {
            loop: true,
            speed: 850,
            spaceBetween: 18,
            slidesPerView: 1,
            slidesPerGroup: 1,
            grabCursor: true,
            watchOverflow: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            navigation: {
                prevEl: prevButton,
                nextEl: nextButton
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            breakpoints: {
                861: {
                    slidesPerView: 2,
                    spaceBetween: 18
                }
            },
            a11y: {
                enabled: true,
                prevSlideMessage: 'Previous testimonial',
                nextSlideMessage: 'Next testimonial'
            }
        });

        if (window.CasaKitch?.prefersReducedMotion?.()) {
            swiper.autoplay.stop();
        }

        window.CasaKitch?.refreshIcons?.();
        window.CasaKitch?.refreshAos?.();
    }

    /* =========================================================
       Marquees
       ========================================================= */

    function initIconMarquees() {
        const iconTracks = document.querySelectorAll('[data-icon-marquee-track]');
        const detailTracks = document.querySelectorAll('[data-detail-marquee-track]');

        iconTracks.forEach((track) => {
            if (track.dataset.ready === 'true') {
                return;
            }

            track.dataset.ready = 'true';
            track.innerHTML += track.innerHTML;
        });

        detailTracks.forEach((track) => {
            if (track.dataset.ready === 'true') {
                return;
            }

            track.dataset.ready = 'true';
            track.innerHTML += track.innerHTML;
        });

        window.CasaKitch?.refreshIcons?.();
    }

    /* =========================================================
       All Services Interactive Showcase
       ========================================================= */

    function initServicesShowcase() {
        const showcase = document.querySelector('[data-services-showcase]');
        const background = document.querySelector('[data-services-showcase-bg]');
        const photoLink = document.querySelector('[data-services-showcase-photo-link]');
        const links = Array.from(document.querySelectorAll('[data-showcase-service]'));

        if (!showcase || !background || links.length === 0) {
            return;
        }

        const activateService = (link) => {
            const image = link.dataset.serviceImage;
            const url = link.dataset.serviceLink;

            if (!image || !url) {
                return;
            }

            links.forEach((item) => {
                item.classList.remove('is-active');
                item.setAttribute('aria-selected', 'false');
            });

            link.classList.add('is-active');
            link.setAttribute('aria-selected', 'true');

            showcase.style.setProperty('--showcase-image', `url('${image}')`);

            if (photoLink) {
                photoLink.href = url;
                photoLink.setAttribute('aria-label', `Open ${link.textContent.trim()}`);
            }
        };

        links.forEach((link) => {
            link.addEventListener('mouseenter', () => {
                activateService(link);
            });

            link.addEventListener('focus', () => {
                activateService(link);
            });

            link.addEventListener('click', (event) => {
                const isSmallScreen = window.matchMedia('(max-width: 860px)').matches;

                if (!isSmallScreen) {
                    return;
                }

                if (!link.classList.contains('is-active')) {
                    event.preventDefault();
                    activateService(link);
                }
            });
        });

        activateService(links[0]);
    }

    function initContactQuestionBoard() {
        const questions = Array.from(document.querySelectorAll('[data-contact-question]'));
        const answerTitle = document.querySelector('[data-contact-answer-title]');
        const answerText = document.querySelector('[data-contact-answer-text]');
        const answerLink = document.querySelector('[data-contact-answer-link]');
        const answerLinkLabel = document.querySelector('[data-contact-answer-link-label]');

        if (!questions.length || !answerTitle || !answerText) {
            return;
        }

        const activateQuestion = (question) => {
            questions.forEach((item) => {
                item.classList.remove('is-active');
                item.setAttribute('aria-selected', 'false');
            });

            question.classList.add('is-active');
            question.setAttribute('aria-selected', 'true');

            answerTitle.textContent = question.dataset.answerTitle || '';
            answerText.textContent = question.dataset.answerText || '';

            if (answerLink && question.dataset.answerLink) {
                answerLink.href = question.dataset.answerLink;
            }

            if (answerLinkLabel && question.dataset.answerLinkLabel) {
                answerLinkLabel.textContent = question.dataset.answerLinkLabel;
            }

            window.CasaKitch?.refreshIcons?.();
        };

        questions.forEach((question, index) => {
            question.setAttribute('role', 'tab');
            question.setAttribute('aria-selected', index === 0 ? 'true' : 'false');

            question.addEventListener('click', () => {
                activateQuestion(question);
            });

            question.addEventListener('mouseenter', () => {
                if (window.matchMedia('(min-width: 861px)').matches) {
                    activateQuestion(question);
                }
            });
        });

        activateQuestion(questions[0]);
    }

    /* =========================================================
       Service Page Content From Config
       ========================================================= */

    function initServicePageContent() {
        const service = window.CasaKitch?.getCurrentService?.();

        if (!service) {
            return;
        }

        injectServiceHero(service);
        injectServiceStatement(service);
        injectServiceFeature(service);
        injectRelatedServices(service);
        injectServiceGallery(service);

        window.CasaKitch?.refreshIcons?.();
        window.CasaKitch?.refreshAos?.();
    }

    function injectServiceHero(service) {
        const kicker = document.querySelector('[data-service-kicker]');
        const title = document.querySelector('[data-service-title]');
        const text = document.querySelector('[data-service-text]');
        const image = document.querySelector('[data-service-image]');

        if (kicker) {
            kicker.textContent = service.kicker || service.title;
        }

        if (title) {
            title.textContent = service.heroHeading || service.title;
        }

        if (text) {
            text.textContent = service.heroText || service.description || '';
        }

        if (image) {
            image.src = service.image;
            image.alt = `${service.title} kitchen remodeling detail`;
        }
    }

    function injectServiceStatement(service) {
        const title = document.querySelector('[data-service-statement-title]');
        const text = document.querySelector('[data-service-statement-text]');

        if (title) {
            title.textContent = service.statement || service.title;
        }

        if (text) {
            text.innerHTML = `
                Start with your <span class="gold-underline">project goals</span>, preferred materials, layout notes,
                and service direction. CasaKitch helps homeowners <span class="gold-underline">compare local provider options</span>
                and review matching <span class="gold-underline">provider paths</span> without acting as a contractor,
                installer, retailer, manufacturer, or remodeling company.
            `;
        }
    }

    function injectServiceFeature(service) {
        const photo = document.querySelector('[data-service-feature-photo]');
        const kicker = document.querySelector('[data-service-feature-kicker]');
        const title = document.querySelector('[data-service-feature-title]');
        const text = document.querySelector('[data-service-feature-text]');

        if (photo) {
            photo.src = service.image;
            photo.alt = `${service.title} planning example`;
        }

        if (kicker) {
            kicker.textContent = service.kicker || 'SERVICE OPTIONS';
        }

        if (title) {
            title.textContent = `Compare ${service.title.toLowerCase()} provider paths with clearer project notes`;
        }

        if (text) {
            text.textContent =
                service.description ||
                'CasaKitch helps homeowners describe project details and compare provider options before choosing the direction that fits their kitchen update.';
        }
    }

    function injectRelatedServices(service) {
        const container = document.querySelector('[data-related-services]');

        if (!container) {
            return;
        }

        const services = window.CasaKitch?.config?.services || [];
        const relatedUrls = service.related || [];

        const related = relatedUrls
            .map((url) => services.find((item) => item.url === url))
            .filter(Boolean)
            .slice(0, 3);

        container.innerHTML = related
            .map((item, index) => {
                return `
                    <article class="related-service" data-aos="fade-up" data-aos-delay="${80 + index * 70}">
                        <span class="related-service__number">${String(index + 1).padStart(2, '0')}</span>

                        <h3>${escapeHtml(item.title)}</h3>

                        <p>${escapeHtml(item.description)}</p>

                        <a class="text-link" href="${escapeHtml(item.url)}">
                            Read More
                            <i data-lucide="arrow-right" aria-hidden="true"></i>
                        </a>
                    </article>
                `;
            })
            .join('');
    }

    function injectServiceGallery(service) {
        const container = document.querySelector('[data-service-gallery]');

        if (!container) {
            return;
        }

        const gallery = service.gallery || [];

        container.innerHTML = gallery
            .slice(0, 3)
            .map((image, index) => {
                return `
                    <figure class="service-gallery__photo photo-cover shine-surface" data-aos="zoom-in" data-aos-delay="${80 + index * 80}">
                        <img src="${escapeHtml(image)}" alt="${escapeHtml(service.title)} gallery image ${index + 1}">
                    </figure>
                `;
            })
            .join('');
    }

    /* =========================================================
       Counters
       ========================================================= */

    function initServiceCounters() {
        const counters = Array.from(document.querySelectorAll('[data-count]'));

        if (counters.length === 0) {
            return;
        }

        const animateCounter = (counter) => {
            if (counter.dataset.counted === 'true') {
                return;
            }

            counter.dataset.counted = 'true';

            const target = Number(counter.dataset.count || 0);
            const duration = 1200;
            const suffix = counter.dataset.suffix || '';
            const start = performance.now();

            const step = (time) => {
                const progress = Math.min((time - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.floor(eased * target);

                counter.textContent = `${value}${suffix}`;

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    counter.textContent = `${target}${suffix}`;
                }
            };

            requestAnimationFrame(step);
        };

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            animateCounter(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.35
                }
            );

            counters.forEach((counter) => observer.observe(counter));
            return;
        }

        counters.forEach(animateCounter);
    }

    /* =========================================================
       Local Helpers
       ========================================================= */

    function escapeHtml(value) {
        if (window.CasaKitch?.escapeHtml) {
            return window.CasaKitch.escapeHtml(value);
        }

        return String(value || '')
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }
})();