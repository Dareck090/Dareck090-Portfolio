$(() => {
    $("#email").click(function () { 
        $("#email").focus(function (e) { 
            e.preventDefault();
            let email = $('#email').val();
            index = email.search("@");
            if(index >= 0){
                $("#email").css("border-bottom", "1px solid green");
            }else{
                $("#email").css("border-bottom", "1px solid red");
            }
        });
        $("#email").focusout(function (e) { 
            e.preventDefault();
            let email = $('#email').val();
            index = email.search("@");
            if(index >= 0){
                $("#email").css("border-bottom", "1px solid green");
            }else{
                $("#email").css("border-bottom", "1px solid red");
            }
        });
        $("#email").keyup(function(e){ 
            if(e.key === "Backspace") {
                //console.log('Delete key/ backspace'); 
                $("#email").css("border-bottom", "1px solid rgb(135, 83, 184)");
            } 
        });
        /*
        $("#email").mouseover(function () { 
            let email = $('#email').val();
            index = email.search("@")
            console.log(index);
            if(index >= 0){
                $("#email").css("border-bottom", "1px solid green");
            }else{
                console.log("No email");
                $("#email").css("border-bottom", "1px solid red");
            }
        });
        $("#email").mousedown(function () { 
            let email = $('#email').val();
            index = email.search("@")
            console.log(index);
            if(index >= 0){
                $("#email").css("border-bottom", "1px solid green");
            }else{
                console.log("No email");
                $("#email").css("border-bottom", "1px solid red");
            }
        });
        $("#email").hover(function () { 
            let email = $('#email').val();
            index = email.search("@")
            console.log(index);
            if(index >= 0){
                $("#email").css("border-bottom", "1px solid green");
            }else{
                console.log("No email");
                $("#email").css("border-bottom", "1px solid red");
            }
        }); */
    });
});