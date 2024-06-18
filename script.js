// About Section mini navbar
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
      tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
}
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


//to download cv
document.getElementById('download-cv').addEventListener('click', function() {
  
  var cvUrl = 'https://drive.google.com/file/d/16pPcb7Bq4yzIltciENh3I0ijLdPXhD43/view?usp=sharing';
  var cvFileName = 'Creative Resume.pdf'; 

  var tempLink = document.createElement('a');
  tempLink.href = cvUrl;
  tempLink.setAttribute('download', cvFileName);
  tempLink.click();
});


// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

};


  // sticky navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
  
  // remove toggle icon and navbar when click nanbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
  
  // typed js
const typed = new Typed('.multiple-text', {
  strings: ['Erniella Manalasan', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Circle skill
function animateCircles() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
      points += `<div class="points${i < percent ? ' marked' : ''}" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
  });
}

// Call animateCircles function when the page is loaded and when the user scrolls
window.addEventListener('DOMContentLoaded', animateCircles);
window.addEventListener('scroll', animateCircles);

// Scroll reveal
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

// Define the reveal options
const revealOptions = { origin: 'top' };

// Define the elements to reveal
const revealElements = [
  '.home-content', '.heading', '.main-text', '.container', 
  '.home-img', '.about-img', '.about-content', '.portfolio-box', '.contact-wrapper', 
  '.skill-left', '.home-content h1', '.skill-right'
];

// Loop through each element and apply the reveal animation
revealElements.forEach(element => {
  ScrollReveal().reveal(element, revealOptions);
});

// "See More" button click event on portfolio
document.getElementById("see-more-btn").addEventListener("click", function() {
  // Toggle the visibility class of the additional images
  var additionalImages = document.querySelectorAll('.portfolio-box.additional-images');
  additionalImages.forEach(image => {
    image.classList.toggle('show');
  });

  // Toggle button text
  var buttonText = this.textContent;
  this.textContent = (buttonText === "See More") ? "See Less" : "See More";
});



//contact form excel
const scriptURL = 'https://script.google.com/macros/s/AKfycbwIO8b38VLwM5XNYMCnn-Xk-P7KHoetSa4iAoiOuzs9hVDbyAw8JxG4JfZTAnGJinJE/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (response.ok) {
        console.log('Form submission successful!');
      } else {
        throw new Error('Form submission failed!');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
