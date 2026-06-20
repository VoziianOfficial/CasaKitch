'use strict';

/* =========================================================
   CasaKitch — Legal Pages JS
   File: assets/js/legal.js
   ========================================================= */

(function () {
    const config = window.CASAKITCH_CONFIG || {};

    const updateLegalMeta = () => {
        const company = config.company || {};
        const contact = config.contact || {};
        const legal = config.legal || {};

        document.querySelectorAll('[data-legal-disclaimer]').forEach((element) => {
            if (legal.disclaimer) {
                element.textContent = legal.disclaimer;
            }
        });

        document.querySelectorAll('[data-contact-email]').forEach((link) => {
            if (!contact.email) return;

            link.textContent = contact.email;
            link.setAttribute('href', `mailto:${contact.email}`);
        });

        document.querySelectorAll('[data-company-address]').forEach((element) => {
            if (company.address) {
                element.textContent = company.address;
            }
        });

        document.querySelectorAll('[data-company-id]').forEach((element) => {
            if (company.companyId) {
                element.textContent = company.companyId;
            }
        });
    };

    const setActiveLegalLink = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        document.querySelectorAll('.site-footer__link').forEach((link) => {
            const href = link.getAttribute('href');

            if (href === currentPage) {
                link.setAttribute('aria-current', 'page');
            }
        });
    };

    const initLegalPage = () => {
        updateLegalMeta();
        setActiveLegalLink();

        if (window.lucide) {
            window.lucide.createIcons();
        }

        if (window.AOS) {
            window.AOS.refreshHard();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLegalPage);
    } else {
        initLegalPage();
    }
})();