// uniamo i 2 esercizi
//prima mettiamo le due funzioni

//Funzione per verificare se una parola è palindroma
function isPalindroma(parola) {
  let lunghezza = parola.length; //otteniamo la lunghezza della parola
  for (let i = 0; i < lunghezza; i++) { //cicla per ogni lettera della parola
      if (parola[i].toLowerCase() !== parola[lunghezza - 1 - i].toLowerCase()) {//confronto di ogni lettera iniziale della parola con quella finale corrispondente
          return false;
      }
  }
  return true;
}

// Funzione per generare un numero casuale compreso tra min e max (inclusi)
function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione principale per eseguire l'esercizio selezionato
function eseguiEsercizio(numero) {
  if (numero === 1) {
      // Esercizio 1: Verifica se una parola è palindroma
      let parolaUtente = prompt("Inserisci una parola:");
      let risultatoPalindroma = isPalindroma(parolaUtente);
      if (risultatoPalindroma) {
          alert("La parola inserita è palindroma.");
      } else {
          alert("La parola inserita non è palindroma.");
      }
  } else if (numero === 2) {
      // Esercizio 2: Gioco di Pari e Dispari
      let sceltaUtente = prompt("Scegli pari o dispari:");
      sceltaUtente = sceltaUtente.toLowerCase();

      // Verifica se la scelta dell'utente è valida
      if (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
          alert("Scelta non valida. Scegliere 'pari' o 'dispari'.");
      } else {
          // Richiede all'utente di inserire un numero da 1 a 5
          let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));//da array a numero

          // Verifica se il numero inserito dall'utente è valido
          if (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
              alert("Numero non valido. Inserisci un numero da 1 a 5.");
          } else {
              // Genera un numero casuale per il computer
              let numeroComputer = generaNumeroCasuale(1, 5);

              // Stampa i numeri generati per il computer e l'utente
              alert(`Il computer ha scelto il numero: ${numeroComputer}`);
              alert(`Hai scelto il numero: ${numeroUtente}`);

              // Calcola la somma dei due numeri
              let sommaNumeri = numeroUtente + numeroComputer;

              // Determina se la somma è pari o dispari
              let risultatoPariDispari = sommaNumeri % 2 === 0 ? 'pari' : 'dispari';

              // Dichiarazione del vincitore
              if (risultatoPariDispari === sceltaUtente) {
                  alert(`Hai vinto! La somma dei numeri è ${risultatoPariDispari}.`);
              } else {
                  alert(`Mi dispiace, hai perso! La somma dei numeri è ${risultatoPariDispari}.`);
              }
          }
      }
  }
}
