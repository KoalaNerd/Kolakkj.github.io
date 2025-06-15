// Script para criar corações roxos caindo
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar a animação quando o player for exibido
    document.getElementById('btnVerPresente').addEventListener('click', function() {
        setTimeout(startHearts, 1000); // Iniciar após 1 segundo da transição
    });
    
    // Também iniciar quando a página já estiver no player (refresh)
    if (document.getElementById('playerScreen').style.display === 'block') {
        startHearts();
    }
});

function startHearts() {
    // Criar corações a cada intervalo
    setInterval(createHeart, 800);
}

function createHeart() {
    // Apenas o emoji de coração roxo solicitado
    const heartEmoji = '💜';
    
    // Criar elemento do coração
    const heart = document.createElement('div');
    
    // Definir o emoji
    heart.innerHTML = heartEmoji;
    
    // Adicionar classe base
    heart.classList.add('heart');
    
    // Adicionar tamanho aleatório
    const sizes = ['heart-small', 'heart-medium', 'heart-large'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    heart.classList.add(randomSize);
    
    // Adicionar efeito de pulsação aleatoriamente (30% de chance)
    if (Math.random() < 0.3) {
        heart.classList.add('heart-pulse');
    }
    
    // Posição horizontal aleatória
    const left = Math.random() * 100;
    heart.style.left = `${left}%`;
    
    // Duração da queda aleatória entre 5 e 10 segundos
    const duration = 5 + Math.random() * 5;
    heart.style.animationDuration = `${duration}s`;
    
    // Adicionar ao corpo do documento
    document.body.appendChild(heart);
    
    // Remover após a animação terminar
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
