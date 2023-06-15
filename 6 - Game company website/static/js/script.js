
$(() => {

    //This code is para btn dropdown make that show games
    $("#btn-dropdown").mouseenter(function(){ 
        $(".dropdown-content").css("display", "flex")
    });
    $(".dropdown-content").mouseleave(function(){ 
        $(".dropdown-content").animate({
            opacity: '1'
        }, 900, function() {
            $(".dropdown-content").css("display", "none")
        });
    });

    //Desvanecer el menu cuando haga scroll
    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav-pag").style.top = "0";
        } else {
            document.getElementById("nav-pag").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }
})