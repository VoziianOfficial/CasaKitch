'use strict';



(function () {
    const config = window.CASAKITCH_CONFIG || {};

    const selectors = {
        header: '[data-site-header]',
        brand: '[data-site-brand]',
        mainNav: '[data-main-nav]',
        headerActions: '[data-header-actions]',
        mobileMenu: '[data-mobile-menu]',
        footerBrand: '[data-footer-brand]',
        footerDescription: '[data-footer-description]',
        footerDisclaimer: '[data-footer-disclaimer]',
        footerServices: '[data-footer-services]',
        footerPages: '[data-footer-pages]',
        footerLegal: '[data-footer-legal]',
        footerContact: '[data-footer-contact]',
        currentYear: '[data-current-year]',
        companyName: '[data-company-name]',
        legalDisclaimer: '[data-legal-disclaimer]',
        finalCta: '[data-final-cta]',
        form: '[data-request-form]',
        serviceSelect: '[data-service-select]',
        cookieBanner: '[data-cookie-banner]',
        accordion: '[data-accordion]'
    };

    const state = {
        mobileMenuOpen: false
    };

    document.addEventListener('DOMContentLoaded', () => {
        initThirdParty();
        injectGlobalText();
        applyConfigEverywhere();
        renderBrands();
        renderNavigation();
        renderHeaderActions();
        renderMobileMenu();
        renderFooter();
        renderFinalCta();
        renderServiceSelects();
        initHeaderScroll();
        initSmoothScroll();
        initMobileMenu();
        initAccordions();
        initForms();
        initCookieBanner();
        refreshIcons();
    });

    window.addEventListener('load', () => {
        refreshAos();
    });

    

    function qs(selector, parent = document) {
        return parent.querySelector(selector);
    }

    function qsa(selector, parent = document) {
        return Array.from(parent.querySelectorAll(selector));
    }

    function safeText(value, fallback = '') {
        if (value === null || value === undefined) {
            return fallback;
        }

        return String(value);
    }

    function escapeHtml(value) {
        return safeText(value)
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }

    function getCurrentFile() {
        const path = window.location.pathname || '';
        const file = path.split('/').filter(Boolean).pop();

        return file || 'index.html';
    }

    function isCurrentUrl(url) {
        return getCurrentFile() === url;
    }

    function getServiceByUrl(url) {
        return (config.services || []).find((service) => service.url === url);
    }

    function getCurrentService() {
        return getServiceByUrl(getCurrentFile());
    }

    function createIcon(iconName, extraClass = '') {
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', iconName);
        icon.setAttribute('aria-hidden', 'true');

        if (extraClass) {
            icon.className = extraClass;
        }

        return icon;
    }

    function refreshIcons() {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }

    function refreshAos() {
        if (window.AOS && typeof window.AOS.refreshHard === 'function') {
            window.AOS.refreshHard();
        } else if (window.AOS && typeof window.AOS.refresh === 'function') {
            window.AOS.refresh();
        }
    }

    function initThirdParty() {
        if (window.AOS && typeof window.AOS.init === 'function') {
            window.AOS.init({
                duration: 850,
                easing: 'ease-out-cubic',
                once: true,
                offset: 80,
                delay: 0,
                mirror: false
            });
        }
    }

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function setButtonLoading(button, isLoading) {
        if (!button) {
            return;
        }

        button.disabled = isLoading;
        button.classList.toggle('is-loading', isLoading);

        if (isLoading) {
            button.dataset.originalText = button.textContent.trim();
            button.textContent = 'Sending...';
        } else if (button.dataset.originalText) {
            button.textContent = button.dataset.originalText;
            delete button.dataset.originalText;
        }
    }

    

    function injectGlobalText() {
        qsa(selectors.currentYear).forEach((node) => {
            node.textContent = new Date().getFullYear();
        });

        qsa(selectors.companyName).forEach((node) => {
            node.textContent = safeText(config.company?.name, 'CasaKitch');
        });

        qsa(selectors.legalDisclaimer).forEach((node) => {
            node.textContent = safeText(config.legal?.disclaimer);
        });

        qsa('[data-contact-phone]').forEach((node) => {
            node.textContent = safeText(config.contact?.phoneDisplay);
        });

        qsa('[data-contact-email]').forEach((node) => {
            node.textContent = safeText(config.contact?.email);
        });

        qsa('[data-company-address]').forEach((node) => {
            node.textContent = safeText(config.company?.address);
        });

        qsa('[data-company-id]').forEach((node) => {
            node.textContent = safeText(config.company?.companyId);
        });

        qsa('[data-support-hours]').forEach((node) => {
            node.textContent = safeText(config.contact?.supportHours);
        });
    }

    function applyConfigEverywhere() {
        const companyName = safeText(config.company?.name, 'CasaKitch');
        const companyNameUpper = companyName.toUpperCase();

        const companyId = safeText(config.company?.companyId, 'CK-KITCH-2048');
        const address = safeText(config.company?.address, 'USA Service Area');
        const serviceArea = safeText(config.company?.serviceArea, '');

        const email = safeText(config.contact?.email, 'hello@casakitch.com');
        const phoneRaw = safeText(config.contact?.phoneRaw, '+18885550148');
        const phoneDisplay = safeText(config.contact?.phoneDisplay, '(888) 555-0148');
        const phoneButtonText = safeText(config.contact?.phoneButtonText, 'Start Your Request');
        const supportHours = safeText(config.contact?.supportHours, '');

        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

        const replacements = [
            ['CasaKitch', companyName],
            ['CASAKITCH', companyNameUpper],
            ['CK-KITCH-2048', companyId],
            ['USA Service Area', address],
            ['Independent kitchen remodeling provider matching across selected areas in the United States', serviceArea],
            ['hello@casakitch.com', email],
            ['(888) 555-0148', phoneDisplay],
            ['+18885550148', phoneRaw],
            ['Start Your Request', phoneButtonText],
            ['Mon–Fri, 8:00 AM–7:00 PM', supportHours]
        ].filter((item) => item[1] !== '');

        const replaceValue = (value) => {
            let result = safeText(value);

            replacements.forEach(([from, to]) => {
                if (!from || from === to) return;
                result = result.split(from).join(to);
            });

            return result;
        };

        const skipTags = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG']);

        const walkTextNodes = (root) => {
            const walker = document.createTreeWalker(
                root,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode(node) {
                        const parent = node.parentElement;

                        if (!parent || skipTags.has(parent.tagName)) {
                            return NodeFilter.FILTER_REJECT;
                        }

                        if (!node.nodeValue || !node.nodeValue.trim()) {
                            return NodeFilter.FILTER_REJECT;
                        }

                        return NodeFilter.FILTER_ACCEPT;
                    }
                }
            );

            const nodes = [];

            while (walker.nextNode()) {
                nodes.push(walker.currentNode);
            }

            nodes.forEach((node) => {
                node.nodeValue = replaceValue(node.nodeValue);
            });
        };

        const updateAttributes = () => {
            const attrsToReplace = [
                'alt',
                'title',
                'aria-label',
                'placeholder',
                'content',
                'value',
                'data-source',
                'data-cta-title',
                'data-cta-text',
                'data-cta-button'
            ];

            qsa('*').forEach((element) => {
                if (skipTags.has(element.tagName)) return;

                attrsToReplace.forEach((attr) => {
                    if (element.hasAttribute(attr)) {
                        element.setAttribute(attr, replaceValue(element.getAttribute(attr)));
                    }
                });
            });
        };

        const setText = (selector, value) => {
            qsa(selector).forEach((node) => {
                node.textContent = value;
            });
        };

        const setHref = (selector, value) => {
            qsa(selector).forEach((node) => {
                node.setAttribute('href', value);
            });
        };

        setText('[data-company-name], [data-site-name]', companyName);
        setText('[data-company-name-upper]', companyNameUpper);
        setText('[data-company-id]', companyId);
        setText('[data-company-address], [data-site-address]', address);
        setText('[data-service-area]', serviceArea);
        setText('[data-contact-email], [data-site-email]', email);
        setText('[data-contact-phone], [data-site-phone]', phoneDisplay);
        setText('[data-contact-phone-raw]', phoneRaw);
        setText('[data-phone-button-text]', phoneButtonText);
        setText('[data-support-hours]', supportHours);

        setHref('[data-contact-email-link], [data-site-email-link]', `mailto:${email}`);
        setHref('[data-contact-phone-link], [data-site-phone-link]', `tel:${phoneRaw}`);
        setHref('[data-company-address-link], [data-site-address-link]', mapUrl);

        qsa('a[href^="mailto:"]').forEach((link) => {
            link.href = `mailto:${email}`;

            if (link.children.length === 0 && (!link.textContent.trim() || link.textContent.includes('@'))) {
                link.textContent = email;
            }
        });

        qsa('a[href^="tel:"]').forEach((link) => {
            link.href = `tel:${phoneRaw}`;

            if (link.children.length === 0 && (!link.textContent.trim() || /[\d()+\-\s]/.test(link.textContent.trim()))) {
                link.textContent = phoneDisplay;
            }
        });

        qsa('input[name="phone"]').forEach((input) => {
            input.placeholder = phoneDisplay;
        });

        walkTextNodes(document.body);
        updateAttributes();
    }
    

    function getBrandMarkup() {
        const name = safeText(config.company?.name, 'CasaKitch');
        const accent = safeText(config.company?.accentPart, 'Kitch');

        let firstPart = name;

        if (accent && name.endsWith(accent)) {
            firstPart = name.slice(0, -accent.length);
        }

        return `
            <img class="site-brand__mark" src="${escapeHtml(config.images?.logo || 'assets/images/logo.svg')}" alt="${escapeHtml(name)} logo">
            <span class="site-brand__name">${escapeHtml(firstPart)}<span>${escapeHtml(accent)}</span></span>
        `;
    }

    function renderBrands() {
        qsa(selectors.brand).forEach((brand) => {
            brand.href = 'index.html';
            brand.classList.add('site-brand');
            brand.setAttribute('aria-label', `${safeText(config.company?.name, 'CasaKitch')} home`);
            brand.innerHTML = getBrandMarkup();
        });

        qsa(selectors.footerBrand).forEach((brand) => {
            brand.href = 'index.html';
            brand.classList.add('site-brand');
            brand.setAttribute('aria-label', `${safeText(config.company?.name, 'CasaKitch')} home`);
            brand.innerHTML = getBrandMarkup();
        });
    }

    

    function renderNavigation() {
        const navContainers = qsa(selectors.mainNav);

        navContainers.forEach((nav) => {
            nav.innerHTML = '';

            (config.navigation?.main || []).forEach((item) => {
                if (item.hasDropdown) {
                    nav.appendChild(createServicesNavItem(item));
                    return;
                }

                const link = document.createElement('a');
                link.className = 'site-nav__link';
                link.href = item.url;
                link.textContent = item.label;

                if (isCurrentUrl(item.url)) {
                    link.classList.add('is-active');
                    link.setAttribute('aria-current', 'page');
                }

                nav.appendChild(link);
            });
        });
    }

    function createServicesNavItem(item) {
        const wrapper = document.createElement('div');
        wrapper.className = 'site-nav__item';

        const link = document.createElement('a');
        link.className = 'site-nav__button';
        link.href = item.url;
        link.setAttribute('aria-haspopup', 'true');
        link.setAttribute('aria-expanded', 'false');
        link.innerHTML = `
            <span>${escapeHtml(item.label)}</span>
            <i data-lucide="chevron-down" aria-hidden="true"></i>
        `;

        if (isCurrentUrl(item.url) || getCurrentService()) {
            link.classList.add('is-active');
        }

        const dropdown = document.createElement('div');
        dropdown.className = 'services-dropdown';
        dropdown.setAttribute('data-services-dropdown', '');
        dropdown.innerHTML = `
            <div class="services-dropdown__panel">
                ${(config.services || [])
                .map((service) => {
                    return `
                            <a class="services-dropdown__link" href="${escapeHtml(service.url)}">
                                ${escapeHtml(service.title)}
                            </a>
                        `;
                })
                .join('')}
            </div>
        `;

        wrapper.addEventListener('mouseenter', () => {
            link.setAttribute('aria-expanded', 'true');
        });

        wrapper.addEventListener('mouseleave', () => {
            link.setAttribute('aria-expanded', 'false');
        });

        wrapper.addEventListener('focusin', () => {
            link.setAttribute('aria-expanded', 'true');
        });

        wrapper.addEventListener('focusout', (event) => {
            if (!wrapper.contains(event.relatedTarget)) {
                link.setAttribute('aria-expanded', 'false');
            }
        });

        wrapper.append(link, dropdown);

        return wrapper;
    }

    function renderHeaderActions() {
        qsa(selectors.headerActions).forEach((container) => {
            container.innerHTML = '';

            const phone = document.createElement('a');
            phone.className = 'header-icon-btn';
            phone.href = `tel:${safeText(config.contact?.phoneRaw)}`;
            phone.setAttribute('aria-label', `Call ${safeText(config.company?.name, 'CasaKitch')}`);
            phone.appendChild(createIcon('phone'));

            const mail = document.createElement('a');
            mail.className = 'header-icon-btn';
            mail.href = 'contact.html#form';
            mail.setAttribute('aria-label', 'Open contact form');
            mail.appendChild(createIcon('mail'));

            const toggle = document.createElement('button');
            toggle.className = 'menu-toggle';
            toggle.type = 'button';
            toggle.setAttribute('aria-label', 'Open menu');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('data-menu-toggle', '');
            toggle.appendChild(createIcon('menu'));

            container.append(phone, mail, toggle);
        });
    }

    function initHeaderScroll() {
        const header = qs(selectors.header);

        if (!header) {
            return;
        }

        const onScroll = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 12);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    

    function renderMobileMenu() {
        const menu = qs(selectors.mobileMenu);

        if (!menu) {
            return;
        }

        const pageLinks = config.navigation?.main || [];
        const services = config.services || [];

        menu.innerHTML = `
    <button class="mobile-menu__close" type="button" data-menu-close aria-label="Close menu">
        <i data-lucide="x" aria-hidden="true"></i>
    </button>

    <div class="mobile-menu__inner">
                <div class="mobile-menu__group">
                    <p class="mobile-menu__title">Navigation</p>
                    ${pageLinks
                .map((item) => {
                    return `
                                <a class="mobile-menu__link" href="${escapeHtml(item.url)}">
                                    <span>${escapeHtml(item.label)}</span>
                                </a>
                            `;
                })
                .join('')}
                </div>

                <div class="mobile-menu__group">
                    <p class="mobile-menu__title">Kitchen services</p>
                    ${services
                .map((service) => {
                    return `
                                <a class="mobile-menu__service" href="${escapeHtml(service.url)}">
                                    ${escapeHtml(service.title)}
                                </a>
                            `;
                })
                .join('')}
                </div>

                <div class="mobile-menu__group">
                    <p class="mobile-menu__title">Contact</p>
                    <div class="mobile-menu__contacts">
                        <a class="mobile-menu__contact" href="tel:${escapeHtml(config.contact?.phoneRaw || '')}">
                            <i data-lucide="phone" aria-hidden="true"></i>
                            <span>${escapeHtml(config.contact?.phoneDisplay || '')}</span>
                        </a>

                        <a class="mobile-menu__contact" href="mailto:${escapeHtml(config.contact?.email || '')}">
                            <i data-lucide="mail" aria-hidden="true"></i>
                            <span>${escapeHtml(config.contact?.email || '')}</span>
                        </a>

                        <a class="mobile-menu__contact" href="contact.html#form">
                            <i data-lucide="send" aria-hidden="true"></i>
                            <span>${escapeHtml(config.contact?.phoneButtonText || 'Start Your Request')}</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    function initMobileMenu() {
        const menu = qs(selectors.mobileMenu);
        const toggles = qsa('[data-menu-toggle]');

        if (!menu || toggles.length === 0) {
            return;
        }

        toggles.forEach((toggle) => {
            toggle.addEventListener('click', () => {
                state.mobileMenuOpen ? closeMobileMenu() : openMobileMenu();
            });

            qsa('[data-menu-close]', menu).forEach((button) => {
                button.addEventListener('click', () => {
                    closeMobileMenu();
                });
            });
        });

        qsa('a', menu).forEach((link) => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && state.mobileMenuOpen) {
                closeMobileMenu();
            }
        });
    }

    function openMobileMenu() {
        const menu = qs(selectors.mobileMenu);
        const toggles = qsa('[data-menu-toggle]');

        if (!menu) {
            return;
        }

        state.mobileMenuOpen = true;
        document.body.classList.add('menu-open');
        menu.classList.add('is-open');
        menu.setAttribute('aria-hidden', 'false');

        toggles.forEach((toggle) => {
            toggle.setAttribute('aria-label', 'Close menu');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.innerHTML = '<i data-lucide="x" aria-hidden="true"></i>';
        });

        refreshIcons();
    }

    function closeMobileMenu() {
        const menu = qs(selectors.mobileMenu);
        const toggles = qsa('[data-menu-toggle]');

        if (!menu) {
            return;
        }

        state.mobileMenuOpen = false;
        document.body.classList.remove('menu-open');
        menu.classList.remove('is-open');
        menu.setAttribute('aria-hidden', 'true');

        toggles.forEach((toggle) => {
            toggle.setAttribute('aria-label', 'Open menu');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
        });

        refreshIcons();
    }

    

    function renderFooter() {
        qsa(selectors.footerDescription).forEach((node) => {
            node.textContent = safeText(config.footer?.description);
        });

        qsa(selectors.footerDisclaimer).forEach((node) => {
            node.textContent = safeText(config.footer?.disclaimer || config.legal?.disclaimer);
        });

        qsa(selectors.footerServices).forEach((container) => {
            container.innerHTML = (config.services || [])
                .map((service) => {
                    return `
                        <li>
                            <a class="site-footer__link" href="${escapeHtml(service.url)}">
                                ${escapeHtml(service.title)}
                            </a>
                        </li>
                    `;
                })
                .join('');
        });

        qsa(selectors.footerPages).forEach((container) => {
            const pages = [
                { label: 'Home', url: 'index.html' },
                { label: 'About', url: 'about.html' },
                { label: 'All Services', url: 'all-services.html' },
                { label: 'Contact', url: 'contact.html' }
            ];

            container.innerHTML = pages
                .map((page) => {
                    return `
                        <li>
                            <a class="site-footer__link" href="${escapeHtml(page.url)}">
                                ${escapeHtml(page.label)}
                            </a>
                        </li>
                    `;
                })
                .join('');
        });

        qsa(selectors.footerLegal).forEach((container) => {
            const pages = [
                { label: 'Privacy Policy', url: 'privacy-policy.html' },
                { label: 'Terms of Service', url: 'terms-of-service.html' },
                { label: 'Cookie Policy', url: 'cookie-policy.html' }
            ];

            container.innerHTML = pages
                .map((page) => {
                    return `
                        <li>
                            <a class="site-footer__link" href="${escapeHtml(page.url)}">
                                ${escapeHtml(page.label)}
                            </a>
                        </li>
                    `;
                })
                .join('');
        });

        qsa(selectors.footerContact).forEach((container) => {
            container.innerHTML = `
                <li>
                    <a class="site-footer__link" href="mailto:${escapeHtml(config.contact?.email || '')}">
                        ${escapeHtml(config.contact?.email || '')}
                    </a>
                </li>
                <li>
                    <a class="site-footer__link" href="tel:${escapeHtml(config.contact?.phoneRaw || '')}">
                        ${escapeHtml(config.contact?.phoneDisplay || '')}
                    </a>
                </li>
                <li>
                    <span class="site-footer__text">${escapeHtml(config.company?.address || '')}</span>
                </li>
                <li>
                    <span class="site-footer__text">${escapeHtml(config.contact?.supportHours || '')}</span>
                </li>
            `;
        });
    }

    

    function renderFinalCta() {
        qsa(selectors.finalCta).forEach((container) => {
            const cta = config.cta || {};
            const image = container.dataset.ctaImage || cta.image || config.images?.commonCta || '';

            container.innerHTML = `
                <div class="container">
                    <div class="final-cta__card shine-surface" data-aos="zoom-in">
                        <div class="final-cta__bg" style="background-image: url('${escapeHtml(image)}');" aria-hidden="true"></div>
                        <div class="final-cta__content">
                            <div>
                                <h2 class="final-cta__title">${escapeHtml(container.dataset.ctaTitle || cta.heading || '')}</h2>
                                <p class="final-cta__text">${escapeHtml(container.dataset.ctaText || cta.text || '')}</p>
                            </div>

                            <div class="btn-row">
                                <a class="btn btn--gold" href="${escapeHtml(container.dataset.ctaUrl || cta.buttonUrl || 'contact.html#form')}">
                                    ${escapeHtml(container.dataset.ctaButton || cta.buttonLabel || 'Start Your Request')}
                                    <i data-lucide="arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    

    function initSmoothScroll() {
        qsa('a[href^="#"], a[href*=".html#"]').forEach((link) => {
            link.addEventListener('click', (event) => {
                const href = link.getAttribute('href');

                if (!href || !href.includes('#')) {
                    return;
                }

                const [pagePart, hashPart] = href.split('#');
                const currentFile = getCurrentFile();
                const targetPage = pagePart || currentFile;

                if (pagePart && targetPage !== currentFile) {
                    return;
                }

                const target = qs(`#${CSS.escape(hashPart)}`);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerOffset = 92;
                const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

                window.scrollTo({
                    top: targetTop,
                    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
                });

                history.pushState(null, '', `#${hashPart}`);
            });
        });
    }

    

    function initAccordions() {
        qsa(selectors.accordion).forEach((accordion) => {
            const buttons = qsa('[data-accordion-button]', accordion);

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    const item = button.closest('[data-accordion-item]');
                    const panel = item ? qs('[data-accordion-panel]', item) : null;
                    const isOpen = button.getAttribute('aria-expanded') === 'true';

                    buttons.forEach((otherButton) => {
                        const otherItem = otherButton.closest('[data-accordion-item]');
                        const otherPanel = otherItem ? qs('[data-accordion-panel]', otherItem) : null;

                        otherButton.setAttribute('aria-expanded', 'false');

                        if (otherPanel) {
                            otherPanel.classList.remove('is-open');
                            otherPanel.hidden = true;
                        }
                    });

                    if (!isOpen && panel) {
                        button.setAttribute('aria-expanded', 'true');
                        panel.hidden = false;

                        requestAnimationFrame(() => {
                            panel.classList.add('is-open');
                        });
                    }
                });
            });
        });
    }

    window.CasaKitchAccordion = {
        init: initAccordions
    };

    

    function renderServiceSelects() {
        qsa(selectors.serviceSelect).forEach((select) => {
            const selected = select.dataset.selected || '';
            const placeholder = select.dataset.placeholder || 'Select a service';

            select.innerHTML = `
                <option value="">${escapeHtml(placeholder)}</option>
                ${(config.forms?.serviceOptions || [])
                    .map((option) => {
                        return `
                            <option value="${escapeHtml(option)}"${option === selected ? ' selected' : ''}>
                                ${escapeHtml(option)}
                            </option>
                        `;
                    })
                    .join('')}
            `;
        });
    }

    function initForms() {
        qsa(selectors.form).forEach((form) => {
            form.addEventListener('submit', async (event) => {
                event.preventDefault();

                const messageBox = qs('[data-form-message]', form);
                const submitButton = qs('[type="submit"]', form);

                clearFormMessage(messageBox);

                if (!validateForm(form)) {
                    showFormMessage(messageBox, config.forms?.messages?.validation || 'Please complete the required fields.', 'error');
                    return;
                }

                const formData = new FormData(form);

                if (!formData.get('sourcePage')) {
                    formData.set('sourcePage', form.dataset.source || config.forms?.sourceDefault || document.title);
                }

                setButtonLoading(submitButton, true);

                try {
                    const response = await fetch(form.getAttribute('action') || config.forms?.endpoint || 'contact.php', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            Accept: 'application/json'
                        }
                    });

                    const result = await response.json().catch(() => null);

                    if (!response.ok || !result || result.success !== true) {
                        throw new Error(result?.message || 'Request failed');
                    }

                    form.reset();
                    renderServiceSelects();
                    showFormMessage(messageBox, result.message || config.forms?.messages?.success, 'success');
                } catch (error) {
                    showFormMessage(messageBox, config.forms?.messages?.error || error.message, 'error');
                } finally {
                    setButtonLoading(submitButton, false);
                }
            });
        });
    }

    function validateForm(form) {
        const requiredFields = qsa('[required]', form);

        return requiredFields.every((field) => {
            if (field.type === 'checkbox') {
                return field.checked;
            }

            return String(field.value || '').trim().length > 0;
        });
    }

    function clearFormMessage(messageBox) {
        if (!messageBox) {
            return;
        }

        messageBox.className = 'form-message';
        messageBox.textContent = '';
    }

    function showFormMessage(messageBox, message, type) {
        if (!messageBox) {
            return;
        }

        messageBox.textContent = message;
        messageBox.className = `form-message is-visible is-${type}`;
    }

    

    function initCookieBanner() {
        const banner = qs(selectors.cookieBanner);

        if (!banner || !config.cookieBanner) {
            return;
        }

        const storageKey = config.cookieBanner.storageKey || 'casakitch_cookie_consent';
        const saved = localStorage.getItem(storageKey);

        if (saved) {
            return;
        }

        banner.innerHTML = `
            <div class="cookie-banner__inner" role="dialog" aria-live="polite" aria-label="Cookie notice">
                <div>
                    <p class="cookie-banner__text">${escapeHtml(config.cookieBanner.text || '')}</p>
                    <div class="cookie-banner__links">
                        ${(config.cookieBanner.links || [])
                .map((link) => {
                    return `
                                    <a href="${escapeHtml(link.url)}">
                                        ${escapeHtml(link.label)}
                                    </a>
                                `;
                })
                .join('')}
                    </div>
                </div>

                <div class="cookie-banner__actions">
                    <button class="btn btn--ghost" type="button" data-cookie-cancel>
                        ${escapeHtml(config.cookieBanner.cancelLabel || 'Cancel')}
                    </button>
                    <button class="btn btn--gold" type="button" data-cookie-accept>
                        ${escapeHtml(config.cookieBanner.acceptLabel || 'Accept')}
                    </button>
                </div>
            </div>
        `;

        banner.classList.add('is-visible');

        const acceptButton = qs('[data-cookie-accept]', banner);
        const cancelButton = qs('[data-cookie-cancel]', banner);

        acceptButton?.addEventListener('click', () => {
            localStorage.setItem(storageKey, 'accepted');
            banner.classList.remove('is-visible');
        });

        cancelButton?.addEventListener('click', () => {
            localStorage.setItem(storageKey, 'cancelled');
            banner.classList.remove('is-visible');
        });
    }

    

    window.CasaKitch = {
        config,
        qs,
        qsa,
        safeText,
        escapeHtml,
        getCurrentFile,
        getCurrentService,
        getServiceByUrl,
        createIcon,
        refreshIcons,
        refreshAos,
        prefersReducedMotion,
        renderServiceSelects,
        initAccordions
    };
})();
