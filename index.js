//Selecting side nav, Menu icon
var sideNav = document.getElementById("sidenav")
var menu = document.getElementById("menuicon")
var closeIcon = document.getElementById("close-nave")

menu.addEventListener("click", function () {
    sideNav.style.right = 0
})

closeIcon.addEventListener("click", function () {
    sideNav.style.right = "-50%"
})