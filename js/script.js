$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//Gets the ID of HOME section for homebackground.
const homebackground = document.querySelector('#home');
//Creates a 100 div with a class name block under HOME section.
for (var i=0; i<=100; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    homebackground.appendChild(blocks);
}
//Background Animation
function animateBlocks() {
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-700, 700);
        },
        translateY: function(){
            return anime.random(-500, 500);
        },
        scale: function(){
            return anime.random(1, 5);
        },
        
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks,
    });
}
//Changes the NAV Bar when user scroll.
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});
//NAV Animation
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    //Burger Icon Animation
    burger.addEventListener("click", function(){
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle("toggle");
    });
    //Closes the NAV on mobile when one of <li> is clicked.
    function linkAction() {
        nav.classList.remove("nav-active");
        burger.classList.toggle("toggle");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
        });
        //Change the color of an Active link when clicked on mobile view.
        navLinks.forEach((link) => {
            link.addEventListener("click", function(){
                link.classList.add("active");
            });
            link.classList.remove("active");
        });
    }
    navLinks.forEach(n => n.addEventListener("click", linkAction));
    
}

const navLinks = document.querySelectorAll(".nav-links li");
const sections = document.querySelectorAll("section");
//Change the color of an Active link when clicked.
function changeLinkState() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

animateBlocks();
navSlide();