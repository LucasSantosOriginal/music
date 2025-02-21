document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');
    const introText = document.querySelector('.intro-text');

    // Adiciona animação de rolagem suave ao clicar no link "Contato"
    const contatoLink = document.querySelector('a[href="#contato"]');
    if (contatoLink) {
        contatoLink.addEventListener('click', (event) => {
            event.preventDefault(); // Evita o comportamento padrão de navegação

            // A animação de rolagem suave para a seção 'contato'
            const contatoSection = document.querySelector('#contato');
            if (contatoSection) {
                contatoSection.scrollIntoView({
                    behavior: 'smooth', // Rolagem suave
                    block: 'start' // A rolagem vai parar no topo da seção
                });

                // Adiciona uma animação ao link para indicar que foi clicado
                contatoLink.classList.add('clicked');
                setTimeout(() => {
                    contatoLink.classList.remove('clicked');
                }, 500); // Remove a animação após meio segundo
            }
        });
    }

    // Função de rolagem para imagens e fade do texto
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        if (scrollPosition > window.innerHeight * 0.3) {
            introText.style.opacity = 0;
        } else {
            introText.style.opacity = 1;
        }

        images.forEach((image) => {
            const imagePosition = image.offsetTop - window.innerHeight;

            if (scrollPosition > imagePosition) {
                image.classList.add('visible');
            } else {
                image.classList.remove('visible');
            }
        });
    });
});
