
// burger icon

document.getElementById('burger-icon').addEventListener('click', function() {
  document.getElementById('nav-links').classList.toggle('active');
  this.style.display = 'none';
  document.getElementById('close-icon').style.display = 'block';
});

document.getElementById('close-icon').addEventListener('click', function() {
  document.getElementById('nav-links').classList.remove('active');
  this.style.display = 'none';
  document.getElementById('burger-icon').style.display = 'block';
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
  document.querySelector('.slide').addEventListener('mouseover', function() {
    document.querySelector('.contact').classList.add('active');
    document.querySelector('.social').classList.add('active');
});

document.querySelector('.slide').addEventListener('mouseout', function() {
    document.querySelector('.contact').classList.remove('active');
    document.querySelector('.social').classList.remove('active');
});
