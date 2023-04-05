const inputItem = document.getElementById("inputItem");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");

const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreço = document.getElementById("inputPreço");


let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const item = listaItems[index];
    const row = document.createElement("tr");

    const descricaoCell = document.createElement("td");
    descricaoCell.textContent = item.descricao;
    row.appendChild(descricaoCell);

    const qtdCell = document.createElement("td");
    qtdCell.textContent = item.qtd;
    row.appendChild(qtdCell);

    const precoCell = document.createElement("td");
    precoCell.textContent = item.preco;
    row.appendChild(precoCell);

    lista.appendChild(row);
  }
};

const handleBtAdicionarClick = () => {
  const descricao = inputItem.value;
  const qtd = inputQuantidade.value;
  const preco = inputPreço.value;

  if (!descricao || !qtd || !preco) {
    alert("Necessário preencher todos os campos!");
    return;
  }

  const item = { descricao, qtd, preco };
  listaItems.push(item);
  inputItem.value = "";
  inputQuantidade.value = "";
  inputPreço.value = "";
  inputItem.focus();
  redesenhaLista(lista, listaItems);
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;
