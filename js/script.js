window.addEventListener('load', start);

function start() {
  console.log('Pagina Carregada.');
  var box_live = document.querySelector('#campo_nome');
  box_live.addEventListener('keyup', contador);
}

function contador(event) {
  var escrito = event.target.value;
  var contador = document.querySelector('#contador');
  contador.textContent = escrito.length;
}
