// Script para gerenciar as mensagens e interações

function initializeMessageToggle() {
    // Elementos da mensagem
    const btnShowMessage = document.getElementById('btnShowMessage');
    const messageContent = document.getElementById('messageContent');
    
    // Estado inicial
    let isExpanded = false;
    
    // Evento de clique no botão de mostrar mensagem
    btnShowMessage.addEventListener('click', function() {
        if (isExpanded) {
            // Recolher mensagem
            messageContent.classList.remove('expanded');
            btnShowMessage.textContent = 'Mostrar Mensagem';
        } else {
            // Expandir mensagem
            messageContent.classList.add('expanded');
            btnShowMessage.textContent = 'Ocultar Mensagem';
        }
        
        isExpanded = !isExpanded;
    });
}
