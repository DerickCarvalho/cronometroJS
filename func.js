let hora = document.getElementById('horas');
let hrvalue = 0;
let minuto = document.getElementById('minutos');
let minvalue = 0;
let segundo = document.getElementById('segundos');
let segvalue = 0;
let rodando = 0;
let cronometro;
document.getElementById('start').addEventListener('click', () => {
    if (rodando == 0) {
        rodando = 1;
        cronometro = setInterval(() => {
            segvalue++;
            if (segvalue < 10) {
                segundo.innerHTML = `0${segvalue}`;
            } else if (segvalue >= 10 && segvalue < 60) {
                segundo.innerHTML = `${segvalue}`;
            } else if (segvalue == 60) {
                segundo.innerHTML = `00`;
            }
            if (segvalue == 60) {
                minvalue++;
                segvalue = 0;
                if (minvalue < 10) {
                    minuto.innerHTML = `0${minvalue}:`;
                } else if (minvalue >= 10 && minvalue < 60) {
                    minuto.innerHTML = `${minvalue}:`;
                } else if (minvalue == 60) {
                    minuto.innerHTML = `00:`;
                }
                if (minvalue == 60) {
                    minvalue = 0;
                    hrvalue++;
                    if (hrvalue < 10) {
                        hora.innerHTML = `0${hrvalue}:`;
                    } else if (hrvalue >= 10 ) {
                        hora.innerHTML = `${hrvalue}:`;
                    }
                }
            }
        }, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    if (rodando == 1) {
        clearInterval(cronometro);
    }
});
document.getElementById('restart').addEventListener('click', () => {
    window.location.reload();
});