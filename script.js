$(document).ready(function () {
  function showMessage(message, type) {
    $("#messageBox")
      .removeClass("success error")
      .addClass(type)
      .text(message)
      .slideDown();
  }

  $(".toggle-password").click(function () {
    const passwordInput = $("#password");
    const type = passwordInput.attr("type") === "password" ? "text" : "password";
    passwordInput.attr("type", type);
    $(this).text(type === "password" ? "Show" : "Hide");
  });

  $("#registrationForm").on("submit", function (e) {
    e.preventDefault();
    $("#messageBox").hide();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!name || !email || !phone || !password || !confirmPassword) {
      showMessage("All fields are required.", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      showMessage("Invalid email format.", "error");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      showMessage("Phone number must be exactly 10 digits.", "error");
      return;
    }

    if (!passwordRegex.test(password)) {
      showMessage("Password must be at least 8 characters, include uppercase, lowercase, and a number.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("Passwords do not match.", "error");
      return;
    }

    showMessage("Registration successful!", "success");
  });
});