console.log('JS OK')

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const dispari = [];

const pari = [];

let pariStamp = document.getElementById('pari');

let dispariStamp = document.getElementById('dispari');

for (let i = 0; i < 6; i++) {

    let number = parseInt(prompt('Inserisci un numero'));

    if (number % 2 === 1) {
        dispari.push(number);
        console.log('numeri dispari: ' + dispari);
        dispariStamp.innerText = `numeri dispari inseriti: ${dispari}`;
    } else {
        console.log('numeri pari ' + number);
        pari.push(number);
        pariStamp.innerText = `numeri pari inseriti: ${pari}`;
    }

}

