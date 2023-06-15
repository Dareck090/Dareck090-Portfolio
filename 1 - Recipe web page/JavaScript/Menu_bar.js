//Otra funncion desplegar sub menu
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
//Boton para cerrar el menu de navegacion
function openNav() {
  document.getElementById("mySidenav").style.width = "233px";
  document.getElementById("ButtonMenu").innerHTML = ""
  $(".Change").addClass("opacityNav").removeClass("Change");
} 
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("ButtonMenu").innerHTML = "☰"
  $(".opacityNav").addClass("Change").removeClass("opacityNav");
}
function openLogin() {
  document.getElementById("SideLogin").style.width = "100%";
  document.getElementById("LoginHidden").style.width = "95%";
} 
function closeLogin() {
  document.getElementById("SideLogin").style.width = "0";
  document.getElementById("LoginHidden").style.width = "0";
}
//Boton para abrir el login
/*cambiar clases en el menu*/