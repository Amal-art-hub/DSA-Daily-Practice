//=========================printig all subarray

// let arr = [1,2,3,4];

// function op(arr){
//     let result=[];

//     for(let i=0;i<arr.length;i++){
//         let temp=[];

//         for(let j=i;j<arr.length;j++){
//             temp.push(arr[j]);
//             result.push([...temp]);

//         }
//     }
// return result;
// }

// console.log(op(arr));
//=======================================
//The Question: Given an array, find the total number of continuous subarrays whose sum equals a specific value $k$------nested loop
// let arr = [1,-2,3,4,-2,-6,7,8,9];

// function op(arr,k){
// let count=0;
// for(let i=0;i<arr.length;i++){
//     let temp=0;
//     for(let j=i;j<arr.length;j++){
//         temp +=arr[j];
//         if(temp===k){
//             count++;
//         }
//     }
// }

// return count;
// }


// console.log(op(arr,7));

//===========================

//The Question: Given an array, find the total number of continuous subarrays whose sum equals a specific value $k$------without nested loop

// let arr = [1,2,3,4];


// function op(arr, k) {
//     let map = new Map();
//     map.set(0, 1);

//     let sum = 0;
//     let count = 0;

//     for (let num of arr) {
//         sum += num;

//         if (map.has(sum - k)) {
//             count += map.get(sum - k);
//         }

//         map.set(sum, (map.get(sum) || 0) + 1);
//     }

//     return count;
// }


// arr = [1, 2, 1, 2, 1]
// k = 3

//========================
//=========The Challenge: Write a recursive function that takes two objects (or arrays) and returns true if they are deeply equal, and false otherwise.

//Why it's Intermediate: You've practiced Flattening objects. This is the reverse challenge: traversing two nested structures simultaneously to compare values and types.

//Goal: Must handle nested objects, arrays, and primitive types correctly.


// let a = [1, [2,3]];
// let b = [1, [2,3]];


// function op(a,b){



//     if(a.length !==b.length)return false;


//     for(let i=0;i<a.length;i++){
//     if(Array.isArray(a[i]) && Array.isArray(b[i])){
//         if(!op(a[i],b[i]))return false;

//     }else if(Array.isArray(a[i])||Array.isArray(b[i])){
//          return false;
//     }else if( a[i] !==b[i]){
//         return false;
//     }
//     }

//     return true;


// };


// console.log(op(a,b));


//======================find the average of middle k elements
     
 let arr=[1,2,3,4,5,6,7,-8,9,10];


 function op(arr,k){


let mid=Math.floor(arr.length/2);
let avg=0;
let start,end;
let sum=0;

if(k%2===0){
     start=mid-(k/2);
    
     end=mid+(k/2)-1;
  
   
}else{
     start=mid-Math.floor(k/2);
     end=mid+Math.floor(k/2);
   
}



for(let i=start;i<=end;i++){
    
 sum +=arr[i];
}

avg=sum/k;

return avg;

 }

 console.log(op(arr,2));

 //==========1. Longest Substring Without Repeating CharactersThe Challenge: Given a string, find the length of the longest substring without repeating characters.
 // Why it's Intermediate: It builds on your String and Array knowledge but requires a Sliding Window technique.Goal: Solve it in $O(n)$ time.

//  let str="abcabcbb";

//  function op(str){
//     let set=new Set();
//     let left=0;
//     let max=0;

//     for(let right=0;right<str.length;right++){

//         while(set.has(str[right])){
//             set.delete(str[left]);
//             left++;
//         };

//         set.add(str[right])
//         max=Math.max(max,(right-left)+1);
//     }

//     return max;
//  };

//  console.log(op(str));

 //=============longest palindrome string

//  let str="abababahdksgh";

//  function op(str){
//     let start=0;
//     let max=0;

//     function expand(left,right){
//         while(left>=0 && right<str.length && str[left]===str[right]){
//                 if(right-left+1>max){
//                     start=left;
//                     max=right-left+1;
//                 }
//                 left--;
//                 right++;
//         }
//     }


//     for(let i=0;i<str.length;i++){
//         expand(i,i);
//         expand(i,i+1);
//     }

//     return str.substring(start,max+start);
//  };


//  console.log(op(str));

 //======================finding pairs with sum k  by using time complexitybig(n)  and space big(1) i  sorted array using 2 poiters

//  let arr=[1,2,3,4,5,6,7,8];

//  function op(arr,k){

//     let narr=[];
//     let left=0;
//     let right=arr.length-1;

//     while(left<right){
//         let sum=arr[left]+arr[right];

//         if(sum===k){
//             narr.push([arr[left],arr[right]]);
//             left++;
//             right--;
//         }else if(sum>k){
//             right--;
//         }else{
//             left++;
//         }
//     }


//     return narr;
//  }


//  console.log(op(arr,9))

//====================The Problem: An element is "peak" if it is strictly greater than its neighbors.
//  Given an array where nums[i] != nums[i+1], find the index of any peak element.

//The Level-Up: You don't need to check every number. You can find a peak in logarithmic time.

// let arr = [1, 3, 2, 4, 1];



// function op(arr){
//     let left=0;
//     let right=arr.length-1;

//     while(left<right){
//         let mid=Math.floor((left+right)/2);

//         if(arr[mid]<arr[mid+1]){
//             left=mid+1;
//         }else if(arr[mid]>arr[mid+1]){
//             right=mid;
//         }
//     }

//     return left;
// };

// console.log(op(arr));