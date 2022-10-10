console.info("logo.js conected");
const logoToggle = document.querySelector("#dark-mode-toggle");
if (localStorage.getItem("theme") === "dark") {
  logoToggle.checked = true;
} else {
  logoToggle.checked = false;
}
document.documentElement.setAttribute(
  "data-theme",
  localStorage.getItem("theme")
);
logoToggle.addEventListener("click", (event) => {
  if (event.target.checked) {
   document.querySelector("nav img").src = "/img/OTZ.png";  
    ;
  } else {
    document.querySelector("nav img").src = "/img/OTZdark.png";  
  }
});

