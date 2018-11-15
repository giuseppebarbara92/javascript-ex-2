// Per prima cosa chiediamo il nome ai due giocatori

// player one
var nomeUtente1 = prompt("Nome player one");
document.getElementById('nome1').innerHTML = nomeUtente1;

// player2
var nomeUtente2 = prompt("Nome player two");
document.getElementById('nome2').innerHTML = nomeUtente2;

// generiamo dei numeri random che siano <= di 7 che rappresenteranno la giocata del partecipante

// numeri dado player one
var lancio_player_one = Math.floor(Math.random()*7) + 1;
document.getElementById("numero1").innerHTML = lancio_player_one;


// numeri dado player two
var lancio_player_two = Math.floor(Math.random()*7) + 1;
document.getElementById("numero2").innerHTML = lancio_player_two;

// adesso dobbiamo confrontare i risultati per decretarne l'esito

if (lancio_player_one > lancio_player_two) {
  document.getElementById('esito1').innerHTML = "HAI VINTO";
  document.getElementById('esito2').innerHTML = "HAI PERSO";
}
else {
  document.getElementById('esito2').innerHTML = "HAI VINTO";
  document.getElementById('esito1').innerHTML = "HAI PERSO";
}


if (lancio_player_one == lancio_player_two) {
  document.getElementById('esito1').innerHTML = "PAREGGIO";
  document.getElementById('esito2').innerHTML = "PAREGGIO";
}
