let h1Titulo = document.querySelector("#titulo");
h1Titulo.textContent = "Blog do Carlos";

let paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => {
    console.log(p.textContent);
});

let lista = document.querySelector("#lista");
lista.innerHTML = "<li>Primeiro item</li><li>Segundo item</li>";

let novoLi = document.createElement("li");
novoLi.textContent = "Terceiro item";
lista.append(novoLi);

novoLi.classList.add("destaque");
console.log(novoLi.classList.contains("destaque"));

let tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach((tarefa, indice) => {
    let liTarefa = document.createElement("li");
    liTarefa.textContent = tarefa; // Corrigido aqui de 'tarea' para 'tarefa'
    if (indice === 0) {
        liTarefa.classList.add("feito");
    }
    lista.append(liTarefa);
});

console.log(document.querySelectorAll("#lista li").length);
