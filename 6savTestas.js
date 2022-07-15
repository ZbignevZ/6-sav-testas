/*.1 Palyginti du skaičius a ir b. 
Išvesti į konsolę, kuris didesnis arba jie lygūs. */

console.log('---------1------------------');

function pirmas(a,b){
    if(a > b){
        return ` ${a} yra didesnis uz ${b} `
    }else if(b > a) {
        return ` ${b} yra didesnis uz ${a} `
    }else{
        return `Abu skaiciai yra lygus`;
    }

    }

console.log(pirmas(2,4));
console.log('===================================================');

/*Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai) */

console.log('------------2-----------------');
function antras(){
    for(let i = 1; i <11; i++){
        console.log(i);
    }
}
antras();
console.log('===============================================');

/* Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai) */

console.log('-----------3----------------------------------');
function trecias(){
    for(let i=0; i<11; i+=2){
        console.log(i);
    }
}
trecias();

console.log('=================================================');

/* Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. */

console.log('------------4-----------------');

function keturi(){
    for(let i = 0; i < 5; i++){
        let rand = Math.random()*10;
        console.log(Math.floor(rand));
    }
}
keturi();

console.log('=============================================================');


/* 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. */

console.log('-------5--------------');
function penki(){
    let i = 0;
    while( i != 5){
            i = Math.floor(Math.random()*10);
            console.log(i);
    } 
}
penki();
console.log('===========================================================');

/*9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. 
Turi būti patikrinimas, kad kintamasis yra skaičius. 
Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) */

console.log('---------9------------------');

function pirminisSkaicius(skai){
    if(typeof(skai) === 'number'){
        if(skai % 2 != 0 || skai === 2){
            return `${skai} yra pirminis skaicius`;
        }else{
            return `${skai} nera pirminis skaicius`;
        } 
    }else{
        return `${skai} nera skaicius !`
    }
}
console.log(pirminisSkaicius(8));
console.log(pirminisSkaicius(7));
console.log(pirminisSkaicius(2));

console.log('===========================================');

/*8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.
 Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
 */

 console.log('----------8----------------------------');

 function lygineSuma(a,b){
    if(typeof(a) ==='number' && typeof(b) ==='number' ){
        suma = a+b;
        return `abu  kintamienis yra skaiciai, ju suma - ${suma}`;
    }else if(Array.isArray(a) && Array.isArray(b)){
        sumArray = a.length + b.length;
        return `Abu kintamieji yra masyvai ju ilgiu suma yra  ${sumArray};`
    }else{
        return `Klaida !!!! Abu kintamieji turi but vienodo tipo !`;
    }
 }
 console.log(lygineSuma([1,2,3,4],[11]));
 console.log(lygineSuma(1,[11]));
 console.log(lygineSuma(1,6));



