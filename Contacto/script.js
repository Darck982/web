$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('Mensaje enviado. ¡Gracias por contactarnos!');
        $(this).trigger('reset'); // Reinicia el formulario después de enviar
    });
});