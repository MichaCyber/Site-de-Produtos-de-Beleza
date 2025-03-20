// Detectar quando a seção entra na tela
function checkScroll() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Chama a função no carregamento da página e no evento de rolagem
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

// Mostrar o pop-up de produto
document.querySelectorAll('.product-card .btn').forEach(button => {
    button.addEventListener('click', () => {
        const productDescription = button.previousElementSibling.textContent; // Pega a descrição do produto
        document.getElementById('popup-description').textContent = productDescription; // Atualiza a descrição no pop-up
        document.getElementById('product-popup').style.display = 'flex'; // Exibe o pop-up
    });
});

// Fechar o pop-up
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('product-popup').style.display = 'none'; // Esconde o pop-up
});
