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
userKM = KM scelti dall'utente

*/

const priceKM = 0.21;
const ageJunior = 18;
const discountJunior = 20;
const ageSenior = 65;
const discountSenior = 40;