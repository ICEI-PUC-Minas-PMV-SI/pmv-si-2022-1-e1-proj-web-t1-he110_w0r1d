URL = "http://localhost:3000/eventos";

// elementos html
var campoFiltroOrdenacao = document.getElementById("ordenacao");
var campoFiltroCategoria = document.getElementById("filtro-categoria");

// eventos
campoFiltroCategoria.oninput = filtrarPorCategoria;
campoFiltroOrdenacao.oninput = ordenarPorData;

// variaveis globais
var listaFiltrada;
var lista;

// chamada de api
fetch(URL)
  .then((res) => res.json())
  .then((listaCompleta) => {
    lista = listaCompleta;
    listaFiltrada = listaCompleta;
    carregaListaNaGradeEventos(listaCompleta);
  });

// funcoes
function carregaListaNaGradeEventos(listaJson) {
  var gradeDeEventos = document.getElementById("grade-de-eventos");
  gradeDeEventos.innerHTML = "";
  var htmlDoEventoAtual = "";
  for (let contador = 0; contador < listaJson.length; contador++) {
    var evento = listaJson[contador];
    htmlDoEventoAtual += crieHtmlDinamicoParaEvento(evento);
  }
  gradeDeEventos.innerHTML += htmlDoEventoAtual;
}

function crieHtmlDinamicoParaEvento(evento) {
  return `
<a href="./eventos-detalhes.html?id=${evento.id}" class="col-4 bloco">
    <div class="row pt-2">
        <img id="img" src="${evento.imagem}" alt="">
</div>
    <div class="row pt-2 pb-2 bloco-info">
        <div class="col">${new Date(evento.data).toLocaleDateString()}</div>
        <div class="col text-right">${evento.categoria}</div>
    </div>
    </div>
    <div class="row pb-2">
    <div class="col pl-0">
    <span class="bloco-titulo">${evento.titulo}</span>
    </div>
</div>
</a>
`;
}

function filtrarPorCategoria(item) {
  var categoria = item.target.value;

  listaFiltrada = lista.filter(function (evento) {
    return evento.categoria == categoria || categoria == "Todos";
  });

  carregaListaNaGradeEventos(listaFiltrada);
}

function ordenarPorData(item) {
  var ordenar = item.target.value;
  listaFiltrada.sort(function (a, b) {
    if (ordenar == "Antigos") {
      return a.data - b.data;
    }
    return b.data - a.data;
  });
  carregaListaNaGradeEventos(listaFiltrada);
}
