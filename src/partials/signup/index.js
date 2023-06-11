const submitForm = document.querySelector(".signup__form");

if (submitForm) {
  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit");
  });
}
