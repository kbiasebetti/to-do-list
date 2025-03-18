document.addEventListener("DOMContentLoaded", () => {
    const inputTarefa = document.getElementById("inputTarefa")
    const botaoAdicionar = document.getElementById("adicionarTarefa")
    const listaTarefa = document.getElementById("listaTarefa")
    const erro = document.getElementById("erro")

    function adicionarTarefa() {
        const textoTarefa = inputTarefa.value.trim()
        
        if (textoTarefa === "") {
            erro.innerHTML = "Erro: O espaço da tarefa não pode ser vazio!"
            return
        }

        erro.innerHTML = ""

        const itemLista = document.createElement("li")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.addEventListener("change", () => {
            itemLista.classList.toggle("concluida")
        })

        const span = document.createElement("span")
        span.textContent = textoTarefa
        span.addEventListener("click", () => {
            const novoTexto = prompt("Editar tarefa:", span.textContent)
            if (novoTexto !== null && novoTexto.trim() !== "") {
                span.textContent = novoTexto.trim()
            }
        })

        const botaoRemover = document.createElement("button")
        botaoRemover.textContent = "X"
        botaoRemover.addEventListener("click", () => itemLista.remove())

        const selectUrgencia = document.createElement("select")
        const opcoes = ["Baixa", "Média", "Alta"]
        opcoes.forEach((opcao) => {
            const option = document.createElement("option")
            option.textContent = opcao
            option.value = opcao.toLowerCase()
            selectUrgencia.appendChild(option)
        })

        selectUrgencia.addEventListener("change", () => {
            itemLista.className = selectUrgencia.value
        })

        itemLista.appendChild(checkbox)
        itemLista.appendChild(span)
        itemLista.appendChild(selectUrgencia)
        itemLista.appendChild(botaoRemover)
        listaTarefa.appendChild(itemLista)

        inputTarefa.value = ""
    }

    botaoAdicionar.addEventListener("click", adicionarTarefa)
    inputTarefa.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") adicionarTarefa()
    })
})