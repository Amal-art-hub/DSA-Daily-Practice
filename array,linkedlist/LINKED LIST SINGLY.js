//=======================================================create linked list with append  adn print

// class Node {
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// let head =null;

// function append(data){
//     let newNode=new Node(data);
//     if (head===null){
//         head=newNode;
//         return ;
//     };
//     let current=head;

//     while(current.next !==null){
//         current=current.next;
//     };

//     current.next=newNode;
// };

// append(10);
// append(20);
// append(30);
// append(40);

// let current=head;

// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }



//===================================================Make a linked list manually,insert a node at the beginning of that linked list

// class Node{
//    constructor(data){
//     this.data=data;
//     this.next=null;
//    }
// }

// let head=new Node(10);
// head.next=new Node(20);
// head.next.next=new Node(30);


// let current=head;

// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }


//=================================================Make a linked list using append

// class Node{
//    constructor(data){
//     this.data=data;
//     this.next=null;
//    }
// }

// let head=null;
// function append(data){
//     let newNode=new Node(data);

//     if(head===null){
//         head=newNode;
//         return;
//     }

//     let current=head;

//     while(current.next!==null){
//         current=current.next;
//     };

//     current.next=newNode;

    

// };


// append(10);
// append(20);
// append(30);

// i=0;

// while(i<=20){
//     append(i);
//     i++
// }



// let current=head;

// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }




//=============================create a linked lit and insert a node at the beginning of that linked list

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// let head=new Node(10);
// head.next=new Node(20);
// head.next.next=new Node(30);


// let newNode=new Node(5);

// newNode.next=head;
// head=newNode;
//==================================create a linked lit and insert  nodes at the beginning of that linked list

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// let head=new Node(10);
// head.next=new Node(20);
// head.next.next=new Node(30);


// function insertnodes(head,data){
//     let newNode=new Node(data);

//     newNode.next=head;
//     head=newNode;

//     return head;
// };

// function print(head){
//     let current=head;
//     while(current!== null){
//         console.log(current.data);
//         current=current.next;
//     }
// };

// head=insertnodes(head,5);

// print(head);

//////////////////================================length of linked list



// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// let head=new Node(10);
// head.next=new Node(20);
// head.next.next=new Node(30);


// let current=head;
// let count=0;

// while(current !==null){
//    count++;
//    current=current.next;
// }

// console.log(count);



///////////////////////////==================================================reverse like this   1-2-3-4-5-6-7-8-9-10 to  1-2-3-7-6-5-4-8-9-10;


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(1);

// let current=head;

// let i=2;

// while(i<=10){
//     let newNode=new Node(i);

//     current.next=newNode;
//     current=current.next;

//     i++;
// };







// function reversenodes(head,left,right){
//     let dummy=new Node(0);
//     dummy.next=head;

//     let prev=dummy;
//     for(let i=1;i<left;i++){
//         prev=prev.next;
//     }
//       let curr=prev.next;
//     for(let i=0;i<right-left;i++){
  
//         let next=curr.next;

//         curr.next=next.next;
//         next.next=prev.next;
//         prev.next=next;
//     }

//     return dummy.next;
// };

//  head=reversenodes(head,4,7);

// function printlist(head){
//   let current=head;

//   while(current !==null){
//     console.log(current.data);
//     current=current.next;
//   }
// };

// printlist(head);



//////////////////==============================================================================Insert a node  before a node with data x.



// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(1);

// let current=head;

// let i=2;

// while(i<=10){
//     let newNode=new Node(i);

//     current.next=newNode;
//     current=current.next;

//     i++;
// };

// function insertbefore(head,value,data){

//     let newNode=new Node(data);

//     let current=head;

//     while(current.next.data !==value){
//            current=current.next;
//     };

// newNode.next=current.next;
// current.next=newNode;


// return head;

// };

// head=insertbefore(head,7,11);

//  current=head;

//  while(current !==null){
//     console.log(current.data);
//     current=current.next;
//  }




/////////////////////////////////////////////////===================================================Insert a node  before a node with data x.


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(1);

// let current=head;

// let i=2;

// while(i<=10){
//     let newNode=new Node(i);

//     current.next=newNode;
//     current=current.next;

//     i++;
// };


// function insertafter(head,value,data){
//     let newNode=new Node(data);


//     let current=head;

//     while(current.data !==value){
//         current=current.next;

//     };

//     newNode.next=current.next;
//     current.next=newNode;

//     return head;
// };


// head=insertafter(head,7,11);

//  current=head;

//  while(current !==null){
//     console.log(current.data);
//     current=current.next;
//  }



////////////////////////////==============================================================Find the kth largest element in linked list


// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }


// let head = new Node(10);
// head.next = new Node(30);
// head.next.next = new Node(20);
// head.next.next.next = new Node(40);
// head.next.next.next.next = new Node(50);


// function kthnode(head,k){

  

//     let arr=[];
//     if(head===null){
//         return null;
//     }

//       let current=head;

//     while(current !==null){
//         arr.push(current.data);
//         current=current.next;

//     };

//     let sorted=arr.sort((a,b)=>a-b);

//     return sorted[k-1];


// };

// console.log(kthnode(head,3));



////////////////////======================Remove duplicate from Linked list


// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }


// let head = new Node(10);
// head.next = new Node(30);
// head.next.next = new Node(40);
// head.next.next.next = new Node(40);
// head.next.next.next.next = new Node(40);
// head.next.next.next.next.next = new Node(50);


// function removedupli(head){

//     let current=head;

//     while(current !==null && current.next !==null){
//         if(current.data ===current.next.data){
//             current.next=current.next.next;
//         }else{
//         current=current.next;
//         }
//     };


//     return head;

// };


// head=removedupli(head);


// let current=head;

// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// }




////////////////////////////////////==========================================================================Reverse in singly Linkedlist  using recursion


// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }


// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);
// head.next.next.next.next = new Node(50);
// head.next.next.next.next.next = new Node(60);




// function reverse(head){
//     if(head === null || head.next ===null){
//      return head;
//     }

//     let newHead=reverse(head.next);

//     head.next.next=head;
//     head.next=null;
//     return newHead;
// };


// head=reverse(head);


// let current=head;


// while(current !==null){
//     console.log(current.data);
//     current=current.next;
// };

/////////////////////=================reverse like this   1-2-3-4-5-6-7-8-9-10 to  1-2-3-7-6-5-4-8-9-10;




// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// };


// let head=new Node(1);

// let current=head;

// let i=2;

// while(i<=10){
//     let newNode=new Node(i);

//     current.next=newNode;
//     current=current.next;

//     i++;
// };

// function reverse(head,left,right){

//     let dummy=new Node(0);

//     dummy.next=head;

//     let prev=dummy;
 

//     for(let i=1;i<left;i++ ){
//   prev=prev.next;

//     };

  

//    let curr=prev.next;

//    for(let i=0;i<right-left;i++){
//   let next = curr.next;
// curr.next = next.next;
// next.next = prev.next;
// prev.next = next;
//    };


//    return dummy.next;
// }

//  head=reverse(head,4,7);

//   current=head;


//   while(current !==null){
//     console.log(current.data);
//     current=current.next;
//   };




  //////////////////=========================================implimentation of linked list


// class Node{
//   constructor(data){
//     this.data=data;
//     this.next=null;
//   }
// };


// class Linkedlist{
//   constructor(){
//     this.head=null;
//   }

// insert(data){
//   let newNode=new Node(data);

// if(this.head ===null){
//   this.head=newNode;
//   return;
// }

// let temp=this.head;

// while(temp.next !==null){
//   temp=temp.next;
// }

// temp.next=newNode;

// }

// insertAtStart(data){
//   let newNode=new Node(data);
//   newNode.next=this.head;
//   this.head=newNode
// }


// delete(data){
//   if(this.head ===null) return ;


//   if(this.head.data===data){
//     this.head=this.head.next;
//     return;
//   }

//   let temp=this.head;

//   while(temp.next !==null){
//     if(temp.next.data===data){
//       temp.next=temp.next.next;
//       return;
//     }
//     temp=temp.next;
//   }

// };


// print(){
//   let temp=this.head;

//   while(temp !==null){
//     console.log(temp.data);
//     temp=temp.next;
//   }
// }


// };



// let list=new Linkedlist();

// list.insert(10);
// list.insert(20);
// list.insert(30);

// list.insertAtStart(5);

// list.delete(5);

// list.print();

/////////////////////========================reverse like this   1-2-3-4-5-6-7-8-9-10 to  1-2-3-7-6-5-4-8-9-10;


class Node{
  constructor(data){
    this.data=data;
    this.next=null;
    
  }
};


class sll{
  constructor(){
    this.head=null
  };



  insert(data){
let newNode=new Node(data);

if(this.head ===null){
  this.head=newNode;
  return;
};

let current=this.head;

while(current.next !==null){
  current=current.next;
};


current.next=newNode;


  }


  delete(data){
    if(this.head===null)return null;
    if(this.head.data ===data){
      this.head=this.head.next;
      return this.head;
    };
    


    let current=this.head;

    while( current !==null && current.next !==null ){
      if(current.next.data===data){
        
        current.next=current.next.next;
      }
      current=current.next;
    }
    return this.head;
  }


  print(){
    let current=this.head;
    while(current !==null){
      console.log(current.data);
      current=current.next;
    };
  }
}

let list= new sll();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);
list.insert(60);
list.insert(70);
list.insert(80);
list.insert(90);
list.insert(100);




function reverse(head,start,end){

if(head===null || start===end)return head;

let dummy=new Node(0);
dummy.next=head;

  
  let prev=dummy;

  for(let i=1;i<start;i++){
prev=prev.next;
  };

  let curr=prev.next;


for(let i=1;i<=end-start;i++){
let next=curr.next;
curr.next=next.next;
next.next=prev.next;
prev.next=next;

}

return dummy.next;;



}


reverse(list.head,4,7);

list.print();