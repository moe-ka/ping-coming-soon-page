// @ts-nocheck
const btnsubmitEl = document.querySelector(".btn-submit");
const inputEl = btnsubmitEl.parentElement.children[0].children[0];
const alertMsg = btnsubmitEl.parentElement.children[0].children[1];

btnsubmitEl.addEventListener("click", function () {
  if (inputEl.validity.typeMismatch) {
    inputEl.classList.add("check");
    alertMsg.textContent = "please provide a valid email address";
  }
  if (inputEl.value === "") {
    inputEl.classList.add("check");
    alertMsg.textContent = "please input an email address";
  }
});

inputEl.addEventListener("input", function () {
  if (!inputEl.validity.typeMismatch) {
    alertMsg.innerHTML = "<br>";
  }
});

document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
      document.getElementById("name").focus();
    };
  })(),
  true
);
