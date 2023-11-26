let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

const image = document.querySelector('.about-img img');

image.addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle the 'active' class when clicked
});

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration:  1600,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .about-content',  { origin: 'bottom' });
ScrollReveal().reveal('.about-img',  { origin: 'left' });

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Java Programmer', 'Marketing Expert', 'Business Manager', 'Coaching Expert'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 700,
    loop: true
});

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


var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("light-mode"); 
    if (document.body.classList.contains("light-mode")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png"; 
    }
};

function toggleReadMore(button) {
    const readMoreContent = button.nextElementSibling;
    readMoreContent.style.display = "block";
    button.style.display = "none";
}

function toggleShowLess(button) {
    const readMoreContent = button.parentElement;
    readMoreContent.style.display = "none";
    const readMoreButton = readMoreContent.parentElement.querySelector(".btn");
    readMoreButton.style.display = "inline-block";
}

