//-remove the middle element from a double linkedlist - p (small mistake in code)-

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


// function midremove(head){


//     if(head===null || head.next ===null)return null;

//     let slow=head;
//     let fast=head;

//     while(fast !==null && fast.next !==null){
//         fast=fast.next.next;
//         slow=slow.next;
//     };

// if(slow.prev !== null){
//     slow.prev.next=slow.next;
// }else{
//     head=slow.next;
// }

// if(slow.next !==null){
//     slow.next.prev=slow.prev
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


//  head=midremove(head);

//  print(head);


 ///////////////////===================================================reverse ddl

 
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



function reverse(head){ 
  
let current=head;
let temp=null;

while(current !==null){
     temp=current.prev;
     current.prev=current.next;
     current.next=temp;

     current=current.prev;
}

head=temp.prev;

return head;

}


function print(head){
  let current=head;
  while(current !==null){
    console.log(current.data);
    current=current.next;
  }
}

head=reverse(head);

print(head);



//=================================rverse ssl


function reve(){
    let current=head;
   let temp=null

   while(current !==null){
    temp=current.next;
    current.next=head;
    head=current;
    current=temp;
   }
}