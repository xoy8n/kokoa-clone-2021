"use strick";
let body = document.body;
let darkModeBtn = document.querySelector(".mode");
let darkMode = localStorage.getItem("darkMode");

const DARK_MODE = "darkMode";

const enableDarkMode = () => {
  darkModeBtn.innerHTML = `<i class="fas fa-toggle-on fa-lg"></i>`;
  document.body.classList.add("dark-theme");
  localStorage.setItem(DARK_MODE, "enabled");
};

const disableDarkMode = () => {
  darkModeBtn.innerHTML = `<i class="fas fa-toggle-off fa-lg"></i>`;
  document.body.classList.remove("dark-theme");
  localStorage.setItem(DARK_MODE, null);
};

function darkModeLoad() {}
if (darkMode === "enabled") {
  // 페이지 로드될 떄마다 체크, 저장
  enableDarkMode();
}
darkModeBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem(DARK_MODE); // 그때그때 마다 저장
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
