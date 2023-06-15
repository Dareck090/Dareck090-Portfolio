
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


$(() => {
    // Selectores
    // id="el-1" => "#el-1"
    // class"el-1" => ".el-1"
    // $("#el-1").hide()
    //change the color of the first child class of the listing for the menu
    $(".nv-li").ready(()=>{
        $("a:first").css({ color: "rgb(164, 99, 224)"})
    })
    $(".nv-li").click(()=>{
        $("a:first").css({ color: "black"})
    })
    $(".nv-li:first").click(()=>{
        $("a:first").css({ color: "rgb(164, 99, 224)"})
    })
    var x = 0
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".navs").css("border-bottom","1px solid rgb(216, 216, 216)")
    } else {
        $(".navs").css({ border: "none"})
    }
    }

})