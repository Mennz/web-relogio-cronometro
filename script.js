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

  const horas = Math.floor(segundosDecorridos / 3600);
  const minutos = doisDigitos(Math.floor((segundosDecorridos % 3600) / 60));
  const segundos = doisDigitos(segundosDecorridos % 60);

  // so mostra a hora se passar de 59:59, senao fica poluido
  elCronometro.textContent =
    horas > 0 ? `${doisDigitos(horas)}:${minutos}:${segundos}` : `${minutos}:${segundos}`;
}

const btnPausar = document.getElementById("btn-pausar");
const btnZerar = document.getElementById("btn-zerar");

btnIniciar.addEventListener("click", () => {
  // se ja tem um intervalo rodando, nao cria outro por cima
  if (idIntervaloCronometro !== null) return;
  idIntervaloCronometro = setInterval(atualizarCronometro, 1000);
  btnIniciar.disabled = true;
  btnPausar.disabled = false;
});

btnPausar.addEventListener("click", () => {
  clearInterval(idIntervaloCronometro);
  idIntervaloCronometro = null;
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
});

btnZerar.addEventListener("click", () => {
  clearInterval(idIntervaloCronometro);
  idIntervaloCronometro = null;
  segundosDecorridos = 0;
  elCronometro.textContent = "00:00";
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
});

btnPausar.disabled = true;
