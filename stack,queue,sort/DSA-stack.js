//====================Valid parentheses using stack

// let str="{[(])]}"
// function op(str){

//     let stack=[];
//     let obj={
//     "]":"[",
//     "}":"{",
//     ")":"("  
//   }

// for(let sy of str){
//     if(sy in obj){
//         let top=stack.pop();

//         if(top !==obj[sy]){
//             return false
//         }
//     }else{
//         stack.push(sy);
//     }
// }

// return stack.length ===0;

// };

// console.log(op(str));

//===========================Implement a stack with push, pop, and get max in O(1) time (MinStack);


// class Sk{
//     constructor(){
//         this.stack=[];
//         this.maxstack=[];
//     };


//     push(val){
//      this.stack.push(val);
//      if(this.maxstack.length ===0){
//         this.maxstack.push(val);
        

//      }else{
//         let currmax=this.maxstack[this.maxstack.length-1];

//         this.maxstack.push(Math.min(val,currmax));
//      }
//     }


//     pop(){
//         if(this.stack.length===0)return "there is no vlaues";

//         this.maxstack.pop();
//         return this.stack.pop();
//     };



//     getmax(){
//         if(this.maxstack.length===0)return "no values";

//         return this.maxstack[this.maxstack.length-1];
//     };

//     display(){
//         console.log(this.stack);
//         console.log(this.maxstack)
//     }

// };


// let stk=new Sk();

// stk.push(10)
// stk.push(2)
// stk.push(20)
// stk.push(1)
// stk.push(30)


// stk.display();

//================Implement a stack using a linked list

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;

//     }
// };


// class ssl{
//     constructor(){
//         this.top=null;
//     }


//     push(data){
//         let newNode=new Node(data);

//         newNode.next=this.top;
//         this.top=newNode;
//     };


//     pop(){
//         if(this.top===null)return "there is no stack"
//         let removed=this.top;

//         this.top=this.top.next;
//         return removed;
//     }


//     peek(){
//         if(this.top===null)return "no stack"

//         return this.top.data;
//         };


//         display(){
//             let curr=this.top;
//             while(curr !==null){
//                 console.log(curr.data);
//                 curr=curr.next;
//             }
//         }
// }


// let stack=new ssl();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// stack.pop();
// console.log(stack.peek());



//========================deleting the middle element


// let stack=[1,2,3,4,5,6];



// function mddl(stack){
//     let n=stack.length;
//     let k=Math.floor(n/2);

//     deleteM(stack,k);
// };



// function deleteM(stack,k){

// if(k===0){
//     stack.pop();
//     return ;
// }

// let temp=stack.pop();

// deleteM(stack,k-1);
//  stack.push(temp);

// }


// mddl(stack);

// console.log(stack);

//===============================revrse a stack using recursion






// let stack=[1,2,3,4];


// function insertatbottom(stack,val){

//     if(stack.length===0){
//         stack.push(val);
//         return ;

//     };

//     let temp=stack.pop();
//     insertatbottom(stack,val);

//     stack.push(temp);
// }








// function reverstack(stack){
//     if(stack.length===0)return ;

//     let temp=stack.pop();
//     reverstack(stack);
//     insertatbottom(stack,temp);
// }

// reverstack(stack);

// console.log(stack);

// ////====================Reverse a string using a stack


// let str="amal";



// function reve(str){
//     let stack=[];

//     for(let cha of str){
//         stack.push(cha);
//     }

//     let rev="";

//     while(stack.length>0){
//         rev +=stack.pop();
//     }

//     return rev;
// }


// console.log(reve(str));



//===================sort the stack 

let stack=[2,3,1,4,5];



function op(stack){
    let tempstack=[];

    while(stack.length>0){
        let temp=stack.pop();
        while(tempstack.length>0 && tempstack[tempstack.length-1]>temp){
            stack.push(tempstack.pop());
        }
        tempstack.push(temp);
    }

    return tempstack;
};

console.log(op(stack));