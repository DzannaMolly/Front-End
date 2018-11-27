// EXERCISE BATCH #3/No.2 sum of prime numbers
function sumOfNumbersWithoutPrime(numberOne, numberTwo) {
    var sum = 0;
    var timesSkipped = 0;
    var primeNumberArray = [];


    // glavna funkcija
    while (numberOne <= numberTwo) {
        if (isPrime(numberOne) === true) {
            primeNumberArray.push(numberOne);
            numberOne++;
            timesSkipped++;
        } else {
            sum += numberOne;
            numberOne++;
        }
    }

    console.log('The sum is:', sum);
    console.log('Prime numbers skipped:', primeNumberArray);
    console.log('Prime numbers found', timesSkipped);

    return sum;
}

// pomosna funkcija
function isPrime(number) { // function declaration containing one input parameter.
    var isTheNumberPrime = true; // boolean check to see if the number is a prime number.

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) { 
            isTheNumberPrime = false;
            break;
        }
    }
    return isTheNumberPrime && (number > 1);
}



console.log(sumOfNumbersWithoutPrime(1, 100));






