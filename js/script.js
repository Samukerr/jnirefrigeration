let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');

}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    
}

window.scroll = () =>{

    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

// Close both navbar and search form on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    searchform.classList.remove('active');
};

// Close navbar when a navbar link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
