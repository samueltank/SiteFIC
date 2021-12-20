const btnmobile = document.getElementById('btnMobile');
const menuItem = document.getElementsByClassName('item');

// Teste de saída:
// console.log(btnmobile);
// console.log(menuItem);

btnmobile.addEventListener('click', toggleBtn);
btnmobile.addEventListener('touchstart', toggleBtn);

// loop for com contador (para testes):
// for (i = 0; i < menuItem.length; i++) {
//   menuItem[i].addEventListener('click', test);
// }

// loop For-Each:
for (element in menuItem) {
  menuItem[element].addEventListener('click', toggleBtn);
  menuItem[element].addEventListener('touchstart', toggleBtn);
}

function test() {
  console.log("clicou!");
}

function toggleBtn(event) {
  if (event.type === 'touchstart') {
    event.preventDefault();
  }
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu popup');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu popup');
  }
}