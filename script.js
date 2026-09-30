const elHora = document.getElementById("hora-atual");

function doisDigitos(numero) {
  return numero.toString().padStart(2, "0");
}

function atualizarRelogio() {
  const agora = new Date();
  const horas = doisDigitos(agora.getHours());
  const minutos = doisDigitos(agora.getMinutes());
  const segundos = doisDigitos(agora.getSeconds());
  elHora.textContent = `${horas}:${minutos}:${segundos}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
