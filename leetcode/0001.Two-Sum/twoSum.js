
let givenNums = [2,7,11,15];
let target = 9;

console.log(twoSum(givenNums,target));

function twoSum(nums,target){
   let results = [];
   let hash = {};
   for(let i = 0; i < nums.length; i++){
       let another = target - nums[i];
       if(hash.hasOwnProperty(nums[i])){
           results.push(hash[nums[i]],i);
           return results;
       }
       hash[another] = i;
   }
   return "no found"
}
