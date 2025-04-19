document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("authForm");
  const switchToSignup = document.getElementById("switchToSignup");
  const switchToLogin = document.getElementById("switchToLogin");
  const title = document.getElementById("title");

  const nameFieldContainer = document.getElementById("nameField");
  const confirmPasswordContainer = document.getElementById("confirmPassword");

  const nameInput = nameFieldContainer.querySelector("input");
  const confirmPasswordInput = confirmPasswordContainer.querySelector("input");

  let isLogin = true;

  switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    isLogin = false;
    title.innerText = "Signup";
    nameFieldContainer.style.display = "block";
    confirmPasswordContainer.style.display = "block";
  });

  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    isLogin = true;
    title.innerText = "Login";
    nameFieldContainer.style.display = "none";
    confirmPasswordContainer.style.display = "none";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (isLogin) {
      if (email && password) {
        window.location.href = "amazon.html"; // Redirect without alert
      } else {
        alert("Please fill all login fields.");
      }
    } else {
      const name = nameInput.value.trim();
      const confirmPass = confirmPasswordInput.value;

      if (name && email && password && password === confirmPass) {
        window.location.href = "amazon.html"; // Redirect without alert
      } else {
        alert("Please fill all signup fields and make sure passwords match.");
      }
    }
  });
});
