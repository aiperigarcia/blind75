/* 
217. Contains Duplicate
Easy

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

var containsDuplicate = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true;
        }
        map[nums[i]] = true;
    }
    return false;
};

/*
var containsDuplicate = function(nums) {
    const newSet = new Set()
    for( let i = 0; i < nums.length ; i ++){
        if(newSet.has(nums[i])){
            return true;
        }
          newSet.add(nums[i]);
    } return false
};

var containsDuplicate = function(nums) {
    const newArray = new Map();
    for(let i = 0; i < nums.length; i++){
        if(newArray.has(nums[i])) {
            return true;
        }
            newArray.set(nums[i]);
    }
        return false;
};

 */

