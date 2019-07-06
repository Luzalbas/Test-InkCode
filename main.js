let modal = document.getElementById('miModal');
let abrirVer = document.getElementById('abrirVer');
let modalContacto = document.getElementById('modalContacto');
let abrirContacto = document.getElementById('abrirContacto');
let flex = document.getElementById('flex');

abrirVer.addEventListener('click',function () {
  modal.style.display = 'block';
});

abrirContacto .addEventListener('click',function () {
  modalContacto.style.display = 'block';
});

window.addEventListener('click',function (e) {
  if (e.target == flex) {
    modal.style.display = 'none';
  }
});
