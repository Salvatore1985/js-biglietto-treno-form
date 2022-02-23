//*RECUPERO L'ELEMENTO DAL DOM

let elementName = document.getElementById("name");
let elementLastName = document.getElementById("last-name");
let elementAge = document.getElementById("age");
let elementUserYear = document.getElementById("user-year");
let elementKms = document.getElementById("kms");
let elementDiscount = document.getElementById("discount");
let elementPrice = document.getElementById("price");

//* CHIEDO ALL'UTENTE DI INSERIRE I DATI
const userName = prompt("Qual'è il tuo Nome ?", "Salvatore");
console.log("Il tuo Nome è :", userName);

const userLastName = prompt("Qual'è il tuo Cognome ?", "Cascone");
console.log("Il tuo Cognome è :", userLastName);

const userAge = parseInt(prompt("Quanti anni hai ?", "36"));
console.log("I tuoi anni sono :", userAge);

const userKms = parseInt(prompt("Quanti KM vuoi percorrere ?", "10"));
console.log("I Km che hai inserito sono :", userKms);

//* VARIABILE 
let userDiscount;
let userPrice = 0.27;
let sum = userPrice * userKms;
let currentYear = 2022
let userYear = currentYear - userAge;


// ! CONVALIDE
if (userAge < 18) {
    sum *= 0.83;
    userDiscount = "Essendo Minorenne hai diritto a uno sconto del 20%";
} else if (userAge >= 65) {
    sum *= 0.67;
    userDiscount = "Essendo Over hai diritto a uno sconto del 60%";
} else {
    userDiscount = "Grazie per aver viaggiato con Trenitalia";

};



//* INSERISCO I DATI DEL DOM

elementName.innerHTML = userName + " ;";
elementLastName.innerHTML = userLastName + " ;";
elementAge.innerHTML += userAge + " ;";
elementUserYear.innerHTML = userYear + " ;";
elementKms.innerHTML = userKms + " ;";
elementDiscount.innerHTML = userDiscount + " ;";
elementPrice.innerHTML += " Euro " + sum.toFixed(2) + " ;";