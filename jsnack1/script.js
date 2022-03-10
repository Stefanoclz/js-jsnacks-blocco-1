console.log('JS OK')

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = ["Jonny", "Samuel", "Ludvig", "Paul", "Mimmo", "Ugo"];

let access = false;

if (!access) {

    let yourName = prompt("Inserisci il tuo nome per accedere alle festa di Gatsby");
    for (let i = 0; i < invitati.length; i++) {
        const validName = invitati[i];

        if (yourName === validName) {
            access = true;
        }
    }
}

console.log(access);


if (access) {
    console.log("benvenuto");
} else {
    console.log("Non ti vedo sulla lista");
}