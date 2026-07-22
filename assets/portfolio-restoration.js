(() => {
  const EMAIL = "contact@kira.pro.et";
  const TRIGGER = 'nav [data-framer-name="Variant 1"][tabindex]';
  let returnFocus = null;

  const getOverlay = () => document.querySelector("#portfolio-menu-overlay");
  const setExpanded = (expanded) => document.querySelectorAll(TRIGGER).forEach((trigger) => {
    trigger.setAttribute("aria-expanded", String(expanded));
    trigger.setAttribute("aria-label", expanded ? "Close navigation" : "Open navigation");
  });

  const closeMenu = () => {
    const overlay = getOverlay();
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    document.documentElement.classList.remove("portfolio-menu-open");
    setExpanded(false);
    returnFocus?.focus();
  };

  const openMenu = (trigger) => {
    const overlay = getOverlay();
    if (!overlay) return;
    returnFocus = trigger;
    overlay.hidden = false;
    document.documentElement.classList.add("portfolio-menu-open");
    setExpanded(true);
    overlay.querySelector(".portfolio-menu-close")?.focus();
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(TRIGGER);
    if (trigger) {
      event.preventDefault();
      const overlay = getOverlay();
      if (overlay?.hidden) openMenu(trigger);
      else closeMenu();
      return;
    }

    const overlay = getOverlay();
    if (!overlay || overlay.hidden) return;
    if (event.target === overlay || event.target.closest(".portfolio-menu-close") || event.target.closest("#portfolio-menu-overlay a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    const trigger = event.target.closest?.(TRIGGER);
    if (trigger && (event.key === " " || event.key === "Enter")) {
      event.preventDefault();
      const overlay = getOverlay();
      if (overlay?.hidden) openMenu(trigger);
      else closeMenu();
      return;
    }

    const overlay = getOverlay();
    if (!overlay || overlay.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...overlay.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')];
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

  document.addEventListener("submit", (event) => {
    const form = event.target.closest?.("#portfolio-contact-form");
    if (!form) return;
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
    location.href = draft;
  });
})();
