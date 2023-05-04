// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.

// Creo array con lista mail consentita 
const elencoMail =[ 'ale@gmail.com', 'ale1@gmail.com', 'ale@icloud.com', 'ale1@icloud.com'];

// Stampo in pagina la lista mail consentite
const container = document.getElementById('container');
container.innerHTML = elencoMail;

// Determino la condizione di base
let esito = 'negativo';

// Collego il bottone per verificare
const buttonVerifica = document.getElementById('verifica');

// Collego l'evento al bottone
buttonVerifica.addEventListener ('click',
    function () {
        // Mi salvo la mail dell'user inserita nell'input
        const emailUser = document.getElementById('emailUser').value;
        console.log(emailUser);

        // Collego il contenitore dell'output
        const risultato = document.getElementById('risultato');
        for (let i = 0; i < elencoMail.length; i++) {
            
            // Istruzioni condizionali
            if (emailUser === elencoMail[i]) {
                esito = 'positivo';
            }
            console.log(esito);
        }

        if(esito == 'negativo') {
            risultato.innerHTML = 'Non puoi entrare';
        } else {
            risultato.innerHTML = 'Puoi entrare';
            esito = 'negativo';
        }

    }
);