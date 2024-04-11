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

//Product search

var prodContainer = document.getElementById("product-container")
var searchbox = document.getElementById("searchbox")

var productList = prodContainer.querySelectorAll("div")

searchbox.addEventListener("keyup", function () {
    var enterValue = event.target.value.toUpperCase()

    for (i = 0; i < productList.length; i++) {
        var productName = productList[i].querySelector("h1").textContent
        
        if (productName.toUpperCase().indexOf(enterValue) < 0) {
            productList[i].style.display = "none"
        } else {
            productList[i].style.display = "block"
        }

    }
})