
$(() => { 

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navs-pag").style.top = "0";
        } 
        else {
            document.getElementById("navs-pag").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    $("#open-chat").click(function(){
        $("#open-chat").hide();
        $("#chat-user").show();
        $("#chat-user").css("display","flex");
    })
    $("#close-chat").click(function(){
        $("#open-chat").show();
        $("#chat-user").hide();
        $("#chat-user").css("display","none");
    })
    //*********** BLOG *******
    var id_menu_share =document.querySelectorAll('.btn-share');
    for(i = 0; i < id_menu_share.length; i++){
        id_menu_share[i].addEventListener('click', function(){
            var value_menu = this.id;
            var slice_str = value_menu.slice(8);
            //For para comparar el numero final del id y solo mostrar en la opcion clickeada
            var id_item_sh =document.querySelectorAll('.share-blog');
            for(j = 0; j < id_item_sh.length; j++){
                var mi_id = id_item_sh[j].id.slice(11);
                var ltg_id = "#"+ id_item_sh[j].id;
                if(slice_str == mi_id){
                    //Si se cumple abre la opcion de compartir blog
                    $(`${ltg_id}`).addClass("active-share");
                    

                    $(`${ltg_id}`).click(function () {
                        $(".share-blog").removeClass("active-share")
                        $(".share-news-panel").css("display", "flex");

                        $("#close-sh-social").click(function(){
                            $(".share-news-panel").hide();
                        })
            
                        $("#open-link").click(function(){
                            $(".sh-link-div").css("display","flex");
                        })
                        $("#btn-cln").click(function(){
                            $(".sh-link-div").hide();
                        })
                        $("#copy-link").click(function(){
                            $(".btn-copy-lk").css({transition:"ease 0.35s",border:"2px solid #1F77FF"});
                            var copyLink = document.getElementById("link-blog");
                            copyLink.select();
                            copyLink.setSelectionRange(0, 99999);
                            navigator.clipboard.writeText(copyLink.value);
                        })
                    })

                }else if(slice_str !== mi_id){
                    //Solo remueve la clase para que no se muestre en los demas items
                    $(`${ltg_id}`).removeClass("active-share");
                }
            }
        })
    }
    //*********** CHAT ***********
    $(".data-time").hide()
    $(".msg-inbox").hide()
    $(".state-msg").hide()
    //Funcion para enviar el estado de mensaje hora y estado de envio
    function send_state(){
        //Time chat send

        var time_chat = new Date();
        var hour = time_chat.getHours();
        var chat_hour = hour.toString();
        var min = time_chat.getMinutes();
        var chat_min = min.toString();
        if(chat_min < 10){
            chat_min = "0" + chat_min;
        }
        var array_time = ` `;
        if(hour < 12){
            var am = "AM";
            array_time = `${chat_hour}:${chat_min} ${am}`;
        }else{
            var pm = "PM";
            array_time = `${chat_hour}:${chat_min} ${pm}`;
        }
        
        document.getElementById("time-msg").innerHTML = array_time;
        $(".data-time").show()
        
        document.getElementById("msg-state").innerHTML = "Enviado...";
        $(".state-msg").show()
        $("#msg-state").animate({
            opacity: 1
        }, 500, function() {
            // Animation complete.
            document.getElementById("msg-state").innerHTML = "Enviado";
            //Function sound send
            function sound_chat (){
                var sonido = new Audio();
                sonido.src="../static/multimedia/sound_lip.mp3";
                sonido.play();
                console.log("Ejecuta sonido chat");
                //Is work but the conflict favicon show in the console, resolve this
            }
            sound_chat();

        });
        
    }
    function msg_chat(){
        //*******Aun hay BUGS */
        var text_chat = document.querySelector("#msg-send").value;
        var newt = document.createElement("div");
        newt.style.cssText='position: relative;width: auto;padding: 0.3rem 0.2rem 0.3rem 0.2rem;background-color: #FD6262;border-radius: 0.2rem;color: black;font-size: 1rem;line-break: anywhere;margin-top:3px; text-align: right;'
        var text = document.createTextNode(text_chat);
        newt.appendChild(text);
        document.getElementById("chat-rm").appendChild(newt);
        //this code disabled button send
        $("#icon-send").css('filter', 'opacity(30%)');
        $("#sl-msg").attr('disabled', true);

        
    }   
    //******* ENTER KEY SEND CHAT
    //Function enabled button send
    var $text_chat = document.getElementById("msg-send");
    let timeout;
    $text_chat.addEventListener('keydown', () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            $("#sl-msg").attr('disabled', false);
            $("#icon-send").css('filter', 'opacity(100%)');
            clearTimeout(timeout)
        },300)
    })

    $('#msg-inbox').on("keydown", function(event){
        // var keycode = (event.keyCode ? event.keyCode : event.which);
        if(event.which == '13'){
            msg_chat();
            send_state();
            $text_chat.value = "";
            
        }
    });
    //Function CLICK SEND CHAT
    $('#sl-msg').click(function(){ 
        msg_chat();
        send_state();
        $text_chat.value = "";
    })
    //*****Function to be implemented for the storage in the LocalStorage of the messages*******/
});