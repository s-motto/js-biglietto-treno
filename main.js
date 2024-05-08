const kmNumber = prompt('Quanti chilometri devi percorrere?');
const age = prompt('Quanti anni hai?');

const price = kmNumber * 0.21;

let finalPrice = '';

if (age < 18) {
    finalPrice = Number(price - (price * 0.20)).toFixed(2)
}
else if (age > 65) {
    finalPrice = Number(price - (price * 0.40)).toFixed(2)
}
else {
    finalPrice = Number(price).toFixed(2)
};

console.log(`Il prezzo del tuo biglietto è ${finalPrice}€`);

document.getElementById('ticketPrice').innerHTML = finalPrice;