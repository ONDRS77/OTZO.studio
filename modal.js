console.log("modal.js conected");
function showModal() {
  let modal = document.querySelector("#modal");
  modal.classList.remove("display-none");
}
function hideModal() {
  let modal = document.querySelector("#modal");
  modal.classList.add("display-none");
}
document.addEventListener("keydown", (event) => {
  console.log(event.code);
  if (event.code === "Escape") {
    hideModal();
  }
});
