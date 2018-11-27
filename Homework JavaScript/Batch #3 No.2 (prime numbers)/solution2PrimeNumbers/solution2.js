// simple version of -- EXERCISE BATCH #3/No.2 sum of prime numbers

var iterateFn = (start, end) => {

    var skippedPrime = 0;
    var primesFound = [];
    var sum = 0;
    for (var i = start; i <= end; i++) {
        if (isPrime(i)) {
            skippedPrime++;
            primesFound.push(i);
            continue;
        }
        sum += i;
    }
    console.log('Prime numbers skipped:', skippedPrime);
    console.log('Prime numbers found', primesFound);
    return sum;

}

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1 && num !== 0;
}

console.log('The sum is:', iterateFn(1, 100));
