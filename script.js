// Seleciona o botão "Não" e o botão "Sim"
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// Função para mover o botão "Não" para um local aleatório
noBtn.addEventListener('click', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect(); // Tamanho do container

    // Calcula uma posição aleatória dentro do container
    const newTop = Math.random() * (window.innerHeight - containerRect.height - 50);
    const newLeft = Math.random() * (window.innerWidth - containerRect.width - 50);

    // Move o botão "Não" para a nova posição
    noBtn.style.top = `${newTop}px`;
    noBtn.style.left = `${newLeft}px`;
    noBtn.classList.add('moved');
});

// Função para abrir o YouTube ao clicar no botão "Sim"
yesBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=vn9osu2IdZY', '_blank');
});
