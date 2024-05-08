function inc(id) {

    const salgados = JSON.parse(localStorage.getItem("salgados")) || []
    let tarefa = salgados.find( tarefa => tarefa.id = id)
    tarefa.status += 1
    if (tarefa.status >10)  tareda.status = 10
    localStorage.setItem("salgados", JSON.stringify( salgados))

    document.querySelector("#" + id + " progress").value = tarefa.status

}

function dec(id) {

    const salgados = JSON.parse(localStorage.getItem("salgados")) || []
    let tarefa = salgados.find( tarefa => tarefa.id = id)
    tarefa.status -= 1
    if (tarefa.status <0)  tareda.status = 0
    localStorage.setItem("salgados", JSON.stringify( salgados))

    document.querySelector("#" + id + " progress").value = tarefa.status

}