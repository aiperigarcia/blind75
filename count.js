/*
Given an integer n, return the number of prime numbers that are strictly less than n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:

Input: n = 0
Output: 0

*/

var countPrimes = function(n) {
    if (n <= 1) return 0;
    
    var isPrime = [],
        count = 0;

    for (var i = 2; i < n; i++) {
        if (isPrime[i] == undefined) {
            isPrime[i] = true;
            count++;
            for (var j = 2; j * i < n; j++) {
                isPrime[i*j] = false;
            }
        }
    }
    
    return count;
};