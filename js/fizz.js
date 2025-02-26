//Per ogni numero da 1 (indice) a 100 (condizione)
for (let i = 1; i <= 100; i++) {  

    const isDivisibleBy3 = i % 3 === 0;
    const isDivisibleBy5 = i % 5 === 0;
    //Se l'indice è un numero divisibile per 3 e 5
    if (isDivisibleBy3 && isDivisibleBy5) {
        //Stampa "BUZZFIZZ"
        console.log("fizzbuzz", i);
    }
    // Altrimenti se l'indice un numero divisibile per 5
    else if (isDivisibleBy5) {
        //Stampa "BUZZ"
        console.log("buzz", i);
    }
    //Altrimenti se l'indice è un numero divisibile per 3
    else if (isDivisibleBy3) {
        //Stampa "FIZZ"
        console.log("fizz", i);
    }
    // Stampa l'indice
    else {
        console.log(i);
    }
}