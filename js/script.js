const elHedaer = document.querySelector(".site-header"),
    elBurgerMenu = elHedaer.querySelector(".burger-menu");

// MOBILE MENU OPEN AND CLOSE EVENT
if(elBurgerMenu) {
    elBurgerMenu.addEventListener("click", ()=> {
        elHedaer.classList.toggle("header-nav-open");
    })
}
