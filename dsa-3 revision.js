// class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
//         this.right=null;

//     }
// }

// class bst{
//     constructor(){
//         this.root=null;
//     }

// insert(value){

//     let newNode=new Node(value);
//     if(this.root===null){
//         this.root=newNode;
//         return;

//     }

//     let curr=this.root;

//     while(curr !==null){
//         if(value<curr.data){
//             if(curr.left===null){
//                 curr.left=newNode;
//                 return;
//             }
//             curr=curr.left;
//         }else if(value>curr.data){
//             if(curr.right===null){
//                 curr.right=newNode;
//                 return;
//             }

//             curr=curr.right;
//         }else{
//             return;
//         }
//     }
// }


// print(node=this.root){
//     if(node===null)return ;

//     this.print(node.left);
//     console.log(node.data);
//     this.print(node.right);
// }

// delete(value,node=this.root){
//     if(node===null)return null;


//     if(value<node.data){
//         node.left=this.delete(value,node.left);
//     }else if(value>node.data){
//         node.right=this.delete(value,node.right);
//     }else{


//         if(node.left===null && node.right===null)return null;

//         if(node.left===null)return node.right;
//         if(node.right===null)return node.left;

//         let minright=this.minNode(node.right);
//         node.data=minright.data;

//         node.right=this.delete(minright.data,node.right)



//     }

//     return node;
// }

// minNode(node){
//     if(node===null)return;
   
//     while(node.left!==null){
//         node=node.left;
//     }
//     return node;
// }


// search(value,node=this.root){
//     if(node===null)return false;

//     if(value===node.data)return true;

//     if(value<node.data)  return this.search(value,node.left)

//         return this.search(value,node.right);
// }


// checkbst(node=this.root,min=-Infinity,max=Infinity){

//     if(node===null)return true;

//     if(node.data<=min || node.data >=max)return false;

//     return (
//         this.checkbst(node.left,min,node.data) && this.checkbst(node.right,node.data,max)
//     )
// }

// nthlarg(n){
//     let count=0;
//     let result=null;

//     let nth=(node)=>{
//         if(node===null || result !==null)return ;
//           nth(node.right);

//           count++;

//           if(count===n){
//             result=node;
//             return result;
//           }

//           nth(node.left);


        
//     }
//      nth(this.root)
//      return result.data;
// }

// }


// let b=new bst();

// b.insert(1)
// b.insert(2)
// b.insert(5)
// b.insert(7)
// b.insert(9)
// b.insert(10)
// b.insert(100)



// b.delete(7)


// b.print()

// // console.log(b.search(10))

// // console.log(b.checkbst());
// console.log(b.nthlarg(3))
//===================creating minheap


// class Minheap{
//     constructor(data){
//        this.h=[]
//     }

//     insert(value){
//         this.h.push(value);
//         this.heapifyup()
//     }


//     heapifyup(){
//         let n=this.h.length;
//         let i=n-1;
//         while(i>0){

//             let parent=Math.floor((i-1)/2);

//             if(this.h[parent]>this.h[i]){
//                 [this.h[parent],this.h[i]]=[this.h[i],this.h[parent]];
//                 i=parent;

//             }else{
//                 break;
//             }


//         }
//     }

//     print(){
//         console.log(this.h)
//     }


//     remove(){
//         let ele=this.h[0];
//         this.h[0]=this.h.pop();
//          this.heapiydown();
        
//     }



// heapiydown(){
//     let n=this.h.length;

// let i=0;
//     while(true){
//         let left=Math.floor((i*2)+1);
//           let right=Math.floor((i*2)+2);

//   let smallest=i;
//           if(left < n && this.h[smallest]>this.h[left]){
//             smallest=left;
//           }

//            if(right < n && this.h[smallest]>this.h[right]){
//             smallest=right;
//           }


//           if(smallest===i)break;

//           [this.h[smallest],this.h[i]]=[this.h[i],this.h[smallest]]

//           i=smallest;

//     }
// }

// peek(){
//     return this.h[0]
// }


// }


// let minh=new Minheap();

// minh.insert(6)
// minh.insert(1)
// minh.insert(0)
// minh.insert(11)
// minh.insert(14)


// minh.remove()
// minh.print()
// console.log(minh.peek())

//===========================- Sort an array using heap sort


// let arr=[2,1,4,3,6,5,9];


// function heapsort(arr){

//     let n=arr.length;
//     let p=Math.floor((n/2)-1);
//     for(let i=p;i>=0;i--){
//         heapifydown(arr,n,i);
//     }

// function heapifydown(arr,n,i){
  

//     while(true){
//           let largest=i;

//     let left=Math.floor((i*2)+1);
//     let right=Math.floor((i*2)+2);



//     if(left<n && arr[largest]<arr[left]){
//         largest=left;
//     }

//     if(right<n  && arr[largest]<arr[right]){
//         largest=right;
//     }


//     if(largest===i)break;

//     [arr[largest],arr[i]]=[arr[i],arr[largest]]

//     i=largest;

//     }



// }

// for(let j=n-1;j>=0;j--){

//     [arr[j],arr[0]]=[arr[0],arr[j]]

//     heapifydown(arr,j,0)
// }



// return arr;

// }



// console.log(heapsort(arr));

//================array to heap


let arr=[1,4,5,7,9,2];

function arrtoheap(arr){

    let n=arr.length;

    let p=Math.floor((n/2)-1);

    for(let i=p;i>=0;i--){
        heapifydown(arr,n,i)
    }

    return arr;
}


function heapifydown(arr,n,i){

    while(true){
        let left=Math.floor((i*2)+1);
        let right=Math.floor((i*2)+2);

        let largest=i;

        if(left<n && arr[largest]<arr[left]){
            largest=left;
        }

        
        if(right<n && arr[largest]<arr[right]){
            largest=right;
        }


        if(largest===i)break;

        [arr[largest],arr[i]]=[arr[i],arr[largest]];

           i=largest;

    }
}

console.log(arrtoheap(arr));

//================trie implementtaionb


// class TrieNode{
//     constructor(){
//         this.children={};
//         this.isEnd=false;
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new TrieNode();
//     }


// insert(word){
//     let node=this.root;

//     for(let char of word){
//         if(!node.children[char]){
//             node.children[char]=new TrieNode();
//         }
//         node=node.children[char]
//     }

//     node.isEnd=true;
// }


// search(word){

//     let node=this.root;

//     for(let cha of word){
//         if(!node.children[cha]){
//             return false;
//         }
//         node=node.children[cha]
//     }

//     return node.isEnd;

// }


// print(){
//     this.dfs(this.root,"");
// }

// dfs(node,word){
//     if(node.isEnd){
//         console.log(word);
//     }

//     for(let char in node.children){
//         this.dfs(node.children[char],word+char)
//     }
// }


// autocomplete(prefix){

//     let node=this.root;

//     for(let cha of prefix){
//         if(!node.children[cha]){
//             return []
//         }

//         node=node.children[cha];
//     }

//     let result=[];


// let dfs=(node,word)=>{
//     if(node.isEnd){
//         result.push(word)
//     }

//     for(let cha in node.children){
//         dfs(node.children[cha],word+cha)
//     }
// }

// dfs(node,prefix)

// return result;
// }


// delete(word){
//     this.dfsd(this.root,word,0);
// }

// dfsd(node,word,i){

// if(i===word.length){
//     if(!node.isEnd){
//         return false;
//     }

//     node.isEnd=false;
//     return Object.keys(node.children).length===0;
// }

// let cha=word[i];

// if(!node.children[cha]){
//     return false;
// }

// let letdeletecha=this.dfsd(node.children[cha],word,i+1);

// if(letdeletecha){
//     delete node.children[cha]

//     return(
//         Object.keys(node.children).length===0  && !node.isEnd
//     )
// }

// return false;




// }


// }


// let t=new Trie();

// t.insert("amal");
// t.insert("amalk");
// t.insert("amall");
// t.insert("kaal");
// t.insert("al");

// // t.print();

// // console.log(t.autocomplete("am"))


// // t.delete("kaal");
// t.print();

//=====================sort an aray using sorting algorithum


// let arr=[2,5,3,7,8,9];


// function heapsort(arr){
//     let n=arr.length;

//     let p=Math.floor((n/2)-1);

//     for(let i=p;i>=0;i--){
//         heapifydown(arr,n,i)
//     }

//     for(let j=n-1;j>=0;j--){
//         [arr[0],arr[j]]=[arr[j],arr[0]]
//         heapifydown(arr,j,0)
//     }

//     return arr;
// }

// function heapifydown(arr,n,i){

//     while(true){
//         let left=Math.floor((i*2)+1);
//           let right=Math.floor((i*2)+2);


//           let larger=i;

//           if(left<n  && arr[left]>arr[larger]){
//             larger=left
//           }

//              if(right<n  && arr[right]>arr[larger]){
//             larger=right
//           }


//           if(larger===i)break;

//           [arr[larger],arr[i]]=[arr[i],arr[larger]];


//           i=larger


//     }

// }

// console.log(heapsort(arr));


//Heap Sort is a comparison-based sorting algorithm that first builds a binary heap from the input data and then repeatedly removes the root element to produce a sorted array.
 //It has a time complexity of O(n log n) in the best, average, and worst cases, and a space complexity of O(1).



 //================deleting dupleicate from bt

//  class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
//         this.right=null;
//     }
//  }



// let root=new Node(1)
//  root.left=new Node(2);
//  root.right=new Node(3);
//  root.left.left=new Node(4);
//  root.right.left=new Node(2);
//   root.left.right=new Node(8);


//   function remdupli(root){

//     let seen=new Set();

//     function dfs(node){
//         if(node===null)return null;

//          node.left=dfs(node.left);
//          node.right=dfs(node.right);


//          if(seen.has(node.data)){
//             return null;
//          }

//          seen.add(node.data);
//          return node;
//     }


//     return dfs(root)
//   }

//   function print(node){
// if(node===null)return;

// console.log(node.data);
// print(node.left);
// print(node.right);
//   }

// remdupli(root)
//   print(root);

  //======================array to bst

//   class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
//         this.right=null;
//     }
//   }


//   class bst{
//     constructor(){
//         this.root=null
//     }


//     insert(value){
//     let newNode=new Node(value);

//     if(this.root===null){
//         this.root=newNode;
//         return;
//     }

//     let node=this.root;


//     while(node !==null){
//         if(value<node.data){
//             if(node.left===null){
//                 node.left=newNode;
//                 return;
//             }
//             node=node.left;
//         }else if(value>node.data){
//             if(node.right===null){
//                 node.right=newNode
//                 return;
//             }
//             node=node.right;
//         }else{
//             return;
//         }
//     }
//     }

//     artobst(arr){
//         for(let ele of arr){
//             this.insert(ele)
//         }
//     }

//     inorder(node=this.root){
//         if(node===null)return null;
//         this.inorder(node.left);
//         console.log(node.data);
//         this.inorder(node.right);

//     }

//   nthlarg(n){

//     let count=0;
//     let result=null;

//     let dfs=(node=this.root)=>{
//         if(node===null || result!==null)return;

//         dfs(node.right);
//         count++;
//         if(count===n){
//             result=node.data;
//             return;
//         }

//         dfs(node.left);
//     }

//     dfs(this.root);
//     return result;

//   }


//   search(value,node=this.root){

// if(node===null)return false;

// if(node.data===value)return true;

// if(value<node.data){
//    return this.search(value,node.left);
// }else {
//    return this.search(value,node.right);
// }




//   }


//   nearest(value,node=this.root){
//     if(node===null)return null;

//     let closest=node.data;


//     while(node !==null){

//     if(Math.abs(value-node.data)<Math.abs(value-closest)){
//         closest=node.data
//     }


//       if(value<node.data){
//         node=node.left
//       }else if(value>node.data){
//         node=node.right;
//       }else{
//         return node.data;
//       }


//     }

//     return closest;
//   }

//   valid(node=this.root,min=-Infinity,max=Infinity){
    
//     if(node===null)return true;;

//     if(node.data<=min || node.data >=max)return false;


//     return (
//         this.valid(node.left,min,node.data) && this.valid(node.right,node.data,max)
//     )

//   }



//   }

//   let b=new bst();


//   let arr=[1,4,22,31,16,18,37];

//   b.artobst(arr);

// //   b.inorder();

// //   console.log(b.nthlarg(3))

// //   console.log(b.search(10))

// // console.log(b.nearest(2))

// console.log(b.valid())

//======================================heap k th largest in array using heap

// let arr=[1,4,5,8,9];

// function nthlarg(arr,k){
//     let n=arr.length;
   
//     let p=Math.floor((n/2)-1);

//     for(let i=p;i>=0;i--){
//         heapifydown(arr,n,i);
//     }
  

//   for(let j=1;j<k;j++){
//     arr[0]=arr[n-1];
//     arr.pop()
//     n--;
//     heapifydown(arr,n,0)
//   }

//     return arr[0];



// }


// function heapifydown(arr,n,i){
//     while(true){
//            let larger=i;

//            let left=Math.floor((i*2)+1);
//            let right=Math.floor((i*2)+2);


//            if(left<n && arr[left]>arr[larger]){
//             larger=left
//            }


//              if(right<n && arr[right]>arr[larger]){
//             larger=right
//            }
     
//              if(larger===i)break;

//              [arr[larger],arr[i]]=[arr[i],arr[larger]];

//              i=larger;
//     }
// }



// console.log(nthlarg(arr,3))

//====================adjecency list


// class Graph{
//     constructor(data){
//         this.list={}
//     }

//     addVertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=[];

//         }


//     }

//     addEdge(v1,v2){
//         if(!this.list[v1]){
//             this.addVertex(v1)
//         }

//            if(!this.list[v2]){
//             this.addVertex(v2)
//         }

//         this.list[v1].push(v2);
//         this.list[v2].push(v1);
//     }


//     print(){
//         for(let vertex in this.list){
//             console.log(vertex,"->",this.list[vertex].join(","))
//         }
//     }
// }

// let g=new Graph();

// g.addEdge(1,2);
// g.addEdge(1,3);
// g.addEdge(2,4);
// g.addEdge(4,22);

// g.print();

//=================================adjencency matricx

// class Graph{
//     constructor(size){
//         this.matrix=[]



//         for(let i=0;i<size;i++){
//             this.matrix[i]=[];
//             for(let j=0;j<size;j++){
//                 this.matrix[i][j]=0;
//             }
//         }
//     }

// addEdge(v1,v2){
//     this.matrix[v1][v2]=1;
//     this.matrix[v2][v1]=1;
// }

// display(){
//     for(let row of this.matrix){
//         console.log(row)
//     }
// }

// }


// let g=new Graph(4);

// g.addEdge(1,2);

// g.addEdge(2,3);


// g.display()

//===============checking cycle in garph


class Graph{
    constructor(data){
        this.list={}
    }

    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=[];

        }


    }

    addEdge(v1,v2){
        if(!this.list[v1]){
            this.addVertex(v1)
        }

           if(!this.list[v2]){
            this.addVertex(v2)
        }

        this.list[v1].push(v2);
        this.list[v2].push(v1);
    }


    print(){
        for(let vertex in this.list){
            console.log(vertex,"->",this.list[vertex].join(","))
        }
    }

    checkcycle(){
        let seen=new Set();


    }
}

let g=new Graph();

g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(3,1);
g.addEdge(4,22);

g.print();



//=================================bt to bst



 class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
 }



let root=new Node(1)
 root.left=new Node(2);
 root.right=new Node(3);
 root.left.left=new Node(4);
 root.right.left=new Node(2);
  root.left.right=new Node(8);
  
  
  
   let arr=[];
 
 function dfs(root){
   
     if(root===null)return;
     
     dfs(root.left);
     arr.push(root.data);
     dfs(root.right);
     
 }
 
 dfs(root);
 
 arr.sort((a,b)=>a-b)
 
function convert(arr){
let i=0;
function bst(root){
    if(root===null)return;
    
    bst(root.left);
    root.data=arr[i++];
    bst(root.right);
}
bst(root);
}
 
 
 
 convert(arr);
 
 function print(root){
     if(root===null)return;
     
     print(root.left);
     console.log(root.data);
     print(root.right);
 }
 
 print(root);




