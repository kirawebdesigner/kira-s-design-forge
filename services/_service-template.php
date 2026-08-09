<?php
declare(strict_types=1);

$services = [
    'mobile-applications' => [
        'name' => 'Mobile Application Development',
        'title' => 'Mobile Application Developer in Ethiopia | Kirubel Daniel',
        'description' => 'Mobile application development by Kirubel Daniel, covering product flows, responsive interfaces, APIs, authentication, data, testing, and deployment.',
        'eyebrow' => 'Service / Mobile products',
        'headline' => 'Mobile applications shaped around the complete user journey.',
        'lede' => 'Kirubel Daniel builds mobile product experiences that connect clear interaction design with backend services, data, authentication, testing, and release readiness.',
        'sectionTitle' => 'A mobile interface backed by a complete product system.',
        'paragraphs' => [
            'The work begins with the user journey, device context, essential actions, and the information a person needs at each step.',
            'The service can cover a focused mobile MVP, a companion experience for an existing platform, or a mobile-first product connected to web and backend systems.'
        ],
        'deliverables' => [
            ['Product flows', 'Navigation, user journeys, states, and mobile interaction priorities.'],
            ['Responsive interface', 'Accessible layouts, touch targets, feedback, and device adaptation.'],
            ['Connected backend', 'APIs, authentication, data synchronization, and notifications.'],
            ['Release readiness', 'Error handling, device checks, performance, and production QA.']
        ],
        'evidence' => [
            ['/work/zewijuna/', 'Mobile + web matchmaking product', 'Zewijuna'],
            ['/work/yourcloser/', 'Telegram-native commerce product', 'YourCloser']
        ],
        'questionTitle' => 'Before building a mobile application.',
        'faqs' => [
            ['Can the mobile app share a backend with a web product?', 'Yes. Shared APIs, authentication, permissions, and data models can support both interfaces when the product requires them.'],
            ['Can you help define the first release?', 'Yes. The work can begin with the smallest mobile journey that proves the core product value.'],
            ['How do we start?', 'Send the product idea, intended users, target devices, current stage, and required outcome to contact@kiraweb.pro.et.']
        ],
        'subject' => 'Mobile application project',
        'ogImage' => 'https://kiraweb.pro.et/assets/projects/zewijuna/website-card-1200.webp'
    ],
    'internal-management-systems' => [
        'name' => 'Internal Management System Development',
        'title' => 'Internal Management Systems in Ethiopia | Kirubel Daniel',
        'description' => 'Internal management system development by Kirubel Daniel for operations, records, roles, approvals, reporting, and controlled business workflows.',
        'eyebrow' => 'Service / Internal operations',
        'headline' => 'Internal systems that make operations easier to control.',
        'lede' => 'Kirubel Daniel builds management systems around records, staff roles, approvals, status visibility, reporting, and the decisions teams make every day.',
        'sectionTitle' => 'Operational clarity starts with a reliable system model.',
        'paragraphs' => [
            'An internal product should reflect how the organization actually works: who owns each action, which records matter, what can change, and where approval is required.',
            'The result can replace fragmented spreadsheets, manual handoffs, unclear status tracking, or disconnected tools with one controlled workflow.'
        ],
        'deliverables' => [
            ['Workflow model', 'Roles, records, states, decisions, and operational rules.'],
            ['Management interface', 'Dashboards, forms, search, filters, and status visibility.'],
            ['Permissions and auditability', 'Controlled access, ownership, validation, and traceable actions.'],
            ['Reporting and delivery', 'Useful summaries, export paths, deployment, and production checks.']
        ],
        'evidence' => [
            ['/work/dms/', 'Clinic administration system', 'DMS'],
            ['/work/yourcloser/', 'Commerce operations platform', 'YourCloser']
        ],
        'questionTitle' => 'Before replacing an internal workflow.',
        'faqs' => [
            ['Can the system support different staff roles?', 'Yes. Roles and permissions are designed around actual responsibilities and the data each person should access.'],
            ['Can existing records be considered?', 'Yes. The discovery phase can map current spreadsheets, databases, and operational data before a migration approach is chosen.'],
            ['How do we start?', 'Send the current process, users, records, pain points, and required outcome to contact@kiraweb.pro.et.']
        ],
        'subject' => 'Internal management system project',
        'ogImage' => 'https://kiraweb.pro.et/assets/projects/dms/dashboard-card-1200.webp'
    ],
    'realtime-product-experiences' => [
        'name' => 'Realtime Product Experience Development',
        'title' => 'Realtime Product Experiences | Kirubel Daniel',
        'description' => 'Realtime product development by Kirubel Daniel for live updates, notifications, status changes, messaging, synchronized data, and responsive user feedback.',
        'eyebrow' => 'Service / Live product behavior',
        'headline' => 'Realtime experiences that keep users and systems in sync.',
        'lede' => 'Kirubel Daniel develops live product behavior for changing status, messaging, notifications, synchronized data, and interfaces that respond clearly as events happen.',
        'sectionTitle' => 'Live updates need clear rules, not just fast technology.',
        'paragraphs' => [
            'Realtime behavior is designed around event ownership, expected latency, connection loss, stale data, permissions, and what the interface should communicate at every state.',
            'The service is suitable when users need current status, coordinated actions, active conversations, or immediate operational feedback.'
        ],
        'deliverables' => [
            ['Event model', 'Triggers, producers, consumers, state changes, and ownership.'],
            ['Live interface states', 'Connected, updating, delayed, disconnected, and recovered experiences.'],
            ['Backend delivery', 'Webhooks, queues, realtime channels, data consistency, and permissions.'],
            ['Resilience checks', 'Reconnect behavior, duplicate events, error recovery, and QA.']
        ],
        'evidence' => [
            ['/work/zewijuna/', 'Matchmaking product experience', 'Zewijuna'],
            ['/work/yourcloser/', 'Telegram commerce automation', 'YourCloser']
        ],
        'questionTitle' => 'Before adding realtime behavior.',
        'faqs' => [
            ['Does every update need to be realtime?', 'No. Realtime delivery is used only where current state materially improves the workflow. Other data can use simpler request and refresh patterns.'],
            ['What happens when the connection fails?', 'The product should communicate stale or disconnected state, retry safely, and recover without duplicating important actions.'],
            ['How do we start?', 'Send the events, users, timing expectations, current stack, and required outcome to contact@kiraweb.pro.et.']
        ],
        'subject' => 'Realtime product project',
        'ogImage' => 'https://kiraweb.pro.et/assets/projects/zewijuna/website-card-1200.webp'
    ],
    'backend-api-development' => [
        'name' => 'Backend API Development',
        'title' => 'Backend API Developer in Ethiopia | Kirubel Daniel',
        'description' => 'Backend API development by Kirubel Daniel for application logic, validation, permissions, integrations, webhooks, data access, and production reliability.',
        'eyebrow' => 'Service / Application backend',
        'headline' => 'Backend APIs designed around product rules and reliable data.',
        'lede' => 'Kirubel Daniel builds application backends that connect interfaces, databases, permissions, integrations, and operational rules through clear, dependable APIs.',
        'sectionTitle' => 'The API should express how the product actually works.',
        'paragraphs' => [
            'A useful backend starts with entities, responsibilities, permissions, validation, failure behavior, and the decisions that must remain consistent across every client.',
            'The service can support a new application, a mobile or web frontend, third-party integration, webhook workflow, or improvement of an existing backend.'
        ],
        'deliverables' => [
            ['API contract', 'Resources, actions, request shapes, responses, and version boundaries.'],
            ['Business logic', 'Validation, permissions, workflows, and consistent state transitions.'],
            ['Integration layer', 'Webhooks, external services, authentication, and failure handling.'],
            ['Production quality', 'Logging, security controls, performance checks, and documentation.']
        ],
        'evidence' => [
            ['/work/yourcloser/', 'Commerce automation backend', 'YourCloser'],
            ['/work/dms/', 'Clinic operations backend', 'DMS']
        ],
        'questionTitle' => 'Before building a backend API.',
        'faqs' => [
            ['Can the API support both web and mobile clients?', 'Yes. A shared product API can serve multiple clients while keeping validation and permissions consistent.'],
            ['Can you integrate an existing external service?', 'Yes. The work can include API clients, webhooks, authentication, mapping, retries, and observable failure handling.'],
            ['How do we start?', 'Send the product flow, clients, data sources, required integrations, and current technical constraints to contact@kiraweb.pro.et.']
        ],
        'subject' => 'Backend API project',
        'ogImage' => 'https://kiraweb.pro.et/assets/projects/yourcloser/home-card-1200.webp'
    ],
    'database-architecture' => [
        'name' => 'Database Architecture',
        'title' => 'Database Architecture in Ethiopia | Kirubel Daniel',
        'description' => 'Database architecture by Kirubel Daniel for product data models, relationships, constraints, permissions, migrations, performance, and operational reporting.',
        'eyebrow' => 'Service / Product data',
        'headline' => 'Database architecture that protects product logic and data quality.',
        'lede' => 'Kirubel Daniel designs relational data models around product entities, ownership, constraints, permissions, reporting needs, and the changes a system must support over time.',
        'sectionTitle' => 'A strong data model makes the rest of the product simpler.',
        'paragraphs' => [
            'Database design begins with the meaning of the data: what each record represents, how records relate, who owns them, and which invalid states must never be stored.',
            'The service is useful for new products, multi-tenant systems, operational tools, reporting-heavy workflows, and existing databases that have become difficult to change.'
        ],
        'deliverables' => [
            ['Domain model', 'Entities, relationships, ownership, lifecycle, and naming.'],
            ['Integrity rules', 'Keys, constraints, validation, and permission boundaries.'],
            ['Access patterns', 'Queries, indexes, reporting paths, and performance priorities.'],
            ['Change strategy', 'Migrations, compatibility, data cleanup, backup, and recovery considerations.']
        ],
        'evidence' => [
            ['/work/yourcloser/', 'Multi-tenant commerce data', 'YourCloser'],
            ['/work/dms/', 'Operational clinic data', 'DMS']
        ],
        'questionTitle' => 'Before changing a database.',
        'faqs' => [
            ['Can you improve an existing schema?', 'Yes. The current data, constraints, queries, migrations, and application dependencies are reviewed before changes are proposed.'],
            ['Do you consider permissions in database design?', 'Yes. Ownership and access boundaries are part of the model, especially for multi-tenant and operational systems.'],
            ['How do we start?', 'Send the product model, current schema if one exists, key queries, pain points, and required outcome to contact@kiraweb.pro.et.']
        ],
        'subject' => 'Database architecture project',
        'ogImage' => 'https://kiraweb.pro.et/assets/projects/dms/dashboard-card-1200.webp'
    ],
    'authentication-permissions' => [
        'name' => 'Authentication and Permissions',
        'title' => 'Authentication and Permissions Development | Kirubel Daniel',
        'description' => 'Authentication and authorization development by Kirubel Daniel for account access, roles, permissions, tenant boundaries, sessions, and secure product workflows.',
        'eyebrow' => 'Service / Product access',
        'headline' => 'Authentication and permissions built around real responsibilities.',
        'lede' => 'Kirubel Daniel implements account access, roles, tenant boundaries, sessions, and authorization rules that match what each user is actually allowed to do.',
        'sectionTitle' => 'Identity confirms the user. Authorization protects the action.',
        'paragraphs' => [
            'Access control begins with users, organizations, resources, ownership, staff responsibilities, and the actions that must be allowed or denied in each context.',
            'The service can support customer accounts, staff portals, multi-tenant SaaS products, administrative tools, and improvements to an existing authorization model.'
        ],
        'deliverables' => [
            ['Identity flow', 'Registration, login, verification, recovery, and session behavior.'],
            ['Authorization model', 'Roles, permissions, ownership, policies, and protected actions.'],
            ['Tenant boundaries', 'Organization membership, data isolation, and administrative scope.'],
            ['Security validation', 'Input handling, failure responses, session controls, and access tests.']
        ],
        'evidence' => [
            ['/work/yourcloser/', 'Multi-tenant SaaS permissions', 'YourCloser'],
            ['/work/dms/', 'Staff and clinic access', 'DMS']
        ],
        'questionTitle' => 'Before implementing product access.',
        'faqs' => [
            ['What is the difference between authentication and authorization?', 'Authentication confirms who a user is. Authorization determines which resources and actions that user can access.'],
            ['Can permissions vary by organization or tenant?', 'Yes. Membership, roles, ownership, and organization boundaries can be represented explicitly in the access model.'],
            ['How do we start?', 'Send the user types, protected resources, required actions, current authentication state, and security constraints to contact@kiraweb.pro.et.']
        ],
        'subject' => 'Authentication and permissions project',
        'ogImage' => 'https://kiraweb.pro.et/assets/projects/yourcloser/home-card-1200.webp'
    ],
    'deployment-production-qa' => [
        'name' => 'Deployment and Production QA',
        'title' => 'Deployment and Production QA | Kirubel Daniel',
        'description' => 'Deployment and production QA by Kirubel Daniel for static sites and applications, including configuration, security headers, performance, accessibility, and release checks.',
        'eyebrow' => 'Service / Production delivery',
        'headline' => 'Deployment and QA that carry the product safely into production.',
        'lede' => 'Kirubel Daniel prepares websites and applications for production through deployment configuration, security controls, performance checks, accessibility review, and route-level validation.',
        'sectionTitle' => 'A release is complete when the production experience works.',
        'paragraphs' => [
            'Production QA checks the deployed system rather than assuming the local build represents the real user experience. Routes, assets, headers, caching, redirects, forms, and integrations are verified in context.',
            'The service can support a new release, migration, performance pass, deployment repair, or a final readiness audit before launch.'
        ],
        'deliverables' => [
            ['Deployment configuration', 'Build output, environment, routing, redirects, domains, and HTTPS.'],
            ['Quality checks', 'Responsive routes, forms, links, images, console output, and error states.'],
            ['Performance and access', 'Loading behavior, caching, accessibility, metadata, and crawlability.'],
            ['Production evidence', 'Repeatable checks, screenshots, measured results, and known limitations.']
        ],
        'evidence' => [
            ['/work/kiraestate/', 'Responsive public deployment', 'KiraEstate'],
            ['/work/majestic/', 'Corporate site delivery', 'Majestic']
        ],
        'questionTitle' => 'Before a production release.',
        'faqs' => [
            ['Can you audit an already deployed site?', 'Yes. The live routes, headers, assets, forms, responsive behavior, accessibility, performance, and search configuration can be checked directly.'],
            ['Can you fix deployment configuration?', 'Yes, when the hosting platform and required access are available. Infrastructure limits that cannot be changed in the repository are documented clearly.'],
            ['How do we start?', 'Send the repository, deployment URL, hosting platform, known issues, and release goal to contact@kiraweb.pro.et.']
        ],
        'subject' => 'Deployment and production QA project',
        'ogImage' => 'https://kiraweb.pro.et/assets/projects/majestic/hero-card-1200.webp'
    ]
];

$service = isset($serviceSlug) ? ($services[$serviceSlug] ?? null) : null;
if (!$service) {
    http_response_code(404);
    exit('Service not found');
}

$canonical = 'https://kiraweb.pro.et/services/' . $serviceSlug . '/';
$escape = static fn(string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$schema = [
    '@context' => 'https://schema.org',
    '@graph' => [
        [
            '@type' => 'Service',
            'name' => $service['name'],
            'description' => $service['description'],
            'areaServed' => ['@type' => 'Country', 'name' => 'Ethiopia'],
            'provider' => ['@type' => 'Person', '@id' => 'https://kiraweb.pro.et/#person', 'name' => 'Kirubel Daniel', 'url' => 'https://kiraweb.pro.et/'],
            'url' => $canonical
        ],
        [
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => 'https://kiraweb.pro.et/'],
                ['@type' => 'ListItem', 'position' => 2, 'name' => $service['name'], 'item' => $canonical]
            ]
        ]
    ]
];
?>
<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title><?= $escape($service['title']) ?></title><meta name="description" content="<?= $escape($service['description']) ?>"><meta name="robots" content="index, follow, max-image-preview:large"><meta name="theme-color" content="#faf7f3">
<link rel="canonical" href="<?= $canonical ?>"><link rel="icon" href="/assets/kirubel-mark.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/service-pages.css?v=20260809-2">
<meta property="og:type" content="website"><meta property="og:url" content="<?= $canonical ?>"><meta property="og:title" content="<?= $escape($service['name']) ?> | Kirubel Daniel"><meta property="og:description" content="<?= $escape($service['description']) ?>"><meta property="og:image" content="<?= $service['ogImage'] ?>"><meta property="og:image:alt" content="<?= $escape($service['name']) ?> by Kirubel Daniel">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="<?= $escape($service['name']) ?> | Kirubel Daniel"><meta name="twitter:description" content="<?= $escape($service['description']) ?>"><meta name="twitter:image" content="<?= $service['ogImage'] ?>">
<script type="application/ld+json"><?= json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?></script>
</head><body><a class="skip" href="#content">Skip to content</a><header class="main-header"><div class="main-header__bar"><a class="brand" href="/" aria-label="Kirubel Daniel home">Kirubel</a><nav aria-label="Primary"><a href="/">Home</a><a href="/work/">Work</a><a href="/#contact">Contact</a></nav></div></header>
<main id="content"><section class="hero"><div class="shell"><p class="eyebrow"><?= $escape($service['eyebrow']) ?></p><h1><?= $escape($service['headline']) ?></h1><p class="lede"><?= $escape($service['lede']) ?></p><div class="actions"><a class="button button--dark" href="mailto:contact@kiraweb.pro.et?subject=<?= rawurlencode($service['subject']) ?>">Discuss this service</a><a class="button" href="/work/">View selected work</a></div></div></section>
<section class="section"><div class="shell section-grid"><p class="kicker">What the service covers</p><div><h2><?= $escape($service['sectionTitle']) ?></h2><div class="body-copy"><?php foreach ($service['paragraphs'] as $paragraph): ?><p><?= $escape($paragraph) ?></p><?php endforeach; ?></div><div class="deliverables"><?php foreach ($service['deliverables'] as [$title, $copy]): ?><div class="deliverable"><strong><?= $escape($title) ?></strong><span><?= $escape($copy) ?></span></div><?php endforeach; ?></div></div></div></section>
<section class="section"><div class="shell section-grid"><p class="kicker">Relevant work</p><div><h2>Evidence from connected product work.</h2><div class="evidence"><?php foreach ($service['evidence'] as [$url, $label, $name]): ?><a href="<?= $url ?>"><span><?= $escape($label) ?></span><strong><?= $escape($name) ?> ↗</strong></a><?php endforeach; ?></div></div></div></section>
<section class="section"><div class="shell section-grid"><p class="kicker">Questions</p><div><h2><?= $escape($service['questionTitle']) ?></h2><div class="faq"><?php foreach ($service['faqs'] as [$question, $answer]): ?><details><summary><?= $escape($question) ?></summary><p><?= $escape($answer) ?></p></details><?php endforeach; ?></div></div></div></section></main>
<section class="cta"><div class="shell cta-grid"><div><p class="kicker">Start a conversation</p><h2>Have a product or system to improve?</h2></div><a class="button" href="mailto:contact@kiraweb.pro.et?subject=<?= rawurlencode($service['subject']) ?>">contact@kiraweb.pro.et</a></div></section><footer><div class="shell footer-row"><span>© 2026 Kirubel Daniel</span><span>Full-Stack Product Builder, Addis Ababa</span></div></footer></body></html>
