
// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// let head=new Node(10);

// let current=head;


// let i=20;
// while(i<=100){
// let newNode=new Node(i);
// current.next=newNode;

// newNode.prev=current;
// current=current.next;

// i +=10;

// };

// function op(head,k){

// let newnode=new Node(111);

// let current=head;

// while(current.next !==null){
//     current=current.next;
// }
//     current.next=newnode;
//     newnode.prev=current;

    
//     return head;
// }

// function print(head){
//     let current=head;
    
//     while(current !==null){
//         console.log(current.data);
//         current=current.next;
//     }
    
    
// }

// head=op(head,2);
// print(head);


//===================sorted slided array find target binary


// let arr=[4, 5, 6, 7, 0, 1, 2];

// function op(arr,tar){
//     let left=0;
//     let right=arr.length-1;
    
//     while(left<=right){
//         let mid=Math.floor((left+right)/2);
       
        
//         if(arr[mid]===tar)return mid;
        
//         if(arr[left]<arr[mid]){
//             if(arr[left]<=tar && arr[mid]>tar){
//                 right=mid-1;
//             }else{
//                 left=mid+1;
//                 console.log("this works:", left,right)
//             }
//         }else{
//             if(arr[right]>=tar && arr[mid]<tar){
//                 left=mid+1;
//             }else{
//                 right=mid-1;
//             }
//         }
//     }
// }

// console.log(op(arr,0))

//===================sorted slided array find minimum
let arr=[4, 5, 6, 7, 0, 1, 2];

function op(arr){
    let left=0;
    let right=arr.length-1;
    
  while(left<right){
      let mid=Math.floor((left+right)/2);
      
      if(arr[mid]>arr[right]){
        left=mid+1;
          
      }else if(arr[mid]<arr[right]){
          right=mid;
      }else{
          right--;
      }
  }
  
  return left
}

console.log(op(arr))

//========================sorted slided array find max

// let arr=[4, 5, 6, 7, 0, 1, 2];

// function op(arr){
//     let left=0;
//     let right=arr.length-1;
    
//   while(left<right){
//       let mid=Math.floor((left+right)/2);
      
//       if(arr[mid]>arr[right]){
//           left=mid+1;
//       }else if(arr[mid]<arr[right]){
//           right=mid;
//       }else{
//           right--;
//       }
//   }
  
//   return (left-1+arr.length)%arr.length;
// }

// console.log(op(arr))

//============================first and last occurance
// let arr=[4, 5, 6, 7,7, 7, 9, 12];

// function op(arr,tar){
//     let left=0;
//     let right=arr.length-1;
//     let index=0;
    
//     while(left<right){
//         let mid=Math.floor((left+right)/2);
        
//         if(arr[mid]===tar){
//             first=mid;
//             right=mid-1
//         }else if(arr[mid]>tar){
//             right=mid-1;
//         }else if(arr[mid]<tar){
//             left=mid+1;
//         }
//     }
    
    
//     left=0;
//     right=arr.length-1;
    
//         while(left<right){
//         let mid=Math.floor((left+right)/2);
//         console.log(mid)
        
//         if(arr[mid]===tar){
//             last=mid;
//             left=mid+1
//         }else if(arr[mid]>tar){
//             right=mid-1;
//         }else if(arr[mid]<tar){
//             left=mid+1;
//         }
//     }
    
    
//     return [first,last];

// }

// console.log(op(arr,7))

//=======================reversing a doubly linked list

// function reve(head){
//     let current=head;
//     let temp=null;
//     while(current !==null){
//         temp=current.prev;
//         current.prev=current.next;
//         current.next=temp;
        
//         current=current.prev;
        
//     }
    
    
//     return temp.prev;
// }

//===================finding squre root
// let arr=[0,1,2,3,1,4,4]


// function op(arr){
//     let left=0;
//     let right=arr.length-1;
    
//     while(left<right){
//         let mid=Math.floor((left+right)/2);
        
//         if(arr[mid]<arr[mid+1]){
//             left=mid+1;
//         }else{
//             right=mid;
//         }
//     }
    
//     return arr[left];
// }


// console.log(op(arr));


//==rotate  array  to the right in n times

// let arr = [1,2,3,4,5,6,7];

// function op(arr,k){
    
//     for(let i=0;i<k;i++){
//         let temp=arr[0];
//         for(let j=0;j<arr.length-1;j++){
//             arr[j]=arr[j+1];
//         }
//         arr[arr.length-1]=temp;
//     }
    
//     return arr;
// }

// console.log(op(arr,2));


///==============rotate  array  to the left in k times

// let arr = [1,2,3,4,5,6,7];

// function op(arr,k){
    
// for(let i=0;i<k;i++){
//     let temp=arr[arr.length-1];
//     console.log(temp);
    
    
//     for(let j=arr.length-1;j>0;j--){
//         arr[j]=arr[j-1];
//     }
//     arr[0]=temp;
// }
// return arr;
// }

// console.log(op(arr,2));

//=======================================find the target if it is not there then find the next biggest element ,if there is no biggerst eklement is ther then say there is no slots

// let arr = [1,2,3,4,6,7];

// function op(arr,tar){
   
//    let left=0;
//    let right=arr.length-1;
//    let ans=-1;
//    while(left<=right){
//        let mid=Math.floor((left+right)/2);
       
//        if(arr[mid]===tar){
//            return mid
//        }else if(arr[mid]<tar){
//            left=mid+1;
//        }else if(arr[mid]>tar){
//            ans=mid;
//            right=mid-1;
//        }
//    }
    
//     return ans===-1?"no slots":ans;

// }

// console.log(op(arr,8));


//========================================================================================================sum of nested aray

// let arr=[1, 2, [3, 4], [5, [6, 7]], 8];


// function op(arr,sum){
    
  
//     for(let ele of arr){
//         if(Array.isArray(ele)){
//          sum=op(ele,sum);
         
//         }else{
//             sum +=ele;
//         }
//     }
    
//     return sum;
// };

// console.log(op(arr,0));

//=========================flattening an array

// let arr=[1, 2, [3, 4], [5, [6, 7]], 8];


// function op(arr,narr){
    
    
//     for(let ele of arr){
//     if(Array.isArray(ele)){
 
//       op(ele,narr);
        
//     }else{
//         narr.push(ele);
//     }
//     }
// return narr;
// };

// console.log(op(arr,[]));
//============reversing array
// let arr=[1, 2, 3, 4, 5, 6, 7, 8];

// let left=0;
// let right=arr.length-1;
// function op(arr,left,right){
//     if(left>=right)return arr;
//     let temp=arr[left];
//     arr[left]=arr[right];
//     arr[right]=temp;
    
//     op(arr,left+1,right-1);
// return arr;
// };

// console.log(op(arr,left,right));

//=================reversing a string


// let str="amal";

// function op(str,i){
//     if(i>=str.length)return "";
    
//     return op(str,i+1)+str[i];
// };


// console.log(op(str,0));

//=============removing particaltra charecter from string

// let str="amal";

// function op(str,i,cha){
//   if(i>=str.length)return "";
  
//   if(str[i]==cha){
//       return op(str,i+1,cha)
//   }else{
//       return str[i]+op(str,i+1,cha);
//   }
  
  
// };


// console.log(op(str,0,"a"));

//========================removing vowals

// let str="amal";
// let vow="aeiou";
// function op(str,i,vow){
//   if(i>=str.length)return "";
  
//   if(vow.includes(str[i])){
//       return op(str,i+1,vow)
//   }else{
//       return str[i]+op(str,i+1,vow);
//   }
  
  
// };


// console.log(op(str,0,vow));

//==================reversing all sentenece
// let str="hi my name is amal";


// function op(str){
    
//     let result="";
//     let word="";
//     for(let i=0;i<str.length;i++){
//         if(str[i] !==""){
//             word +=str[i];
//         }else{
//             let rev="";
//             for(let j=word.length-1;j>=0;j--){
//                 rev.push(word[j]);
//             }
            
//             word="";
//             result +=rev+" ";
//         }
//     }
    
//     for(let j=word.length-1;j>=0;j--){
//         result +=word[j]
//     }
    
//     return result;
// };


// console.log(op(str));
