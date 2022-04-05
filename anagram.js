/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

*/

var isAnagram = function(s, t) {
    if(s.length !== t.length) {
      return false;
    }
   
   const lookup = {};
   // if letter exists, increment, otherwise set to 1
   for(let i=0; i < s.length; i++) {
     let letter = s[i];
     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
   }
   
   console.log(lookup);
   for(let i=0; i < t.length; i++) {
     let letter = t[i];
     // Can't find the letter in the lookup object or letter is zero then it is not a valid anagram
     if(!lookup[letter]) {
       return false;
     }
     else {
      // decrement the counter of the letter
       lookup[letter] -= 1;
     }
   } 
   return true;
 };