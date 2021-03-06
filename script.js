const checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked;

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleClick)
);

function handleClick(e) {
  let isBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox == this || checkbox == lastChecked) {
        isBetween = !isBetween;
      }
      if (isBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
