function apagar(id){
    const salgados = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefasAtualizadas = salgados.filter(tarefa => tarefa.id != id)
    localStorage.setItem("salgados", JSON.stringify( tarefasAtualizadas))

    document.querySelector("#" + id).remove()
}

