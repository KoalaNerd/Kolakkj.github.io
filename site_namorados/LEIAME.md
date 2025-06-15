# Guia de Personalização do Site de Dia dos Namorados

Este documento explica como personalizar o site para seu relacionamento.

## Personalização Básica

Para personalizar o site com seus próprios dados, você precisa editar os seguintes arquivos:

### 1. Arquivo `assets/js/main.js`

Localize as seguintes linhas:

```javascript
// Configurar data de início do relacionamento (será personalizada pelo usuário)
const relationshipStartDate = '2023-01-01'; // Formato: YYYY-MM-DD

// ...

// Configurar nomes do casal e data (será personalizado pelo usuário)
setupCoupleInfo('Nome1', 'Nome2', '2023');
```

Substitua:
- `'2023-01-01'` pela data de início do seu relacionamento no formato YYYY-MM-DD (ano-mês-dia)
- `'Nome1'` pelo nome da pessoa que está dando o presente
- `'Nome2'` pelo nome da pessoa que está recebendo o presente
- `'2023'` pelo ano em que começaram a namorar

### 2. Arquivo `assets/audio/song.mp3`

Substitua este arquivo pela música que você deseja que toque no site. Certifique-se de:
- Manter o mesmo nome de arquivo (`song.mp3`)
- Usar um arquivo no formato MP3
- Idealmente, escolher uma música romântica significativa para o casal

### 3. Imagens do Casal

Substitua as imagens em `assets/img/couple/`:
- `couple1.jpg` - Imagem principal que aparece no player de música
- `couple2.jpg` - Imagem secundária que aparece na seção "Sobre o casal"

Mantenha os mesmos nomes de arquivo e, se possível, use imagens com proporções semelhantes às originais.

### 4. Mensagem Personalizada

Para editar a mensagem romântica, localize no arquivo `index.html` a seção:

```html
<div class="message-content" id="messageContent">
    <p>Amor, Obrigado por estar comigo, por me amar do jeitinho que eu sou e por fazer tudo ser mais leve só por existir. Estar ao teu lado é a melhor parte dos meus dias. Eu sou tão grato por esse amor, por cada abraço, cada riso, cada silêncio cheio de paz. Te amo com tudo que sou, e só quero continuar vivendo tudo isso com você.</p>
</div>
```

Substitua o texto entre as tags `<p>` e `</p>` pela sua mensagem personalizada.

## Personalização Avançada

Se você tiver conhecimentos de HTML, CSS e JavaScript, pode personalizar ainda mais:

- Cores: Edite os arquivos CSS em `assets/css/`
- Fontes: Adicione novas fontes e atualize as referências nos arquivos CSS
- Animações: Modifique as animações nos arquivos CSS e JavaScript
- Layout: Ajuste a estrutura HTML conforme necessário

## Hospedagem do Site

Para disponibilizar o site online:
1. Contrate um serviço de hospedagem web (como GitHub Pages, Netlify, Vercel, etc.)
2. Faça upload de todos os arquivos mantendo a estrutura de pastas
3. Configure o domínio conforme as instruções do serviço escolhido

## Suporte

Este site foi desenvolvido com HTML, CSS e JavaScript puros, sem dependências externas, o que facilita a hospedagem e personalização.
