const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const evento = listaEventos.find(achaevento);

const titulo = document.getElementById("titulo");
if (evento) {
  const descricao = document.getElementById("texto");
  const video = document.getElementById("video");

  titulo.innerText = evento.titulo;
  descricao.innerText = evento.descricao;
  video.src = evento.video;
} else {
  titulo.innerText = "Evento não encontrado";
  const container = document.getElementById("eventoescolhido");
  container.parentElement.removeChild(container);
}

function achaevento(evento) {
  return evento.id == id;
}
