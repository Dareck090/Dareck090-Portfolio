$(() => {
    //***Cambiar de color al hacer focus en el input de search, al salir de este resetear a su estado normal
    $('.inp-search').focus(function () { 
        $('.nav-search').css('border', '1px solid black');
        $('.inp-search').css('background-color', 'white');
    });
    $('.inp-search').blur(function (e) { 
        e.preventDefault();
        $('.nav-search').css('border', '');
        $('.inp-search').css('background-color', '');
    });

    //** Show menu by audifonos and bocines
    $(".link-ctg-dropdown").hover(function(){
        $(".ctg-dropdown-audio").css({display:'flex'})
    })
    var timer;

    $(".ctg-dropdown-audio").mouseleave(function() {
        timer = setTimeout(function() {
            $("#myDropAud").hide();
        }, 1000);
    });

    $(".ctg-dropdown-audio").mouseenter(function() {
        clearTimeout(timer);
    });

    //***Change the img page index
    var index = 0;

    var listaimg = [
        "https://imgeng.jagran.com/images/2022/sep/32GB%20RAM%20Laptops1662703973437.jpg",
        "https://w0.peakpx.com/wallpaper/487/26/HD-wallpaper-xiaomi-mi4-smartphone-high-quality.jpg", 
        "https://cdn.thewirecutter.com/wp-content/media/2022/12/androidwatches-2048px-hero-3x2-1.jpg"];

    $(function() {
    
        setInterval(changeImage, 5000);
    
    });

    function changeImage() {
    
    $('#home-page').css("background-image", 'url(' + listaimg[index] + ')');
                    
    index++;
                    
    if(index == 3)
        index = 0;
    }
    //** Display category filter menu dropdown button */
    var dropdownCategory = $('.dropdown-category');
    $('#btnCategoryFilter').click(function(){
        dropdownCategory.toggle(500,function() {
        });
        var filtro1 = document.getElementById('openFilter');
        changeSign(filtro1);
    })
    //***This code change the sign to - or + 
    $('#openFilter').text('+');
    $('#openFilter2').text('+');
    var valor = true
    function changeSign(filter) {
        valor?filter.innerText = "-":filter.innerText = "+";
        valor=!valor
    }
    //** Display price filter menu dropdown button */
    var dropdownPrice = $('.dropdown-price');
    $('#btnPriceFilter').click(function(){
        dropdownPrice.toggle(500,function() {
        });
        var filtro2 = document.getElementById('openFilter2');
        changeSign(filtro2);
    })


    //** View details product
    $('#openFilterProd').text('+');
    $('#openFilterProd2').text('+');
    $('#openFilterProd3').text('+');

    var buttonInfo = [$('#btn-info-prd'), $('#btn-info-plt'), $('#btn-send-legal')];
    var dropdownInfo = [$('.info-lgm-prod'), $('.info-lgm-politic'), $('.info-lgm-send-legal')];
    var openFilter = [$('#openFilterProd'), $('#openFilterProd2'), $('#openFilterProd3')];

    buttonInfo.forEach(function(button, index) {
    button.click(function() {
        dropdownInfo.forEach(function(dropdown, dropdownIndex) {
        if (index === dropdownIndex) {
            dropdown.toggle(500, function() {
            // Código adicional después de mostrar/ocultar el elemento
            var filterButton = openFilter[dropdownIndex];
            if (dropdown.is(':visible')) {
                filterButton.text('-');
            } else {
                filterButton.text('+');
            }
            });
        } else {
            dropdown.hide(500);
            openFilter[dropdownIndex].text('+');
        }
        });
    });
    });


    //*****Este codigo nos permite realizar filtro de orden por precio y nombre
    const productList = document.querySelector(".product-list");
    const filterSelect = document.getElementById("filter-select");

    // Obtener la lista de productos y convertirla en un array
    const products = Array.from(document.querySelectorAll(".list-li-prd"));

    // Función para ordenar los productos por precio de menor a mayor
    const sortByPriceAsc = () => {
        products.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute("data-price"));
            const priceB = parseFloat(b.getAttribute("data-price"));
            return priceA - priceB;
        });
    };

    // Función para ordenar los productos por precio de mayor a menor
    const sortByPriceDesc = () => {
        products.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute("data-price"));
            const priceB = parseFloat(b.getAttribute("data-price"));
            return priceB - priceA;
        });
    };

    // Función para ordenar los productos por nombre de A-Z
    const sortByNameAsc = () => {
        products.sort((a, b) => {
            const nameA = a.querySelector(".description-prd").textContent.toUpperCase();
            const nameB = b.querySelector(".description-prd").textContent.toUpperCase();
            return nameA.localeCompare(nameB);
        });
    };

    // Función para ordenar los productos por nombre de Z-A
    const sortByNameDesc = () => {
        products.sort((a, b) => {
            const nameA = a.querySelector(".description-prd").textContent.toUpperCase();
            const nameB = b.querySelector(".description-prd").textContent.toUpperCase();
            return nameB.localeCompare(nameA);
        });
    };

    // Función para actualizar la lista de productos en el DOM
    const updateProductList = () => {
        productList.innerHTML = "";
        products.forEach(product => {
            productList.appendChild(product);
        });
    };

    // Evento de cambio en el select de filtrado
    filterSelect.addEventListener("change", function() {
        const selectedOption = this.value;
        switch (selectedOption) {
            case "price_asc":
                sortByPriceAsc();
                break;
            case "price_desc":
                sortByPriceDesc();
                break;
            case "name_asc":
                sortByNameAsc();
                break;
            case "name_desc":
                sortByNameDesc();
                break;
            default:
                // Opción predeterminada: mantener el orden original
                break;
        }
        updateProductList();
    });

})


