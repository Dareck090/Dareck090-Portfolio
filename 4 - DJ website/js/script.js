
function openNav() {
    document.getElementById("mySidenav").style.display = "flex";
    document.getElementById("mySidenav").style.width = "100%";
    document.body.style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.overflow = "visible";
}

/*
const openNav = document.querySelector("#more-ms")
const closeNav = document.querySelector("#close-button")

openNav.addEventListener("click",()=>{
    document.getElementById("mySidenav").style.display = "flex";
})

closeNav.addEventListener("click",()=>{
    document.getElementById("mySidenav").style.display = "none";
})
*/