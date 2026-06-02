//==Problem: Given the heads of two singly linked lists headA and headB, return the node at which the two lists intersect.
//  If the two linked lists have no intersection at all, return null.Constraint: Your solution should ideally run in $O(n + m)$ time and use $O(1)$ additional space.
// Context: This tests your ability to manipulate pointers beyond just reversing or detecting cycles.



class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


let common = new ListNode(7);
common.next = new ListNode(8);
common.next.next = new ListNode(9);


let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = common;


let headB = new ListNode(4);
headB.next = new ListNode(5);
headB.next.next = common;



function op(headA,headB){

let pA=headA;
let pB=headB;

while(pA !==pB){
pA=pA?pA.next:headB;
pB=pB?pB.next:headA;
};

return pA.val;

}

console.log(op(headA,headB));

//====================================================
//Problem: Given the heads of two sorted linked lists, merge them into one sorted linked list. The list should be made by splicing together the nodes of the first two lists.

// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }



// let head1 = new ListNode(1);
// head1.next = new ListNode(3);
// head1.next.next = new ListNode(5);
// head1.next.next.next = new ListNode(7);


// let head2 = new ListNode(2);
// head2.next = new ListNode(4);
// head2.next.next = new ListNode(6);
// head2.next.next.next = new ListNode(8);



// function op(head1,head2){
// let dummy=new ListNode(-1);

// let tail=dummy;

// let curr1=head1;
// let curr2=head2;

// while(curr1 !==null && curr2 !==null){
//     if(curr1.val<curr2.val){
//         tail.next=curr1;
//         curr1=curr1.next;
//     }else{
//         tail.next=curr2;
//         curr2=curr2.next;
//     }
//     tail=tail.next;
// }

// if(curr1 !==null){
// tail.next=curr1
// }else if(curr2 !==null){
//     tail.next=curr2;
// }


// return dummy.next;

// };


// function print(head){
//     let curr=head;

//     while(curr !==null){
//         console.log(curr.val);
//         curr=curr.next;
//     }
// }



// let head=op(head1,head2);

// print(head);

