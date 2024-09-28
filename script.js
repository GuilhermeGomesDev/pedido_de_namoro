// Função que redireciona para uma música no YouTube quando o botão "Sim" é clicado
document.getElementById("yes-btn").addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=vn9osu2IdZY", "_blank"); // Abre o link em uma nova aba
});

// Função para mover o botão "Não" para uma posição aleatória na tela
document.getElementById("no-btn").addEventListener("click", function() {
    const btn = document.getElementById("no-btn");

    // Obtendo a largura e altura da janela para calcular limites de movimento
    const windowWidth = window.innerWidth - btn.offsetWidth;
    const windowHeight = window.innerHeight - btn.offsetHeight;

    // Calculando uma nova posição aleatória
    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);

    // Definindo a nova posição do botão "Não"
    btn.style.position = 'absolute';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
});
