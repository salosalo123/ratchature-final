"use strict";

// // filterbig
var filterButtons = document.querySelectorAll(".filter-btn-racha");
var filterItems = document.querySelectorAll(".filter-item-racha ");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    filterItems.forEach((item) => {
      item.style.display = "none";

      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.style.display = "block";
      }
    });
  });
});

("use strict");

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
