(function () {
  "use strict";

  const storageKey = "ttp-theme";
  const themes = [
    { value: "terminal", label: "Terminal Green" },
    { value: "cyberphunk", label: "Cyberphunk (Neon Cyan & Purple)" },
    { value: "deus-ex", label: "Deus Ex (Gold & Amber)" },
    { value: "hackers", label: "Hackers (Neon CRT)" },
    { value: "black-mesa", label: "Black Mesa (HEV Suit Orange)" },
    { value: "syndicate", label: "Syndicate (Ice-Blue on Steel)" }
  ];

  function applyTheme(value) {
    const root = document.documentElement;
    if (!value || value === "terminal") {
      root.removeAttribute("data-theme");
      localStorage.removeItem(storageKey);
      return;
    }

    root.setAttribute("data-theme", value);
    localStorage.setItem(storageKey, value);
  }

  function ensureSwitcher() {
    if (document.getElementById("themeSelect")) {
      return document.getElementById("themeSelect");
    }

    const nav =
      document.querySelector(".nav-inner") ||
      document.querySelector(".site-nav__inner");

    if (!nav) {
      return null;
    }

    const container = document.createElement("div");
    container.className = "theme-switcher";
    container.innerHTML =
      '<label for="themeSelect">Theme</label>' +
      '<select id="themeSelect" class="kbd" aria-label="Theme"></select>';
    nav.appendChild(container);

    return container.querySelector("#themeSelect");
  }

  function populateOptions(select) {
    if (!select || select.options.length) {
      return;
    }

    themes.forEach((theme) => {
      const option = document.createElement("option");
      option.value = theme.value;
      option.textContent = theme.label;
      select.appendChild(option);
    });
  }

  function syncLabel(value) {
    const label = document.querySelector("[data-theme-label]");
    if (!label) {
      return;
    }

    const match = themes.find((theme) => theme.value === value);
    label.textContent = match ? match.label : "Terminal Green";
  }

  function init() {
    const select = ensureSwitcher();
    populateOptions(select);

    const saved = localStorage.getItem(storageKey) || "terminal";
    applyTheme(saved);
    syncLabel(saved);

    if (select) {
      select.value = saved;
      select.addEventListener("change", (event) => {
        const value = event.target.value;
        applyTheme(value);
        syncLabel(value);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
