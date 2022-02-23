//*RECUPERO L'ELEMENTO DAL DOM
let elementFildName = document.getElementById("fild-name");
let elementFildLastName = document.getElementById("fild-last-name");
let elementFildAge = document.getElementById("fild-age");
let elementFildKms = document.getElementById("fild-kms");
let elementDiscount = document.getElementById("discount");
let elementPrice = document.getElementById("price");

//*RECUPERO L'EMENTO DAL FORM
let elementName = document.getElementById("name");
let elementLastName = document.getElementById("last-name");
let elementAge = document.getElementById("age");
let elementKms = document.getElementById("kms");
let elementButtonGenerate = document.getElementById("generate-ticket");



//* LEGO UN EVENTO AL CLICK AL BOTTONE "GENERA"
elementButtonGenerate.addEventListener("click", function () {
    let nameValue = elementName.value;
    console.log(nameValue);
    let lastNameValue = elementLastName.value;
    console.log(lastNameValue);
    let ageValue = elementAge.value;
    console.log(ageValue);
    let kmsValue = elementKms.value;
    console.log(kmsValue);

    //* VARIABILE 
    let userDiscount;
    let userPrice = 0.27;
    let sum = userPrice * kmsValue;


    // ! CONVALIDE
    if (ageValue === "min") {
        sum *= 0.83;
        userDiscount = "Essendo Minorenne hai diritto a uno sconto del 17%";
        console.log(sum.toFixed(2));
    } else if (ageValue === "over") {
        sum *= 0.67;
        userDiscount = "Essendo Over hai diritto a uno sconto del 33%";
        console.log(sum.toFixed(2));
    } else {
        userDiscount = "Grazie per aver viaggiato con Trenitalia";
        console.log(sum.toFixed(2));

    };

});




//* INSERISCO I DATI DEL DOM

elementFildName.innerHTML = nameValue + " ;";
elementFildLastName.innerHTML = userLastName + " ;";
elementFildAge.innerHTML += userAge + " ;";
/* elementUserYear.innerHTML = userYear + " ;"; */
elementKms.innerHTML = userKms + " ;";
elementDiscount.innerHTML = userDiscount + " ;";
elementPrice.innerHTML += " Euro " + sum.toFixed(2) + " ;";