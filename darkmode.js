console.info("darkmode.js conected");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
if (localStorage.getItem("theme") === "dark") {
  darkModeToggle.checked = true;
  document.querySelector("nav img").src = "/img/OTZ.png";
} else {
  darkModeToggle.checked = false;
  document.querySelector("nav img").src = "/img/OTZdark.png";
}
document.documentElement.setAttribute(
  "data-theme",
  localStorage.getItem("theme")
);
darkModeToggle.addEventListener("click", (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    document.querySelector("nav img").src = "/img/OTZ.png"; 
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    document.querySelector("nav img").src = "/img/OTZdark.png"; 
  }
});


