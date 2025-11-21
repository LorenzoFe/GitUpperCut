function setupSPA() {
    $("body").on("click", "a[data-page]", function (e) {
        e.preventDefault();
        const page = $(this).data("page");
        loadPage(page);
    });

    // Carrega a Home inicialmente
    loadPage("home.html");
}

function loadPage(page) {
    $("#content").fadeOut(200, function() {
        $(this).load("pages/" + page, function (response, status, xhr) {
            if (status === "error") {
                $("#content").html("<h2 style='text-align:center; color:red;'>SYSTEM FAILURE (404)</h2>");
            } else {
                // Reinicializa scripts específicos da página
                initPageScripts(page);
            }
            $(this).fadeIn(200);
        });
    });
}

function initPageScripts(page) {
    // Se for a Home, ativa o Slider
    if (page === "home.html") {
        $('.hero-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false
        });
    }

    // Se for o Blog, ativa animações dos cards
    if (page === "blog.html") {
        const cards = document.querySelectorAll(".blog-card");
        cards.forEach((card, index) => {
            setTimeout(() => card.classList.add("show"), 200 * (index + 1));
        });
    }
}