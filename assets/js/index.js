/*  ########### CÓDIGO ESCRITO POR CAMILA CID ###########
    ###### PRUEBA MÓDULO 2 DEL BOOTCAMP FRONT-END #######
    #################### 12-03-2024 ##################### 
*/


// Función para hacer smooth scroll hacia las secciones de la página
$(document).ready(function () {
    $(".nav-link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTo: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Tooltips bootsrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Ocultar el contenido de las card al hacer click en el título
$(".card-title").click(function(){
    $(".card-text").toggleClass("hidden")
});

// Cambiar el color de los iconos de la seccion quienes somos al hacer doble click
$(".icono-qs").on('dblclick', function () {
    $(this).css("color", "#88DC65");
});

// alerta de llenado de campos
$(document).ready(function(){
    $("#contacto").submit(function(event) {
        event.preventDefault();
        var nombre = $("#casilla-nombre").val()
        var correo = $("#casilla-correo").val()
        var mensaje = $("#casilla-mensaje").val()

        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor, complete todos los campos.")
        } else {
            alert("Mensaje enviado con éxito.")
        }
    });
});