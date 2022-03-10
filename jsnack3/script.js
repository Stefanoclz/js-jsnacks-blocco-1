console.log('JS OK')

// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

let result = document.getElementById('result');

const calcola = document.getElementById('calcola');



calcola.addEventListener('click', function () {
    let sum = 0;
    let number = parseInt(prompt('Inserisci un numero a 4 cifre'));
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    console.log(sum);

    result.innerHTML = `Il risultato dei numeri inseriti è: ${sum}`;
})
