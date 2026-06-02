// let arr=[1,4,2,3,6,5,7,9,8];


// function insert(arr){
    
//     for(let i=1;i<arr.length;i++){
//         let key=arr[i];
//         let j=i-1;
        
//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j];
//             j--;
//         }
        
//         arr[j+1]=key;
//     }
    
//     return arr;
// }

// console.log(insert(arr));

//=====================Check if a string is a palindrome using a stack


// let str="ama";

// function op(str){
//     let temp=[];
    
//     for(let cha of str){
//         temp.push(cha);
//     }
    
//     let rev="";
    
//     while(temp.length>0){
//         rev +=temp.pop()
//     }
    
    
//     return str===rev;
    
// }

// console.log(op(str));

//====================Convert stack into a queue
// class Stoq{
//     constructor(){
//         this.s1=[];
//         this.s2=[];
//     }
    
//     enqueue(x){
//         this.s1.push(x)
//     }
    
//     dequeue(){
//         if(this.s2.length===0){
//             while(this.s1.length>0){
//                 this.s2.push(this.s1.pop());
//             }
//         }
        
        
//         return this.s2.pop();
//     }
    
//     peek(){
//             if(this.s2.length===0){
//             while(this.s1.length>0){
//                 this.s2.push(this.s1.pop());
//             }
//         }
        
//         return this.s2[this.s2.length-1];
//     }
    
//     display(){
    
//         let result=[];
//         for(let i=this.s2.length-1;i>=0;i--){
//             result.push(this.s2[i]);
//         }
        
//         for(let i=0;i<this.s1.length;i++){
//             result.push(this.s1[i]);
//         }
        
        
//         return result;
//     }
// }






// let s=new Stoq();

// s.enqueue(1);
// s.enqueue(2);
// s.enqueue(3);
// s.enqueue(4);
// s.enqueue(5);
// s.dequeue();

// console.log(s.display());





//==============================bubble sort

// let arr=[1,3,2,5,4,7,6];


// function op(arr){
//     for(let i=0;i<arr.length;i++){
//         let sorted=false;
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                
//                 sorted=true;
//             }
//         }
        
//         if(!sorted) break;
//     }
    
//     return arr;
// }


// console.log(op(arr));

//=================Merge sort: implementation, time complexity, why preferred for linked lists



// let arr=[1,3,2,5,4,7,6];


// function op(arr,level=0){
    
//     console.log("level->",level,"arr is->",arr)
    
//     if(arr.length<=1)return arr;
//     let mid=Math.floor(arr.length/2);
    
//     let left=op(arr.slice(0,mid),level+1);
//     let right=op(arr.slice(mid),level+1);
    
    
//     let merged=sort(left,right);
//     console.log("level->",level,"after merg->",merged)
//     return merged;
//     }
    

// function sort(left,right){
//     let i=0;
//     let j=0;
//     let result=[];
    
//     while(i<left.length && j<right.length){
//         if(left[i]<=right[j]){
//             result.push(left[i]);
//             i++;
//         }else{
//             result.push(right[j]);
//             j++;
//         }
//     }
    
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

// console.log(op(arr));
    
//===============Delete a specific node from a stack







// class Stack{
//     constructor(){
//         this.stack=[];
//     }
    
//     push(x){
//         this.stack.push(x);
//     }
    
//     pop(){
//         if(this.isEmpty())return null;
//         return this.stack.pop();
//     }
    
//     peek(){
//         return this.stack[this.stack.length-1];
//     }
    
    
//     display(){
//         console.log(this.stack.join("<-"));
//     }
    
//     isEmpty(){
//         return this.stack.length===0;
//     }

// }



// function deletespecific(stack,tar){
    
//     let temp=new Stack();
//     let deleted=false;
    
//     while(!stack.isEmpty()){
//         let top=stack.pop();
      
        
//         if(top===tar && !deleted){
          
//             deleted=true;
//             continue;
//         }
//         temp.push(top);
        
//     }
    
//     while(!temp.isEmpty()){
//         stack.push(temp.pop());
//     }
    
    
//     return stack;
// }



// let s=new Stack();

// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)
// s.display();

// deletespecific(s,2);

// s.display();








//========Implement a stack that rejects duplicate values



// class Stack{
//     constructor(){
//         this.s1=[];
//         this.set=new Set();
//     }
    
//     push(x){
        
//         if(this.set.has(x)){
//           console.log("this is a duplicate -",x);
//           return;
//         }
        
//         this.s1.push(x);
//         this.set.add(x)
        
        
//     }
    
//     pop(){
        
//         if(this.isEmpty())return null;
//         let removed=this.s1.pop();
//         this.set.delete(removed);
        
//         return removed;
//     }
    
    
    
//     peek(){
//         if(this.isEmpty())return null;
//         return this.s1[this.s1.length-1];
//     }
    
//     isEmpty(){
//         return this.s1.length===0;
//     }
    
//     display(){
//         console.log(this.s1.join("<-"))
//     }
// }








// let s=new  Stack();
// s.push(1);
// s.push(2);
// s.push(2);
// s.push(3);

// s.display();






//=================Implement a stack using a linked list


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }
// }


// class sll{
//     constructor(){
//         this.top=null
//     }
    
//     push(data){
//         let newNode=new Node(data);
       
       
//       newNode.next=this.top;
//       this.top=newNode;
        
        
//     }
    
//     pop(){
        
//         if(this.isEmpty()){
//             console.log("stack is empty");
//             return null;
//         }
//         let removed=this.top;
//         this.top=this.top.next;
        
//         return removed;
//     }
    
    
//     peek(){
//         return this.top.data;
//     }
    
//     isEmpty(){
//         return this.top===null;
//     }
    
//     display(){
//         let curr=this.top;
        
//         while(curr !==null){
//             console.log(curr.data);
//             curr=curr.next;
//         }
//     }
// }










// let list=new sll();

// list.push(1)
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.pop();

// list.display();





//=======Implement a stack using a queue

// class q{
//   constructor(){
//   this.q=[]
//   }
   
//   push(x){
//       this.q.push(x);
       
//   }
   
//   shift(){
       
//       if(this.isEmpty())return null;
//       return this.q.shift()
//   }
   
//   isEmpty(){
//       return this.q.length===0;
//   }
   
//   display(){
//       console.log(this.q.join("<-"))
       
       
//   }
    
// };

// let qu=new q();

// qu.push(1);
// qu.push(2);
// qu.push(3);
// qu.push(4);
// qu.push(5);
// qu.shift();

// qu.display();


//==============Implement a stack with push, pop, and get max in O(1) time (MinStack)


// // class Stack{
// //     constructor(){
// //         this.stack=[];
// //         this.max=[];
// //     }
    
// //     push(x){
// //         this.stack.push(x);
        
// //         if(this.max.length===0 || x>this.max[this.max.length-1]){
// //             this.max.push(x)
// //         }
// //     }
    
    
// //     pop(){
// //         let removed=this.stack.pop()
// //         if(removed===this.max[this.max.length-1]){
// //             this.max.pop();
// //         }
        
// //         return removed;
// //     }
    
// //     getmax(){
// //         return this.max[this.max.length-1];
// //         // console.log(this.max[this.s])
// //     }
    
    
// //     size(){
// //         return this.max.length;
// //     }
// // }


// // let s=new Stack();

// // s.push(1);
// // s.push(5);
// // s.push(-1);
// // s.push(16);


// // console.log(s.getmax())

// //==========Remove middle element from a stack

// class Stack{
//     constructor(){
//         this.stack=[];
//         this.temp=[];
        
//     }
    
//     push(x){
//         this.stack.push(x);
//     }
    
//     deletemid(){
//         let mid=Math.floor(this.stack.length/2);
//         let n=this.stack.length
        
//       for(let i=0;i<n;i++){
//           let val=this.stack.pop();
//           if(i !==mid){
            
//           this.temp.push(val);
//           }
          
         
//       }
//          console.log(this.temp);
       
//       while(this.temp.length>0){
//           this.stack.push(this.temp.pop());
//       }
//     }
    
//     display(){
//         console.log(this.stack.join("<-"));
//     }
    
// }


// let s=new Stack();

// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)
// s.display()


// s.deletemid();
// s.display()


//==============Circular queue implementation

class sq{
    constructor(size){
        this.queue=new Array(size);
        this.front=-1;
        this.rear=-1;
        this.size=size;
    }
    
    enqueue(x){
        if(this.isFull()){
            console.log("queue is full");
            
            return;
        }
        
        if(this.isEmpty()){
            this.front=0
        };
        this.rear=(this.rear+1)%this.size;
        this.queue[this.rear]=x;
        
    }
    
    
    dequeue(){
        if(this.isEmpty){
            console.log("queue is empty");
            return;
        }
        
        let removed=this.queue[this.front];
        if(this.front===this.rear){
            this.front=this.rear=-1;
        }
        this.front=(this.front+1)%this.size;
        
        return removed;
        
    }
    
    isEmpty(){
        return this.front=-1;
    }
    
    display(){
        console.log(this.queue.join("<-"))
    }
    
    isFull(){
        return (this.rear+1)%this.size===this.front
    }
    
}

let queue=new sq(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.display();
// 



// let arr=[1,4,2,3,6,5,7,9,8];


// function insert(arr){
    
//     for(let i=1;i<arr.length;i++){
//         let key=arr[i];
//         let j=i-1;
        
//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j];
//             j--;
//         }
        
//         arr[j+1]=key;
//     }
    
//     return arr;
// }

// console.log(insert(arr));

//=====================Check if a string is a palindrome using a stack


// let str="ama";

// function op(str){
//     let temp=[];
    
//     for(let cha of str){
//         temp.push(cha);
//     }
    
//     let rev="";
    
//     while(temp.length>0){
//         rev +=temp.pop()
//     }
    
    
//     return str===rev;
    
// }

// console.log(op(str));

//====================Convert stack into a queue
// class Stoq{
//     constructor(){
//         this.s1=[];
//         this.s2=[];
//     }
    
//     enqueue(x){
//         this.s1.push(x)
//     }
    
//     dequeue(){
//         if(this.s2.length===0){
//             while(this.s1.length>0){
//                 this.s2.push(this.s1.pop());
//             }
//         }
        
        
//         return this.s2.pop();
//     }
    
//     peek(){
//             if(this.s2.length===0){
//             while(this.s1.length>0){
//                 this.s2.push(this.s1.pop());
//             }
//         }
        
//         return this.s2[this.s2.length-1];
//     }
    
//     display(){
    
//         let result=[];
//         for(let i=this.s2.length-1;i>=0;i--){
//             result.push(this.s2[i]);
//         }
        
//         for(let i=0;i<this.s1.length;i++){
//             result.push(this.s1[i]);
//         }
        
        
//         return result;
//     }
// }






// let s=new Stoq();

// s.enqueue(1);
// s.enqueue(2);
// s.enqueue(3);
// s.enqueue(4);
// s.enqueue(5);
// s.dequeue();

// console.log(s.display());





//==============================bubble sort

// let arr=[1,3,2,5,4,7,6];


// function op(arr){
//     for(let i=0;i<arr.length;i++){
//         let sorted=false;
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                
//                 sorted=true;
//             }
//         }
        
//         if(!sorted) break;
//     }
    
//     return arr;
// }


// console.log(op(arr));

//=================Merge sort: implementation, time complexity, why preferred for linked lists



// let arr=[1,3,2,5,4,7,6];


// function op(arr,level=0){
    
//     console.log("level->",level,"arr is->",arr)
    
//     if(arr.length<=1)return arr;
//     let mid=Math.floor(arr.length/2);
    
//     let left=op(arr.slice(0,mid),level+1);
//     let right=op(arr.slice(mid),level+1);
    
    
//     let merged=sort(left,right);
//     console.log("level->",level,"after merg->",merged)
//     return merged;
//     }
    

// function sort(left,right){
//     let i=0;
//     let j=0;
//     let result=[];
    
//     while(i<left.length && j<right.length){
//         if(left[i]<=right[j]){
//             result.push(left[i]);
//             i++;
//         }else{
//             result.push(right[j]);
//             j++;
//         }
//     }
    
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

// console.log(op(arr));
    
//===============Delete a specific node from a stack







// class Stack{
//     constructor(){
//         this.stack=[];
//     }
    
//     push(x){
//         this.stack.push(x);
//     }
    
//     pop(){
//         if(this.isEmpty())return null;
//         return this.stack.pop();
//     }
    
//     peek(){
//         return this.stack[this.stack.length-1];
//     }
    
    
//     display(){
//         console.log(this.stack.join("<-"));
//     }
    
//     isEmpty(){
//         return this.stack.length===0;
//     }

// }



// function deletespecific(stack,tar){
    
//     let temp=new Stack();
//     let deleted=false;
    
//     while(!stack.isEmpty()){
//         let top=stack.pop();
      
        
//         if(top===tar && !deleted){
          
//             deleted=true;
//             continue;
//         }
//         temp.push(top);
        
//     }
    
//     while(!temp.isEmpty()){
//         stack.push(temp.pop());
//     }
    
    
//     return stack;
// }



// let s=new Stack();

// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)
// s.display();

// deletespecific(s,2);

// s.display();








//========Implement a stack that rejects duplicate values



// class Stack{
//     constructor(){
//         this.s1=[];
//         this.set=new Set();
//     }
    
//     push(x){
        
//         if(this.set.has(x)){
//           console.log("this is a duplicate -",x);
//           return;
//         }
        
//         this.s1.push(x);
//         this.set.add(x)
        
        
//     }
    
//     pop(){
        
//         if(this.isEmpty())return null;
//         let removed=this.s1.pop();
//         this.set.delete(removed);
        
//         return removed;
//     }
    
    
    
//     peek(){
//         if(this.isEmpty())return null;
//         return this.s1[this.s1.length-1];
//     }
    
//     isEmpty(){
//         return this.s1.length===0;
//     }
    
//     display(){
//         console.log(this.s1.join("<-"))
//     }
// }








// let s=new  Stack();
// s.push(1);
// s.push(2);
// s.push(2);
// s.push(3);

// s.display();






//=================Implement a stack using a linked list


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }
// }


// class sll{
//     constructor(){
//         this.top=null
//     }
    
//     push(data){
//         let newNode=new Node(data);
       
       
//       newNode.next=this.top;
//       this.top=newNode;
        
        
//     }
    
//     pop(){
        
//         if(this.isEmpty()){
//             console.log("stack is empty");
//             return null;
//         }
//         let removed=this.top;
//         this.top=this.top.next;
        
//         return removed;
//     }
    
    
//     peek(){
//         return this.top.data;
//     }
    
//     isEmpty(){
//         return this.top===null;
//     }
    
//     display(){
//         let curr=this.top;
        
//         while(curr !==null){
//             console.log(curr.data);
//             curr=curr.next;
//         }
//     }
// }










// let list=new sll();

// list.push(1)
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.pop();

// list.display();





//=======Implement a stack using a queue

// class q{
//   constructor(){
//   this.q=[]
//   }
   
//   push(x){
//       this.q.push(x);
       
//   }
   
//   shift(){
       
//       if(this.isEmpty())return null;
//       return this.q.shift()
//   }
   
//   isEmpty(){
//       return this.q.length===0;
//   }
   
//   display(){
//       console.log(this.q.join("<-"))
       
       
//   }
    
// };

// let qu=new q();

// qu.push(1);
// qu.push(2);
// qu.push(3);
// qu.push(4);
// qu.push(5);
// qu.shift();

// qu.display();


//==============Implement a stack with push, pop, and get max in O(1) time (MinStack)


// // class Stack{
// //     constructor(){
// //         this.stack=[];
// //         this.max=[];
// //     }
    
// //     push(x){
// //         this.stack.push(x);
        
// //         if(this.max.length===0 || x>this.max[this.max.length-1]){
// //             this.max.push(x)
// //         }
// //     }
    
    
// //     pop(){
// //         let removed=this.stack.pop()
// //         if(removed===this.max[this.max.length-1]){
// //             this.max.pop();
// //         }
        
// //         return removed;
// //     }
    
// //     getmax(){
// //         return this.max[this.max.length-1];
// //         // console.log(this.max[this.s])
// //     }
    
    
// //     size(){
// //         return this.max.length;
// //     }
// // }


// // let s=new Stack();

// // s.push(1);
// // s.push(5);
// // s.push(-1);
// // s.push(16);


// // console.log(s.getmax())

// //==========Remove middle element from a stack

// class Stack{
//     constructor(){
//         this.stack=[];
//         this.temp=[];
        
//     }
    
//     push(x){
//         this.stack.push(x);
//     }
    
//     deletemid(){
//         let mid=Math.floor(this.stack.length/2);
//         let n=this.stack.length
        
//       for(let i=0;i<n;i++){
//           let val=this.stack.pop();
//           if(i !==mid){
            
//           this.temp.push(val);
//           }
          
         
//       }
//          console.log(this.temp);
       
//       while(this.temp.length>0){
//           this.stack.push(this.temp.pop());
//       }
//     }
    
//     display(){
//         console.log(this.stack.join("<-"));
//     }
    
// }


// let s=new Stack();

// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)
// s.display()


// // s.deletemid();
// // s.display()


// //==============Circular queue implementation

// class sq{
//     constructor(size){
//         this.queue=new Array(size);
//         this.front=-1;
//         this.rear=-1;
//         this.size=size;
//     }
    
//     enqueue(x){
//         if(this.isFull()){
//             console.log("queue is full");
            
//             return;
//         }
        
//         if(this.isEmpty()){
//             this.front=0
//         };
//         this.rear=(this.rear+1)%this.size;
//         this.queue[this.rear]=x;
        
//     }
    
    
//     dequeue(){
//         if(this.isEmpty){
//             console.log("queue is empty");
//             return;
//         }
        
//         let removed=this.queue[this.front];
//         if(this.front===this.rear){
//             this.front=this.rear=-1;
//         }
//         this.front=(this.front+1)%this.size;
        
//         return removed;
        
//     }
    
//     isEmpty(){
//         return this.front=-1;
//     }
    
//     display(){
//         console.log(this.queue.join("<-"))
//     }
    
//     isFull(){
//         return (this.rear+1)%this.size===this.front
//     }
    
// }

// let queue=new sq(5);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// queue.display();


//===============Convert queue into a stack


// class Qtos{
//     constructor(){
//         this.q1=[]
//         this.q2=[]
//     }
    
//     enqueue(x){
//         this.q1.push(x)
//     }
    
//     dequeue(){
        
//         if(this.isEmpty()){
//             console.log("empty");
            
//             return;
//         }
//         if(this.q2.length===0){
//             while(this.q1.length>0){
//                 this.q2.push(this.q1.pop())
//             }
//         }
//         return this.q2.shift();
//     }
    
//     isEmpty(){
//         return this.q1.length===0;
//     }
    
    
//     display(){
//         let result=[];
//         for(let i=this.q2.length-1;i>=0;i--){
//             result.push(this.q2[i])
//         }
        
//         for(let i=0;i<this.q1.length;i++){
//             result.push(this.q1[i])
//         }
        
//         console.log(result.join("<-"))
//     }
    
    
    
    
// }

// let q=new Qtos();

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// q.enqueue(5);

// q.display()

// q.dequeue()
// q.display()







//========


// class QtoS{
//     constructor(){
//         this.q=[]
//     }
    
//     push(x){
//         this.q.push(x);
//       for(let i=1;i<this.q.length;i++){
//             this.q.push(this.q.shift());
//       }
//     }
    
//     pop(){
//         if(this.isEmpty()){
//             console.log("empty");
//             return ;
//         }
        
//         return this.q.shift();
//     }
    
    
//     display(){
        
//         console.log(this.q.join("<-"))
//     }
    
    
//     isEmpty(){
//         return this.q.length===0;
//     }
// }

// let q=new QtoS();

// q.push(1)
// q.push(2)
// q.push(3)
// q.push(4)
// q.push(5)


// q.display();


// q.pop();
// q.display();






//=================Double-ended queue (deque) implementation


// class dq{
//     constructor(){
//         this.q=[];
//     }
    
//     addrear(x){
//         this.q.push(x)
//     }
    
//     addfront(x){
//         this.q.unshift(x)
//     }
    
//     remfront(){
//         if(this.isEmpty()){
//             console.log("it is empty");
//             return;
//         }
        
//         return this.q.shift();
//     }
    
    
//     remrear(){
//             if(this.isEmpty()){
//             console.log("it is empty");
//             return;
//         }
        
//         return this.q.pop();
//     };
    
//     display(){
//         console.log(this.q.join("<-"));
        
        
//     }
    
//     isEmpty(){
//         return this.q.length===0
//     }
// }


// let q=new dq();

// q.addrear(1);
// q.addrear(2);
// q.addfront(3);
// q.display()
// q.remrear();
// q.display()


//=============Implement a queue using a linked list

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }


// class sll{
//     constructor(){
//         this.front=null;
//         this.rear=null;
        
//     }
    
    
//     insert(data){
//         let newNode=new Node(data);
        
//         if(this.rear===null){
//             this.front=this.rear=newNode;
//         }else{
//             this.rear.next=newNode;
//             this.rear=newNode;
//         }
        
        
//     }
    
    
//     remove(){
//         if(this.front===null){
//           console.log("empty list")
//             return;
//         } 
        
//         if(this.front===this.rear){
//             this.front=this.rear=null;
//         }else{
//         let removed=this.front.data;
//         this.front=this.front.next;
//         return removed;
//         }
//     }
    
    
//     print(){
//         let curr=this.front;
        
//         while(curr !==null){
//             console.log(curr.data);
//             curr=curr.next;
//         }
//     }
    
    
// }



// let list=new sll();

// list.insert(1)
// list.insert(2)
// list.insert(3)
// list.insert(4)
// list.insert(5)

// list.print();

// list.remove();

// list.print();

//=================Implement a queue using a stack


// class qstack{
//     constructor(){
//          this.q1=[];
//          this.q2=[];
//     }
    
//       insert(x){
//           this.q1.push(x);
       
   
       
       
          
//       }
      
//       pop(){
//           if(this.isEmpty()){
//               console.log("this is empty");
//           return;    
//           }
          
//               if(this.q2.length===0){
//           while(this.q1.length>0){
//               this.q2.push(this.q1.pop())
//           }
//       }
          
//           return this.q2.pop();
          
//       }
      
      
      
//      display(){
//          let result=[];
//          for(let i=this.q2.length-1;i>=0;i--){
//             result.push(this.q2[i]) 
//          }
         
//          for(let i=0;i<this.q1.length;i++){
//             result.push(this.q1[i])
//          }
         
//          console.log(result);
//      }
     
//      isEmpty(){
//          return this.q1.length===0;
//      }
// }


// let q=new qstack();

// q.insert(1)
// q.insert(2)
// q.insert(3)
// q.insert(4)
// q.insert(5)
// q.display();
// q.pop();

// q.display();







//=====Reverse a queue
// let q=[1,2,3,4,5];
// function rev(q){
    
//     let stack=[];

// while(q.length>0){
//     stack.push(q.shift())
// }    
    
//     while(stack.length>0){
//         q.push(stack.pop())
//     }
    
//     return q;
// }

// console.log(rev(q))

//==================quick sort

let arr=[1,3,2,7,8,4,6];


function quicksort(arr,low=0,high=arr.length-1){
    if(low<high){
        
        let pivotIndex=partition(arr,low,high);
        
        quicksort(arr,low,pivotIndex-1);
        quicksort(arr,pivotIndex+1,high)
    }
    
    return arr;
    
}

function partition(arr,low,high){
    let pivot=arr[high];
    let j=low-1;
    
    for(let i=low;i<high;i++){
        if(arr[i]<=pivot){
            j++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
            
        }
    }
    
    [arr[j+1],arr[high]]=[arr[high],arr[j+1]];
    
    return j+1;
    
}





console.log(quicksort(arr))



























