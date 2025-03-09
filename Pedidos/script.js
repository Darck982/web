document.getElementById('trackOrdersBtn').addEventListener('click', function() {
    document.getElementById('output').style.display = 'block';
    document.getElementById('output').innerText = 'Rastreando tus pedidos actuales...';
});

document.getElementById('returnOrdersBtn').addEventListener('click', function() {
    document.getElementById('output').style.display = 'block';
    document.getElementById('output').innerText = 'Iniciando el proceso de devolución...';
});

document.getElementById('previousOrdersBtn').addEventListener('click', function() {
    document.getElementById('output').style.display = 'block';
    document.getElementById('output').innerText = 'Revisando tus pedidos anteriores...';
});