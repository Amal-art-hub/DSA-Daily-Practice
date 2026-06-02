//===========================================================================================================quick sort

// let arr=[1,3,4,5,8,6,0];


// function quicksort(arr,low=0,high=arr.length-1){

//     if(low<high){
//         let p=partition(arr,low,high);
//           quicksort(arr,low,p-1);
//           quicksort(arr,p+1,high);
//     };

//     return arr;

// }

// function partition(arr,low,high){
//     let pivot=arr[high];
//     let i=low-1;

//     for(let j=low;j<high;j++){
//         if(arr[j]<pivot){
//             i++;
//             [arr[i],arr[j]]=[arr[j],arr[i]];
          
//         }
//     }

//     [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    
//     return i+1;


// }

// console.log(quicksort(arr,low=0,high=arr.length-1))




//====================merge sort


// let arr=[8,3,1,7,9];

// function mergsort(arr){

//     if(arr.length<=1)return arr;
//     let mid=Math.floor(arr.length/2);

//     let left=mergsort(arr.slice(0,mid));
    
//     let right=mergsort(arr.slice(mid));
//     console.log(left,right)

//     return merg(left,right);
  
// }


// function merg(left,right){

//     let result=[];
//     let i=0;
//     let j=0;

//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]){
//   result.push(left[i]);
//   i++;
//         }else{
// result.push(right[j]);
// j++;
//     }
// }

// return result.concat(left.slice(i)).concat(right.slice(j));
// }
    

// console.log(mergsort(arr));



//===========bubble sort implementation


// let arr=[1,4,2,6,2,3,7];


// function bublesort(arr){

//     for(let i=0;i<arr.length;i++){
//         let sorted=false;
//         for(let j=0;j<arr.length-1-i;j++){

//             if(arr[j]>arr[j+1]){
//                 let temp =arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;

//                 sorted=true;
//             }

//         }
//         if(!sorted) break;

//     }
//  return arr;
// }

// console.log(bublesort(arr));

//=======================arrays
//===================================================Check if an array is sorted with linear time complexity


// let arr=[1,4,2,6,2,3,7];

// function op(arr){

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             return false;

//         }
//     }
//     return true;
// }

// console.log(op(arr))


//===============Combine two sorted arrays into a single sorted array in O(n) time

// let arr1=[1,3,5,7];
// let arr2=[2,4,6,8];

// function op(arr1,arr2){
//     let i=0;
//     let j=0;
//     let result=[];

//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<arr2[j]){
// result.push(arr1[i]);
// i++;
//         }else{
//             result.push(arr2[j]);
//             j++;
//         }   
//     }

//     return result.concat(arr1.slice(i).concat(arr2.slice(j)));
// }
// console.log(op(arr1,arr2));


/////============Best sorting algorithm for partially sorted small arrays

// let arr=[1,3,6,9,2,4,0,5];

// function insertsort(arr){
// for(let i=1;i<arr.length;i++){
//     let key=arr[i];
//     let j=i-1;

//     while(j>=0 && arr[j]>key){
//         arr[j+1]=arr[j];
//         j--;
//     }
// arr[j+1]=key;

// }
// return arr;  
// }

// console.log(insertsort(arr));


//=========Sort an array alphabetically using QuickSort

// let arr=["banana", "apple", "mango", "grape"];

// function op(arr){

//     if(arr.length<=1)return arr;

// let pivot=arr[arr.length-1];s

// let left=[];
// let right=[];

// for(let i=0;i<arr.length-1;i++){
// if(arr[i]<pivot){
//     left.push(arr[i])
// }else{
//     right.push(arr[i]);
// }
// }

// return [...op(left),pivot,...op(right)];

// }

// console.log(op(arr));

//=====================//=========Sort an array alphabetically using merge sort  and pont out the leveless also


// let arr=["banana", "apple", "mango", "grape"];


// function msort(arr,level=0){

//     console.log("level",level,"->",arr);
//     if(arr.length<=1)return arr;

//     let mid=Math.floor(arr.length/2);

//     let left=msort(arr.slice(0,mid),level+1);
//     let right=msort(arr.slice(mid),level+1);

//     let merged= merge(left,right);
//     console.log("level",level,"merged->",merged);

//     return merged;
// };

// function merge(left,right){
//     let i=0;

//     let j=0;
//     let result=[];

//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]){
//           result.push(left[i]);
//           i++;
//         }else{
//             result.push(right[j]);
//             j++;
//         }
//     }

//     return result.concat(left.slice(i)).concat(right.slice(j))
// }

// console.log(msort(arr));

//=============================================================Check if a string is a palindrome using a stack


// let str="amama";

// function stckop(str){


//     let stack=[];

//     for(let i=0;i<str.length;i++){
//         stack.push(str[i]);
//     }


    
//     for(let i=0;i<stack.length;i++){

//       if(str[i] !== stack.pop()){
//         return false;
//       }

    

//     }

//     return true;

// }

// console.log(stckop(str));

//================================================Delete a specific node from a stack


// let stack=[1,2,3,4,5,6,7,8];

// function op(stack,tar){
//     let temp=[];

 
//     while(stack.length>0){
//         let top=stack.pop();

//         if(top !==tar){
//             temp.push(top);
//         }
//     };


//     while(temp.length>0){
//         stack.push(temp.pop());
//     }

// return stack;

// }


// console.log(op(stack,5));

//==========================Implement a stack that rejects duplicate values

  
//====================Implement a stack using a linked list

// class Node{
//     constructor(data){
//       this.data=data;
//       this.next=null;
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null;
//     }


//     push(data){
//       let newNode=new Node(data);
//       newNode.next=this.top;
//       this.top=newNode;

//     }

//     pop(){

//         if(this.top ===null)return null;
//         let removed=this.top;
//         this.top=this.top.next;
//         return removed.data;
//     }


//     peek(){
//         if(this.top===null)return null;
//         return this.top.data;
//     }

// };


// let list=new Stack();

// list.push(10);
// list.push(20);
// list.push(30);

// console.log(list.peek());
// console.log(list.pop());
// console.log(list.peek());


//==============implemenetation of insertion sorting

// let arr=[2,1,4,3];

// function op(arr){
//     for(let i=1;i<arr.length;i++){
//         let key =arr[i];
//         let j=i-1;


//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j];
//             j--;

//         }
//         arr[j+1]=key;
//     }

//     return arr;
// };


// console.log(op(arr));


// //============================================================================================/sorting a linked list using merge sort


// function mergsort(head){
    
    
//     if(!head || !head.next)return head;
    
//     let mid=middle(head);
    
//     let righthead=mid.next;
//     mid.next=null;
    
//     let left=mergsort(head);
//     let right=mergsort(righthead);
    
   
//     return sort(left,right);
    
// }


// function sort(l1,l2){
    
//     let dummy=new ListNode(0);
//     let tail=dummy;

// while(l1 && l2){
//     if(l1.val<l2.val){
//         tail.next=l1;
//         l1=l1.next;
//     }else{
//         tail.next=l2;
//         l2=l2.next;
//     }
    
//     tail=tail.next;
// }

// tail.next=l1||l2;

// return dummy.next;
// }







// function middle(head){
//     let slow=head;
//     let fast=head.next;
    
//     while(fast !==null && fast.next !==null){
//         fast=fast.next.next;
//         slow=slow.next;
//     }
    
    
//     return slow;
// }


// function printlist1(head){
//     let curr=head;
//     while(curr !==null){
//         console.log(curr.val);
//         curr=curr.next;
//     }
// }


//  head=mergsort(head);
// printlist1(head);




//==============================================================================implementation of quick sort



// let arr=[3,5,4,6,2];
// function quicksort(arr,low=0,high=arr.length-1,level=0){

//     if(low<high){

//         let pivotIndex=partition(arr,low,high);

//         quicksort(arr,low,pivotIndex-1,level++);
//         console.log(level,"-",low,pivotIndex-1);
//         quicksort(arr,pivotIndex+1,high,level++);
//         console.log(level,"-",pivotIndex+1,high);

//     }
//     return arr;
// };


// function partition(arr,low,high){

//     let pivot=arr[high];
//     let i=low-1;

//     for(let j=low;j<high;j++){
//         if(pivot>arr[j]){
//             i++;
//             [arr[i],arr[j]]=[arr[j],arr[i]];
//         };
//     }
//     [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
//     return i+1;
// };


// console.log(quicksort(arr));

//=================Find the first non-repeating character in a string using a hash table


// let str="abcabrri";


// function op(str){

//     let obj={};
//     for(let cha of str){
// obj[cha]=(obj[cha]||0)+1;
//     };

//   console.log(obj)

//     for(let cha of str){
//         if(obj[cha]===1){
//             return cha;
//         }
//     }
// };


// console.log(op(str));

//======================Find the least occurred number using a hash table


// let arr=[1,1,2,2,2,3,4,5,5,5,6,7,7,7,8,9];

// function op(arr){
//     let obj={};

//     for(let num of arr){
//         obj[num] =(obj[num]||0)+1;

//     }

//     let min=Infinity;
//     let minum;

//     for(let key in obj){
//         if(obj[key]<min){
//             min=obj[key]
//           minum=key;
//         }
//     }

//     return minum;
// };


// console.log(op(arr));


//======================Find the uncommon elements from two arrays using a hash table
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];


// function op(arr1,arr2){

//     let obj={};
//     let result=[];

//     for(let num of arr1){
//         obj[num]=(obj[num]||0)+1;

//     };


    
//     for(let num of arr2){
//         obj[num]=(obj[num]||0)+1;

//     };


//     for(let key in obj){
//         if(obj[key]===1){
//            result.push(key);
//         }
//     }


//     return result;
// }
// console.log(op(arr1,arr2));

//======================================Find two numbers that sum to a target (Two Sum) using a hash table in O(n)


// let arr=[1,2,3,4,5,6,7,8];


// function op(arr,sum){

//     let map=new Map();
//     let result=[];


//     for(let num of arr){
//         let rem=sum-num;

//         if(map.has(rem)){
//             result.push([rem,num])
//         }

//         map.set(num,true);
//     }

//     return result;
// }
// console.log(op(arr,9));


//====================Remove duplicates from a string using a hash table


// let str="aamal";

// function op(str){
//     let set=new Set();

//     let result="";

//     for(let cha of str){
//         if(!set.has(cha)){
//             set.add(cha);
//             result +=cha;
//         }
//     }

//     return result;
// }
// console.log(op(str));

//=======Valid anagram using a hash table


// let str1="listen";
// let str2="silente";

// function op(str1,str2){
//     let obj={};

//     if(str1.length !==str2.length)return false;
//     for(let cha of str1){
//         obj[cha]=(obj[cha]||0)+1;

//     }


//     for(let cha of str2){
//         if(obj[cha]){
//             obj[cha]--;
//         }else{
//             return "not anagram";
//         }
//     }

//     return "it is anagram"
// }


// console.log(op(str1,str2));

//==============Check if a string is a palindrome using a stack

// let str="madsam";


// function op(str){
//     let stack=[];

//     for(let cha of str){
//         stack.push(cha);
//     };


//     for(let cha of str){
//         if(cha !== stack.pop())return false;
//     };

// return true;

// }

// console.log(op(str));


//=============================Delete a specific node from a stack


let arr=[1,2,3,4,5,6,7];
let n=arr.length


function op(arr,tar){

    let temp=[];

    while(arr.length>0){
        let top=arr.pop();
        if(top !==tar){
            temp.push(top);
        }


    };


    while(temp.length>0){
        arr.push(temp.pop());
    }

    return arr;
}

console.log(op(arr,3));
//====================Implement a stack that rejects duplicate values
// const students = [
//     { name: "Arun", marks: 45 },
//     { name: "Binu", marks: 82 },
//     { name: "Charan", marks: 67 },
//     { name: "Deepak", marks: 90 },
//     { name: "Esha", marks: 55 },
//     { name: "Farhan", marks: 78 },
//     { name: "Gita", marks: 60 }
// ];

// function quicksort(students,low=0,high=students.length-1){
//     if(low<high){
        
//         let p=partition(students,low,high);
//         quicksort(students,low,p-1);
//         quicksort(students,p+1,high);
        
        
//     }
    
//     return students;
// };



// function partition(arr,low,high){
//     let pivot=arr[high].marks;
//     let j=low-1;
    
//     for(let i=low;i<high;i++){
//         if(arr[i].marks>pivot){
            
//             j++;
//             [arr[i],arr[j]]=[arr[j],arr[i]];
//         }
//     }
//     [arr[j+1],arr[high]]=[arr[high],arr[j+1]];
//      return j+1;
    
// }


// console.log(quicksort(students))

////////////Count number of comparisons made during merge sort


// let arr=[1,4,2,5,3,];
// let comparison=0;


// function mergsort(arr){
//     if(arr.length<=1)return arr
    
//     let mid=Math.floor(arr.length/2);
    
//     let left=mergsort(arr.slice(0,mid));
    
//     let right=mergsort(arr.slice(mid));
    
//   return sort(left,right);
// }

// function sort(left,right){
    
//     let i=0;
//     let j=0;
    
//     let result=[];
    
//     while(i<left.length && j<right.length){
//          comparison++;
//         if(left[i]<right[j]){
           
//             result.push(left[i]);
//             i++;
//         }else{
//             result.push(right[j]);
//             j++;
//         }
//     }
    
    
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }



// console.log(mergsort(arr))
// console.log(comparison);



// //==============Check Balanced parentheses (use Linked List as stack)
// {{
// let str="{()]}"

// function op(str){
//     let stack=[]
//     let obj={
//         "}":"{",
//         "]":"[",
//         ")":"("
//     }
    
//     for(let ele of str){
//         if(ele==="{"||ele==="["||ele ==="("){
//             stack.push(ele)
//         }else{
//             if( obj[ele]!==stack.pop()) return false;
//         }
//     }
    
   
//     return stack.length===0;
    
// }



// console.log(op(str));


/////////////Reverse a queue using linked list


// fifo

// 1->2->3->4



// 1 3,2


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
        
//     }
// }


//  class Lst{
//      constructor(){
//          this.top=null;
//          this.rear=null;
//          this.size=0;
//      }
     
     
//      insert(x){
//         let newNode=new Node(x);
        
//         if(!this.rear){
//             this.rear=this.top=newNode;
//             this.size++;
//             return;
//         }else{
//             this.rear.next=newNode;
//             this.rear=newNode;
//             this.size++;
//         }
        
        
//      }
     
     
//      delet(){
//          if(this.size===0){
//              console.log("nothing to remove");
//              return ;
//          }
         
//          let val=this.top.data;
//          this.top=this.top.next;
//          this.size--;
//          if(this.top===null){
//              this.rear=null;
//          }
//          return val;
         
//      }
     
     
     
//      display(){
//          let curr=this.top;
         
//          while(curr !==null){
//              console.log(curr.data);
//              curr=curr.next;
//          }
//      }
     
     
     
//      reve(){
//          let prev=null;
         
//          let curr=this.top;
//          this.rear=this.top;
         
         
//          while(curr !==null){
//              let next=curr.next;
             
//              curr.next=prev;
//              prev=curr;
//              curr=next;
//          }
         
//          this.top=prev;
//      }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
//     }

// let lst=new Lst();

// lst.insert(1)
// lst.insert(2)
// lst.insert(3)
// lst.insert(4)
// lst.insert(5)
// lst.reve();


// lst.display()









//=======================Reverse a string using stack approach

// amal

// amal



// let str="amal";


// function op(str){
    
//     let stack=[];
    
//     for(let cha of str){
//         stack.push(cha);
//     }
    
//     let rev="";

// while(stack.length >0){
//     rev +=stack.pop();
// }
    
    
//     return rev;
// }


// console.log(op(str));





//======================== online sorting algorithms - can sort a stream of data, e.g., insertion sort

let arr=[1,7,2,5,4,6];


function op(arr){
    
    for(let i=1;i<arr.length;i++){
        let j=i-1;
        let key=arr[i];
        while(j>=0 && arr[j]>key){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            j--;
        }
        
    }
    
    
    return arr;
}
console.log(op(arr));






















