// burger icon

document.getElementById("burger-icon").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
  this.style.display = "none";
  document.getElementById("close-icon").style.display = "block";
});

document.getElementById("close-icon").addEventListener("click", function () {
  document.getElementById("nav-links").classList.remove("active");
  this.style.display = "none";
  document.getElementById("burger-icon").style.display = "block";
});

// call

// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     alert(`Thank you, ${name}! Your message has been sent.`);
//   });

// slidebar
document.querySelector(".slide").addEventListener("mouseover", function () {
  document.querySelector(".contact").classList.add("active");
  document.querySelector(".social").classList.add("active");
});

document.querySelector(".slide").addEventListener("mouseout", function () {
  document.querySelector(".contact").classList.remove("active");
  document.querySelector(".social").classList.remove("active");
});

// registration

function openForm() {
  const form = document.getElementById("registrationForm");
  form.style.top = "0%";
}

function closeForm() {
  const form = document.getElementById("registrationForm");
  form.style.top = "-100%";
}

document.addEventListener("DOMContentLoaded", function () {
  closeForm();

  document.querySelector(".register-btn a").addEventListener("click", openForm);
});

// slide right
document.addEventListener("DOMContentLoaded", function () {
  const openFormButton = document.getElementById("openForm-upload");
  const slideContainer = document.querySelector(".slide-container-upload");
  const slideContent = document.querySelector(".slide-content-upload");
  const closeButton = document.getElementById("closeButton-upload");
  const minimizeButton = document.getElementById("minimizeButton-upload");

  openFormButton.addEventListener("click", function () {
    slideContainer.style.left = "0";
    slideContent.classList.add("active");
  });

  closeButton.addEventListener("click", function () {
    slideContainer.style.left = "-400px";
    slideContent.classList.remove("active");
  });

  minimizeButton.addEventListener("click", function () {
    slideContainer.style.left = "-400px";
  });
});
