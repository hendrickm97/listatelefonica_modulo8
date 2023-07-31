const form = document.getElementById("form-agenda");
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const nomeContato = document.getElementById("nome");
  const numeroContato = document.getElementById("numero");

  let linha = "<tr>";
  linha += `<td>${nomeContato.value}</td>`;
  linha += `<td>${numeroContato.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  nomeContato.value = "";
  numeroContato.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
