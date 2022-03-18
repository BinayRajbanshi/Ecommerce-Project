// Search box
const search = document.querySelector('.search-icon')
const searchBox = document.querySelector('.search-box')

search.addEventListener('click', () => {
    searchBox.classList.toggle('active')
    console.log('clicked')
})

// shopping Cart
const cartIcon = document.querySelector('.cart-icon');
const cartBox = document.querySelector('.cart');
const overlay = document.querySelector('.overlay');
const closeCart = document.querySelector('.close');

cartIcon.addEventListener('click' , () =>{
    cartBox.classList.add('active')
    overlay.classList.add('active')
});

closeCart.addEventListener('click' , () =>{
    cartBox.classList.remove('active')
    overlay.classList.remove('active')
})

const removeFromCart = document.querySelectorAll ('.cross');
const cartItem = document.querySelectorAll('.cart-box');

// this for loop is efficient
for (let i = 0 ; i < removeFromCart.length; i++){
    removeFromCart[i].addEventListener('click', ()=>{
       cartItem[i].classList.add('toggle')
    })
}
// failure
// removeFromCart.forEach((cross)=>{
//     cross.addEventListener('click' , ()=>{
//         cartItem.forEach(myfunction)
//     })
// })
// function myfunction(divs) {
//     divs.classList.add('toggle')
// }

// navbar for mobile

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeNav = document.querySelector('.close-nav');
 
hamburger.addEventListener('click' , () =>{
    navLinks.classList.add('nav-open')
    overlay.classList.add('active')
})
closeNav.addEventListener('click' , () =>{
    navLinks.classList.remove('nav-open')
    overlay.classList.remove('active')
})

// mega dropdown for mobile

const productNavItem = document.querySelector('.product-navItem');
const megaMenu = document.querySelector('.mega-dropdown');

productNavItem.addEventListener('click' , () =>{
    megaMenu.classList.toggle('height')
})

// dropdown for mobile

const pageNavItem = document.querySelector('.pages-navItem');
const dropdown = document.querySelector('.dropdown')

pageNavItem.addEventListener('click' , () =>{
    dropdown.classList.toggle('height')
})

// scroll and nav transition

let nav = document.querySelector('nav');
window.addEventListener('scroll' , ()=>{
    nav.classList.toggle('scroll-active' , window.scrollY > 0)
})

// swiper js
var swiper = new Swiper(".mySwiper", {
    // spaceBetween:10,
    slidesPerView: 1,
    loop:true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay:{
        delay:5000,
        disableOnInteraction: true,
    },

})
// swiper for categories
var swiper = new Swiper(".mySwiper-categories" , {
    spaceBetween:30,
    slidesPerView:6,
    loop:false,

    breakpoints:{
        0:{
            slidesPerView:2,
            slidesPerGroup:1
        },
        600:{
            slidesPerView:2,
            slidesPerGroup:1
        },
        650:{
            slidesPerView:3,
            slidesPerGroup:1
        },
        900:{
            slidesPerView:4,
            slidesPerGroup:1
        },
        1200:{
            slidesPerView:5
        }
    }

})

// swiper for banner
var swiper = new Swiper(".swiper-3" , {
    slidesPerView:3,
    spaceBetween:30,

    breakpoints:{
        0:{
            slidesPerView:1,
            slidesPerGroup:1,
            spaceBetween:30,
            
        },
        800:{
            slidesPerView:2,
            slidesPerGroup:1,
            spaceBetween:30,
            
        },
        1000:{
            slidesPerGroup:1,
            slidesPerView:3,
            spaceBetween:30
        }
    }
})

// login form
const login = document.querySelector('.profile')
const form = document.querySelector('.login-form')
const closeForm = document.querySelector('.i')

login.addEventListener('click' , ()=>{
    form.classList.add('active')
    overlay.classList.add('active')
})
closeForm.addEventListener('click' , ()=>{
    form.classList.remove('active')
    overlay.classList.remove('active')
})

// back to top
let scrollUpBtn =document.querySelector('.scroll-up-button')
window.addEventListener('scroll' , () =>{
    scrollUpBtn.classList.toggle('active' , window.scrollY > 500);
})
scrollUpBtn.addEventListener('click' , () =>{
    window.scrollTo({
        top:0,
        left:0,
        behaviour:'smooth'
    })
})