
//////////////////==========remove  charecter from the string using recursion

// let  str="amal";

// function remov(str,i,cha){

//     if(i>=str.length){
//         return '';
//     }

//     if(str[i]==cha){
//        return remov(str,i+1,cha)
//     }else{
     
//        return remov(str,i+1,cha,)+str[i] ;
//     }

    
// };


// console.log(remov(str,0,"a"));



//////////////////////////Print all subsets (subsequences) of a string using binary recursion
///////////////////////-Hello World to olleH dlroW convert string problem


// let str="Hello World";

// let arr=str.split(" ");

// let narr=arr.map(a=>a.split("").reverse().join(""));

// console.log(narr.join(" "));


//==================complete revers

// let str="Hello World";


// let narr=str.split("").reverse().join("");


// console.log(narr);

//==============================manual practise


// let str="Hello World";


// function reve(str){
//     let result="";
//     let word="";
//     for(let i=0;i<str.length;i++){

//         if(str[i] !==" "){
//         word +=str[i];
//         }else{
//             let rev="";
//             for(let j=word.length-1;j>=0;j--){
//                 rev +=word[j]
//             }
//             word="";
//             result +=rev + " ";
//         }


       
//     }

//     for(let j=word.length-1;j>=0;j--){
//       result +=word[j];
//     }


//     return result;

// }


// console.log(reve(str));

//====================remove duplicate from sring


// let str="Hello World";


// function remove(str,nstr){
//     obj={};

//     for(let cha of str){
//         if(!obj[cha]){
//            obj[cha]=true;
//            nstr +=cha;
//         }
//     }


//     return nstr;

// };


// console.log(remove(str,''));

//====================remove duplicate from sring using recursion


// let str="Hello World";


// function remove(str,i,obj){

//     if(i===str.length) return "";


//     if(!obj[str[i]]){
//         obj[str[i]]=true;
//         return str[i]+remove(str,i+1,obj);
//     }else{
//         return remove(str,i+1,obj);

//     }
// };


// console.log(remove(str,0,{}));

////////////////////====================================remove a vowels from string with recursion without creating new varicale


// let str="Hello World";


// function remov(str,i,vow){

//     if(i===str.length)return "";

//     if(vow.includes(str[i])){
//         return remov(str,i+1,vow);
//     }else{
//         return str[i]+remov(str,i+1,vow);
//     }



// };


// console.log(remov(str,0,"aeiou"));


////////////////////3////////////////////===================================1️⃣ longest palindrom


// let str="amamaaamaal"


// function checkpali(str){
//     let start=0;
//     let maxlength=0;

//     function pali(left,right){
//          while(left>=0 && right<str.length && str[left]===str[right]){
//             if(right-left+1>maxlength){
//                 start=left;
//                 maxlength=right-left+1;
//             };

//             left--;
//             right++;
//          }
//     }

//     for(let i=0;i<str.length;i++){
//         pali(i,i);
//         pali(i,i+1);
//     }

//     return str.substring(start,start+maxlength);
// };


// console.log(checkpali(str));


///////////////////////////////////=====================================================================count of vowels in the string



// let str="amamaaamaal";


// function sumup(str){

//     let count=0;
//     for(let cha of str){
//         if("aeiou".includes(cha)){
//             count++
//         }
//     }
// return count;
// };



// console.log(sumup(str));

////

//////////////////////////////=======================Find the third largest word in sentence  without using sorted


//  let str = "I love love solving challenging DSA problems every day";

//  let sored=str.split(" ").sort((a,b)=>b.length-a.length);

//  console.log(sored[2]);


 //========//////////////////////////////=======================Find the n largest word in sentence  without using sorted
//  let str = "I love love solving challenging DSA problems every day";


//  function check(str,n){

// let nstr=[];
// let arr=[...new Set(str.split(" "))];
// for(let i=0;i<n;i++){

//     let maxIndex=0;

//     for(let j=1;j<arr.length;j++){
//         if(arr[j].length>arr[maxIndex].length){
           
//             maxIndex=j;
//         }
//     }

//     nstr.push(arr[maxIndex]);
//     arr.splice(maxIndex,1)

// }

// return nstr[n-1];

//  }

//  console.log(check(str,3));



//2////////////////////////////////////////////////==========Problem: Given a sorted array of integers nums and a target value, find the starting and ending index of that target. If the target isn't found, return [-1, -1].Constraint: You must write an algorithm with $O(\log n)$ runtime complexity.Example: nums = [5, 7, 7, 8, 8, 10], target = 8 $\rightarrow$ Output: [3, 4]

// let nums = [5, 7, 7, 10];
// let target = 8;


// function op(nums,target){

//     let left=0;
//     let right=nums.length-1;

//       let first=-1;
//         let last=-1;

//     while(left<=right){
      

//         let mid=Math.floor((left+right)/2);

//         if(nums[mid]===target){
//          first=mid;
//         right=mid-1
//         }else if(nums[mid]>target){
//             right=mid-1;
//         }else if(nums[mid]<target){
//             left=mid+1;
//         }
//     }
// console.log(first);


//         left=0;
//     right=nums.length-1;


//        while(left<=right){

//         let mid=Math.floor((left+right)/2);

//         if(nums[mid]===target){
//          last=mid;
//         left=mid+1
//         }else if(nums[mid]>target){
//             right=mid-1;
//         }else if(nums[mid]<target){
//         left=mid+1;
//         }
//     }


//     return [first,last]

// };



// console.log(op(nums,target))

//Write a recursive function that determines whether a given string consisting only of parentheses '(' and ')' is balanced.

// let str="((()))";

// function op(str){
//     if(str.length ===0) return true;

//     if(!str==="()")return false;

//     let nstr=str.replace("()","");

//     return op(nstr);
// }

// console.log(op(str));


///Problem: Implement a function to perform basic string compression using the counts of charecter
// For example, the string aabcccccaaa would become a2b1c5a3.Constraint: If the "compressed" string is not smaller than the original string, return the original string.



// ///
// let str="abc";

// function op(str){
// let nstr="";
// let obj={};
// for(let i=0;i<str.length;i++){
//     obj[str[i]]=(obj[str[i]]||0)+1;
// };

// for(let cha in obj){
//     nstr +=cha;
//     nstr +=obj[cha];
// };

// if(nstr.length>=str.length)return str;
// return nstr;

// };


// console.log(op(str));


///Problem: Implement a function to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3.Constraint: If the "compressed" string is not smaller than the original string, return the original string.

let str="aaaabbbccccc";


function op(str){
    let nstr="";
    let count=1;
    for(let i=0;i<str.length;i++){
       if(str[i]===str[i+1]){
        count++;
       }else{
        nstr +=str[i];
        nstr +=count;
        count=1;
       }
    };


    if(nstr.length>=str.length)return str;

    return nstr;
};

console.log(op(str));