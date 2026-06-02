///1////////////////////////////////////////////////////////////////////////////reverse string


// let Input= "hello";

// function reverstring(Input){
//     let arr=Input.split("");

//     let left=0;
//     let right=arr.length-1;


//     while(left<right){
//         [arr[left],arr[right]]=[arr[right],arr[left]];
//         left++;
//         right--;
//     }

//     return arr.join("");
// }

// console.log(reverstring(Input));


//2////////////////////////////////////////////////===========================================================Check if two strings are anagrams.

// let s = "listen";
// let t = "silentr";


// function anagram(s,t){


//     if(s.length !== t.length){
//         return false;
//     }

//     let obj={};

//     for(let cha of s){
//         obj[cha]=(obj[cha]||0)+1;

//     };


//     for(let cha of t){
//         if(obj[cha] ===undefined  || obj[cha] === 0){
//             return false;
//         }
//         obj[cha]--;

        
//     }

//     return true;

// }

   

// console.log(anagram(s,t));


// “We use a JavaScript object as a frequency map. First, we iterate over s to count character occurrences. Then, we iterate over t to decrement the counts. If any character is missing or used too many times, we return false.
// Each object operation is O(1), so the algorithm runs in O(n) time and uses O(n) space.”



//3////////////////////===================================1️⃣ Basic Palindrome Check,Check if a string is a palindrome.





// let Input= "madama"



// function palidrome(Input){
//     let left=0;
//     let right=Input.length-1;


//     while(left<right){

//         if(Input[left] !==Input[right]){
//             return false;

//         }
//         left++;
//         right--;
//     }


//     return true;
// };

// console.log(palidrome(Input));


///////////////////////////////==========================================3️⃣ Palindrome Ignoring Spaces
// let Input= "race cara";



// function pali(Input){

//     let left=0;
//     let right=Input.length-1;

//     while(left<right){

//         if(Input[left] ===" "){
//             left++;
//             continue;
//         };


//         if(Input[right] ===" "){
//             right--;
//             continue;
//         }


//         if(Input[left] !== Input[right]){
//             return false;
//         }

//         left++;
//         right--
//     }

// return true;


// }


// console.log(pali(Input));


//////////////////================7️⃣ Find the Longest Palindrome Substring



// let Input= "babad";




/////////////////////////=========================================================Index-Based Reverse String (Recursion)




// let str = "hello";


// function reverse(str,index){
//     if(index<0){
//         return " ";
//     }

//     return str[index]+reverse(str,index-1);
// };


// console.log(reverse(str,str.length-1));

///////////////////////==============================Find the third largest word in sentence  with using sorted


// let str = "I love solving challenging DSA problems every day";

// let arr=str.split(" ");

// let sorted=arr.sort((a,b)=>b.length-a.length);
// console.log(sorted[2]);


//////////////////////////////=======================Find the third largest word in sentence  without using sorted

// let str = "I love love solving challenging DSA problems every day";

// let arr=str.split(" ");

// let first="";
// let scond="";
// let third="";

// for(let word of arr){
//     if(word.length>first.length){
//         third=scond;
//         scond=first;
//         first=word;
// }else if(word.length>scond.length){
//     third=scond;
//     scond=word;
// }else if(word.length>third.length){
//     third=word;
// }
// };


// console.log(scond);

/////////////////////////////////////////===========================Reverse a string using recursion

// let str="hello";

// function recursion(str,index){

//     if(index<0)return "";


//     return str[index]+recursion(str,index-1);
// }

// console.log(recursion(str,str.length-1));

///////////////////=================================remove char from string using recursion


// let str = "hello world";

// let char="l";



// function removel(str,char)

// {
    

//     if(str.length=== 0)return ""; 


//     let first=str[0];
//     let rest=removel(str.slice(1),char);


//     if(first===char){
//         return rest;
//     }else{
//         return first+rest;
//     }



// };



// console.log(removel(str,char));

/////////////////////===================================reverse a string using recursion


// let str="hello";
// let n=str.length;

// function recursion(str,i){

//     if(i>=n)return "";



//     return recursion(str,i+1)+str[i];

// };

// console.log(recursion(str,0));

////////////////////==========================removing vowels from the string using array methods


// let vow=["a","e","i","o","u"];

// let str="amal";
// let arr=str.split("");

// let filtered=arr.filter(ch=> !vow.includes(ch)).join("");


// console.log(filtered);

///////////////////////////================================removing vowels from the string without using array methods




// let vow=["a","e","i","o","u"];

// let str="amal";

// let result="";
// for(let ch of str.toLowerCase()){
//      if(ch !=="a" && ch !=="e" && ch !=="i" && ch !=="o" && ch !=="u"){
//         result =result+ch;
//      }
// }


// console.log(result);
///////////////////////////////////=====================================================================count of vowels in the string

// let vow="aeiou";

// let str="amal";

// let count=0;
// for(let ch of str){
//     if(vow.includes(ch)){
//         count++;
//     };
// }

// console.log(count);


/////////////////////////////////////////////===========================================================remove char from string using recursion


// let char="l";
// let str="amal";

// let n=str.length;

// function recuremove(str,char,i){
//      if(i>=n)return "";

//      if(str[i]!==char){
//         return str[i]+recuremove(str,char,i+1);
//      }else{
//         return recuremove(str,char,i+1);
//      }
     
// };


// console.log(recuremove(str,char,0));

/////////////////====================reverse a string using a recursion

// let str="amal";

// function recursion(str,i){
// if(i>=str.length){
//     return "";
// };

// return recursion(str,i+1)+str[i];
// };


// console.log(recursion(str,0));

//////////////////////============================Palindrome Check: Check if a string is a palindrome by comparing the first and last characters and recursing on the middle



// let str="amma";
//    let left=0;
//     let right=str.length-1;

// function palirecur(str,left,right){
 

//     if(left >=right){
//         return "it is palidrome"
//     };


//     if(str[left] !==str[right]){
//         return "not palidrome"
//     }

//     return palirecur(str,left+1,right-1);


// };


// console.log(palirecur(str,left,right));


////////////////////==========================Generate All Subsequences: Given a string (e.g., "abc"), print all possible subsequences (e.g., "", "a", "b", "c", "ab", "ac", "bc", "abc").
// function subsequences(str, current = "", index = 0) {
//     // base case
//     if (index === str.length) {
//         console.log(current);
//         return;
//     }

//     // pick
//     subsequences(str, current + str[index], index + 1);

//     // don't pick
//     subsequences(str, current, index + 1);
// }

// subsequences("abc");

////////////////====================Remove All Occurrences: Remove all instances of a specific character (like 'a') from a string recursively


// let str="amal";
// let char="a";

// function remove(str,char,i){
// if(i>=str.length){
//     return "";
// }

// if(str[i]===char){
//     return remove(str,char,i+1);
// }else{
//     return str[i]+remove(str,char,i+1);
// }
// };

// console.log(remove(str,char,0));

//=======================find the longest palindrome

// let str="ababcba";

// function lngstpali(str){


//     let start=0;
//     let maxlngth=0;

//     function expand(left,right){
//         while(left>=0 && right<str.length && str[left]===str[right]){
//             if((right-left+1)>maxlngth){
//                 start=left;
//                 maxlngth=(right-left)+1;
//             };
//             left--;
//             right++;
//         }
//     };
  

//     for(let i=0;i<str.length;i++){
//         expand(i,i);
//         expand(i,i+1);
//     }



// return str.substring(start,start+maxlngth);


// }

// console.log(lngstpali(str));







//===================reverse a string

// let str="amal";

// function reverse(str,n){

//     if(n>str.length-1)return "";


// return reverse(str,n+1)+str[n];

// };


// console.log(reverse(str,0));

/////////////////////======================remove a char from string using recursion

// let str='amakl';

// let char="l";

// function remove(str,char,n){
//     if( n<0 )return "";

//     if(str[n]===char){
//           return remove(str,char,n-1);
//     }else{
//         return remove(str,char,n-1)+str[n];
//     }
// };


// console.log(remove(str,char,str.length-1));

///=============================================remove a vowels from string with recursion

// let str='amalkrishna';
// let vow="aeiou";

// function remove(str,n,vow){

//     if(n<0)return "";

//     if(vow.includes(str[n])){
//         return remove(str,n-1,vow);
//     }else{
//         return remove(str,n-1,vow)+str[n]; 
//     }

// };

// console.log(remove(str,str.length-1,vow));


///////////=====================remove a vowels from string without recursion

// let str='amalkrishna';
// let vow="aeiou";
// let nstr="";


// for(let char of str){
//     if(!vow.includes(char)) nstr += char;
//     //   nstr + "";
    // }else{
    //     nstr=nstr + char;
    // }


// }

// console.log(nstr);


//3////////////////////===================================1️⃣ Basic Palindrome Check,Check if a string is a palindrome. using recursion


// let str="ama"
// let left=0;
// let right=str.length-1;
// function pali(str,left,right){
// if(left>=right){
//     return "palindrom";
// }

// if(str[left] !==str[right]){
//     return "not palindrom";

// }

// return pali(str,left +1,right -1);

// };


// console.log(pali(str,left,right));

//==============================================================Reverse each word in a string without using any built in methods

// let str="hello world";


// function reverse(str){
//     let result="";
//     let word="";

//     for(let i=0;i<str.length;i++){
//         let char=str[i];

//         if(char !==" "){
//             word +=char;
//         }else{
//             let rev="";
//             for(let i=word.length-1;i>=0;i--){
//                 rev +=word[i];
//             }
//             result += rev + " ";
//             word="";
//         };

//     }

//     let rev="";
//     for(let i=word.length-1;i>=0;i--){
//         rev +=word[i];
//     }

//     result +=rev;


//     return result;


// };

// console.log(reverse(str));

////////////////////3////////////////////===================================1️⃣ Basic Palindrome Check,Check if a string is a palindrome. using recursion

// let str="ama";


// let left=0;
// let right=str.length-1;
// function pali(str,left,right){
// if(left>=right)return "it is palindrome";
// if(str[left] !==str[right]){

//     return "not palindrom"

// };

// return pali(str,left +1,right -1)

// };


// console.log(pali(str,left,right));
///=========================================///=============================================remove a vowels from string with recursion


// let str="amalkrishna";

// let vow="aeiou";
// let result="";

// function revers(str,i,vow){
// if(i>=str.length-1)return result;

// if(!vow.includes(str[i])) result +=str[i];

//  return revers(str,i+1,vow);
// }
// console.log(revers(str,0,vow));

//====================================remove a vowels from string with recursion without creating new varicale

// let str="amalkrishna";

// let vow="aeiou";

// function vowstr(str,i,vow){

//     if(i>str.length-1)return  "";

//     if(vow.includes(str[i])){
//         return vowstr(str,i+1,vow)
//     }else{
//         return str[i]+vowstr(str,i+1,vow);
//     };

// };

// console.log(vowstr(str,0,vow));

////////////////////==========================Generate All Subsequences: Given a string (e.g., "abc"), print all possible subsequences (e.g., "", "a", "b", "c", "ab", "ac", "bc", "abc").
// function subsequences(str, current = "", index = 0) {
//     // base case
//     if (index === str.length) {
//         console.log(current);
//         return;
//     }

//     // pick
//     subsequences(str, current + str[index], index + 1);

//     // don't pick
//     subsequences(str, current, index + 1);
// }

// subsequences("abc");

////////////////////////////////////Remove duplicates from a string


// let str="amal";
// let newstr="";
// let obj={};

// function remov(str,newstr){
// let obj={};
//     for(let char of str){
//       if(!obj[char]){
//         obj[char]=true;
//         newstr +=char;
//       }
// }

// return newstr
// };


// console.log(remov(str,newstr));

//// ===================removing duplicate with recursion

// let str="amal";
// let newstr="";
// let obj={};


// function remdupli(str,newstr,obj,i){


//     if(i>=str.length) return newstr;


//     if(!obj[str[i]]){
//         obj[str[i]]=true;
//         newstr +=str[i];
//         return remdupli(str,newstr,obj,i+1);
//     }else{
//         return remdupli(str,newstr,obj,i+1);
//     }


// };

// console.log(remdupli(str,newstr,obj,0));

///////////////////////-Hello World to olleH dlroW convert string problem

// let str="Hello World";

// function reve(str){
//     let nstr="";
//     let word="";

//     for(let cha of str){
//         if(cha !==" "){
//             word +=cha;
            
//         }else{
//             let rev="";
//             for(let i=word.length-1;i>=0;i--){
//                 rev +=word[i];
//         };
   
//         word="";
//         nstr +=rev +" ";
    
       
        


//     };
    

    

// }

// for(let i=word.length-1;i>=0;i--){
//        nstr +=word[i];
//     }

// return nstr;
// };


// console.log(reve(str));


//===================
//////////////////////////Print all subsets (subsequences) of a string using binary recursion
//==========

let str="abc";

function binrec(str,index=0,current=""){

if(index===str.length){
    console.log(current);
    return;
};



    binrec(str,index+1,current+str[index]);
    binrec(str,index+1,current);
}


binrec(str);

//////////////////////////////////////==========================binary recursion


// let arr=[1,2,3,4,5,6,7,8,9];
// let tar=4;



// let left=0;
// let right=arr.length-1;


// function binryrecur(arr,tar,left,right){

// if(left>right)return "not found";

//     let mid=Math.floor((left+right)/2);

//     if(tar===arr[mid]){

//        return mid;
//     }else if(tar<arr[mid]){
//         return binryrecur(arr,tar,left,mid-1);
//     }else if(tar>arr[mid]){
//         return binryrecur(arr,tar,mid+1,right);
//     }

    

// };

// console.log(binryrecur(arr,tar,left,right));


//////////////////==========remove duplicate charecter from the string using recursion

// let str="amal";

// let nstr="";
// let obj={};





// function  calc(str,i,nstr,obj){

//     if(i===str.length){
//         return nstr;
//     }
// //   console.log(str[i]);
// if(!obj[str[i]]){
//     obj[str[i]]=true;
//     nstr +=str[i];
//     return calc(str,i+1,nstr,obj);
// }else{
//     return calc(str,i+1,nstr,obj)
// }

// };









// console.log(calc(str,0,nstr,obj));