// let arr = [1,2,3,4];



// function sub(arr){
// let result=[];

// function subset(start,temp){
//     result.push([...temp]);
//     for(let i=start;i<arr.length;i++){
//         temp.push(arr[i]);
//         subset(i+1,temp);
//         temp.pop();
//     }
// }

// subset(0,[]);

// return result;


// }


// console.log(sub(arr));

//////////////===================/////////////////print all suarrays


// let arr = [1,2,3,4];

// function subarray(arr){
// let result=[];
//   for(let i=0;i<arr.length;i++){
//     let temp=[];
//     for(let j=i;j<arr.length;j++){
//         temp.push(arr[j]);
//         result.push([...temp]);
//     }
//   }

//   return result;
// }


// console.log(subarray(arr));


//////////////////////////////////////////=======Calculate total sum of every subarray


// let arr = [1,2,3,4];

// function subarray(arr){

    
//     let total=0;

//     for(let i=0;i<arr.length;i++){
//         let tempsum=0;
//         for(let j=i;j<arr.length;j++){
//             tempsum +=arr[j];
//             total +=tempsum;


//         }
//     };

//     return total;
// };

// console.log(subarray(arr));

///======================👉 Find the maximum sum of any subarray

// let arr = [1,2,3,4];

// function calc(arr){
//     let max=-Infinity;

//     for(let i=0;i<arr.length;i++){
//         let tempsum=0;
//         for(let j=i;j<arr.length;j++){
//             tempsum +=arr[j];
//             if(tempsum>max){
//                 max=tempsum;
//             };
//         }
//     }

//     return max;
// }

// console.log(calc(arr));


//////========================Find longest length where sum = k


// let arr = [1,2,3,4,1,1,1,1,1];

// function subarray(arr,k){

//  let maxcount=-Infinity;
//     for(let i=0;i<arr.length;i++){
//         let tempsum=0;
//         let count=0;
//         for(let j=i;j<arr.length;j++){
//             tempsum +=arr[j];
//             count ++;
          
//             if(tempsum===k && count >maxcount){
// maxcount=count;
//             }
//         }
//     }

//     return maxcount;
// }


// console.log(subarray(arr,5))


//===================//maximum product
//  let arr = [1,-2,3,1,1,-2,1,1];

//  function product(arr){

//    let  maxproduct=-Infinity;
//     for(let i=0;i<arr.length;i++){
// let temppro=1;
// for(let j=i;j<arr.length;j++){
//     temppro = temppro*arr[j];
//     if(temppro>maxproduct){
//         maxproduct=temppro;
//     } 
// }
//     }

//     return maxproduct;
//  }


//  console.log(product(arr));



////////////////////===============nth smallest number

// let arr = [1,2,4,5,6,7,8];


// function nth(arr,n){

//     for(let i=0;i<n;i++){
//         let minIndex=0;

//         for(let j=1;j<arr.length-i;j++){
//            if(arr[j]<arr[minIndex]){
//             minIndex=j;
//            }
//         }
       
//         let temp=arr[arr.length-1-i];
//        arr[arr.length-1-i]=arr[minIndex]
//         arr[minIndex]=temp;
//     }

//     return arr[arr.length-n];
// }


// console.log(nth(arr,3));

//==================///////////////////===================find the min value in slited sorted arry using binary


// let arr=[4, 5, 6, 7, -1,1, 2, 3];



// function mini(arr){
// let left=0;
// let right=arr.length-1;

// while(left<right){
//     let mid=Math.floor((left+right)/2);

//     if(arr[mid]>arr[right]){
//         left=mid+1;
//     }else if(arr[mid]<arr[right]){
//         right=mid;
//     }
// }

// return arr[(left-1+arr.length)%arr.length];
// };


// console.log(mini(arr));

//===================================//==================///////////////////===================find the min value in slited sorted arry using binary recursion



// let arr=[4, 5, 6, 7, -1,1, 2, 3];

// let left=0;
// let right=arr.length-1
// function minimum(arr,left,right){

//     if(left===right) return arr[left];

//     let mid=Math.floor((left+right)/2);

//     if(arr[mid]>arr[right]){
//         left=mid+1;
//        return  minimum(arr,left,right);
//     }else{
//         right=mid;
//        return minimum(arr,left,right);
//     }
// }



// console.log(minimum(arr,left,right));

//=====================find the target using binary

// let arr=[1,2,3,4,5,6,7,8,9];

// let targ=6;

// function binary(arr,targ){
// let left=0;
// let right=arr.length-1;

// while(left<=right){
// let mid=Math.floor((left+right)/2);

// if(targ===arr[mid]){
//     return mid;

// }else if(targ>arr[mid]){
//     left=mid+1;
// }else if(targ<arr[mid]){
//     right=mid-1;
// }

// }

// }

// console.log(binary(arr,targ));




//=====================find the target using binary using recursion

// let arr=[1,2,3,4,5,6,7,8,9];

// let targ=6;


// let left=0;
// let right=arr.length-1;
// function binary(arr,targ,left,right){

//     let mid=Math.floor((left+right)/2);

// if(left>right)return -1;

// if(targ===arr[mid]){
//     return mid;
// }else if(targ>arr[mid]){
//     return binary(arr,targ,mid+1,right);
// }else if(targ<arr[mid]){
//     return binary(arr,targ,left,mid-1);
// }

// };


// console.log(binary(arr,targ,left,right));

//=====================================first occurance and last occurance

// let arr=[1,2,3,4,5,5,5,5,6,7,8,9];
// let targ=5;
// function occu(arr,targ){
// let left=0;
// let right=arr.length-1;

//     while(left<=right){
//         let mid=Math.floor((left+right)/2);
//         if(targ===arr[mid]){

//             index=mid;
//             left=mid+1;
//         }else if(targ<arr[mid]){
//             right=mid-1;
//         }else if(targ>arr[mid]){
//             left=mid+1;
//         }
//     }


//     return index;
// }


// console.log(occu(arr,targ))


///////////=============recursion

// let arr=[1,2,3,4,5,5,5,5,6,7,8,9];

// let targ=5;

// let left=0;
// let right=arr.length-1;

// function occu(arr,targ,left,right){
//     if(left>right){
//         return index;
//     }


//        let mid=Math.floor((left+right)/2);
//         if(targ===arr[mid]){

//             index=mid;
//             return occu(arr,targ,left,mid-1)
//         }else if(targ<arr[mid]){
//             return occu(arr,targ,left,mid-1)
//         }else if(targ>arr[mid]){
//              return occu(arr,targ,mid+1,right)
//         }
// };


// console.log(occu(arr,targ,left,right));

/////////====================fibanocci

// function fib(n){

//     if(n===0)return 0;
//     if(n===1)return 1;

//     return fib(n-1)+fib(n-2);

// }

// console.log(fib(5));

///////////////====================//////=============================================-Find first non-repeating character in an array

// let arr=[1,2,2,2,3,3,4,4,4,6,6,5,5,6,8,8];

// function repeat(arr){

//     let obj={};
//     for(let ele of arr){
//        obj[ele]=(obj[ele]||0)+1;
//     };

//     for(let num of arr){
//         if(obj[num]<=1){
//             return num
//         }
//     }

//     return -1;
// }

// console.log(repeat(arr));

/////////////////=================///////////////////////////////////////finding maxinmum and minimum using recursion


// let arr=[1,2,3,4,5,32,4,5,6,7,88];


// function maxmin(arr,i,max,min){

//     if(i===arr.length)return [max,min];

// if(arr[i]>max){
//     max=arr[i]
// };

// if(arr[i]<min){
//     min=arr[i];
// }

// return maxmin(arr,i+1,max,min)

// };


// console.log(maxmin(arr,0,-Infinity,Infinity));


//////////////////====================sum of an array

// let arr=[1,2,3,4,4,6,7];

// function sumarray(arr,i,sum){

//     if(i===arr.length) return sum;
    
    
//     sum +=arr[i];

//     return sumarray(arr,i+1,sum);


// };

// console.log(sumarray(arr,0,0));


///=========================////////////////====================find factorial


// function fac(n){

//     if(n===1||n===0) return 1;


//     return n*fac(n-1);


// };

// console.log(fac(5));

//===============iterative method

// function fac(n){
//     if(n < 0) return -1; 

//     let result = 1;

//     for(let i = 2; i <= n; i++){
//         result *= i;
//     }

//     return result;
// }

// console.log(fac(5)); 

//////////////////////==============*Write a function that takes an array of integers as input, squares each element, and then returns the array in reversed order - P

// let arr=[1,2,3,4,5,6,7,8];

// function op(arr){
// let left=0;
// let right=arr.length-1;

// while(left<right){
//     let temp=arr[left]*arr[left];
//     arr[left]=arr[right]*arr[right];
//     arr[right]=temp;

//     left++;
//     right--;
// }

// return arr;

// };


// console.log(op(arr));

///////////////////////////////////////==================Find sum of first N numbers using recursion

// function sumnum(n,sum){

//     if(n<1) return sum;
// sum +=n;
//     return sumnum(n-1,sum) 

// };


// console.log(sumnum(5,0));

////////////////////////////////////////////////////////////========================================reverse only 4,5,6,7  in big array

// let arr=[1,2,3,4,5,6,7,8,9];

// function rev(arr,start,end){
//     let left=arr.indexOf(start);
//     let right=arr.indexOf(end);

//     while(left<right){
//         let temp=arr[right];
//         arr[right]=arr[left];
//         arr[left]=temp;

//         left++;
//         right--;
//     }

//     return arr;
// };

// console.log(rev(arr,4,8));


///////////////////////////=====================flaten array

// let arr=[1,2,[3,[4,5],6,],7,[8,9]];


// function flat(arr,narr){

//     for(let ele of arr){
//         if(Array.isArray(ele)){
//            flat(ele,narr);
//         }else{
//             narr.push(ele);
//         }
//     }

//    return narr;
// };


// console.log(flat(arr,[]));

/////////////////////////////////////////////////Sum all the elements is nested array using without flat

// let arr=[1,2,[3,[4,5],6,],7,[8,9]];

// function sumup(arr,sum){

//     for(let ele of arr){
//         if(Array.isArray(ele)){
//           sum +=sumup(ele,sum);
//         }else{
//             sum +=ele;
//         }
//     }
//  return sum;
// };

// console.log(sumup(arr,0));


//=============////////////////////////////////========================================Move All Negative Numbers to the End,Maintain the order of positive numbers.


// let arr=  [1,-1,3,-1,5];

// function maint(arr){

//     let current=0;

//     for(let i=0;i<arr.length;i++){

//         if(arr[i]>=0){
//             let temp=arr[i];
//             arr[i]=arr[current];
//             arr[current]=temp;
//             current++;
//         }
//     }

//     return arr;
// };

// console.log(maint(arr));


//////////=======================/////////////////=======================Move zero to beginning


// let arr=[1,2,3,0,3,7,8];



// function arrsort(arr){

//     let curr=arr.length-1;

//     for(let i=arr.length-1;i>0;i--){

//         if(arr[i] !==0){
//              arr[curr]=arr[i];
//              curr--;
//         }
//     }

//     while(curr >=0){
//         arr[curr]=0;
//         curr--;
//     }

//     return arr;
// };


// console.log(arrsort(arr));

////////////////////================///////////////////////////////////////////=========================Merge two sorted arrays into one sorted array.

// let arr1 = [1,3,5];
// let arr2 = [2,4,6];



// function merge(arr1,arr2){

// let narr=[];

// let a1=arr1.length;
// let a2=arr2.length;

// let i=0;
// let j=0;

// while(a1>i && a2>j){
//     if(arr1[i]<arr2[j]){
//         narr.push(arr1[i]);
//         i++;
//     }else if(arr1[i]>arr2[j]){
//         narr.push(arr2[j]);
//         j++;
//     }
// };


// while(a1>i){
//     narr.push(arr1[i]);
// }

// while(a2>i){
//     narr.push(arr2[j]);
// }

// return narr;

// }

// console.log(merge(arr1,arr2));

//======================================Problem: You are given an array that was sorted but then rotated at an unknown pivot (e.g., [4, 5, 6, 7, 0, 1, 2]). find the smallesst

// let arr=[4, 5, 6, 7, 0, 1, 2];
// let tar=1;

// function op(arr){
//     let left=0;
//     let right=arr.length-1;

//     while(left<right){
//         let mid=Math.floor((left+right)/2);
//         if(arr[mid]>arr[right]){
//             left=mid+1;
//         }else{
//             right=mid;
//         }
//     }

//     return left;
//     }

//     console.log(op(arr));

    //==//======================================Problem: You are given an array that was sorted but then rotated at an unknown pivot (e.g., [4, 5, 6, 7, 0, 1, 2]). Given a target
// let arr=[1,2,3,4, 5, 6, 7];
// let tar=4;

// function op(arr,tar){
//     let left=0;
//     let right=arr.length-1;

//     while(left<=right){
//         let mid=Math.floor((left+right)/2);

//         if(arr[mid]===tar){
//             return mid;
            
//         }else if(tar<arr[mid]){
//             right=mid-1;
//         }else if(tar>arr[mid]){
//             left=mid+1
//         }
//     }
// return -1;
// };

// console.log(op(arr,tar));

  //==//======================================Problem: You are given an array that was sorted but then rotated at an unknown pivot (e.g., [4, 5, 6, 7, 0, 1, 2]). Given a target, find its index

//   let arr=[4, 5, 6, 7,1,2,3];
// let tar=4;

// function op(arr,tar){

//     let left=0;
//     let right=arr.length-1;

// while(left<=right){
//     let mid=Math.floor((left+right)/2);

//     if(arr[mid]===tar)return mid;

//     if(arr[left]<=arr[mid]){
//         if(tar>=arr[left] && tar<arr[mid]){
//           right=mid-1;
//         }else{
//             left=mid+1
//         }
//     }else{
//         if(tar>arr[mid] && tar<=arr[right]){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
// }
// return -1;
// }

// console.log(op(arr,tar));


//==================Problem: Given an array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].


// let arr=[1,2,3,4];


// function op(arr){
//     let n=arr.length;
//     let narr=new Array(n).fill(1);

//     let left=1;
//     for(let i=0;i<n;i++){
//         narr[i] =narr[i]*left;
//         left=left*arr[i];
//     }

//     let right=1;
//     for(let i=n-1;i>=0;i--){
//         narr[i]=narr[i]*right;
//         right=right*arr[i];
//     };


//     return narr;
// };


// console.log(op(arr));



            //============================Find all pairs with sum = k  using map

//                 let arr=[1,2,3,4,5,6,7,-8,9,10];



// function op(arr,k){
//     let narr=[];

//     let map=new Map();
//     for(let i=0;i<arr.length;i++){
//         let rem=k-arr[i];
//         if(map.has(rem)){
//           narr.push([arr[i],rem])
//         }
//         map.set(arr[i],i);
//     }
//     return narr;

// }

// console.log(op(arr,10));

// Remove duplicates from array👉 Using Set

// let Input= [1,2,2,3,4,4];

// console.log([...new Set(Input)].length===Input.length);

//doing this without inbuit

//finding duplicate and removijg it


// let arr= [1,2,2,3,4,4];


// function op(arr){
//     let set=new Set();

//     for(let i=0;i<arr.length;i++){
//         if(set.has(arr[i])){
//             for(let j=i;j<arr.length;j++){
//                 arr[j]=arr[j+1];
               
//             }
            
//                 arr.length--;
//                 i--;
//         }
        
//         set.add(arr[i])
//     }

//     return arr;
// }


// console.log(op(arr));

/////////////////========================/Problem: Given an array of integers nums, calculate the pivot index. 
// The pivot index is the index where the sum of all numbers strictly to the left of the index is equal to the sum of all numbers strictly to the right of the index.Why it fits: You mentioned studying Prefix Sums.
//  This is the most practical application of that concept.Target: $O(n)$ time complexity.


// let nums = [1, 7, 3, 6, 5, 6];


// function op(nums){
//     let n=nums.length;
//     let ttl=nums.reduce((sum,ele)=>sum+ele,0);
  

//     let left=0;
//     for(let i=0;i<n;i++){
//         if(left===ttl-nums[i]-left)return i;

//         left +=nums[i];
//     }

//     return -1;
// };


// console.log(op(nums));

////////////////////////////////////////===using prefix


// let nums = [1, 7, 3, 6, 5, 6];

// function op(nums){

//     let n=nums.length;
//     let narr=new Array(n);



//     narr[0]=nums[0]
//     for(let i=1;i<n;i++){
//         narr[i]=narr[i-1]+nums[i];
//     };

//     for(let i=0;i<n;i++){
//         let left= i===0?0:narr[i-1];
//         let right=narr[n-1]-narr[i];
//         if(left===right)return i;
//     }

//     return -1;
// };

// console.log(op(nums));



////Problem: An integer array is sorted in ascending order, but then it is rotated at an unknown pivot (e.g., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]). Given a target, return its index if it is in the array.

// let arr=[4,5,6,7,0,1,2];

// function op(arr,tar){
//     let left=0;
//     let right=arr.length-1;

//     while(left<=right){

//         let mid=Math.floor((left+right)/2);
//         if(arr[mid]===tar)return mid;

//         if(arr[left]<=arr[mid]){
//             if(arr[left]<=tar && arr[mid]>tar){
//                 right=mid-1;
//             }else{
//                 left=mid+1
//             }
//         }else{
//             if(arr[right]>=tar && arr[mid]<tar){
//                 left=mid+1
//             }else{
//                 right=mid-1
//             }
//         }
//     }

//     return -1;
// };

// console.log(op(arr,1));


//=================👉 “Find the minimum element in rotated sorted array”
// let arr=[4,5,6,7,0,1,2];


// function op(arr){
//     let left=0;
//     let right=arr.length-1;

//     while(left<right){
//         let mid=Math.floor((left+right)/2);

//         if(arr[mid]>arr[right]){
//             left=mid+1;
//         }else{
//             right=mid
//         }
//     }

//     return left;
// }

// console.log(op(arr));


// let arr=[4,5,6,7,8,0,1,2,3];


// function op(arr){
//     let left=0;
//     let right=arr.length-1;

//     while(left<right){
//         let mid=Math.floor((left+right)/2);

//         if(arr[mid]>arr[left]){
//             left=mid;
//         }else{
//             right=mid-1
//         }
//     }

//     return left;
// }

// console.log(op(arr));
//==============4. Count Occurrences

// let arr=[4,5,6,7,7,0,1,2,3];


// function op(arr,tar){
//     let left=0;
//     let right=arr.length-1;

//     let first=0;
//     let last=0;

//     while(left<=right){
//      let mid=Math.floor((left+right)/2);
//      if(tar===arr[mid]){
//         first=mid;
//         right=mid-1;
//      }else if(tar<arr[mid]){
//         right=mid-1;
//      }else if(tar>arr[mid]){
//         left=mid+1;
//      }
//     }


//        left=0;
//      right=arr.length-1;

//          while(left<=right){
//      let mid=Math.floor((left+right)/2);
//      if(tar===arr[mid]){
//          last=mid;
//         left=mid+1;
//      }else if(tar<arr[mid]){
//         right=mid-1;
//      }else if(tar>arr[mid]){
//         left=mid+1;
//      }
//     }


//     return (last-first)+1;

// };


// console.log(op(arr,7));

//=============5. Search Insert PositionWhere should element be inserted?

// let arr = [1,3,5,7];

// function op(arr,tar){
//     let  left=0;
//     let right=arr.length-1;


//      while(left<=right){
//           let mid=Math.floor((left+right)/2);
          
//           if(tar<arr[mid]){
//               right=mid-1;
//           }else{
//             left=mid+1;
//           }
//      }

//      return left;
// };


// console.log(op(arr,2))

///=========


// let arr = [1,3,5,7];

// function op(arr,tar){
//     let left=0;
//     let right=arr.length-1;

//     while(left<=right){
//         let mid=Math.floor((left+right)/2);

//         if(tar==arr[mid]){
//             return mid
            
//         }else if(tar<arr[mid]){
//             right=mid-1;
//         }else if(tar>arr[mid]){
//             left=mid+1
//         }
//     }

//     return arr[left];
// }

// console.log(op(arr,6));


//=============The Question: In an array where numbers go up and then down (like a mountain), find the index of the highest number.

let arr = [1,3,5,7,6,4,2];


function op(arr){
    let left=0;
    let right=arr.length-1;

    while(left<right){
        let mid=Math.floor((left+right)/2);

        if(arr[mid]<arr[mid+1]){
            left=mid+1;
        }else if(arr[mid]>arr[mid+1]){
            right=mid
        }
    }

    return arr[right];
};


console.log(op(arr));