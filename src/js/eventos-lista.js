// organizando as caixinhas...

// declaracao de variavel que ira conter o bloco de html dos eventos
// que serao preenchidos dinamicamente
var gradeDeEventos = document.getElementById("grade-de-eventos");

// iteracao sobre todos os eventos da lista
// para cada evento da lista, chamar uma funcao que retorna o html daquele evento
// concatenar o resultado de todos os eventos dentro da variavel gradeDeEventos
for (let contador = 0; contador < listaEventos.length; contador++) {
  // variavel que ira conter um evento que está em uma determinada posicao na lista
  // apontado pela variavel contador
  var evento = listaEventos[contador];

  // variavel que ira conter o bloco html do evento
  var htmlDoEventoAtual = crieHtmlDinamicoParaEvento(evento);

  // grade de eventos contera todos os blocos html para todos os eventos
  gradeDeEventos.innerHTML += htmlDoEventoAtual;
}

// definicao de funcao que ira montar o bloco html do evento dinamicamente
// essa funcao recebe como parametro um evento
// e utiliza as propriedade do evento para preencher partes especificas do bloco
// como url, data, categoria e descricao
function crieHtmlDinamicoParaEvento(evento) {
  return `
<a href="./eventos-detalhes.html?id=${evento.id}" class="col-4 bloco">
    <div class="row pt-2">
        <img src="${evento.imagem}" alt="">
    </div>
    <div class="row pt-2 pb-2 bloco-info">
        <div class="col">${new Date(evento.data).toLocaleDateString()}</div>
        <div class="col text-right">${evento.categoria}</div>
    </div>
    <div class="row pb-2">
        <div class="col pl-0">
        <span class="bloco-titulo">${evento.titulo}</span>
        </div>
    </div>
</a>
`;
}

// declaracao de variavel que vai representar os eventos quando eles forem filtrados
var listaFiltrada = listaEventos;

// FILTRAR POR CATEGORIA

var filtroCategoria = document.getElementById("filtro-categoria");

// toda vez que um elemento de formulario muda de valor, ele executa uma funcao chamada oninput
// nos vamos alterar o valor desta funcao para a nossa funcao chamada filtrar
// assim, toda vez que o valor do filtroCategoria for mudado, nossa funcao será executada
filtroCategoria.oninput = filtrar;

function filtrar(item) {
  // o parametro que o filtroCategoria passa para a nossa funcao é um objeto com algumas propriedades
  // as propriedades que estamos interessados sao target.value
  // que contem o valor atual do campo
  var categoria = item.target.value;

  // Nos vamos filtrar os eventos na lista de eventos de acordo com a categoria selecionada
  // caso a categoria selecionada seja "Todos" entao sempre vamos retornar todos os eventos
  listaFiltrada = listaEventos.filter(function (evento) {
    return evento.categoria == categoria || categoria == "Todos";
  });

  var gradeDeEventos = document.getElementById("grade-de-eventos");

  // limpar tudo que temos na div gradeDeEventos antes de jogar os blocos de html novamente dentro dele
  gradeDeEventos.innerHTML = "";

  // para cada evento na lista filtrada, recriar o html para o evento e
  // jogar ele dentro da grade de eventos
  for (let contador = 0; contador < listaFiltrada.length; contador++) {
    var evento = listaFiltrada[contador];
    var htmlDoEventoAtual = crieHtmlDinamicoParaEvento(evento);
    gradeDeEventos.innerHTML += htmlDoEventoAtual;
  }
}

// ORDENACAO POR DATA

var campoOrdenacao = document.getElementById("ordenacao");

// toda vez que um elemento de formulario muda de valor, ele executa uma funcao chamada oninput
// nos vamos alterar o valor desta funcao para a nossa funcao chamada ordenar
// assim, toda vez que o valor do campo de ordenacao for mudado, nossa funcao será executada
campoOrdenacao.oninput = ordenar;

// declaracao de funcao que ira ordenar os eventos na grade
function ordenar(item) {
  // o parametro que o campoOrdenacao passa para a nossa funcao é um objeto com algumas propriedades
  // as propriedades que estamos interessados sao target.value
  // que contem o valor atual do campo
  var ordenar = item.target.value;

  listaFiltrada.sort(function (a, b) {
    if (ordenar == "Antigos") {
      return a.data - b.data;
    }
    return b.data - a.data;
  });

  var gradeDeEventos = document.getElementById("grade-de-eventos");

  gradeDeEventos.innerHTML = "";

  for (let contador = 0; contador < listaFiltrada.length; contador++) {
    var evento = listaFiltrada[contador];
    var htmlDoEventoAtual = crieHtmlDinamicoParaEvento(evento);
    gradeDeEventos.innerHTML += htmlDoEventoAtual;
  }
}
