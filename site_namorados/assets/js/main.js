// Script principal para gerenciar o site

document.addEventListener('DOMContentLoaded', function() {
    // Elementos da interface
    const welcomeScreen = document.getElementById('welcomeScreen');
    const playerScreen = document.getElementById('playerScreen');
    const btnVerPresente = document.getElementById('btnVerPresente');
    const btnBack = document.getElementById('btnBack');
    
    // Configuração inicial
    welcomeScreen.style.display = 'flex';
    playerScreen.style.display = 'none';
    
    // Adicionar classes de animação
    welcomeScreen.classList.add('fade-in');
    btnVerPresente.classList.add('pulse');
    
    // Configurar data e hora exatas de início do relacionamento
    const relationshipStartDate = '2025-04-01T20:41:00'; // Data e hora ajustadas: 01/04/2025 às 20:41
    
    // Inicializar componentes
    initializeTimer(relationshipStartDate);
    initializeMessageToggle();
    
    // Evento para ver o presente
    btnVerPresente.addEventListener('click', function() {
        welcomeScreen.style.display = 'none';
        playerScreen.style.display = 'flex';
        playerScreen.classList.add('fade-in');
        
        // Iniciar reprodução de música
        initializePlayer();
    });
    
    // Evento para voltar à tela inicial
    btnBack.addEventListener('click', function() {
        playerScreen.style.display = 'none';
        welcomeScreen.style.display = 'flex';
    });
    
    // Configurar nomes do casal e data
    setupCoupleInfo('Biel', 'Thata', '2025');
    
    // Se estiver na tela do player, iniciar o player automaticamente
    if (window.location.hash === '#player' || localStorage.getItem('autoStartPlayer') === 'true') {
        welcomeScreen.style.display = 'none';
        playerScreen.style.display = 'flex';
        playerScreen.classList.add('fade-in');
        
        // Iniciar reprodução de música
        initializePlayer();
    }
});

// Função para configurar informações do casal
function setupCoupleInfo(name1, name2, year) {
    const coupleNames = document.getElementById('coupleNames');
    const coupleSince = document.getElementById('coupleSince');
    
    coupleNames.textContent = `${name1} e ${name2}`;
    coupleSince.textContent = `Juntos desde ${year}`;
    
    // Atualizar título da página
    document.title = `${name1} tem um presente especial para ${name2}! 🎁`;
}
