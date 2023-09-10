document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  burgerIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle("show");
  });
});

// call

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
  });

// map//
function initMap() {
  const address = "47 agmashenebeli, oni, georgia";
  const geocoder = new google.maps.Geocoder();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: -34.397, lng: 150.644 },
  });

  geocoder.geocode({ address: address }, function (results, status) {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      const marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
