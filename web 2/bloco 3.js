let botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

let campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log(campoNome.value);
});

let listaEventos = document.querySelector("#lista");

listaEventos.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});

let liDelegation = document.createElement("li");
liDelegation.textContent = "Item via Delegation";
listaEventos.append(liDelegation);

let formulario = document.querySelector("#formulario");
let campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let textoTarefa = campoTarefa.value.trim();
    
    if (textoTarefa !== "") {
        let novoLiTarefa = document.createElement("li");
        novoLiTarefa.textContent = textoTarefa;
        listaEventos.append(novoLiTarefa);
        campoTarefa.value = "";
    }
});
