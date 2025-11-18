function setupSPA(){

    //Evento dos links do menu
    $("body").on("Click", "a[data-page]", function(e){
        e.preventDefault();

        const page =$(this).data("page");

        loadPage(page);
    });

    //Carregar pagina inicial
    loadPage("home.html");
}

function loadPage(page){
    $("#$content").load("pages/" + page, function(response, status, xhr){
        if(status == "error"){
            $("content").html("<h2> Erro ao carregar a pagina.</h2>");
        }
    });
}