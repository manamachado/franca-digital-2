function mostrarTabuada() {
  const numero = document.querySelector("#numero");
  const resultado = document.querySelector("#resultado");
  resultado.innerText = "";

  for (let contador = 0; contador <= 10; contador++) {
    const div = document.createElement("div");
    div.innerText = `${numero.value} x ${contador} = ${numero.value * contador}`;
    resultado.appendChild(div);
  }
}
