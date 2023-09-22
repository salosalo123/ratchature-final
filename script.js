"use strict";

// header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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

/* chaches page */
document.addEventListener("DOMContentLoaded", function () {
  const seeMoreBtns = document.querySelectorAll(".see-more-btn");
  const closeBtns = document.querySelectorAll(".close-btn-info");

  seeMoreBtns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      const infoDetails = document.querySelectorAll(".info-details")[index];
      infoDetails.style.display = "block";
    });
  });

  closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const infoDetails = this.parentElement;
      infoDetails.style.display = "none";
    });
  });
});

// section2
function goToAnotherPage() {
  window.location.href = "chaches.html";
}

// conteiner-hover

function expandBox(box) {
  box.classList.add("expanded");
}

function shrinkBoxes() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => box.classList.remove("expanded"));
}

// bussuness conteiner registratio
document
  .getElementById("registrationForm1")
  .addEventListener("input", function (event) {
    const element = event.target;
    const statusElement = document.getElementById(element.id + "Error");
    if (element.checkValidity()) {
      statusElement.innerText = "";
    } else {
      statusElement.innerText = "შეცდომაა " + element.id;
    }
  });

document.getElementById("showPassword").addEventListener("change", function () {
  const passwordInput = document.getElementById("password");
  if (this.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

document.getElementById("submitButton").addEventListener("click", function () {
  const isValid = true;
  const formElements = document.getElementById("registrationForm1").elements;
  for (let i = 0; i < formElements.length; i++) {
    if (!formElements[i].checkValidity()) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    document.getElementById("result").innerText = "წარმატებით დარეგისტრირდა";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerText = "შეცდომაა რეგისტრაციაში";
    document.getElementById("result").style.color = "red";
  }
});

// divreg
document.getElementById("toggleButton").addEventListener("click", function () {
  const formContainer = document.getElementById("registrationFormContainer");
  if (
    formContainer.style.display === "none" ||
    formContainer.style.display === ""
  ) {
    formContainer.style.display = "block";
    this.innerText = "დახურე რეგისტრაციის ფორმა";
  } else {
    formContainer.style.display = "none";
    this.innerText = "გახსენი რეგისტრაციის ფორმა";
  }
});

// *****
document.addEventListener("DOMContentLoaded", function () {
  const goToRegistrationBussn = document.getElementById(
    "goToRegistrationbussn"
  );
  const goBackButton = document.getElementById("goBack");

  if (goToRegistrationbussn) {
    goToRegistrationBussn.addEventListener("click", function () {
      window.location.href = "hotels.html";
    });
  }

  if (goBackButton) {
    goBackButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});

// *****connect pages

function goToRegistrationbussn() {
  window.location.href = "registrationbussn.html";
}
function goBackButton() {
  window.location.href = "index.html";
}

function goToAnotherPagehotels() {
  window.location.href = "hotels.html";
}

function goToAnotherPageTurebi() {
  window.location.href = "turebi.html";
}
function goToAnotherPageArt() {
  window.location.href = "art.html";
}

function goToAnotherPageVine() {
  window.location.href = "vine.html";
}

function goToAnotherPageRestorant() {
  window.location.href = "restorant.html";
}
function goToAnotherPageTaxi() {
  window.location.href = "taxi.html";
}
function goToAnotherPageSlide() {
  window.location.href = "slide.html";
}

// ***search****
function search() {
  const searchInput = document.getElementById("searchInput");
  const searchResult = document.getElementById("searchResult");

  const searchTerm = searchInput.value.trim();

  if (searchTerm !== "") {
    searchResult.innerHTML = `Result for: <strong>${searchTerm}</strong>`;
  } else {
    searchResult.innerHTML = "Please enter a search term.";
  }
}

// json

// async function getData() {
//   try {
//     var response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     var data = response.data;
//     document.getElementById("getDataResult").innerHTML = JSON.stringify(
//       data,
//       null,
//       2
//     );
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// async function postData() {
//   const inputData = document.getElementById("postInput").value;

//   try {
//     var response = await axios.post(
//       "https://jsonplaceholder.typicode.com/posts",
//       {
//         title: inputData,
//         body: "Sample Body",
//         userId: 1,
//       }
//     );
//     var data = response.data;
//     document.getElementById("postDataResult").innerHTML = JSON.stringify(
//       data,
//       null,
//       2
//     );
//   } catch (error) {
//     console.error("Error posting data:", error);
//   }
// }

// async function deleteData() {
//   var id = document.getElementById("deleteInput").value;

//   try {
//     var response = await axios.delete(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//     var data = response.data;
//     document.getElementById("deleteDataResult").innerHTML = JSON.stringify(
//       data,
//       null,
//       2
//     );
//   } catch (error) {
//     console.error("Error deleting data:", error);
//   }
// }

//  *******accordion**

// document.addEventListener("DOMContentLoaded", function () {
//   var accordionItemsAcordion = document.querySelectorAll(".accordion-item");

//   accordionItemsAcordion.forEach((item) => {
//     var header1Acordion = item.querySelector(".accordion-header");
//     var content1Acordion = item.querySelector(".accordion-content");

//     header1Acordion.addEventListener("click", function () {
//       content1Acordion.style.display =
//         content1Acordion.style.display === "none" ? "block" : "none";
//     });
//   });
// });

// // *****filter1
// document.addEventListener("DOMContentLoaded", function () {
//   var filterInput = document.getElementById("filterInput");
//   var itemListFilter = document.getElementById("itemList");
//   var itemsFilter = itemListFilter.getElementsByTagName("li");

//   filterInput.addEventListener("input", function () {
//     var searchTermFilter = this.value.toLowerCase();

//     for (let i = 0; i < itemsFilter.length; i++) {
//       var itemText = itemsFilter[i].textContent.toLowerCase();

//       if (itemText.includes(searchTermFilter)) {
//         itemsFilter[i].style.display = "block";
//       } else {
//         itemsFilter[i].style.display = "none";
//       }
//     }
//   });
// });

// // filterbig
// var filterButtons = document.querySelectorAll('.filter-btn-racha');
// var filterItems = document.querySelectorAll('.filter-item-racha ');

// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const filterValue = button.dataset.filter;

//         filterButtons.forEach(btn => btn.classList.remove('active'));
//         button.classList.add('active');

//         filterItems.forEach(item => {
//             item.style.display = 'none';

//             if (filterValue === 'all' || item.classList.contains(filterValue)) {
//                 item.style.display = 'block';
//             }
//         });
//     });
// });
