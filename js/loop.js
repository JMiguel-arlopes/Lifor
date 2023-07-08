const textDisplay = document.getElementById('text');

const listaFrases = ['Veterinária Forense.', 'LIFOR.',];
let i = 0; // numeração do item completo de "frases".
let j = 0; // numeração do caracter do item.
let fraseMovimentada = [];

let deletando = false;
let final = false;

const loop = () => {

    if (i < listaFrases.length) {

        const frase = listaFrases[i];

        final = false;

        if (!deletando && j < frase.length) {
            fraseMovimentada.push(frase[j]);
            j++
            textDisplay.innerHTML = fraseMovimentada.join('');
        }

        if (deletando && j <= frase.length) {
            fraseMovimentada.pop();
            j--
            textDisplay.innerHTML = fraseMovimentada.join('');
        }

        if (j == frase.length) {
            final = true;
            deletando = true;
        }

        if (deletando && j === 0) {
            deletando = false;
            fraseMovimentada = [];
            i++

            if (i == listaFrases.length) {
                i = 0
            }
        }
    }

    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;

    let time = final ? 2000 : deletando ? speedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();