"use strict";

console.clear();

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Fase 1 - Preparazione

Obiettivo: output prezzo del viaggio

Fase 2 - Raccolta dati

finalPrice = output finale (stringa con 2 decimali)
userAge = input età utente
ageJunior = utente under 18
discountJunior = sconto under 18
ageSenior = utente over 65
discountSenior = sconto over 65
priceKm = tariffa fissa KM
userKm = KM scelti dall'utente

*/


// Variable Declar/Init



let finalPrice = "";
const priceKm = 0.21;
let ageJunior = 18;
let discountJunior = 20;
let ageSenior = 65;
let discountSenior = 40;

// user KM

let userKm = parseInt(prompt("Quanti km vuoi percorrere?"));

const userKmBasic = priceKm * userKm;

console.log(userKmBasic + "€");

// Ticket's Plans

let age = parseInt(prompt("Quanti anni hai?"))

if (age < ageJunior) {

    discountJunior = userKmBasic * 20 / 100;
    finalPrice = userKmBasic - discountJunior;
    console.log("Il prezzo del biglietto è di " + finalPrice.toFixed(2) + "€");
    window.alert("Il prezzo del biglietto è di " + finalPrice.toFixed(2) + "€");

} else if (age > ageSenior) {

    discountSenior = userKmBasic * 40 / 100;
    finalPrice = userKmBasic - discountSenior;
    console.log("Il prezzo del biglietto è di " + finalPrice.toFixed(2) + "€");
    window.alert("Il prezzo del biglietto è di " + finalPrice.toFixed(2) + "€");

} else {
    console.log("Il prezzo del biglietto è di " + userKmBasic.toFixed(2) + "€");
    window.alert("Il prezzo del biglietto è di " + userKmBasic.toFixed(2) + "€");

}











