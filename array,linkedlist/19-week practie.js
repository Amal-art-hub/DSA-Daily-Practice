//=============insertion sorting
let arr=[2,3,4,1,6,7];


function op(arr){
    for(let i=1;i<arr.length;i++){
        let key =arr[i];
        let j=i-1;
        
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
       
          
            j--;
            
            
        }
        arr[j+1]=key;
    }
    return arr;
};

console.log(op(arr));

//==============implement circular queue or Circular queue with maximum length
class Squeue{
    constructor(size){
        this.size=size;
        this.queue=new Array(size);
        this.front=-1;
        this.rear=-1;
    }
    
    
    isEmpty(){
        return this.front===-1;
    };
    
    isFull(){
        return (this.rear+1)%this.size===this.front;
    };
    
    enqueue(val){
        if(this.isFull()){
            console.log("no space");
            return null;
        };
        
        if(this.isEmpty()){
            this.front=0;
        }
        
        
        this.rear=(this.rear+1)%this.size;
        this.queue[this.rear]=val;
    };
    
    
    dequeue(){
        if(this.isEmpty()){
            console.log("empty");
            return null;
        }
        let value=this.queue[this.front];
        if(this.rear===this.front){
            this.front=-1;
            this.rear=-1;
        }else{
            this.front=(this.front+1)%this.size;
            
        }
        
        return value;
    }
    
    peek(){
        return this.queue[this.front];
        
    };
    
    
    display(){
        if(this.isEmpty()){
            console.log("empty");
            return null;
        };
        let i=this.front;
        let result=[];
        
        while(true){
            result.push(this.queue[i]);
            if(i===this.rear)break;
            i=(i+1)%this.size;
        }
        
        console.log(result);
    }
    

    
}


let que=new Squeue(5);
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.enqueue(40);
que.enqueue(50);

console.log(que.peek())


que.display();
que.dequeue();
que.display();


//====================bubble sorting


// let arr=[1,3,2,4,5,6];


// function op(arr){
//     let n=arr.length;
    
//     for(let i=0;i<n-1;i++){
//         let sorted=false;
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//                 sorted=true;
//             }
//         }
//         if(!sorted)break;
//     }
//     return arr;
// }


// console.log(op(arr));



//====================merge sort


let arr=[1,2,5,6,4,7,3];

function op(arr){
    let n=arr.length;
    if(n<=1)return arr;
    let mid=Math.floor(n/2);
    let left=op(arr.slice(0,mid));
    // console.log(left);
    let right=op(arr.slice(mid));
    // console.log(right);
    
    
    // console.log(merge(left,right))
    return merge(left,right);
    
    
};


function merge(left,right){
    let result=[];
    let i=0;
    let j=0;
    
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++;
        }else{
            result.push(right[j])
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
};


//==========sorting lisked list using merge sort

class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}


class ssl{
    constructor(){
        this.head=null
    }
    
    
    insert(data){
         let newNode=new Node(data);
        if(this.head ===null){
           this.head=newNode;
           return;
        }
        
        let curr=this.head;
        
        while(curr.next !==null){
            curr=curr.next
        };
        
        curr.next=newNode;
       
    }
    
    
    sort(head){
    this.mergesort(this.head);
        
    }
    
    
    mergesort(head){
        
        
        if(head ===null || head.next ===null)return head;
        let mid=this.middle(head);
        let righthead=mid.next;
        
        mid.next=null;
        
        let left=this.mergesort(head);
        let right=this.mergesort(righthead);
        
        return this.merge(left,right)
    };
    
    
    
    merge(l1,l2){
        let dummy=new Node(0);
        let tail=dummy;
        
        while(l1 !==null && l2 !==null){
        if(l1.data<l2.data){
            tail.next=l1;
            l1=l1.next;
        }else{
            tail.next=l2;
            l2=l2.next;
        }
        tail=tail.next;
        }
        
        tail.next=l1||l2;
        
        return dummy.next;
    }
    
    
    middle(head){
        let slow=head;
        let fast=head.next;
        
        while(fast !==null && fast.next !==null){
            slow=slow.next;
            fast=fast.next.next;
        }
        
        return slow;
    }
    
    
    print(){
        let curr=this.head;
        
        while(curr !==null){
            console.log(curr.data);
            curr=curr.next;
        }
    }
    
    
    
}



let list=new ssl();

list.insert(1);
list.insert(3);
list.insert(5);
list.insert(2);
list.insert(4);



list.sort()
list.print()


//===========convert queue to stack
class qtos{
    constructor(){
        this.q=[];
    }
    
    
    push(x){
        this.q.push(x);
        
        for(let i=0;i<this.q.length-1;i++){
            this.q.push(this.q.shift());
            
        }
    }
    
    pop(){
        if(this.isEmpty())return "is empty";
        
        return this.q.shift();
    }
    
    isEmpty(){
        return this.q.length===0;
    }
    
    display(){
       console.log(this.q);
        
    }
}


let q=new qtos();

q.push(1)
q.push(2)
q.push(3)
q.push(4)


q.display();

q.pop()
q.display();

//=====================quick sort

let arr=[1,2,4,3,6,5,8,7];


function quicksort(arr,low=0,high=arr.length-1){
    
    if(low<high){
        let pivotIndex=partition(arr,low,high);
        
        quicksort(arr,low,pivotIndex-1);
        quicksort(arr,pivotIndex+1,high);
    }
    
    return arr;
}


function partition(arr,low,high){
    let pivot=arr[high];
    let i=low-1;
    
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            [arr[j],arr[i]]=[arr[i],arr[j]];
        }
         
    
        
    }
     [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    
    return i+1;
  
    
}


//====================check palindrome using stack




let str="Amal";


function op(str){
    let stack=[];
    
    for(let i=0;i<str.length;i++){
        stack.push(str[i].toLowerCase());
    }
    
    for(let i=0;i<str.length;i++){
        let cha=stack.pop();
        if(cha !==str[i].toLowerCase()){
            return "not palindrome";
        }
    }
    
    return "palindrome";
}

console.log(op(str))

//===============selection sorting


let arr=[1,3,2,5,4,7,6];


function op(arr){
    let n=arr.length;
    
    for(let i=0;i<n-1;i++){
        let minIndex=i
        
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    
    return arr;
};

console.log(op(arr));

//==============Sort an array alphabetically using QuickSort
let arr=["amal","rahul","binoy","sachin"];


function quicksort(arr,low=0,high=arr.length-1){
    
    if(low<high){
        
      
        let pivotIndex=partition(arr,low,high);
        
        quicksort(arr,low,pivotIndex-1);
        quicksort(arr,pivotIndex+1,high);
        
    }
    
    return arr;
}


function partition(arr,low,high){
    
    
    let pivot=arr[high];
    let i=low-1;

    
    for(let j=low;j<high;j++){
        if(arr[j].localeCompare(pivot)<0){
            i++;
            [arr[j],arr[i]]=[arr[i],arr[j]];
            
             
        }
    };
    
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
     
    
    return i+1;
    
};


console.log(quicksort(arr));

//===================implementing queue in linked list


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Que{
    constructor(){
        this.front=null;
        this.rear=null;
    }
    
    enqueue(data){
        let newNode=new Node(data);
        
        if(this.rear===null){
            this.front=this.rear=newNode;
            return;
        }
        
        this.rear.next=newNode;
        this.rear=newNode;
    }
    
    
    dequeue(){
        if(this.isEmpty())return "empty";
        
        let temp=this.front;
        this.front=this.front.next;
        
        if(this.front===null){
            this.front=null;
            this.rear=null;
        }
        
        return temp.data;
    }
    
    
    display(){
        let curr=this.front;
        while(curr !==null){
            console.log(curr.data);
            curr=curr.next;
        }
    }
    
    isEmpty(){
        return this.front===null;
    }
}


let q=new Que();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)





q.dequeue();

q.display();
//==========================sort alphabetic arra  using merge sort
let arr=["amal","rahul","vineeth","sanjay"];


function mergesort(arr){
    let n=arr.length;
    if(n<=1)return arr;
    let mid=Math.floor(n/2);
    let left=mergesort(arr.slice(0,mid));
    let right=mergesort(arr.slice(mid));
    
    return sort(left,right);
};


function sort(left ,right){
    
    let result=[];
    let i=0;
    let j=0;
    
    while(i<left.length && j<right.length){
        if(left[i].localeCompare(right[j])<0){
            result.push(left[i]);
            i++;
            
        }else{
            result.push(right[j])
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
    
}

console.log(mergesort(arr));




//==========practise
//=====
// //Find the first non-repeating character in a string using a hash table

// let str="amal";

// function op(str){
    
//     let obj={};
    
//     for(let cha of str){
//         obj[cha]=(obj[cha]||0)+1;
//     };
    
//     for(let cha of str){
//         if(obj[cha]===1){
//             return cha
//         }
//     }
    
//     return "no non repeating charcter"
// };


// console.log(op(str));
//======Find the frequency of characters in a string (e.g., 'Mississippi')


// let str="Mississippi";


// function op(str){
    
//     let obj={};
//     for(let cha of str){
//         obj[cha]=(obj[cha]||0)+1;
//     }
    
//     return obj;
// }

// console.log(op(str))

//======================Find the least occurred number using a hash table


// let arr= [1, 2, 2, 3, 3, 3];


// function op(arr){
//     let obj={};
//     let leastnum=0;
//     let leastcount=Infinity;
    
//     for(let num of arr){
//         obj[num]=(obj[num]||0)+1;
        
//     }
    
//     for(let num of arr){
//         if(obj[num]<leastcount){
//             leastnum=num;
//             leastcount=obj[num];
//         }
//     }
    
//     return leastnum;
// }


// console.log(op(arr));



//======================Find the uncommon elements from two arrays using a hash table

// let arr1=[1,2,3,4];
// let arr2=[3,4,5,6];

// function op(arr1,arr2){
//     let set1=new Set(arr1);
//     let set2=new Set(arr2);
//     let result=[];
    
//     for(let num of set1){
//         if(!set2.has(num)){
//             result.push(num)
//         }
//     }
    
//     for(let num of set2){
//         if(!set1.has(num)){
//             result.push(num)
//         }
//     }
    
//     return result;
// }

// console.log(op(arr1,arr2));

//====================Find two numbers that sum to a target (Two Sum) using a hash table in O(n)


// let arr=[1,2,3,4,5,6,7,8,9];


// function op(arr,tar){
//     let result=[];
    
//     let map=new Map();
    
//     for(let i=0;i<arr.length;i++){
//         let rem=tar-arr[i];
        
//         if(map.has(rem)){
//             result.push([rem,arr[i]])
            
//         }
        
//         map.set(arr[i],true);
//     }
    
    
//     return result;
    
// }

// console.log(op(arr,10));


//==========Remove duplicates from a string using a hash table

// let str="amal";

// function op(str){
//     return [...new Set(str)].join("");
// }
// console.log(op(str));


//==============Check if a string is a palindrome using a stack

// let str="amal";
// function op(str){
//     let temp=[];
    
//     for(let cha of str){
//         temp.push(cha)
//     };
    
//     for(let cha of str){
//         if(temp.pop() !==cha){
//             return false;
//         }
//     }
    
//     return true;
// }


// console.log(op(str));


//=========================Delete a specific node from a stack


let stack=[1,2,3,4,5,6,7];

function op(arr,tar){
    let temp=[];


while(stack.length>0){
    let num=stack.pop();
    
    if(tar !==num){
        temp.push(num)
    }
}
  
  while(temp.length>0){
      stack.push(temp.pop());
  } 
  
  return stack;
    
}


console.log(op(stack,4));


//================================Implement a stack that rejects duplicate values


class StackUniq{
    constructor(){
        this.stack=[];
        this.set=new Set();
    }
    
    push(x){
        
        if(this.set.has(x)){
            console.log("duplicate not alowed");
            return;
        }
        
        this.stack.push(x);
        this.set.add(x);
    }
    
    pop(){
        if(this.isEmpty())return "stack is empty";
         return this.stack.pop()
    }
    
    isEmpty(){
        return this.stack.length===0;
    }
    
    
    peek(){
        return this.stack[this.stack.length-1];
    }
    display(){
        console.log(this.stack);
    }
}


let stack=new StackUniq();

stack.push(1);
stack.push(1);
console.log(stack.peek());

//====================Implement a stack using a linked list

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
        
//     }
// }


// class ssl{
//     constructor(){
//         this.top=null
//     }
    
//     push(x){
//         let newNode=new Node(x);
        
  
//       newNode.next=this.top;
//       this.top=newNode;
        
        
//     };
    
//     pop(){
//         if(this.isEmpty()){
//             console.log("stack is empty");
//             return;
//         };
        
//         let removed=this.top;
//         this.top=this.top.next;
//         return removed.data
        
        
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


// let list=new ssl();

// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);

// list.display();

//================Implement a stack with push, pop, and get max in O(1) time (MinStack)


class Stack{
    constructor(){
        this.stack=[];
        this.max=[];
        
    }
    
    push(x){
        this.stack.push(x);
        
        if(this.max.length===0||x>=this.max[this.max.length-1]){
            this.max.push(x)
        }
    }
    
    
    pop(){
        if(this.stack.length===0)return "empty";
        
        let removed=this.stack.pop();
        
        if(this.max[this.max.length-1]===removed){
            this.max.pop();
        }
        
        return removed;
    }
    
    display(){
        console.log(this.stack);
    }
    
    maximum(){
        return this.max[this.max.length-1];
    }
}


let stck=new Stack();

stck.push(1)
stck.push(20)
stck.push(10)
stck.display();


console.log(stck.maximum());