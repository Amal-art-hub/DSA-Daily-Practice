////////////////////////////////////////////////////5.create a doubly linked list and insert values a the beginning and find the middle element


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


// // function printlist(head){
// //     let current=head;

// //     while(current  !==null){
// //         console.log(current.data);
// //         current=current.next;
// //     };
// // };

// // printlist(head);



// function insert(head,data){
//     let newNode=new Node(data);
//     newNode.next=head;
//     head.prev=newNode;
//     head=newNode;


//     return head;
// };


// head=insert(head,110);


// function printlist(head){
//     let current=head;

//     while(current  !==null){
//         console.log(current.data);
//         current=current.next;
//     };
// };

// printlist(head);



// function  middle(head){
//     let slow=head;
//     let fast=head;


//     while(fast !==null && fast.next !==null){
//         slow=slow.next;
//         fast=fast.next.next;
//     };

//     return slow.data;

// };

// console.log("middle node is :",middle(head));



//////////////////////////////////////////////create a doubly linked list and insert values at the end



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


// function insertatlast(head,data){

//     let newNode=new Node(data);

//     if(head===null){
//         return newNode;
//     }

//     let current=head;

//     while(current.next !==null){
 
//      current=current.next;
//     };


//         current.next=newNode;
//         newNode.prev=current;


//         return head;
// };


// head=insertatlast(head,110);


// function printlist(head){
//     let current=head;

//     while(current  !==null){
//         console.log(current.data);
//         current=current.next;
//     };
// };

// printlist(head);


////////////////////////////===============================================insertvalue in beginning pf any value

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


// function insertatbyvalyebegin(head,data,value){

//     let newNode=new Node(data);

//     if(head===null){
//         return newNode;
//     }

//     let current=head;

//     while( current.next !== null  && current.next.data !==value  ){
 
//      current=current.next;
//     };


//     if(current.next !==null){
//         console.log("Value not found");
//     }

//        let target=current.next;

//         current.next=newNode;
//         newNode.next=target;
//         target.prev=newNode
//         newNode.prev=current;


//         return head;
// };


// head=insertatbyvalyebegin(head,110,70);


// function printlist(head){
//     let current=head;

//     while(current  !==null){
//         console.log(current.data);
//         current=current.next;
//     };
// };

// printlist(head);

//////////////////////=====================================================insert node after the value

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


// function insertatbyvalyafter(head,data,value){

//     let newNode=new Node(data);

//     if(head===null){
//         return newNode;
//     }

//     let current=head;

//     while(current.data !==value  && current.next !==null){
 
//      current=current.next;
//     };


//     if(current.data !==value){
//         console.log("Value not found");

// return head
//     }

//        let target=current.next;

//         current.next=newNode;
        
//         
//         newNode.prev=current;


// if(target !==null){
//     newNode.next=target;
//     target.prev=newNode
// }


//         return head;
// };


// head=insertatbyvalyafter(head,110,70);


// function printlist(head){
//     let current=head;

//     while(current  !==null){
//         console.log(current.data);
//         current=current.next;
//     };
// };

// printlist(head);


///////////////////////////////=========================5.create a doubly linked list and insert data after value and find the middle element


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


// function insertatbyvalyafter(head,data,value){

//     let newNode=new Node(data);

//     if(head===null){
//         return newNode;
//     }

//     let current=head;

//     while(current.data !==value  && current.next !==null){
 
//      current=current.next;
//     };


//     if(current.data !==value){
//         console.log("Value not found");

// return head
//     }

//        let target=current.next;

//         current.next=newNode;
        
        
//         newNode.prev=current;


// if(target !==null){
//     newNode.next=target;
//     target.prev=newNode
// }


//         return head;
// };


// head=insertatbyvalyafter(head,110,70);




// function middlenode(head){
//     let slow=head;

//     let fast=head;

//     while(fast !==null && fast.next !==null){
//         slow=slow.next;
//         fast=fast.next.next;
//     };

//     return slow.data;

// };

// console.log(middlenode(head));

/////////////////////========================implementation od ddl

// class Node {
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };


// class ddllinked{
//     constructor(){
//         this.head=null;
//     }

      
//     insert(data){

//         let newNode=new Node(data);
//         if(this.head ===null){
//             this.head=newNode;
//             return;          
//         };
//         let temp=this.head;
//         while(temp.next !==null){
//             temp=temp.next;

//         };

//         temp.next=newNode;
//         newNode.prev=temp;
//     }



//     insertAtStart(data){
//         let newNode=new Node(data);

//         if(this.head !==null){
//             this.head.prev=newNode;
//         }

//         newNode.next=this.head;
//         this.head=newNode;

//     };

//     delete(data){
//         if(this.head ===null)return;

//         if(this.head.data===data){
//             this.head=this.head.next;

//             if(this.head !==null){
//                 this.head.prev=null;
//             }
//     return;

//         }
//     }



//     print(){
//         let temp=this.head;
//         while(temp !==null){
//             console.log(temp.data);
//             temp=temp.next;
//         }
//     };




// };



// let list=new ddllinked();
// list.insert(10);
// list.insert(20);
// list.insert(30);


// list.insertAtStart(55);

// list.delete(20);

// list.print();


////////////////////////////Implement a function to delete a node from a Doubly Linked List.


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };


// class ddl{
//     constructor(){
//    this.head=null;     
// };

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
//     newNode.prev=current;

// }


// delete(data){

//     if(this.head ===null)return null;
//     if(this.head.data === data){
//         this.head=this.head.next;
//        if(this.head !==null){
//         this.head.prev=null;
//        }
//     }

//     let current=this.head;

//     while(current !==null){
//         if(current.next.data ==data){

//             if(current.next.next ==null){
//                 current.next=null;
//             }
//             current.next=current.next.next;
//             current.next.prev=current;
//             return;
//         }
//         current=current.next;
//     }






//     return;
// }



// print(){

//     let current=this.head;

//     while(current !==null){
//        console.log(current.data);
//        current=current.next;
//     }
// }


// }


// let list=new ddl();

// list.insert(10);
// list.insert(20);
// list.insert(30);
// list.insert(40);


// list.delete(30);
// list.print();

//////////==================delete middle element from linkedlist in o of n time


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

// function middledelete(head){
//     let slow=head;
//     let fast=head;

//     while( fast !== null && fast.next !==null){
//         slow=slow.next;
//         fast=fast.next.next;
//     };

//    let current=slow;
//    current.prev.next=current.next;
//    current.next.prev=current.prev;

//    current=head;
//    while(current !==null){
//     console.log(current.data);
//     current=current.next;
//    }
// };

// middledelete(head);

//////==========================ddl implementation

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// class ddl{
//     constructor(){
//         this.head=null;
//     }

//     insert(data){

//         let newNode=new Node(data)
//         if(this.head ===null){
//             this.head=newNode;
//             return;
//         }

//         let current=this.head;

//         while(current.next !==null){
//             current=current.next;
//         };

//         current.next=newNode;
//         newNode.prev=current;
//         return;
//     };


//     delete(data){
//      if(this.head===null)return ;

//      if(this.head.data===data){
//         this.head=this.head.next;
//         if(this.head !==null){
//             this.head.prev=null;
//         }
//         return;
//      };

//      let current=this.head;
//      while(current.next.next !==null){
//         if(current.next.data ===data){
//    current.next=current.next.next;
//    if(current.next !==null){
//     current.next.prev=current;
//    }
//    return;

//         }
//         current=current.next;
//      }

//      current.next=null;


//     };


// delete(){
//     if(this.head===null) return null;

//     if(this.head.next ===null){
//         this.head=null;
//     };


//     let current=this.head;
//     while(current.next !==null){
//         current=current.next;
//     }

//     current.prev.next=null;
//     return;
// }



//     print(){
//         let current=this.head;
//         while(current!==null){
// console.log(current.data);
// current=current.next;
//         }
//         return;
//     }



// }


// let list=new ddl();

// list.insert(10);
// list.insert(20);
// list.insert(30);
// list.insert(40);
// list.print();


/////////////////===================================reverse ddl 


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };



// function print(head){
//     let current=head;
//     while(current !==null){
//         console.log(current.data);
//         current=current.next;
//     }
// };


// let head=list();

// print(head);


////=============================revere ddl lsi


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };



// function reverecur(head){


//   if(head ===null)return null;

//   let temp=head.next;
//   head.next=head.prev;
//   head.prev=temp;

//   if(head.prev===null)return head;

//   return reverecur(head.prev);


// };


// function print(head){
//    let current=head;

//     while(current !==null){
//         console.log(current.data);
//         current=current.next;
//     }
    
// };


// let head=list();

//  head=reverecur(head);

// print(head);




//////////////////=====================================insert an node at the begin


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };


// function insertbegin(head,data){
//     if(head === null)return null;

//     let newNode=new Node(data);

//     newNode.next=head;
//     head.prev=newNode;
//     head=newNode;

//     return head

// };


// function print(head){
//     let current=head;
//     while(current !== null){
//         console.log(current.data);
//         current=current.next;
//     }
// }



//  head=list();

//  head=insertbegin(head,55);
//  print(head);


/////////////////////===============================find the length


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };

// function count(head){
//     let length=0;
//     if(head === null) return 0;
//     let current=head;

//     while(current !==null){
//         length++;
//         current=current.next;
//     }

//     return length;
// };


// let head=list ();

// console.log(count(head));

/////////////////////=====================================search element
// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };

// function search(head,data){
// if(head ===null)return false;
// if(head.data===data)return true;
// let current=head;

// while(current !==null){
//     if(current.data === data){
//         return true;
//     };
//     current=current.next;
// }
// return false;

// };

// let head=list();
// console.log(search(head,10));

//////============================================================================print reverse

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };


// function printrev(head){
// if(head ===null)return;

// printrev(head.next);
// console.log(head.data);
// };


//  head=list();

//  printrev(head);
//=============================================================================================================================//===================================================
 /////////////////=======================================================middle node


//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };


// function middledelete(head){
//   let slow=head;
//   let fast=head;

//   while(fast !==null && fast.next !==null){
//     slow=slow.next;
//     fast=fast.next.next;
//   };


//   slow.prev.next=slow.next;
//   slow.next.prev=slow.prev;

// return head;
// };


// function print(head){
//   let current=head;
//   while(current !==null){
//     console.log(current.data);
//     current=current.next;
//   };



// }

// let head=list();

//  head=middledelete(head);

// print(head);

////////////////////////=========================================================================================revere ddl lsi




//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };



// function reverse(head){
//   if(head ===null)return null;

//   let temp=head.next;
//   head.next=head.prev;
//   head.prev=temp;

//   if(head.prev===null)return head;

//   return reverse(head.prev);
// };


// function print(head){
//   let current=head;
//   while(current !==null){
//     console.log(current.data);
//     current=current.next;
//   };


// };

// let head=list();
// head=reverse(head);
// print(head);


//====================================print in reversing of ddl



//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };



// function printreverse(head){
// if(head ===null ){
//   return ;
// }
//   printreverse(head.next);
//   console.log(head.data);
// }

// let head=list();
// printreverse(head);


/////////////////////////====================reverse ddl



//  class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// };

// function list(){
//     let head=new Node(10);

//   let current=head;
//   let i=20;
//   while(i<=100){
//     let newNode=new Node(i);
//     current.next=newNode;
//     newNode.prev=current;
//     current=current.next;
//     i +=10;
//   }
// return head;
// };


// function reverse(head){

//   let temp=head.next;
//   head.next=head.prev;
//   head.prev=temp;

//   if(head.prev ===null){
//     return head;
//   }

//   return reverse(head.prev);
// };



// function print(head){
//   let current=head;
//   while(current !==null){
//     console.log(current.data);
//     current=current.next;
//   }
// }


// let head=list();
// head=reverse(head);
// print(head);

/////////////////////////////=====================================================================Reverse a doubly linked list



// class Node{
//   constructor(data){
//     this.data=data;
//     this.next=null;
//     this.prev=null;

//   }
// };

// let head=new Node(10);
// let current=head;

// let i=20

// while(i<=100){
//   let newNode=new Node(i);
//   current.next=newNode;
//   newNode.prev=current;
//   current=current.next;
//   i +=10;
// };


// function reverse(head){
// if(head ===null )return null;

// let temp= head.next;
// head.next=head.prev;
// head.prev=temp;

// if(head.prev ===null) return head;;

// return reverse(head.prev);
// };

// function print(head){

//   let current=head;
//   while(current !== null){
//     console.log(current.data);
//     current=current.next;
//   }
// }



//  head=reverse(head);
 
//  print(head);

 ////////=====================

//  class Node{
//   constructor(data){
//     this.data=data;
//     this.next=null;
//     this.prev=null;

//   }
// };

// let head=new Node(10);
// let current=head;

// let i=20

// while(i<=100){
//   let newNode=new Node(i);
//   current.next=newNode;
//   newNode.prev=current;
//   current=current.next;
//   i +=10;
// };


// function reverse(head){

// let current=head;
// let temp=null;

// while(current !==null){
//   temp=current.prev;
//   current.prev=current.next;
//   current.next=temp;

//   current=current.prev;
// }


// if(temp !==null){
//   head=temp.prev;
// }

// return head;

// };



// function print(head){
//   let current=head;
//   while(current !==null){
//     console.log(current.data);
//     current=current.next;
//   }
// }

//  head=reverse(head);
//  print(head);

 //////////////////////////==================reverse it using recursion



//  class Node{
//   constructor(data){
//     this.data=data;
//     this.next=null;
//     this.prev=null;

//   }
// };

// let head=new Node(10);
// let current=head;

// let i=20

// while(i<=100){
//   let newNode=new Node(i);
//   current.next=newNode;
//   newNode.prev=current;
//   current=current.next;
//   i +=10;
// };

// function reve(head){

//   let current=head;
//   if(current ===null){

//     return ;
//   };

//   let temp=current.prev;
//   current.prev=current.next;
//   current.next=temp;

//   if(current.prev ===null )return current;

//   return reve(current.prev);


// }


// function print(head){
//   let current=head;
//   while(current !==null){
//     console.log(current.data);
//     current=current.next;
//   }
// }

// head=reve(head);
// print(head);



//-remove the middle element from a double linkedlist - p (small mistake in code)-



 class Node{
  constructor(data){
    this.data=data;
    this.next=null;
    this.prev=null;

  }
};

let head=new Node(10);
let current=head;

let i=20

while(i<=100){
  let newNode=new Node(i);
  current.next=newNode;
  newNode.prev=current;
  current=current.next;
  i +=10;
};



function middle(head){
let slow=head;
let fast=head;

while(fast !==null && fast.next !==null){
  fast =fast.next.next;
  slow=slow.next;
}

if(slow.prev ===null){
  head=slow.next;
  if(head !==null){
    head.prev=null
  }
}

let temp=slow.next;
slow.prev.next=temp;
if(temp !==null){
  temp.prev=slow.prev;
}

return head;
};




function print(head){
  let current=head;
  while(current !==null){
    console.log(current.data);
    current=current.next;
  }
}

middle(head);

print(head);