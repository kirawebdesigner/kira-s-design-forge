(() => {
  const EMAIL = "contact@kiraweb.pro.et";
  const MANIFESTO = "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";
  const MANIFESTO_PHRASES = [
    "From idea",
    "to launch.",
    "Clean, scalable",
    "digital products",
    "built to move fast,",
    "stay simple,",
    "and perform",
    "in real-world use,",
    "driven by clarity,",
    "structured systems,",
    "and intentional design.",
  ];
  const projects = [
    ["Zewijuna", "Mobile & Web Matchmaking Product", "/work/zewijuna/", "/assets/projects/zewijuna/website-desktop.png", "Zewijuna matchmaking website landing page"],
    ["YourCloser", "Telegram Commerce Automation SaaS", "/work/yourcloser/", "/assets/projects/yourcloser/home-desktop.png", "YourCloser Telegram commerce automation dashboard"],
    ["DMS", "Dental Operations Management System", "/work/dms/", "/assets/projects/dms/dentalcare-admin-dashboard.png", "DentalCare administration dashboard with clinic metrics and operations"],
    ["Pommy", "Restaurant Commerce & Ordering Website", "/work/pommy/", "/assets/projects/pommy/home-desktop.png", "Pommy restaurant commerce website homepage"],
    ["Majestic", "Corporate Digital Experience", "/work/majestic/", "/assets/projects/majestic/provided-hero.png", "Majestic Trading PLC corporate website hero"],
  ];

  const services = [
    ["Full-Stack Product Development", "Web Applications · Product Systems · Deployment"],
    ["Mobile Application Development", "Expo · React Native · Supabase"],
    ["SaaS and Business Automation", "Multi-Tenant Systems · Workflows · Telegram Automation"],
    ["Backend and Database Systems", "FastAPI · PostgreSQL · Supabase · APIs"],
    ["Internal Management Systems", "Role-Based Workflows · Dashboards · Operational Tools"],
    ["Product UI Implementation", "Responsive Interfaces · Interaction · Design Systems"],
  ];

  const principles = [
    ["Start with the real problem", "I map the workflow, user roles, and business need before writing the interface."],
    ["Build the complete product", "I work across frontend, backend, database logic, integrations, and deployment."],
    ["Design for real operations", "Products should survive actual users, edge cases, permissions, and changing data."],
    ["Improve through testing", "I validate responsive behavior, flows, errors, and usability before calling a build finished."],
  ];

  const capabilities = [
    "Full-Stack Web Applications",
    "Mobile Applications",
    "SaaS Platforms",
    "Business Automation",
    "Internal Management Systems",
    "Realtime Product Experiences",
    "Backend APIs",
    "Database Architecture",
    "Authentication and Permissions",
    "Deployment and Production QA",
  ];

  const replaceSection = (selector, className, markup) => {
    const section = document.querySelector(selector);
    if (!section) return null;
    section.className = `portfolio-restored-section ${className}`;
    section.removeAttribute("style");
    section.innerHTML = `<div class="portfolio-shell">${markup}</div>`;
    return section;
  };

  const setupManifesto = () => {
    const section = document.querySelector('[data-framer-name="Quote Section"]');
    if (!section) return;

    section.className = "portfolio-manifesto-section";
    section.removeAttribute("style");
    section.innerHTML = `<div class="portfolio-manifesto-sticky">
      <p class="portfolio-sr-only">${MANIFESTO}</p>
      <p class="portfolio-manifesto-text" aria-hidden="true">
        ${MANIFESTO_PHRASES.map((phrase, index) => `<span class="portfolio-manifesto-phrase" data-readalong-index="${index}">${phrase}</span>`).join("")}
      </p>
    </div>`;

    const phrases = [...section.querySelectorAll(".portfolio-manifesto-phrase")];
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const render = () => {
      frame = 0;
      if (reducedMotion.matches) {
        phrases.forEach((phrase) => {
          phrase.style.opacity = "1";
          phrase.style.transform = "none";
        });
        section.dataset.readalongProgress = "1.000";
        return;
      }

      const rect = section.getBoundingClientRect();
      const startTop = innerHeight * 0.78;
      const travel = Math.max(1, rect.height - innerHeight * 0.03);
      const progress = Math.min(1, Math.max(0, (startTop - rect.top) / travel));
      const spread = phrases.length + 1.6;

      phrases.forEach((phrase, index) => {
        const local = Math.min(1, Math.max(0, progress * spread - index));
        const eased = local * local * (3 - 2 * local);
        phrase.style.opacity = String(0.16 + eased * 0.84);
        phrase.style.transform = `translateY(${(1 - eased) * 0.08}em)`;
      });
      section.dataset.readalongProgress = progress.toFixed(3);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule, { passive: true });
    reducedMotion.addEventListener?.("change", schedule);
    render();
  };

  const normalizeInternalLinks = () => {
    const projectsByPath = new Map([
      ["zewijuna", "/work/zewijuna/"],
      ["yourcloser", "/work/yourcloser/"],
      ["dms", "/work/dms/"],
      ["pommy", "/work/pommy/"],
      ["majestic", "/work/majestic/"],
    ]);

    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return;
      let url;
      try { url = new URL(href, location.href); } catch { return; }
      if (url.origin !== location.origin) return;

      const projectMatch = url.pathname.match(/\/work\/(zewijuna|yourcloser|dms|pommy|majestic)(?:\/index\.html)?\/?$/i);
      if (projectMatch) {
        link.setAttribute("href", `${projectsByPath.get(projectMatch[1].toLowerCase())}${url.hash}`);
        return;
      }
      if (/\/work(?:\/index\.html)?\/?$/i.test(url.pathname)) {
        link.setAttribute("href", `/work/${url.hash}`);
        return;
      }
      if (/\/(?:index\.html)?$/i.test(url.pathname)) {
        const hashMap = {
          "#hero-section": "/",
          "#bio-section": "/#bio-section",
          "#services": "/#services",
          "#contact": "/#contact",
        };
        link.setAttribute("href", hashMap[url.hash] || `/${url.hash}`);
      }
    });
  };

  const recoverGeneratedContent = () => {
    document.querySelectorAll("main [style]").forEach((element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      if (!rect.width || !rect.height || style.display === "none" || style.visibility === "hidden") return;
      if (Number(style.opacity) <= 0.01) element.style.opacity = "1";
      if (style.filter.includes("blur") && Number(style.opacity) > 0.01) element.style.filter = "none";
    });
  };

  const enhanceNavigation = () => {
    const triggers = [...document.querySelectorAll('nav [data-framer-name="Variant 1"][tabindex]')];
    if (!triggers.length) return;

    let overlay = document.querySelector("#portfolio-menu-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "portfolio-menu-overlay";
      overlay.className = "portfolio-menu-overlay";
      overlay.hidden = true;
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-labelledby", "portfolio-menu-title");
      overlay.innerHTML = `<div class="portfolio-menu-panel">
        <div class="portfolio-menu-head"><p id="portfolio-menu-title">Kirubel Daniel</p><button type="button" class="portfolio-menu-close" aria-label="Close navigation">Close</button></div>
        <nav aria-label="Main navigation"><a href="/">Home</a><a href="/work/">Work</a><a href="/#services">Capabilities</a><a href="/#contact">Contact</a></nav>
        <div class="portfolio-menu-meta"><span>Full-Stack Product Builder</span><span>Addis Ababa, Ethiopia</span><a href="mailto:${EMAIL}">${EMAIL}</a></div>
      </div>`;
      document.body.appendChild(overlay);
    }

    let returnFocus = null;
    const closeButton = overlay.querySelector(".portfolio-menu-close");
    const setExpanded = (expanded) => triggers.forEach((trigger) => {
      trigger.setAttribute("aria-expanded", String(expanded));
      trigger.setAttribute("aria-label", expanded ? "Close navigation" : "Open navigation");
    });
    const closeMenu = () => {
      if (overlay.hidden) return;
      overlay.hidden = true;
      document.documentElement.classList.remove("portfolio-menu-open");
      setExpanded(false);
      returnFocus?.focus();
    };
    const openMenu = (trigger) => {
      returnFocus = trigger;
      overlay.hidden = false;
      document.documentElement.classList.add("portfolio-menu-open");
      setExpanded(true);
      closeButton.focus();
    };

    triggers.forEach((trigger, index) => {
      trigger.setAttribute("role", "button");
      trigger.setAttribute("aria-controls", "portfolio-menu-overlay");
      trigger.setAttribute("aria-label", trigger.getAttribute("aria-label") || "Open navigation");
      trigger.setAttribute("aria-expanded", trigger.getAttribute("aria-expanded") || "false");
      if (!trigger.id) trigger.id = `portfolio-menu-trigger-${index + 1}`;
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (overlay.hidden) openMenu(trigger);
        else closeMenu();
      });
      trigger.addEventListener("keydown", (event) => {
        if (event.key === " " || event.key === "Enter") {
          event.preventDefault();
          if (overlay.hidden) openMenu(trigger);
          else closeMenu();
        }
      });
    });

    closeButton.addEventListener("click", closeMenu);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeMenu();
    });
    overlay.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (overlay.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = [...overlay.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  };

  const enhanceWorkIndex = () => {
    const route = location.pathname.replace(/index\.html$/i, "").replace(/\/+$/, "/");
    if (route !== "/work/") return;
    const grid = document.querySelector(".framer-11sjdg9");
    grid?.classList.add("portfolio-work-grid");
    document.querySelectorAll('a[href^="/work/"]').forEach((card) => {
      const destination = new URL(card.href).pathname;
      if (!/^\/work\/(zewijuna|yourcloser|dms|pommy|majestic)\/$/i.test(destination)) return;
      const item = card.closest(".framer-qedad4-container") || card.parentElement;
      item?.classList.add("portfolio-work-card-item");
      if (destination === "/work/majestic/") item?.classList.add("portfolio-work-card-item--last");
    });
  };

  const addPageContact = () => {
    if (!location.pathname.startsWith("/work") || document.querySelector(".portfolio-page-contact")) return;
    const section = document.createElement("section");
    section.className = "portfolio-page-contact";
    section.setAttribute("aria-labelledby", "portfolio-page-contact-title");
    section.innerHTML = `<div class="portfolio-shell portfolio-page-contact-inner">
      <p class="portfolio-kicker">Start a conversation</p>
      <h2 id="portfolio-page-contact-title">Have a product or system to build?</h2>
      <a href="mailto:${EMAIL}">Let’s talk <span aria-hidden="true">↗</span></a>
    </div>`;
    const root = document.querySelector("#main") || document.querySelector("main");
    if (root) root.insertAdjacentElement("afterend", section);
  };

  const addFullPageProjectEvidence = () => {
    const route = location.pathname.replace(/index\.html$/i, "").replace(/\/+$/, "/");
    const evidence = {
      "/work/zewijuna/": {
        label: "Web product",
        title: "Zewijuna landing page, from first impression to final CTA",
        src: "/assets/projects/zewijuna/website-fullpage.png",
        width: 1920,
        height: 10743,
        alt: "Full Zewijuna matchmaking website landing page showing the product introduction, community, matching, testimonials, process, questions, and signup sections",
      },
      "/work/pommy/": {
        label: "Website experience",
        title: "Pommy homepage, menu discovery, ordering, and restaurant story",
        src: "/assets/projects/pommy/website-fullpage.png",
        width: 1705,
        height: 14655,
        alt: "Full Pommy restaurant homepage showing the food hero, menu categories, product cards, restaurant story, ordering call to action, articles, location, and footer",
      },
      "/work/majestic/": {
        label: "Corporate experience",
        title: "Majestic Trading PLC, presented as one connected service system",
        src: "/assets/projects/majestic/website-fullpage.png",
        width: 1808,
        height: 13823,
        alt: "Full Majestic Trading PLC website showing the corporate hero, services, process, projects, contact form, and footer",
      },
    }[route];
    if (!evidence || document.querySelector(".portfolio-fullpage-evidence")) return;

    const section = document.createElement("section");
    section.className = "portfolio-fullpage-evidence";
    section.setAttribute("aria-labelledby", "portfolio-fullpage-evidence-title");
    section.innerHTML = `<div class="portfolio-shell">
      <div class="portfolio-fullpage-evidence-head">
        <p class="portfolio-kicker">${evidence.label}</p>
        <h2 id="portfolio-fullpage-evidence-title">${evidence.title}</h2>
      </div>
      <figure><img src="${evidence.src}" width="${evidence.width}" height="${evidence.height}" alt="${evidence.alt}" loading="lazy" decoding="async"><figcaption>Full-page project capture. Scroll to review the complete experience.</figcaption></figure>
    </div>`;
    const root = document.querySelector("#main") || document.querySelector("main");
    if (root) root.insertAdjacentElement("afterend", section);
  };

  const buildFooter = () => {
    document.querySelectorAll("footer").forEach((footer) => {
      const wrapper = footer.closest(".framer-1p2pwmk-container");
      (wrapper || footer).remove();
    });

    const footer = document.createElement("footer");
    footer.className = "portfolio-footer";
    footer.id = "site-footer";
    footer.innerHTML = `<div class="portfolio-shell">
      <div class="portfolio-footer-main">
        <p class="portfolio-footer-statement">Building products, systems, and digital tools that work beyond the screen.</p>
        <nav aria-label="Footer navigation"><h2>Quick links</h2><a href="/">Home</a><a href="/work/">Work</a><a href="/#services">Capabilities</a><a href="/#contact">Contact</a></nav>
        <div class="portfolio-footer-contact"><h2>Contact</h2><p class="portfolio-footer-identity"><strong>Kirubel Daniel</strong><br>Full-Stack Product Builder</p><p>Addis Ababa, Ethiopia</p><a href="mailto:${EMAIL}">${EMAIL}</a></div>
      </div>
      <p class="portfolio-footer-wordmark" aria-label="Kirubel">KIRUBEL</p>
      <div class="portfolio-footer-bottom"><span>© ${new Date().getFullYear()} Kirubel Daniel</span><span>Designed and built in Addis Ababa, Ethiopia</span></div>
    </div>`;
    document.body.appendChild(footer);
  };

  const initialize = () => {
    const isHomepage = Boolean(document.querySelector('[data-framer-name="Bio Section"]') && document.querySelector('[data-framer-name="Quote Section"]'));
    if (isHomepage) {
    const heroDecorations = [...document.querySelectorAll("#hero-section img")]
      .filter((image) => image.getAttribute("src")?.includes("assets/projects/"));
    heroDecorations.forEach((image) => {
      const wrapper = image.closest('[data-framer-background-image-wrapper="true"]')?.parentElement;
      if (wrapper) wrapper.style.display = "none";
    });

    document.querySelectorAll('[data-framer-name^="Avatar -"] img').forEach((image) => {
      image.src = "/assets/kirubel-profile.jpg";
      image.alt = "Portrait of Kirubel Daniel";
      image.style.objectFit = "cover";
      image.style.objectPosition = "center 24%";
    });

    const hero = document.querySelector("#hero-section");
    if (hero && !hero.querySelector(".portfolio-hero-decoration")) {
      [["star", "/assets/hero-accent.svg"], ["bolt", "/assets/hero-bolt.png"]].forEach(([name, src]) => {
        const accent = document.createElement("img");
        accent.className = `portfolio-hero-decoration portfolio-hero-decoration--${name}`;
        accent.src = src;
        accent.alt = "";
        accent.setAttribute("aria-hidden", "true");
        accent.decoding = "sync";
        hero.appendChild(accent);
      });
    }
    setupManifesto();
    replaceSection('[data-framer-name="Services Section"]', "portfolio-services", `
      <div class="portfolio-section-head portfolio-reveal"><h2>Services</h2></div>
      <div class="portfolio-service-list">
        ${services.map(([title, detail]) => `<article class="portfolio-service-row portfolio-reveal"><h3>${title}</h3><p>${detail}</p></article>`).join("")}
      </div>`);

    replaceSection(".framer-1ut795m", "portfolio-projects", `
      <div class="portfolio-section-head portfolio-reveal">
        <h2>Featured<br>Projects</h2>
        <a class="portfolio-text-link" href="/work/">View all projects ↗</a>
      </div>
      <div class="portfolio-project-grid">
        ${projects.map(([name, category, href, src, alt]) => `
          <a class="portfolio-project-card portfolio-reveal" href="${href}">
            <div class="portfolio-project-media"><img src="${src}" alt="${alt}" loading="eager" decoding="sync"></div>
            <div class="portfolio-project-copy"><h3>${name}</h3><p>${category}</p></div>
          </a>`).join("")}
      </div>`);

    const testimonialSections = document.querySelectorAll('[data-framer-name="Testimonials Section"]');
    const mindset = testimonialSections[0];
    if (mindset) {
      mindset.className = "portfolio-restored-section portfolio-mindset";
      mindset.removeAttribute("style");
      mindset.innerHTML = `<div class="portfolio-shell">
        <h2 class="portfolio-reveal">Builder Mindset</h2>
        <p class="portfolio-mindset-intro portfolio-reveal">I build beyond the interface—through the workflows, data, permissions, deployment, and operational details that make software useful.</p>
        <div class="portfolio-principles">
          ${principles.map(([title, body], index) => `<article class="portfolio-principle portfolio-reveal"><span class="portfolio-principle-index">0${index + 1}</span><h3>${title}</h3><p>${body}</p></article>`).join("")}
        </div>
      </div>`;
    }

    const capabilitySection = testimonialSections[1];
    if (capabilitySection) {
      capabilitySection.className = "portfolio-restored-section portfolio-capabilities";
      capabilitySection.removeAttribute("style");
      capabilitySection.innerHTML = `<div class="portfolio-shell">
        <h2 class="portfolio-reveal">Capabilities</h2>
        <div class="portfolio-capability-list">
          ${capabilities.map((item, index) => `<div class="portfolio-capability portfolio-reveal"><span>${String(index + 1).padStart(2, "0")}</span><strong>${item}</strong><span aria-hidden="true">↗</span></div>`).join("")}
        </div>
      </div>`;
    }

    replaceSection("#contact", "portfolio-contact", `
      <div class="portfolio-contact-layout">
        <div class="portfolio-contact-copy portfolio-reveal">
          <p class="portfolio-kicker">Start a conversation</p>
          <h2>Let’s talk.</h2>
          <p>Have a product, system, or business workflow that needs to become working software? Tell me what you’re building.</p>
          <a href="mailto:${EMAIL}">${EMAIL}</a>
        </div>
        <form class="portfolio-contact-form portfolio-reveal" id="portfolio-contact-form">
          <label class="portfolio-field"><span>Name</span><input name="name" type="text" autocomplete="name" required placeholder="Your name"></label>
          <label class="portfolio-field"><span>Email</span><input name="email" type="email" autocomplete="email" required placeholder="Your email address"></label>
          <label class="portfolio-field"><span>Project / message</span><textarea name="message" required placeholder="Tell me about the product, system, or workflow"></textarea></label>
          <button type="submit">Open email draft ↗</button>
          <p class="portfolio-form-note">Submitting opens your email app with this message prefilled. Nothing is sent automatically.</p>
        </form>
      </div>`);
    }

    normalizeInternalLinks();
    enhanceWorkIndex();
    enhanceNavigation();
    addPageContact();
    addFullPageProjectEvidence();
    buildFooter();

    document.querySelectorAll('a[href^="mailto:contact@kiraweb.pro.et"]').forEach((link) => {
      link.href = `mailto:${EMAIL}`;
      link.textContent = EMAIL;
    });

    const form = document.querySelector("#portfolio-contact-form");
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();
      const subject = `Portfolio inquiry from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`;
      const draft = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      form.dataset.mailtoDraft = draft;
      window.location.href = draft;
    });

    const reveals = [...document.querySelectorAll(".portfolio-reveal")];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }), { rootMargin: "0px 0px -8%", threshold: 0.05 });
      reveals.forEach((element) => observer.observe(element));
    }

    requestAnimationFrame(() => {
      recoverGeneratedContent();
      document.documentElement.dataset.portfolioReady = "true";
    });
    setTimeout(recoverGeneratedContent, 900);
    setTimeout(() => {
      recoverGeneratedContent();
      document.documentElement.dataset.portfolioStable = "true";
    }, 1800);
    addEventListener("pageshow", recoverGeneratedContent);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
