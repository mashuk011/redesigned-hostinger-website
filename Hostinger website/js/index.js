// Our responsive navbar js code

const nav_header = document.querySelector(".header");
const mobile_nav = document.querySelector(".mobile-nav-icon-btun");


const toggleNav = () => {

    nav_header.classList.toggle('active');
    
}

mobile_nav.addEventListener("click", () => toggleNav());


// // preoader animation

const preloader =  document.querySelector("#preloader");

const myFunction = () => {

    preloader.style.display = "none";

    
}




// owl carousel testimonial slider 

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:35,
    nav:false,
    dots: true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


// scroll top btn js code

const scrollBtn =  document.querySelector(".scroll-top-btn");



const listenScroll = () => {

    let heightView =  1000 ;

    const winScroll =  document.body.scrollTop || document.documentElement.scrollTop ;

    if(winScroll > heightView){

        scrollBtn.style.opacity = "1";
        scrollBtn.style.transform = "translateY(0)";
        
    }else{
        scrollBtn.style.opacity = "0";
        scrollBtn.style.transform = "translateY(-500px)";
    }
       
}


window.addEventListener("scroll", () => listenScroll());

const scrollTopBtn =  document.querySelector(".scroll-top-btn");
const homeSec =  document.querySelector(".hero-sec");


const scrollTopScroll = () => {

    homeSec.scrollIntoView({behavior: "smooth"});
    
}


scrollTopBtn.addEventListener("click", () => scrollTopScroll());







// sticky Navbar 

//  sticky Navbar 

const scrollNavFixed = () => {

    let headerNav =  document.querySelector('.header');

    headerNav.classList.toggle("sticky", window.scrollY > 300);
    
}



window.addEventListener("scroll", () => scrollNavFixed());






