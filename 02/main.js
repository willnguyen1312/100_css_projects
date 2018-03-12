const menuIcon = document.querySelector(".menu-icon");

/**
 *
 *
 * @param {MouseEvent} e
 */
function handleClick(e) {
  this.classList.toggle("active");
  const innerdivs = this.querySelectorAll("div");
  innerdivs.forEach(div => div.classList.remove("no-animation"));
}

menuIcon.addEventListener("click", handleClick);
