function setupSPA() {

    // Evento dos links do menu
    $("body").on("click", "a[data-page]", function (e) {
        e.preventDefault();

        const page = $(this).data("page");
        loadPage(page);
    });

    // Carregar página inicial
    loadPage("home.html");
}

function loadPage(page) {
    $("#content").load("pages/" + page, function (response, status, xhr) {

        if (status === "error") {
            $("#content").html("<h2>Erro ao carregar a página.</h2>");
            return;
        }

        // Se a pagina for o blog ativa a animação
        if (page.includes("blog")) {
            animateBlogCards();
        }
    });
}

function animateBlogCards() {
    const cards = document.querySelectorAll(".blog-card");
    cards.forEach((card, index) => {
        setTimeout(() => card.classList.add("show"), 200 * (index + 1));
    });
}

// Exemplo: chamar após carregar o blog via SPA
loadBlogContent().then(() => {
    animateBlogCards();
});
