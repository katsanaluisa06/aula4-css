const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const pesquisa = this.value.toLowerCase().trim();

    // Cards das integrantes
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const texto = card.textContent.toLowerCase();

        if (texto.includes(pesquisa)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });

    // Músicas
    const musicas = document.querySelectorAll(".music-card");

    musicas.forEach(musica => {
        const texto = musica.textContent.toLowerCase();

        if (texto.includes(pesquisa)) {
            musica.style.display = "";
        } else {
            musica.style.display = "none";
        }
    });

    // Álbuns
    const albuns = document.querySelectorAll(".album");

    albuns.forEach(album => {
        const texto = album.textContent.toLowerCase();

        if (texto.includes(pesquisa)) {
            album.style.display = "";
        } else {
            album.style.display = "none";
        }
    });

    // Bias
    const bias = document.querySelectorAll(".bias-card");

    bias.forEach(biasCard => {
        const texto = biasCard.textContent.toLowerCase();

        if (texto.includes(pesquisa)) {
            biasCard.style.display = "";
        } else {
            biasCard.style.display = "none";
        }
    });
});