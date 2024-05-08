
const salgados = JSON.parse(localStorage.getItem("salgados")) || []

salgados.forEach(tarefa => card(tarefa))

function card(tarefa) {
    const cardTarefa = `
        <div class="nes-container with-title is-centered" id="itens">
            <p class="title">${tarefa.titulo}</p>
            <p>${tarefa.descricao}</p>
            <img src="https://www.awanderlustforlife.com/wp-content/uploads/2020/11/Arancini-du-ragu-from-Da-Cristina.jpg" alt="" width="75%">

            <a href="#" class="nes-badge is-icon">
                <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
                <span class="is-primary">${tarefa.pontos}</span>
            </a>
            <progress class="nes-progress is-success" value="5" max="10"></progress>
            <div>
            <button onClick="dec('${tarefa.id}')" type="button" class="nes-btn is-primary">-</button>
            <button onClick="apagar('${tarefa.id}')" type="button" class="nes-btn is-error">Apagar</button>
            <button onClick="inc('${tarefa.id}')" type="button" class="nes-btn is-primary">+</button>
            
            </div>
        </div>
` //template literals == format no python

    const card = document.createElement("div")
    card.id = tarefa.id
    card.innerHTML = cardTarefa
    document.querySelector("#lista-de-tarefas").appendChild(card)

}
