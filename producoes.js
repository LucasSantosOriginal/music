document.addEventListener("DOMContentLoaded", () => {
    const volumeSlider = document.getElementById("volumeRange");
    const iframes = document.querySelectorAll(".soundcloud");
    let players = [];

    // Verificar se a API do SoundCloud está disponível
    console.log("Verificando a disponibilidade da API do SoundCloud...");

    if (typeof SC !== "undefined" && SC.Widget) {
        console.log("API do SoundCloud encontrada!");

        // Adiciona evento de interação do usuário para permitir que o AudioContext seja iniciado
        document.body.addEventListener('click', () => {
            console.log('Interação do usuário detectada. Iniciando os players SoundCloud.');

            iframes.forEach((iframe, index) => {
                console.log(`Iniciando widget do player SoundCloud para o iframe #${index}`);

                let widget = SC.Widget(iframe);
                players.push(widget);

                // Configurar o volume ao inicializar o player
                widget.bind(SC.Widget.Events.READY, function () {
                    console.log(`Widget #${index} pronto! Definindo volume para o valor inicial.`);
                    widget.setVolume(volumeSlider.value); // Define o volume inicial
                });
            });
        });

        // Evento para modificar o volume
        volumeSlider.addEventListener("input", () => {
            let volume = volumeSlider.value / 100; // Converte para decimal (0 a 1)
            console.log(`Alterando volume para: ${volume}`);
            players.forEach(player => {
                player.setVolume(volume);
            });
        });
    } else {
        console.error("A API do SoundCloud Widget não foi carregada corretamente.");
    }
});
