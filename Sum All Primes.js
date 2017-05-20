//Sum all the prime numbers up to and including the provided number.

//A prime number is defined as a number greater than one and having only two divisors, one and itself. 
//For example, 2 is a prime number because it's only divisible by one and two.

//The provided number may not be a prime.



function sumPrimes(num) {
  
  var res=0;
  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }
 
 var primes= getPrimes(num);
  for(var i=0;i<primes.length;i++){
    res+=primes[i];
  }
    return res;

}

sumPrimes(10);
