function destacarNome() {
  const nome = document.querySelector("#nome");
  const lista = document.querySelector(".listaDeNomes");
  const listaDeNomes = lista.querySelectorAll("li");
  const novaLista = [];

  for (let i = 0; i < listaDeNomes.length; i++) {
    const nomeAtual = listaDeNomes[i].textContent;
    if (nome.value === nomeAtual) {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.innerText = nomeAtual;
      strong.style.color = "red";
      strong.style.fontSize = "30px";
      li.appendChild(strong);
      novaLista.push(li);
    } else {
      const li = document.createElement("li");
      li.innerText = nomeAtual;
      novaLista.push(li);
    }
  }

  lista.innerText = "";

  for (let i = 0; i < novaLista.length; i++) {
    lista.appendChild(novaLista[i]);
  }
}
