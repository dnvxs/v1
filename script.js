(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const label = document.getElementById("modeLabel");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const savedTheme = localStorage.getItem("mil-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === "dark";
    label.textContent = dark ? "DARK" : "LIGHT";
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    metaTheme.setAttribute("content", dark ? "#111214" : "#f5f5f2");
    localStorage.setItem("mil-theme", theme);
  }
  setTheme(initialTheme);
  toggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

  const stage = document.getElementById("visualStage");
  stage.addEventListener("click", () => stage.classList.toggle("is-active"));
  stage.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      stage.classList.toggle("is-active");
    }
  });
})();