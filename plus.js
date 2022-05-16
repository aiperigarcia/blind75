/* Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted. */

var intersect = function(nums1, nums2) {
    
    const intersect = [];
    const hashMap = {};
    
	//fill the hashMap with the first array
    for(let i = 0; i < nums1.length; i++){
        if(hashMap[nums1[i]]){
            hashMap[nums1[i]] += 1;
        } else {
            hashMap[nums1[i]] = 1;
        }
    }
    
	//check if hashMap includes elements from second array
	// if yes - push it to result array
    for(let i = 0; i < nums2.length; i++){
        if(hashMap[nums2[i]] > 0){
           intersect.push(nums2[i]);
           hashMap[nums2[i]] -= 1;
        }
    }
    return intersect;
};
