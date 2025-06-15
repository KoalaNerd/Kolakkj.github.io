// Script para gerenciar o player de música com áudio local

// Variável global para o player de áudio
let audioPlayer;

// Variáveis para controle das fotos
let currentPhotoIndex = 0;
const totalPhotos = 7; // Total de fotos disponíveis

// Função para inicializar o player de áudio
function initAudioPlayer() {
    // Criar elemento de áudio
    audioPlayer = new Audio('assets/audio/alianca.mp3');
    
    // Configurar reprodução automática
    audioPlayer.autoplay = true;
    
    // Configurar eventos
    audioPlayer.addEventListener('play', onPlayerPlay);
    audioPlayer.addEventListener('pause', onPlayerPause);
    audioPlayer.addEventListener('ended', onPlayerEnded);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    
    // Iniciar reprodução
    try {
        audioPlayer.play().catch(e => {
            console.log("Erro ao iniciar reprodução automática:", e);
        });
    } catch (e) {
        console.log("Erro ao iniciar reprodução:", e);
    }
    
    updatePlayerInfo();
    
    // Configurar a primeira foto
    setupPhotos();
}

// Função chamada quando o player começa a tocar
function onPlayerPlay() {
    const playPauseIcon = document.getElementById('playPauseIcon');
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
}

// Função chamada quando o player é pausado
function onPlayerPause() {
    const playPauseIcon = document.getElementById('playPauseIcon');
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
}

// Função chamada quando a música termina
function onPlayerEnded() {
    const playPauseIcon = document.getElementById('playPauseIcon');
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
    
    // Verificar se o botão de repetição está ativo
    const btnRepeat = document.querySelector('#btnRepeat');
    if (btnRepeat.classList.contains('active')) {
        // Reiniciar a música
        audioPlayer.currentTime = 0;
        audioPlayer.play().catch(e => console.log("Erro ao reiniciar música:", e));
    }
}

// Atualizar barra de progresso
function updateProgress() {
    if (!audioPlayer) return;
    
    try {
        const currentTime = audioPlayer.currentTime || 0;
        const duration = audioPlayer.duration || 0;
        
        if (duration > 0) {
            // Atualizar barra de progresso
            const progressPercent = (currentTime / duration) * 100;
            document.getElementById('progress').style.width = `${progressPercent}%`;
            
            // Atualizar tempo atual
            const currentMinutes = Math.floor(currentTime / 60);
            const currentSeconds = Math.floor(currentTime % 60);
            document.getElementById('currentTime').textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
            
            // Atualizar tempo total (restante)
            const remainingTime = duration - currentTime;
            const remainingMinutes = Math.floor(remainingTime / 60);
            const remainingSeconds = Math.floor(remainingTime % 60);
            document.getElementById('totalTime').textContent = `-${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        }
    } catch (e) {
        console.log("Erro ao atualizar progresso:", e);
    }
}

// Atualizar informações da música
function updatePlayerInfo() {
    const songNameEl = document.querySelector('.song-name');
    const artistNameEl = document.querySelector('.artist-name');
    
    // Atualizar informações da música
    songNameEl.textContent = "Aliança";
    artistNameEl.textContent = "Tribalistas";
}

// Configurar as fotos iniciais
function setupPhotos() {
    const albumCoverContainer = document.querySelector('.album-cover');
    albumCoverContainer.innerHTML = '';
    
    // Criar container para as imagens
    const container = document.createElement('div');
    container.className = 'album-cover-container';
    albumCoverContainer.appendChild(container);
    
    // Adicionar todas as fotos ao container
    for (let i = 0; i < totalPhotos; i++) {
        const img = document.createElement('img');
        img.src = `assets/img/couple_photos/photo${i + 1}.jpg`;
        img.id = `photo${i}`;
        img.className = i === 0 ? 'current' : 'slide-out-right';
        container.appendChild(img);
    }
}

// Função para avançar para a próxima foto com efeito de slide
function nextPhoto() {
    const currentImg = document.getElementById(`photo${currentPhotoIndex}`);
    const nextIndex = (currentPhotoIndex + 1) % totalPhotos;
    const nextImg = document.getElementById(`photo${nextIndex}`);
    
    // Preparar a próxima imagem à direita
    nextImg.className = 'slide-in-right';
    
    // Forçar reflow para garantir que a transição funcione
    void nextImg.offsetWidth;
    
    // Animar a saída da imagem atual para a esquerda
    currentImg.className = 'slide-out-left';
    
    // Animar a entrada da próxima imagem da direita
    nextImg.className = 'current';
    
    // Atualizar o índice atual
    currentPhotoIndex = nextIndex;
}

// Função para voltar para a foto anterior com efeito de slide
function previousPhoto() {
    const currentImg = document.getElementById(`photo${currentPhotoIndex}`);
    const prevIndex = (currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
    const prevImg = document.getElementById(`photo${prevIndex}`);
    
    // Preparar a imagem anterior à esquerda
    prevImg.className = 'slide-in-left';
    
    // Forçar reflow para garantir que a transição funcione
    void prevImg.offsetWidth;
    
    // Animar a saída da imagem atual para a direita
    currentImg.className = 'slide-out-right';
    
    // Animar a entrada da imagem anterior da esquerda
    prevImg.className = 'current';
    
    // Atualizar o índice atual
    currentPhotoIndex = prevIndex;
}

function initializePlayer() {
    // Inicializar o player de áudio
    initAudioPlayer();
    
    // Elementos do player
    const btnPlayPause = document.getElementById('btnPlayPause');
    const playPauseIcon = document.getElementById('playPauseIcon');
    
    // Botões de controle adicionais
    const btnPrevious = document.getElementById('btnPrevious');
    const btnNext = document.getElementById('btnNext');
    const btnShuffle = document.getElementById('btnShuffle');
    const btnRepeat = document.getElementById('btnRepeat');
    
    // Evento de clique no botão play/pause
    btnPlayPause.addEventListener('click', function() {
        if (!audioPlayer) return;
        
        try {
            if (audioPlayer.paused) {
                // Reproduzir o áudio
                audioPlayer.play();
            } else {
                // Pausar o áudio
                audioPlayer.pause();
            }
        } catch (e) {
            console.log("Erro ao controlar reprodução:", e);
        }
    });
    
    // Permitir clique na barra de progresso para avançar/retroceder
    const progressBar = document.querySelector('.progress-bar');
    progressBar.addEventListener('click', function(e) {
        if (!audioPlayer) return;
        
        try {
            const progressBarWidth = this.clientWidth;
            const clickPosition = e.offsetX;
            const duration = audioPlayer.duration;
            
            const seekTime = (clickPosition / progressBarWidth) * duration;
            audioPlayer.currentTime = seekTime;
        } catch (e) {
            console.log("Erro ao buscar posição:", e);
        }
    });
    
    // Eventos para botões adicionais
    btnPrevious.addEventListener('click', function() {
        // Apenas mudar para a foto anterior, sem afetar a música
        previousPhoto();
    });
    
    btnNext.addEventListener('click', function() {
        // Apenas mudar para a próxima foto, sem afetar a música
        nextPhoto();
    });
    
    btnShuffle.addEventListener('click', function() {
        // Apenas efeito visual e mudar para uma foto aleatória
        this.classList.toggle('active');
        
        // Salvar o índice atual
        const oldIndex = currentPhotoIndex;
        
        // Gerar um novo índice aleatório diferente do atual
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * totalPhotos);
        } while (newIndex === oldIndex && totalPhotos > 1);
        
        // Simular clique no botão next ou previous dependendo da posição relativa
        if (newIndex > oldIndex) {
            currentPhotoIndex = newIndex - 1;
            nextPhoto();
        } else {
            currentPhotoIndex = (newIndex + 1) % totalPhotos;
            previousPhoto();
        }
    });
    
    btnRepeat.addEventListener('click', function() {
        if (!audioPlayer) return;
        
        // Toggle loop visual
        this.classList.toggle('active');
        
        // O comportamento de loop é tratado no evento onPlayerEnded
    });
    
    // Permitir clicar na foto para mudar para a próxima
    document.querySelector('.album-cover').addEventListener('click', function() {
        nextPhoto();
    });
}
