document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtém os valores dos campos de entrada
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    // Adiciona uma nova linha à tabela de contatos
    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);
    nameCell.textContent = name;
    phoneCell.textContent = phone;
    
    // Limpa os campos de entrada após o cadastro
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});
