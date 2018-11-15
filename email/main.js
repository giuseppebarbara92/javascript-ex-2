
// Chiediamo all'utente di inserire la mail
var email_utente = prompt("inserisci la tua email");
// creaiamo una lista contenitore per le nostre mail attraverso un array
var email_list = ["tizio@gmail.com", "caio@gmail.com", "sempronio@gmail.com"];

// Per il procedimento 3, mi creo una variabile che contiene un valore booleano (v/f) e che dichiarerà se è stata trovata o meno la mail
var email_trovata = false;

// Da ora in avanti dovremo confrontare la mail dell'utente con quelle presenti nella nostra lista in modo tale che l'utente possa accedere o meno.

// PROCEDIMENTO UNO-----------------------------------------

// if (email_utente == email_list[0]) {
//   alert("email corretta");
// }
//
// else if  (email_utente == email_list[1]) {
//   alert("email corretta");
// }
//
// else if  (email_utente == email_list[2]) {
//   alert("email corretta");
// }
//
// else {
// alert("email non corretta");
// }

// PROCEDIMENTO DUE-----------------------------------------

// for (var i = 0; i < email_list.length; i++) {
//   console.log(email_list[i]);
//   if (email_utente == email_list[i]) {
//     alert("email corretta");
//   }
//   else {
//     alert("errata");
//   }
// }


// PROCEDIMENTO 3----------------------------------------------

for (var i = 0; i < email_list.length; i++) {
  if (email_utente == email_list[i]) {
    email_trovata = true;
  }
}

if (email_trovata == true) {
  alert("email corretta");
}
else {
  alert("email errata");
}
