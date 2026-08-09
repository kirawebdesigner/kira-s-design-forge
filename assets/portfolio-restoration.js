(() => {
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

  document.addEventListener("submit", async (event) => {
    const form = event.target.closest?.("#portfolio-contact-form");
    if (!form) return;
    event.preventDefault();
    if (!form.reportValidity()) return;
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector("#portfolio-form-status");
    button.disabled = true;
    button.textContent = "Sending…";
    status.textContent = "Sending your message…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "The message could not be sent.");
      form.reset();
      status.textContent = result.message;
      button.textContent = "Message sent ✓";
    } catch (error) {
      status.textContent = error.message || "The message could not be sent. Please try again.";
      button.disabled = false;
      button.textContent = "Send message ↗";
    }
  });
})();
