// Crea un array vuoto
var vuoto = []; 

// Chiedere al cliente di inserire un numero 5 volte
for ( var i = 0; i < 6; i++ ) {
    var numero = parseInt(prompt("Inserisci un numero"));

// Verificare i numeri dispari
    if(numero % 2 == 1) {
        vuoto.push(numero); 
   }
} 
console.log(vuoto);
