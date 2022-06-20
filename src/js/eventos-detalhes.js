const params = new URLSearchParams(window.location.search);
const id = params.get("id");
URL = "/api/eventos/" + id;

fetch(URL)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    eventoNaoEncontrado();
  })
  .then((evento) => {
    if (evento) {
      eventoEncontrado(evento);
    }
  });

// funcoes
function eventoNaoEncontrado() {
  const titulo = document.getElementById("titulo");
  titulo.innerText = "Evento não encontrado";
  const container = document.getElementById("eventoescolhido");
  container.parentElement.removeChild(container);
}

function eventoEncontrado(evento) {
  const titulo = document.getElementById("titulo");
  const descricao = document.getElementById("texto");
  const imagem = document.getElementById("imagem");
  const link = document.getElementById("linkSiteOficial");

  titulo.innerText = evento.titulo;
  descricao.innerText = evento.descricao;
  imagem.src = evento.imagem;
  link.href = evento.link;
}
