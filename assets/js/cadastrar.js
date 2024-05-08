
document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("form")

    const tarefa = {
        id: "id_" + new Date().getTime(),
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value,
        // link: form.link.value
    }



    validar(tarefa)
    salvar(tarefa)
    // imagens(foto)

    function salvar(tarefa){

        const salgados = JSON.parse(localStorage.getItem("salgados")) || []
        salgados.push(tarefa)
        localStorage.setItem("salgados", JSON.stringify(salgados))
        // localStorage.setItem("salgados", JSON.stringify("https://www.saborbrasil.it/wp-content/uploads/2021/06/Bolinha-de-queijo_sito.jpg","https://chokomilla.com.br/uploads/produtos/1/71/medium.jpg"))
        window.location.href = "index.html"
    }

    function validar(tarefa){
        limparErros()

        if (tarefa.titulo.trim() == ""){
            document.querySelector("#titulo").classList.add("is-error")
            document.querySelector("#titulo-erro").innerText = "O título é obrigatório!!!!!!!!!!"
        }
        if (tarefa.descricao.trim() == "" || tarefa.descricao.length <10){
            document.querySelector("#descricao").classList.add("is-error")
            document.querySelector("#descricao-erro").innerText = "A descrição deve conter no mínimo 10 caracteres"
        }
        if (tarefa.pontos <=0){
            document.querySelector("#pontos").classList.add("is-error")
            document.querySelector("#pontos-erro").innerText = "A pontuação deve ser maior que zero"
        }


    }

    function limparErros(){
        const campos = document.querySelectorAll("input.is-error, textarea.is-error")
        console.log(campos)  
        document.querySelectorAll("input .is-error, textarea .is-error").forEach(()=>{console.log("campo com erro")})
        campos.forEach((input) =>{input.classList.remove("is-error")})
        document.querySelectorAll(".nes-field span").forEach(span => span.innerText = "")
    }

    console.log(tarefa)
    

})
