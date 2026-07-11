const themeToggleBtn = document.querySelector("#themeToggleBtn");
const STORAGE_KEY = "theme_preference";
const order = ["light", "dark", "system"];

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(mode) {
  // TODO 1: Work out the effective theme: if mode is "system", use
  // systemPrefersDark() ? "dark" : "light". Otherwise use mode directly.
  // Set document.documentElement.dataset.theme to that effective value.
  // Update themeToggleBtn.textContent to `Mode: ${capitalized mode}`
  // (Light, Dark, or System).
}

themeToggleBtn.addEventListener("click", () => {
  // TODO 2: Read the current stored mode (default "system"). Move to the
  // next mode in `order` (wrap around after "system"). If the new mode is
  // "system", remove STORAGE_KEY from localStorage; otherwise save the new
  // mode to STORAGE_KEY. Call applyTheme() with the new mode.
});

// TODO 3: On page load, read STORAGE_KEY from localStorage (default to
// "system" if nothing is stored) and call applyTheme() with it.
