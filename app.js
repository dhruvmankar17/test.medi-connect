const cart = document.querySelector("nav .cart")
const cartSideBar = document.querySelector(".cart-sidebar")
const closeCart = document.querySelector(".close-cart")
const burger = document.querySelector(".burger")
const menuSidebar = document.querySelector(".menu-sidebar")
const closeMenu = document.querySelector(".close-menu")

cart.addEventListener("click", function()
{
    cartSideBar.style.transform = "translate(0%)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.classList.add("overlay")
    setTimeout(function()
    {
        document.querySelector("body").append(bodyOverlay)
    },300)
})

closeCart.addEventListener("click", function()
{
    cartSideBar.style.transform = "translate(100%)"
    const bodyOverlay = document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyOverlay)
})

burger.addEventListener("click", function()
{
    menuSidebar.style.transform = "translate(0%)"
})

closeMenu.addEventListener("click", function()
{
    menuSidebar.style.transform = "translate(-100%)"
})