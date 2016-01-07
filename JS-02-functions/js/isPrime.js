'use strict';
(function() {
    //---------------------------------------
    function isPrime(x) {
        var prime = x;
        var result = true;
        for (var i = 2; i < prime; i++) {
            if (prime % i === 0) {
                result = false;
            }
        }
        return result;
    }
    console.log(isPrime(8));
    //---------------------------------------
})();