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

const elCronometro = document.getElementById("tempo-cronometro");
const btnIniciar = document.getElementById("btn-iniciar");

let segundosDecorridos = 0;
let idIntervaloCronometro = null;

function atualizarCronometro() {
  segundosDecorridos++;
  const minutos = doisDigitos(Math.floor(segundosDecorridos / 60));
  const segundos = doisDigitos(segundosDecorridos % 60);
  elCronometro.textContent = `${minutos}:${segundos}`;
}

btnIniciar.addEventListener("click", () => {
  // se ja tem um intervalo rodando, nao cria outro por cima
  if (idIntervaloCronometro !== null) return;
  idIntervaloCronometro = setInterval(atualizarCronometro, 1000);
});
