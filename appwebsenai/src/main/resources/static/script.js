const formPessoa = document.getElementById("cadastroPessoa");
const tabelaPessoa = document.getElementById
("tabelaPessoas").getElementsByTagName('tbody')[0];
const btnAll = document.getElementById("ListarPessoas")
formPessoa.addEventListener("submit", function (event){
    event.preventDefault();
    let formDados = new FormData(formPessoa);
    let parametros = new URLSearchParams(formDados);

    fetch("/person?"+parametros.toString(), {
        method: "POST"
    }).then(response => response.json())
        .then(data => {
            document.getElementById("id").value = data.id;

        })


});