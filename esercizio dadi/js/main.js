// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Agganciamo il bottone per giocare
const button = document.getElementById('play');

// Agganciamo gli elementi di output
const risultatoUser = document.getElementById('risultatoUser');
const risultatoPc = document.getElementById('risultatoPc');
const risultatoGiocata = document.getElementById('risultatoGiocata');

// Agganciamo l'evento click al bottone
button.addEventListener('click',
    function() {
        // Genero numero casuale utente
        const numUser = Math.floor(Math.random() * 6 + 1);

        // Genero numero casuale PC
        const numPc = Math.floor(Math.random() * 6 + 1);

        // Stampo in pagina i risultati dell'estrazione
        risultatoUser.innerHTML = `Il numero estratto per l'utente è: ${numUser}`;
        risultatoPc.innerHTML = `Il numero estratto per il pc è: ${numPc}`;

        // Istruzioni condizionali
        if (numUser > numPc) {
            risultatoGiocata.innerHTML = `Hai vinto!`
        } else if (numUser < numPc) {
            risultatoGiocata.innerHTML = `Ha vinto il pc!`
        } else if (numUser === numPc) {
            risultatoGiocata.innerHTML = `Avete pareggiato`
        }
    }
);