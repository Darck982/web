document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Aquí puedes agregar la lógica para manejar el registro, como enviar datos a un servidor

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Muestra un mensaje de éxito
    document.getElementById('message').innerText = `¡Gracias por registrarte, ${name}!`;
    
    // Limpiar el formulario
    this.reset();
});