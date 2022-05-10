/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

*/

/* Solution

Hash map is a data structure used to store key/ value pairs. We want to use this data structure because we can add each element inside the map and check if the target formula exist in the map. The formula is simple we take the target and subtract it from each element. The leetcode solution has this formula called the complement, which implies it goes together. The reason we use this formula is because there is a possible chance that when we iterated over the array that the complement already existed in the map. If the complement does not exist in the map then we add the current element to the map as the key and add the index as the value.

Time Complexity: O(n)
Space Complexity: O(n)
*/


function twoSum(nums, target) {
	let map = new Map();
	
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		
		if (map.has(complement)) {
			return [i, map.get(complement)];
		}
		map.set(nums[i], i);
	}
}