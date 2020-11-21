/* *****variables***** */
const newsletterSub = document.getElementById("newsletter-form");
const emailAddress = document.getElementById("email");
const errorMsg = document.getElementById("email-error-warning");

/* *****functions**** */
function emailIsValid(email) {
  let regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
}

/* *****event listeners**** */
newsletterSub.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!errorMsg.classList.contains("hidden")) {
    errorMsg.classList.add("hidden");
  }

  let email = emailAddress.value;
  if (emailIsValid(email)) {
    // do nothing
  } else {
    errorMsg.classList.remove("hidden");
  }
});
