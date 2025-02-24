document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        images.forEach((image, index) => {
            // Calcula quando a imagem deve aparecer com base na rolagem
            const imagePosition = image.offsetTop - window.innerHeight;

            if (scrollPosition > imagePosition) {
                image.classList.add('visible');
            }
        });
        window.addEventListener('load', function () {
            const video = document.querySelector('.video-bg');
            if (video) {
                video.classList.add('visible');
            }
        });
    });
});
