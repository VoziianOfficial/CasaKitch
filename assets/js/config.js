'use strict';

window.CASAKITCH_CONFIG = {
    company: {
        name: 'CasaKitch',
        accentPart: 'Kitch',
        companyId: 'CK-KITCH-2048',
        address: 'USA Service Area',
        serviceArea: 'Independent kitchen remodeling provider matching across selected areas in the United States',
        shortDescription:
            'CasaKitch is an independent kitchen remodeling aggregator and provider-matching platform.',
        fullDescription:
            'CasaKitch helps homeowners describe kitchen remodeling goals, compare local provider options, review quote paths, and choose the provider direction that fits their project.'
    },

    contact: {
        phoneRaw: '+18885550148',
        phoneDisplay: '(888) 555-0148',
        phoneButtonText: 'Start Your Request',
        email: 'hello@casakitch.com',
        supportHours: 'Mon–Fri, 8:00 AM–7:00 PM'
    },

    navigation: {
        main: [
            {
                label: 'Home',
                url: 'index.html'
            },
            {
                label: 'About',
                url: 'about.html'
            },
            {
                label: 'Services',
                url: 'all-services.html',
                hasDropdown: true
            },
            {
                label: 'Contact',
                url: 'contact.html'
            }
        ]
    },

    services: [
        {
            title: 'Full Kitchen Remodeling',
            shortTitle: 'Full Remodel',
            url: 'full-kitchen-remodeling.html',
            image: 'assets/images/services/full-kitchen-remodeling.jpg',
            gallery: [
                'assets/images/services/full-kitchen-remodeling-gallery-1.jpg',
                'assets/images/services/full-kitchen-remodeling-gallery-2.jpg',
                'assets/images/services/full-kitchen-remodeling-gallery-3.jpg'
            ],
            icon: 'layout-template',
            kicker: 'FULL KITCHEN REMODELING',
            statement: 'FULL KITCHEN REMODELING WITH A CLEARER STARTING POINT.',
            heroHeading: 'Compare full kitchen remodeling provider options with one organized request',
            heroText:
                'CasaKitch helps homeowners start a full kitchen remodeling request, describe layout goals, material preferences, cabinet needs, lighting updates, and compare local provider paths.',
            description:
                'Explore provider options for full kitchen updates involving layout changes, cabinets, countertops, islands, backsplash details, lighting, and style direction.',
            related: [
                'cabinet-replacement.html',
                'countertop-installation.html',
                'kitchen-island-design.html'
            ]
        },
        {
            title: 'Cabinet Replacement',
            shortTitle: 'Cabinets',
            url: 'cabinet-replacement.html',
            image: 'assets/images/services/cabinet-replacement.jpg',
            gallery: [
                'assets/images/services/cabinet-replacement-gallery-1.jpg',
                'assets/images/services/cabinet-replacement-gallery-2.jpg',
                'assets/images/services/cabinet-replacement-gallery-3.jpg'
            ],
            icon: 'archive',
            kicker: 'CABINET REPLACEMENT',
            statement: 'CABINET UPDATES THAT START WITH STORAGE, STYLE, AND FIT.',
            heroHeading: 'Compare cabinet replacement options for storage, finish, and kitchen flow',
            heroText:
                'CasaKitch helps homeowners describe cabinet goals, preferred finishes, storage priorities, hardware direction, and compare local provider options for cabinet-focused updates.',
            description:
                'Review cabinet replacement paths for modern storage, cleaner lines, darker finishes, soft-close details, brass hardware, and better kitchen organization.',
            related: [
                'full-kitchen-remodeling.html',
                'countertop-installation.html',
                'backsplash-tile-work.html'
            ]
        },
        {
            title: 'Countertop Installation',
            shortTitle: 'Countertops',
            url: 'countertop-installation.html',
            image: 'assets/images/services/countertop-installation.jpg',
            gallery: [
                'assets/images/services/countertop-installation-gallery-1.jpg',
                'assets/images/services/countertop-installation-gallery-2.jpg',
                'assets/images/services/countertop-installation-gallery-3.jpg'
            ],
            icon: 'panel-top',
            kicker: 'COUNTERTOP INSTALLATION',
            statement: 'SURFACE UPGRADES BUILT AROUND MATERIALS, FUNCTION, AND STYLE.',
            heroHeading: 'Compare countertop provider options for quartz, marble, stone, and surface updates',
            heroText:
                'CasaKitch helps homeowners start a countertop-focused request, outline material preferences, edge details, island surfaces, and compare local provider options.',
            description:
                'Compare countertop paths for quartz, marble-inspired surfaces, stone textures, waterfall edges, durable prep areas, and refined kitchen surfaces.',
            related: [
                'cabinet-replacement.html',
                'kitchen-island-design.html',
                'backsplash-tile-work.html'
            ]
        },
        {
            title: 'Kitchen Island Design',
            shortTitle: 'Kitchen Island',
            url: 'kitchen-island-design.html',
            image: 'assets/images/services/kitchen-island-design.jpg',
            gallery: [
                'assets/images/services/kitchen-island-design-gallery-1.jpg',
                'assets/images/services/kitchen-island-design-gallery-2.jpg',
                'assets/images/services/kitchen-island-design-gallery-3.jpg'
            ],
            icon: 'rectangle-horizontal',
            kicker: 'KITCHEN ISLAND DESIGN',
            statement: 'ISLAND PLANNING FOR SEATING, STORAGE, AND FLOW.',
            heroHeading: 'Compare kitchen island options for seating, storage, prep space, and layout flow',
            heroText:
                'CasaKitch helps homeowners describe island goals, seating needs, storage ideas, surface preferences, and compare local provider paths for kitchen island projects.',
            description:
                'Explore kitchen island provider options for modern layouts, waterfall surfaces, storage drawers, lighting placement, seating zones, and better room flow.',
            related: [
                'full-kitchen-remodeling.html',
                'countertop-installation.html',
                'lighting-fixture-updates.html'
            ]
        },
        {
            title: 'Backsplash & Tile Work',
            shortTitle: 'Backsplash',
            url: 'backsplash-tile-work.html',
            image: 'assets/images/services/backsplash-tile-work.jpg',
            gallery: [
                'assets/images/services/backsplash-tile-work-gallery-1.jpg',
                'assets/images/services/backsplash-tile-work-gallery-2.jpg',
                'assets/images/services/backsplash-tile-work-gallery-3.jpg'
            ],
            icon: 'grid-2x2',
            kicker: 'BACKSPLASH & TILE WORK',
            statement: 'TILE AND BACKSPLASH DETAILS THAT SHAPE THE WHOLE KITCHEN.',
            heroHeading: 'Compare backsplash and tile options for texture, pattern, and kitchen character',
            heroText:
                'CasaKitch helps homeowners outline tile preferences, backsplash style, surface details, color direction, and compare local provider options.',
            description:
                'Review backsplash and tile paths for marble-style slabs, handmade tile looks, clean grid patterns, dark accents, and refined kitchen wall details.',
            related: [
                'countertop-installation.html',
                'cabinet-replacement.html',
                'lighting-fixture-updates.html'
            ]
        },
        {
            title: 'Lighting & Fixture Updates',
            shortTitle: 'Lighting',
            url: 'lighting-fixture-updates.html',
            image: 'assets/images/services/lighting-fixture-updates.jpg',
            gallery: [
                'assets/images/services/lighting-fixture-updates-gallery-1.jpg',
                'assets/images/services/lighting-fixture-updates-gallery-2.jpg',
                'assets/images/services/lighting-fixture-updates-gallery-3.jpg'
            ],
            icon: 'lamp-ceiling',
            kicker: 'LIGHTING & FIXTURE UPDATES',
            statement: 'LIGHTING AND FIXTURE CHANGES THAT REFINE THE ROOM.',
            heroHeading: 'Compare kitchen lighting and fixture options for a more polished space',
            heroText:
                'CasaKitch helps homeowners describe fixture preferences, lighting goals, finish direction, sink or faucet updates, and compare local provider paths.',
            description:
                'Explore provider options for pendant lighting, under-cabinet lighting, warm lighting plans, fixture updates, brass details, and finishing touches.',
            related: [
                'kitchen-island-design.html',
                'backsplash-tile-work.html',
                'full-kitchen-remodeling.html'
            ]
        }
    ],

    pageSections: {
        home: [
            { label: 'Start', target: '#home' },
            { label: 'Steps', target: '#steps' },
            { label: 'About', target: '#about' },
            { label: 'Services', target: '#popular-services' },
            { label: 'Questions', target: '#faq' },
            { label: 'Request', target: '#request' }
        ],

        about: [
            { label: 'Overview', target: '#overview' },
            { label: 'How It Works', target: '#how-it-works' },
            { label: 'Why Compare', target: '#why-compare' },
            { label: 'Testimonials', target: '#testimonials' },
            { label: 'FAQ', target: '#faq' },
            { label: 'Request', target: '#request' }
        ],

        allServices: [
            { label: 'Services', target: '#services' },
            { label: 'Project Fit', target: '#project-fit' },
            { label: 'Compare', target: '#compare' },
            { label: 'Steps', target: '#steps' },
            { label: 'Questions', target: '#questions' },
            { label: 'Request', target: '#request' }
        ],

        contact: [
            { label: 'Contact', target: '#contact' },
            { label: 'Form', target: '#form' },
            { label: 'Details', target: '#details' },
            { label: 'Project Notes', target: '#project-notes' },
            { label: 'FAQ', target: '#faq' },
            { label: 'Request', target: '#request' }
        ],

        service: [
            { label: 'Overview', target: '#overview' },
            { label: 'Options', target: '#options' },
            { label: 'Project Types', target: '#project-types' },
            { label: 'Process', target: '#process' },
            { label: 'Other Services', target: '#other-services' },
            { label: 'Request', target: '#request' }
        ]
    },

    images: {
        logo: 'assets/images/logo.svg',

        homeHero: [
            'assets/images/home/hero-kitchen-1.jpg',
            'assets/images/home/hero-kitchen-2.jpg',
            'assets/images/home/hero-kitchen-3.jpg',
            'assets/images/home/hero-kitchen-4.jpg'
        ],

        homeAbout: 'assets/images/home/about-kitchen-matching.jpg',
        homeFaq: 'assets/images/home/faq-kitchen.jpg',
        homeCta: 'assets/images/home/final-cta-kitchen.jpg',

        aboutHero: 'assets/images/about/about-hero.jpg',
        aboutSteps: 'assets/images/about/about-steps-kitchen.jpg',
        aboutTestimonials: 'assets/images/about/testimonials-kitchen.jpg',
        aboutCta: 'assets/images/about/about-cta.jpg',

        servicesHero: 'assets/images/services/all-services-hero.jpg',
        servicesShowcaseFallback: 'assets/images/services/full-kitchen-remodeling.jpg',
        servicesCta: 'assets/images/services/services-cta.jpg',

        contactHero: 'assets/images/contact/contact-hero.jpg',
        contactForm: 'assets/images/contact/contact-form-kitchen.jpg',
        contactPhotoOne: 'assets/images/contact/contact-project-1.jpg',
        contactPhotoTwo: 'assets/images/contact/contact-project-2.jpg',
        contactCta: 'assets/images/contact/contact-cta.jpg',

        commonCta: 'assets/images/common/kitchen-cta.jpg'
    },

    home: {
        hero: {
            kicker: 'KITCHEN REMODELING MATCHING PLATFORM',
            heading: 'Compare kitchen remodeling options for a space that feels beautifully yours',
            text:
                'CasaKitch helps homeowners compare local kitchen remodeling providers for cabinets, countertops, islands, tile, lighting, and full kitchen updates — all from one clear request.',
            primaryButton: {
                label: 'Start Your Request',
                url: 'contact.html#form'
            },
            secondaryButton: {
                label: 'Explore Services',
                url: 'all-services.html'
            }
        },

        steps: [
            {
                title: 'Describe Your Kitchen',
                text:
                    'Tell CasaKitch what you want to update — cabinets, counters, island layout, lighting, tile, or a full remodel.',
                icon: 'clipboard-list'
            },
            {
                title: 'Compare Local Options',
                text:
                    'Your request helps you review matching provider options for your kitchen remodeling project.',
                icon: 'search-check'
            },
            {
                title: 'Choose Your Direction',
                text:
                    'Compare details, project fit, and quote paths before deciding which local provider feels right.',
                icon: 'badge-check'
            }
        ],

        aboutFeatures: [
            {
                title: 'Clear Request Path',
                text: 'One organized way to describe your kitchen goals.',
                icon: 'clipboard-list'
            },
            {
                title: 'Local Provider Options',
                text: 'Compare provider paths based on your project category.',
                icon: 'search-check'
            },
            {
                title: 'Style-Led Decisions',
                text: 'Use materials, layout notes, and design details to guide the request.',
                icon: 'sparkles'
            }
        ],

        popularServices: [
            'full-kitchen-remodeling.html',
            'cabinet-replacement.html',
            'countertop-installation.html',
            'kitchen-island-design.html'
        ],

        faq: [
            {
                question: 'How does CasaKitch help with kitchen remodeling?',
                answer:
                    'CasaKitch helps homeowners start one clear kitchen remodeling request and compare local provider options for service categories such as cabinets, countertops, islands, backsplash, lighting, and full kitchen updates.'
            },
            {
                question: 'Is CasaKitch a remodeling contractor?',
                answer:
                    'No. CasaKitch is an independent kitchen remodeling aggregator and provider-matching platform. CasaKitch does not directly perform remodeling work, install products, sell materials, or act as a contractor.'
            },
            {
                question: 'What project details should I share?',
                answer:
                    'Helpful details include your project type, kitchen size, preferred materials, cabinet or countertop goals, timing, style direction, and anything you already know about your budget or layout.'
            }
        ],

        infoCards: [
            {
                title: 'Project Scope',
                text: 'Share whether your request is focused on a full remodel, cabinets, counters, tile, island planning, or lighting.'
            },
            {
                title: 'Local Matching',
                text: 'Use your request to review matching provider options in your selected service area.'
            },
            {
                title: 'Style Direction',
                text: 'Add notes about finishes, materials, storage, layout, lighting, and the overall kitchen mood you want.'
            },
            {
                title: 'Homeowner Choice',
                text: 'Compare quote paths and project fit before choosing the provider direction that feels right.'
            }
        ]
    },

    about: {
        hero: {
            kicker: 'ABOUT CASAKITCH',
            heading: 'A more organized way to begin a kitchen remodeling request',
            text:
                'CasaKitch gives homeowners a clearer starting point for comparing kitchen remodeling provider options without acting as a contractor, installer, retailer, or remodeling company.',
            image: 'assets/images/about/about-hero.jpg'
        },

        serviceCards: [
            'full-kitchen-remodeling.html',
            'cabinet-replacement.html',
            'countertop-installation.html',
            'kitchen-island-design.html'
        ],

        steps: [
            {
                title: 'Share Your Project',
                text:
                    'Describe your kitchen goals, preferred service category, material direction, timing, and any layout notes.',
                icon: 'clipboard-list'
            },
            {
                title: 'Compare Options',
                text:
                    'Review provider paths that match your request and compare details before moving forward.',
                icon: 'search-check'
            },
            {
                title: 'Choose Your Direction',
                text:
                    'Decide which provider direction best fits your kitchen goals, timeline, style, and project expectations.',
                icon: 'badge-check'
            }
        ],

        testimonials: [
            {
                name: 'Sophie Carter',
                label: 'Homeowner',
                avatar: 'assets/images/about/avatar-1.jpg',
                text:
                    'CasaKitch helped me organize my cabinet and countertop ideas before comparing provider options. The process felt much clearer.'
            },
            {
                name: 'Amelia Bennett',
                label: 'Homeowner',
                avatar: 'assets/images/about/avatar-2.jpg',
                text:
                    'I liked that I could start with a simple request and compare kitchen remodeling directions without feeling locked into one option.'
            },
            {
                name: 'Hannah Reed',
                label: 'Homeowner',
                avatar: 'assets/images/about/avatar-3.jpg',
                text:
                    'The request path made it easier to explain the island, lighting, and storage changes I wanted for my kitchen.'
            },
            {
                name: 'Olivia Morgan',
                label: 'Homeowner',
                avatar: 'assets/images/about/avatar-4.jpg',
                text:
                    'CasaKitch made the early planning stage less stressful. I could compare local provider options with better project notes.'
            },
            {
                name: 'Natalie Brooks',
                label: 'Homeowner',
                avatar: 'assets/images/about/avatar-5.jpg',
                text:
                    'I was not sure which service category fit my kitchen update. CasaKitch helped me frame the request more clearly.'
            },
            {
                name: 'Emma Lawson',
                label: 'Homeowner',
                avatar: 'assets/images/about/avatar-6.jpg',
                text:
                    'The platform gave me a simple starting point for comparing provider paths for countertops, backsplash, and lighting.'
            }
        ],

        faq: [
            {
                icon: 'badge-help',
                question: 'What makes CasaKitch different from a contractor?',
                answer:
                    'CasaKitch does not perform remodeling work. It is an independent aggregator that helps homeowners submit kitchen remodeling requests and compare local provider options.'
            },
            {
                icon: 'layout-template',
                question: 'Can I compare different kitchen project types?',
                answer:
                    'Yes. You can compare provider paths for full kitchen remodeling, cabinet replacement, countertops, kitchen islands, backsplash and tile, and lighting or fixture updates.'
            },
            {
                icon: 'sparkles',
                question: 'Do I need to know the exact design before sending a request?',
                answer:
                    'No. You can start with general goals, preferred materials, style inspiration, layout notes, and the service category that feels closest to your project.'
            },
            {
                icon: 'clipboard-list',
                question: 'What details help create a better request?',
                answer:
                    'Useful details include kitchen size, current pain points, preferred materials, timeline, service category, photos if available, and any design direction you already have in mind.'
            }
        ]
    },

    allServices: {
        hero: {
            kicker: 'CASAKITCH SERVICES',
            heading: 'Compare kitchen remodeling service paths before choosing your next step',
            text:
                'Explore the main kitchen remodeling categories homeowners can compare through CasaKitch, from full remodels to cabinets, counters, islands, tile, lighting, and fixtures.',
            image: 'assets/images/services/all-services-hero.jpg'
        },

        whyCards: [
            {
                title: 'Focused Service Paths',
                text:
                    'Choose the kitchen remodeling category that best matches your goals and project scope.',
                icon: 'route'
            },
            {
                title: 'Local Provider Matching',
                text:
                    'Use one clear request to compare provider options for your selected kitchen update.',
                icon: 'map-pin-check'
            },
            {
                title: 'Style-Led Planning',
                text:
                    'Describe materials, finishes, lighting, storage, and layout preferences before comparing options.',
                icon: 'sparkles'
            },
            {
                title: 'Homeowner Control',
                text:
                    'Review project fit and quote paths before deciding which provider direction feels right.',
                icon: 'badge-check'
            }
        ],

        materialChips: [
            {
                label: 'Quartz',
                image: 'assets/images/services/material-quartz.jpg'
            },
            {
                label: 'Marble',
                image: 'assets/images/services/material-marble.jpg'
            },
            {
                label: 'Wood Grain',
                image: 'assets/images/services/material-wood-grain.jpg'
            },
            {
                label: 'Brass Details',
                image: 'assets/images/services/material-brass.jpg'
            },
            {
                label: 'Tile Texture',
                image: 'assets/images/services/material-tile.jpg'
            },
            {
                label: 'Dark Cabinets',
                image: 'assets/images/services/material-dark-cabinets.jpg'
            },
            {
                label: 'Stone Surface',
                image: 'assets/images/services/material-stone.jpg'
            },
            {
                label: 'Warm Lighting',
                image: 'assets/images/services/material-lighting.jpg'
            }
        ]
    },

    contactPage: {
        hero: {
            kicker: 'CONTACT CASAKITCH',
            heading: 'Start with the right kitchen remodeling request',
            text:
                'Share your kitchen goals, preferred service category, material direction, and project notes so CasaKitch can help you compare local provider options.',
            image: 'assets/images/contact/contact-hero.jpg'
        }
    },

    forms: {
        endpoint: 'contact.php',
        sourceDefault: 'CasaKitch website request form',
        serviceOptions: [
            'Full Kitchen Remodeling',
            'Cabinet Replacement',
            'Countertop Installation',
            'Kitchen Island Design',
            'Backsplash & Tile Work',
            'Lighting & Fixture Updates',
            'Not Sure Yet'
        ],
        messages: {
            intro:
                'Share a few details and CasaKitch can help you compare local kitchen remodeling provider options.',
            success:
                'Thank you. Your request was received. CasaKitch will use your details to help guide the next comparison step.',
            error:
                'Something went wrong. Please check your details and try again.',
            validation:
                'Please complete the required fields before sending your request.'
        }
    },

    marquees: {
        kitchenIcons: [
            'utensils',
            'chef-hat',
            'archive',
            'panel-top',
            'layout-template',
            'paintbrush',
            'hammer',
            'ruler',
            'lamp',
            'lightbulb',
            'droplets',
            'grid-2x2',
            'home',
            'sparkles'
        ],

        detailWords: [
            'Quartz',
            'Marble',
            'Brass Handles',
            'Cabinet Lines',
            'Storage Flow',
            'Tile Rhythm',
            'Warm Lighting',
            'Island Seating',
            'Countertop Edge',
            'Backsplash Detail',
            'Layout Notes',
            'Moodboard',
            'Measurements',
            'Surface Samples',
            'Soft Close',
            'Stone Texture'
        ],

        detailIcons: [
            'ruler',
            'lamp',
            'sparkles',
            'grid-2x2',
            'panel-top',
            'archive',
            'paintbrush',
            'clipboard-list',
            'utensils',
            'home',
            'hammer',
            'badge-check'
        ]
    },

    counters: {
        default: [
            {
                value: 6,
                suffix: '',
                label: 'Kitchen service categories'
            },
            {
                value: 3,
                suffix: '',
                label: 'Simple request steps'
            },
            {
                value: 1,
                suffix: '',
                label: 'Organized project starting point'
            }
        ],

        serviceSpecific: [
            {
                value: 4,
                suffix: '',
                label: 'Material details to compare'
            },
            {
                value: 3,
                suffix: '',
                label: 'Layout choices to describe'
            },
            {
                value: 1,
                suffix: '',
                label: 'Clear request path'
            }
        ]
    },

    cta: {
        heading: 'Ready to compare kitchen remodeling options?',
        text:
            'Share your kitchen goals and start one clear request through CasaKitch.',
        buttonLabel: 'Start Your Request',
        buttonUrl: 'contact.html#form',
        image: 'assets/images/common/kitchen-cta.jpg'
    },

    footer: {
        description:
            'CasaKitch is an independent kitchen remodeling aggregator and provider-matching platform that helps homeowners compare local provider options for kitchen updates, materials, layouts, and service categories.',
        disclaimer:
            'CasaKitch is an independent kitchen remodeling aggregator and provider-matching platform. CasaKitch helps homeowners compare local provider options and does not directly perform remodeling work, install products, sell materials, or act as a contractor.',
        copyright: 'All rights reserved.'
    },

    legal: {
        disclaimer:
            'CasaKitch is not a contractor, installer, retailer, manufacturer, or remodeling company. CasaKitch helps homeowners submit requests and compare local provider options. Any project agreement is made directly between the homeowner and the selected provider.',

        noGuarantee:
            'CasaKitch does not guarantee provider availability, pricing, project timelines, workmanship, quality, outcomes, estimates, or acceptance of any request.',

        privacyIntro:
            'This Privacy Policy explains how CasaKitch may collect, use, and protect information submitted through the website when homeowners start a kitchen remodeling request.',

        termsIntro:
            'These Terms of Service explain the rules for using CasaKitch as an independent kitchen remodeling aggregator and provider-matching platform.',

        cookieIntro:
            'This Cookie Policy explains how CasaKitch may use cookies or similar technologies to support website functionality, preferences, analytics, and a smoother browsing experience.'
    },

    cookieBanner: {
        storageKey: 'casakitch_cookie_consent',
        text:
            'CasaKitch uses cookies to improve site functionality and understand basic usage. You can accept or cancel non-essential cookies.',
        acceptLabel: 'Accept',
        cancelLabel: 'Cancel',
        links: [
            {
                label: 'Privacy Policy',
                url: 'privacy-policy.html'
            },
            {
                label: 'Cookie Policy',
                url: 'cookie-policy.html'
            },
            {
                label: 'Terms of Service',
                url: 'terms-of-service.html'
            }
        ]
    }
};