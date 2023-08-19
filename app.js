const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
})

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
} )

const navLinks = document.querySelectorAll('.nav-list ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});
