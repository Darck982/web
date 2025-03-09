document.getElementById('addMethodButton').addEventListener('click', function() {
    const newMethodInput = document.getElementById('newPaymentMethod');
    const newMethod = newMethodInput.value.trim();
    const errorMessage = document.getElementById('error-message');

    // Validación del método de pago
    if (newMethod === "") {
        errorMessage.style.display = 'block';
        newMethodInput.classList.add('is-invalid');
    } else {
        errorMessage.style.display = 'none';
        newMethodInput.classList.remove('is-invalid');

        // Crear un nuevo elemento de lista
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = newMethod;

        // Botón para eliminar el método de pago
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        document.getElementById('payment-methods').appendChild(listItem);

        // Limpiar el campo de entrada
        newMethodInput.value = '';
        const modal = bootstrap.Modal.getInstance(document.getElementById('addPaymentMethodModal'));
        modal.hide(); // Cerrar el modal
    }
});