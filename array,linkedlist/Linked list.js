// 3️⃣ Convert an Array to Linked List


// let Input= [10,20,30,40];

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }


// function arraytilinked(Input){

//     let head=new Node(Input[0]);

//     let current=head;

//     for(let i=1;i<Input.length;i++){
//         let newNode=new Node(Input[i]);
//         current.next=newNode;
//         current=current.next;
//     };

//     return head;

// };

// let head=arraytilinked(Input);


// let current =head;

// while(current !=null){
//     console.log(current.data);

//     current=current.next;
// }




//////////////////////////////////////////////////////////// Print Linked List in Reverse////////////////////////////1️⃣ Using recursion


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function printReverse(head){


//     if(head===null){
//         return;
//     }


//     printReverse(head.next);
//     console.log(head.data);


//  }


//  printReverse(head);

 //////////////////////////////////////////////////////////////////////////////////////////reverse the linked list////////////////////////using stack



//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function printReverse(head){
//     let stack=[];
//     let current =head;

//     while(current !==null){
//         stack.push(current.data);
//         current=current.next;
//     }


//     while(stack.length>0){
//         console.log(stack.pop());
//     }

//  }


//  printReverse(head);


////////////////////////////////////////////////////////////6️⃣ Insert Node at Beginning



//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function insertatbeginning(head,data){
//  let newNode=new Node(data);
 
//  newNode.next=head;
//  head=newNode;

//  return head;
//  };

//  head=insertatbeginning(head,90);

//  let current=head;

//  while(current !==null){
//     console.log(current.data);
//     current=current.next;

//  }

 //////////////////////////////////////////////////////////////////////////////////////////insert nde at the end

//   class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);




//  function insertatend(head,data){
//     let newNode=new Node(data);

//     let current =head;

//     while(current.next !==null){
//         current=current.next;
//     }

//     current.next=newNode;

//     return head;
//  }


//   head=insertatend(head,90);

//  let current=head;

//  while(current !==null){
//     console.log(current.data);
//     current=current.next;
//  }

//===================================================================

 ///////////////////////////////////////////////////////8️⃣ Insert Node After a Given Value Example: 10 → 20 → 30Insert 25 after 2010 → 20 → 25 → 30


//    class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function insertaNode(head,data,value){


//     let newNode=new Node(data);

//     let current=head;

//     while(current.data !==value){
//         current=current.next;

//     }

//     newNode.next=current.next;
//     current.next=newNode;

//     return head;

//  };


//  head=insertaNode(head,25,20);


//  let current=head;

//  while(current!==null){
//     console.log(current.data);
//     current=current.next;
//  }


//////////=================
 //////////////////////////////////////////////////////9️⃣ Insert Node Before a Given Value10 → 20 → 30Insert 15 before 2010 → 15 → 20 → 30



//    class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function insertNode(head,data,value){
//      let newNode=new Node(data);

//      let current=head;

//      while(current.next.data!=value){
//         current=current.next;

//      }

//      newNode.next=current.next;

//      current.next=newNode;

//      return head;
//  }



//  head=insertNode(head,15,20);

//  let current=head;

//  while(current!==null){
//     console.log(current.data);
//     current=current.next;
//  }



 //////////////////////////////////////////////////////////// Delete Node by Value////////////10 → 20 → 30 → 40Delete 3010 → 20 → 40


//    class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);


//  function deletenode(head,data){


// if(head.data ===data){
//     return head.next;
// }

//     let current=head;

//     while(current.next !==null && current.next.data !==data){
//         current=current.next;

//     }

//     if(current.next === null){
//         return head;
//     }

//     current.next=current.next.next;

//     return head;

//  };


//  head=deletenode(head,30);
// let current=head;
//  while(current !==null){
//     console.log(current.data);
//     current=current.next;
//  }




 //////////////////////////////////////////////////////////// Print Linked List in Reverse////////////////////////////1️⃣ Using recursion


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function reverselinkd(head){
//     if(head ===null){
//  return ;
//     }

//     reverselinkd(head.next);

//     console.log(head.data);
//  }

//  reverselinkd(head);



 //////////////////////////////================================================================================reverse using stack




// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function reverse(head){
//     let stack=[];
//     let current=head;

//     while(current!==null){
//         stack.push(current.data);
//         current=current.next;
//     }

//     while(stack.length>0){
//         console.log(stack.pop())
//     }
//  };


// reverse(head);



//////////////////////////////////////////////////////////////=======================Find middle element of a linked list (slow–fast pointer).





// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function middle(head){


//     if(head=== null)return null;

   

//     let slow=head;
//     let fast=head;

//     while(fast !==null && fast.next!==null){
//         slow=slow.next;
//         fast=fast.next.next;
//     }

//     return slow;
//  };

//  console.log(middle(head).data);

////////////////////////////////////////////////===================print the linked list in reverse;

 

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);


//  function printrev(head){

//     if(head ===null)return ;

//     printrev(head.next);

//     console.log(head.data);
//  };



//  printrev(head);

 ////////////////====================reversing linked list

//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function reverslinked(head){
//     if(head ===null ||head.next ===null){
//         return head;
//     }

//     let newHead=reverslinked(head.next);

//     head.next.next=head;
//     head.next=null;
//     return newHead;
//  }


//  function print(head){
//     let current=head;

//     while(current !==null){
//         console.log(current.data);
//         current=current.next;
//     }
//  };


// head=reverslinked(head);

// print(head);

//===================================Convert an array [1, 2, 3, 4, 5] to a linked list.


// let arr=[1,3,4,5,6,7,8,9];



// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// function makitarray(arr){
// let head=new Node(arr[0]);
// let current=head

// let i=1;
// while(i<arr.length){
//     let newNode=new Node(arr[i]);
// current.next=newNode;
// current=current.next;
// i++;
// };

// return head;
// }



// function print(head){
//     let current=head;

//     while(current !==null){
//         console.log(current.data);
//         current=current.next;
//     }
// };


// let head=makitarray(arr);
// print(head);


//////////////////==================8️⃣ Insert Node After a Given Value Example: 10 → 20 → 30Insert 25 after 2010 → 20 → 25 → 30


//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);


//  function insert(head,data,value){
//     let newNode=new Node(data);
//     let current=head;
//     while(current !==null && current.data !==value){
//         current=current.next;
//     };

//     let temp=current.next;
//     current.next=newNode;
//     newNode.next=temp;
    

//     return head;
//  };

//  function print(head){
// let current=head;
// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }
//  }
//  head=insert(head,110,20);
// print(head);

////////////////=========================function to print all elements of a linked list in order and reverse order
// 








//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);


//  function print(head){

//     if(head ===null)return ;

//     print(head.next);
    
//   console.log(head.data);
  
   
    
//  };


//  print(head);


 /////////===============Insert Node Before a Given Value10 → 20 → 30Insert 15 before 2010 → 15 → 20 → 30

//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(10);

//  head.next=new Node(20);

//  head.next.next=new Node(30);

//  head.next.next.next=new Node(40);



//  function insert(head,data,value){

//     let current=head;

//     while(current !==null && current.next.data !==value ){
//         current=current.next;
//     };

//     let newNode=new Node(data);
//     let temp=current.next;
//     current.next=newNode;
//     newNode.next=temp;

// return head;

//  };


 
//  function print(head){
// let current=head;
// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }
//  }


//   head=insert(head,110,30);

//  print(head);

 //////////////////////==============


//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
//  };


//  class lls{
//     constructor(){
//         this.head=null;
//     };


// insert(data){
//     let newNode=new Node(data);

//     if(this.head ===null){
//         this.head=newNode;
//         return;
//     };

//     let current=this.head;

//     while(current.next !==null){
//         current=current.next;
//     };

//     current.next=newNode;
// };


// print(){
//     let current=this.head;

//     while(current !==null){
//         console.log(current.data);
//         current=current.next;
//     }
// };

//  }

//  let list=new lls();
// list.insert(10);
// list.insert(20);
// list.insert(30);
// list.insert(40);
// list.insert(50);
// list.insert(60);
// list.insert(70);
// list.insert(80);
// list.insert(90);
// list.insert(100);

// list.print();





//=======================

//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
//  };


//  function create(){

//     let head=new Node(10);
//     let current=head;

//     let i=20;

//     while(i<=100){
//         let newNode=new Node(i);
//         current.next=newNode;

//         current=current.next;
      
//         i +=10;
//     }

//     return head;

//  };





//  let head=create();

//  print(head);


//  function reverse(head,start,end){
//     let dummy=new Node(5);
//    dummy.next=head;

//    let current=dummy;

//    while(current.next.data !==start){
//     current=current.next;
//    };

//    let prev=current;
//    let curr=prev.next;

//    while(curr.next && prev.next.data !==end){
//     let nextnode=curr.next;
//     curr.next=nextnode.next;
//     nextnode.next=prev.next;
//     prev.next=nextnode;

//    }


//    return dummy.next;



//  };



//   function print(head){
// let current=head;
// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }
//  };

//   head=reverse(head,10,1000);

//   print(head);


  /////////////////=================

//    class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
//  };


//  function create(){

//     let head=new Node(10);
//     let current=head;

//     let i=20;

//     while(i<=100){
//         let newNode=new Node(i);
//         current.next=newNode;
//         newNode.prev=current;

//         current=current.next;
      
//         i +=10;
//     }

//     return head;

//  };





//  let head=create();

//  function recyursion(head){

// if(head ===null || head.next ===null) return head;


// let newHead=recyursion(head.next);
// head.next.next=head;
// head.next=null;

// return newHead;

//  };



// function print(head){
// let current=head;
// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }
//  };



//  head=recyursion(head);

// print(head);



///////////========================Remove N'th node from the end of the List(fast,slow);


//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
//  };


//  function create(){

//     let head=new Node(10);
//     let current=head;

//     let i=20;

//     while(i<=100){
//         let newNode=new Node(i);
//         current.next=newNode;

//         current=current.next;
      
//         i +=10;
//     }

//     return head;

//  };


//  function remove(head,N){

//     let dummy=new Node(0);

//    dummy.next=head;

//    let slow=dummy;
//    let fast=dummy;

//    for(let i=0;i<N;i++){
//     fast=fast.next;
//    };

//    while(fast !==null && fast.next !==null){
//     fast=fast.next;
//     slow=slow.next;
//    };

//    slow.next=slow.next.next;

//    return head;

//  }


 
// function print(head){
// let current=head;
// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }
//  };


//  head=create();

//  head=remove(head,5);

// print(head);

////////////////////////================reverse the linked list



//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
//  };


//  function create(){

//     let head=new Node(10);
//     let current=head;

//     let i=20;

//     while(i<=100){
//         let newNode=new Node(i);
//         current.next=newNode;

//         current=current.next;
      
//         i +=10;
//     }

//     return head;

//  };


//  function reverse(head){

//     let prev=null;
//     let current=head;

//     while(current !==null){
//         let temp=current.next;
//          current.next=prev;
//          prev=current;
//          current=temp; 
//     };


//     return prev;




//  };


//  function print(head){
// current=head;

// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }
//  }



//  head=create();
//  head=reverse(head);

//  print(head);


 //////////////////////////////////================reverse the linked list using recursion

//   class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }  
//  };


//  function create(){

//     let head=new Node(10);
//     let current=head;

//     let i=20;

//     while(i<=100){
//         let newNode=new Node(i);
//         current.next=newNode;

//         current=current.next;
      
//         i +=10;
//     }

//     return head;

//  };


//  function reve(head,prev=null){


//     if(head ===null)return prev;

// let temp=head.next;
// head.next=prev;



// return reve(temp,head);

//  }



//   function print(head){
// current=head;

// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }
//  }



//  head=create();
//  head=reve(head);

//  print(head);



/////////////////given Linked list code with duplicate elements, write a function to remove duplicates from LL


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
};


let head=new Node(10);

 head.next=new Node(20);

 head.next.next=new Node(30);

 head.next.next.next=new Node(40);
  head.next.next.next.next=new Node(40);
   head.next.next.next.next.next=new Node(50);


   function removedupli(head){

    if(!head) return null;

    let current=head;
    let prev=null
    let seen =new Set();

    while(current !==null){
        if(seen.has(current.data)){
  prev.next=current.next;

        }else{
            seen.add(current.data);
            prev=current;
        }

        current=current.next;
    }

    return head;
   }



  function print(head){
current=head;

while(current !==null){
    console.log(current.data);
    current=current.next;
}
 }



head=removedupli(head);
print(head);