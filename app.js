var menu_icon = document.querySelector(".menu-icon")

var menu =  document.querySelector(".menu")

var body = document.querySelector("body")

var cancelMenu = document.querySelector(".cancel")

var loading = document.querySelector("iframe")

var menu_content= document.querySelector(".menu-content")

cancelMenu.style.display = "none"
menu.style.display ="none"
menu_icon.addEventListener("click" , function () {
    menu.style.display = "initial"
    menu.style.left = "0"

    body.style.overflow = "hidden"

    menu_content.style.display = "none"

    setTimeout(() => {
        loading.style.display = "initial"
    }, 800);

    setTimeout(() => {
        loading.style.display = "none"

        menu_content.style.display = "initial"
        
        cancelMenu.style.display = "initial"
    }, 3000);
})

cancelMenu.addEventListener("click", function() {
    menu.style.left = "-100%"

    body.style.overflow = "initial"

    cancelMenu.style.display = "none"
}) 
