$(document).ready(function () {
    $("#header").load("components/header.html", function () {
        console.log("Header carregado.");

        // Ativa a navegação só quando o header carregar
        setupSPA();
    });

    $("#footer").load("components/footer.html", function () {
        console.log("Footer carregado.");
    });
});