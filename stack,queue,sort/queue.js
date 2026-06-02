//====================implement the queue

// class Queue{
//     constructor(){
//         this.queue=[];
//         this.front=0;
//         this.rear=0;

//     };


// enqueue(val){
//     this.queue[this.rear]=val;
//     this.rear++;
// };

// dequeue(){
// if(this.isEmpty()){
//     console.log("queu is empty");

//     return null
// };

// let value=this.queue[this.front];
// this.front++;

// return value;
// };


// peek(){
//     if(this.isEmpty()){
//         console.log("there is no queue");
//         return null
//     };

//     console.log(this.queue[this.front]);
// }

// isEmpty(){
//     return this.front===this.rear;
// }

// }


// let queue=new Queue()

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);


// queue.dequeue();
// queue.dequeue();

// queue.peek();
// queue.peek();


//============================implement circular queue


class Cqueue{
    constructor(size){
        this.queue=new Array(size);
        this.size=size;
        this.front=-1;
        this.rear=-1;

    };


    isEmpty(){
        return this.front===-1;
    }

    isFull(){
        return (this.rear+1)%this.size===this.front;
    };


  Enqueue(val){
      if(this.isFull()){
        console.log("queue is full");
        return null;
      }

      if(this.isEmpty()){
        this.front=0;
      };

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
        this.rear=-1;
        this.front=-1;
    }else{
        
        this.front=(this.front+1)%this.size;
    }
    return value;
  }


  peek(){
    if(this.isEmpty()){
        console.log("empty");

        return null
    };

    return this.queue[this.front];
  }


  display(){
    if(this.isEmpty()){
        console.log("enpty")
        return null;
    }

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


let qu=new Cqueue(5);

qu.Enqueue(10);
qu.Enqueue(20);
qu.Enqueue(30);
qu.Enqueue(40);
qu.Enqueue(50);


qu.display();


