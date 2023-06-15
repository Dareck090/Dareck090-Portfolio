$(document).ready(function(){
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  if(windowWidth < 1115 ){   
    console.log("This collapse nav cancel")
  }else{
    console.log("Yes, if this expand vab")
    window.onscroll = function() {scrollFunction()}
    function scrollFunction(){
        if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 80) {
            $(".GroupClass").removeClass("login-Regis").addClass("login-Regis2");
            document.getElementById("navbar").style.paddingTop = "25px";
            document.getElementById("SearchPad").style.paddingBottom = "7%";
            document.getElementById("iconMove").style.top = "40%";
          } else {
            $(".GroupClass").removeClass("login-Regis2").addClass("login-Regis");
            document.getElementById("navbar").style.paddingTop = "15px";
            document.getElementById("SearchPad").style.paddingBottom = "0%";
            document.getElementById("iconMove").style.top = "48%";
          }
    }
  }
  console.log("This resolution is of:" + windowWidth+ " x " + windowHeight)
  /*Esta funcion hara que el nav se oculte si el tamaño cambia*/
  var windowWidth2 = window.innerWidth;
  if(windowWidth2 > 1000){
      console.log("Not hidden")
    }
  else{
      console.log("Run code hidden navbar")
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-190px";
        }
        prevScrollpos = currentScrollPos;
      }
  } 
});


