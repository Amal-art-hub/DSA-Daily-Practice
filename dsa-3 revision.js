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


// let arr=[1,4,5,7,9,2];

// function arrtoheap(arr){

//     let n=arr.length;

//     let p=Math.floor((n/2)-1);

//     for(let i=p;i>=0;i--){
//         heapifydown(arr,n,i)
//     }

//     return arr;
// }


// function heapifydown(arr,n,i){

//     while(true){
//         let left=Math.floor((i*2)+1);
//         let right=Math.floor((i*2)+2);

//         let largest=i;

//         if(left<n && arr[largest]<arr[left]){
//             largest=left;
//         }

        
//         if(right<n && arr[largest]<arr[right]){
//             largest=right;
//         }


//         if(largest===i)break;

//         [arr[largest],arr[i]]=[arr[i],arr[largest]];

//            i=largest;

//     }
// }

// console.log(arrtoheap(arr));

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

//     checkcycle(){
//         let seen=new Set();


//     }
// }

// let g=new Graph();

// g.addEdge(1,2);
// g.addEdge(2,3);
// g.addEdge(3,1);
// g.addEdge(4,22);

// g.print();



//=================================bt to bst



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
  
  
  
//    let arr=[];
 
//  function dfs(root){
   
//      if(root===null)return;
     
//      dfs(root.left);
//      arr.push(root.data);
//      dfs(root.right);
     
//  }
 
//  dfs(root);
 
//  arr.sort((a,b)=>a-b)
 
// function convert(arr){
// let i=0;
// function bst(root){
// //     if(root===null)return;
    
// //     bst(root.left);
// //     root.data=arr[i++];
// //     bst(root.right);
// // }
// // bst(root);
// // }
 
 
 
// //  convert(arr);
 
// //  function print(root){
// //      if(root===null)return;
     
// //      print(root.left);
// //      console.log(root.data);
// //      print(root.right);
// //  }
 
// //  print(root);




// //===========================implementing adjececny list


// class Graph{
//    constructor(){
//     this.list={}
//    }

// addvertex(vertex){
//     if(!this.list[vertex]){
//         this.list[vertex]=[];
//     }
// }

// addedge(v1,v2){
//     if(this.list[v1]){
//         this.addvertex(v1)
//     }


//      if(this.list[v2]){
//         this.addvertex(v2)
//     }

//     this.list[v1].push(v2)
//     this.list[v2].push(v1)
// }

// print(){
//     for(let ver in this.list){
//         console.log(ver,"->",this.list[ver].join(","))
//     }
// }

// bfs(start){
//    let visited=new Set();
//    let q=[start];
//    visited.add(start);

//    while(q.length>0){

//     let node=q.shift();

//     console.log(node.data)

//     for(let nei of this.list[node]){
//         if(!visited.has(nei)){
//             visited.add(nei);
//             q.push(nei)
//         }
//     }

//    }
// }


// }

// let g=new Graph();
// g.addedge(1,2)
// g.addedge(2,3)
// g.addedge(3,4)
// g.addedge(4,5)


// g.print()

//==============binarty tree with odd on the left side and the even in right side


// class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
//         this.right=null
//     }
// }


// class Bt{
//     constructor(){
//         this.root=null;
//     }
    
    
//     insert(value){
//         let newNode=new Node(value);
        
//         if(this.root===null){
//             this.root=newNode;
//             return;
//         }
        
//         let node=this.root;
        
//      while(node !==null){
//             if(value%2 !==0){
//             if(node.left===null){
//                 node.left=newNode;
//                 return;
//             }
//             node=node.left;
//         }else{
//             if(node.right===null){
//                 node.right=newNode;
//                 return;
//             }
//             node=node.right;
//         }
//      }
//     }
    
//     delete(value,node=this.root){
//        this.root= this.dfs(value,node);
//     }
    
//     dfs(value,node){
//         if(node===null)return null;
        
//         if(value%2!==0 && value !==node.data){
//             node.left=this.dfs(value,node.left);
//         }else if(value%2 ===0 && value !==node.data){
//             node.right=this.dfs(value,node.right)
//         }else if(value===node.data){
            
//             if(node.left===null && node.right===null)return null;
//             if(node.left===null)return node.right;
//             if(node.right===null)return node.left;
//              let lastNode;
//             if(value%2!==0){
//                  lastNode=this.lastNode(node.left,value)
//                    node.data=lastNode.data
//                  node.left = this.dfs(lastNode.data, node.left);
                
//             }else{
//                  lastNode=this.lastNode(node.right,value)
//                    node.data=lastNode.data
//                  node.right = this.dfs(lastNode.data, node.right);
                
//             }
          
            
            
            
//         }
//         return node;
//     }
// lastNode(node,value){
//     while(node.left !==null || node.right !==null){
//           if(value%2!==0){
//             node=node.left;
//           }else{
//             node=node.right;
//           }
//     }
//     return node;
// }

// }

// let t=new Bt();

// t.insert(1)
// t.insert(2)
// t.insert(3)
// t.insert(4)
// t.insert(5)
// t.insert(6)
// t.insert(7)

// t.delete(2)

// console.log(JSON.stringify(t,null,2))

//=====================================checking bst is complete or not


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class Bst {
//     constructor() {
//         this.root = null;
//     }

//     // INSERT
//     insert(value) {
//         let newNode = new Node(value);

//         if (this.root === null) {
//             this.root = newNode;
//             return;
//         }

//         let node = this.root;

//         while (node !== null) {
//             if (value < node.data) {
//                 if (node.left === null) {
//                     node.left = newNode;
//                     return;
//                 }
//                 node = node.left;
//             } else if (value > node.data) {
//                 if (node.right === null) {
//                     node.right = newNode;
//                     return;
//                 }
//                 node = node.right;
//             } else {
//                 return; // no duplicates
//             }
//         }
//     }

//     // SEARCH
   




//         leafnode(node=this.root){
//             let level=0;
//             while(node.left !==null){
//                 node=node.left;
//                 level++;
//             }

//             return level
       

//         }

//         checkperfect(){
//         let expectlevel=-1;

//         let dfs=(node=this.root,level)=>{
//             if(node===null)return true;

//             if(node.left===null && node.right===null){
//                 if(expectlevel===-1){
//                     expectlevel=level
//                 }

//                 return expectlevel===level;
//             }


//                if(node.left===null || node.right===null){
//                 return false;
//                }

//                return dfs(node.left,level+1)  && dfs(node.right,level+1)
               
//         }

//         return dfs(this.root,0)
//         }

   
// }


// let b=new Bst();


// b.insert(1);
// b.insert(5);
// b.insert(8);
// b.insert(2);
// b.insert(11);
// b.insert(10);
// b.insert(16);

// console.log(b.checkperfect())


//========================finding lca in tree


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class Bst {
//     constructor() {
//         this.root = null;
//     }

//     // INSERT
//     insert(value) {
//         let newNode = new Node(value);

//         if (this.root === null) {
//             this.root = newNode;
//             return;
//         }

//         let node = this.root;

//         while (node !== null) {
//             if (value < node.data) {
//                 if (node.left === null) {
//                     node.left = newNode;
//                     return;
//                 }
//                 node = node.left;
//             } else if (value > node.data) {
//                 if (node.right === null) {
//                     node.right = newNode;
//                     return;
//                 }
//                 node = node.right;
//             } else {
//                 return; // no duplicates
//             }
//         }
//     }

//     // SEARCH
   




//         leafnode(node=this.root){
//             let level=0;
//             while(node.left !==null){
//                 node=node.left;
//                 level++;
//             }

//             return level
       

//         }

//         checkperfect(){
//         let expectlevel=-1;

//         let dfs=(node=this.root,level)=>{
//             if(node===null)return true;

//             if(node.left===null && node.right===null){
//                 if(expectlevel===-1){
//                     expectlevel=level
//                 }

//                 return expectlevel===level;
//             }


//                if(node.left===null || node.right===null){
//                 return false;
//                }

//                return dfs(node.left,level+1)  && dfs(node.right,level+1)
               
//         }

//         return dfs(this.root,0)
//         }

//         checklca(p,q,node=this.root){
//             if(node===null)return null;

//             if(node.data===p ||node.data===q){
//                 return node;
//             }

// let left=this.checklca(p,q,node.left);
// let right=this.checklca(p,q,node.right,);

// if(left && right)return node;

// return left ?left:right;

//         }

   
// }


// let b=new Bst();


// b.insert(1);
// b.insert(5);
// b.insert(8);
// b.insert(2);
// b.insert(11);
// b.insert(10);
// b.insert(16);


// console.log(b.checklca(10,16).data);
//==================================20-6=2026
//===========================================================checcking 2 bt is identical or not   in case of bt and bst

// class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
//         this.right=null;
//     }
// }


// let root1 = new Node(10);
// root1.left = new Node(5);
// root1.right = new Node(15);
// root1.left.left = new Node(2);
// root1.left.right = new Node(7);


// let root2 = new Node(10);
// root2.left = new Node(5);
// root2.right = new Node(15);
// root2.left.left = new Node(2);
// root2.left.right = new Node(7);


// function identical(t1,t2){
//     if(t1===null && t2===null){
//         return true;
//     }
    
//     if(t1===null || t2===null){
//         return false;
        
//     }
    
//     return (
//         t1.data===t2.data && identical(t1.left,t2.left) && identical(t1.right,t2.right)
//         )
// }

// console.log(identical(root1,root2));

//==================deleteing vertex and edges from the graph


// class Graph{
//    constructor(){
//     this.list={}
//    }

// addvertex(vertex){
//     if(!this.list[vertex]){
//         this.list[vertex]=[];
//     }
// }

// addedge(v1,v2){
//     if(!this.list[v1]){
//         this.addvertex(v1)
//     }


//      if(!this.list[v2]){
//         this.addvertex(v2)
//     }

//     this.list[v1].push(v2)
//     this.list[v2].push(v1)
// }

// print(){
//     for(let ver in this.list){
//         console.log(ver,"->",this.list[ver].join(","))
//     }
// }

// bfs(start){
//    let visited=new Set();
//    let q=[start];
//    visited.add(start);

//    while(q.length>0){

//     let node=q.shift();

//     console.log(node.data)

//     for(let nei of this.list[node]){
//         if(!visited.has(nei)){
//             visited.add(nei);
//             q.push(nei)
//         }
//     }

//    }
// }


// removevertex(vertex){
//   for(let key in this.list){
//     this.removeEdge(key,vertex);
//   }

//   delete this.list[vertex];
// }

// removeEdge(key,vertex){
//     this.list[key]=this.list[key].filter(edge=>edge!==vertex);
// }




// }

// let g=new Graph();
// g.addedge(1,2)
// g.addedge(2,3)
// g.addedge(3,4)
// g.addedge(4,5)

// g.removevertex(4)

// g.print()

//========================graph


// class Graph{
//     constructor(v){
//         this.matrix=[];
//         this.size=v;




//         for(let i=0;i<v;i++){
//             this.matrix[i]=[];
//             for(let j=0;j<v;j++){
//                 this.matrix[i][j]=0;
//             }
//         }
//     }


//     addEdge(v1,v2){
//         this.matrix[v1][v2]=1;
//          this.matrix[v2][v1]=1;
//     }


// }

//==============checking the subtree was in the main tree

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// // Main Tree
// let root1 = new Node(10);

// root1.left = new Node(5);
// root1.right = new Node(15);

// root1.left.left = new Node(2);
// root1.left.right = new Node(7);

// root1.right.left = new Node(12);
// root1.right.right = new Node(20);

// root1.left.right.left = new Node(6);
// root1.left.right.right = new Node(8);

// // Subtree
// let subRoot = new Node(7);

// subRoot.left = new Node(6);
// subRoot.right = new Node(8);

// function check(t1,t2){
// if(t2===null)return true;
// if(t1===null)return false;

// if(identical(t1,t2)){
//     return true;
// }

// return (
//     check(t1.left,t2)||check(t1.right,t2)
// )
// }


// function identical(t1,t2){
//     if(t1===null && t2===null)return true;

//     if(t1===null || t2===null)return true;

//     if(t1.data !==t2.data)return false;

//     return (
//         identical(t1.left,t2.left) && identical(t1.right,t2.right)
//     )
// }


// console.log(check(root1,subRoot))

//=================21-06-2026
//========================================530. Minimum Absolute Difference in BST

// var getMinimumDifference = function(root) {;
// let prev=null;
// let mindiff=Infinity;
// let inorder=(node)=>{
//     if(node===null) return;

//     inorder(node.left);

//     if(prev!==null){
//         let diff=Math.abs(prev-node.val);
//         if(diff<mindiff)mindiff=diff;
//     }

//     prev=node.val;

//     inorder(node.right)
// }

// inorder(root);
// return mindiff;
// };

//========================trie tsting

// class TrieNode{
//     constructor(){
//         this.children={};
//         this.isEnd=false;
//     }
// }


// class Trie{
//     constructor(){
//         this.root=new TrieNode()
//     }

//     insert(word){
//         let node=this.root;

//         for(let cha of word){
//             if(!node.children[cha]){
//                 node.children[cha]=new TrieNode()
//             }
//             node=node.children[cha];
//         }

//       node.isEnd=true
//     }


// longest(node=this.root,word){
   

//     if(node.isEnd){
//         return word;
//     }

//     let key=Object.keys(node.children);

//     if(key.length !==1){
//         return word
//     }

//     let cha =key[0]


//     return this.longest(node.children[cha],word+cha);



// }


// }


// let t=new Trie()

// t.insert("apple");
// t.insert("appify");
// // t.insert("car")


// console.log(t.longest(t.root,""))

//=======================finding minimum in bst

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

// min(node=this.root,min){
//     if(node.left===null)return node.data;




// return this.min(node.left,min)


// }
// }

// let b=new bst();

// b.insert(1)
// b.insert(2)
// b.insert(4)
// b.insert(6)
// b.insert(8)
// b.insert(9)
// b.insert(11);

// console.log(b.min(b.root))
//==================checl valid bst



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

// validbst(node=this.root,min=-Infinity,max=Infinity){


//     if(node===null)return true;

//     if(node.data<=min ||node.data>=max){
//         return false;
//     }

// return (this.validbst(node.left,min,node.data)   &&  this.validbst(node.right,node.data,max))

// }
// }

// let b=new bst();

// b.insert(1)
// b.insert(2)
// b.insert(4)
// b.insert(6)
// b.insert(8)
// b.insert(9)
// b.insert(11);

// console.log(b.validbst())


//========================covert bt to bst




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
//  root.right.left=new Node(9);
//   root.left.right=new Node(8);


//   function  bttobst(root){
// //     let arr=[];
// //     function mkarry(node){
// //          if(node===null)return;
// //          mkarry(node.left);
// //          arr.push(node.data);
// //          mkarry(node.right);
// //     }

// //     mkarry(root);
// //     arr=arr.sort((a,b)=>a-b);
// //     console.log(arr);


// //     let i=0;
// //     function bst(node){
// //         if(node===null)return;

// //         bst(node.left);
// //         node.data=arr[i++];
// //         bst(node.right);
// //     }

// // bst(root,0);

// // return root;

// //   }

// //   bttobst(root)


// //   function inorder(node){
// //     if(node==null)return;

// //     inorder(node.left);
// //     console.log(node.data);
// //     inorder(node.right);
// //   }

// //   console.log(inorder(root))

//   //==========level order traversal

  


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
//  root.right.left=new Node(9);
//   root.left.right=new Node(8);


//   function lot(root){

//     let q=[root];
//     let visited=new Set();
// visited.add(root);

// while(q.length>0){
//     let node=q.shift();
//     console.log(node.data);

//     if(node.left  && !visited.has(node.left)){
//         visited.add(node.left)
//         q.push(node.left)
//     }

//      if(node.right && !visited.has(node.right)){
//         visited.add(node.right)
//         q.push(node.right)
//     }


// }

//   }

//   lot(root);

  //=====================finding kth max value in bst

//   class Node{
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




// search(value,node=this.root){
//     if(node===null)return false;

//     if(value===node.data)return true;

//     if(value<node.data)  return this.search(value,node.left)

//         return this.search(value,node.right);
// }


// nthsmall(k){
//     let count=0;
//     let result=null;

//     let dfs=(node)=>{


//         if(node===null || result !==null)return;

//         dfs(node.left);
//         count++;
//         if(count===k){
//             result=node.data;
//             return;
//         }

//         dfs(node.right);
//     }

//     dfs(this.root);
//     return result;
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

// console.log(b.nthsmall(2))

//===============check bst is perfect or not

//  class Node{
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



// isperfect(){

//     let expected=-1;

//     let dfs=(node,level)=>{


//          if (node === null) {
//             return true;
//         }

//         if(node.left===null && node.right===null){
//             if(expected===-1){
//                 expected=level;
//             }
 
//             if(expected===level)return true;
//         }

//         if(node.left===null || node.right===null){
//             return false;
//         }

//         return(
//             dfs(node.left,level+1)  && dfs(node.right,level+1)
//         )

//     }

//     return dfs(this.root,0);
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


// console.log(b.isperfect());

//========================count of the leaf node


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



//   function countleaf(root){
//     let sum=0;
//     let dfs=(node)=>{
//         if(node===null)return true;

//         if(node.left===null  && node.right===null){
//           sum=sum+node.data
//         }

//         return (
//             dfs(node.left)  && dfs(node.right)
//         )
//     }
//     dfs(root)

//     return sum
//   }

//   console.log(countleaf(root))


//=========22/06/2026
  //===============check binary tree is full

  

//  class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
// //         this.right=null;
// //     }
// //  }



// // let root=new Node(1)
// //  root.left=new Node(2);
// //  root.right=new Node(3);
// //  root.left.left=new Node(4);
// //  root.right.left=new Node(2);
// //   root.left.right=new Node(8);


// //   function checkfull(node){
// //     if(node===null)return true;

// //     if(node.left===null && node.right===null)return true;

// //     if(node.left===null || node.right===null)return false;

// //     return (checkfull(node.left) && checkfull(node.right))
// //   }

// // console.log(checkfull(root))

// //=========================Convert min heap to max heap


// let arr = [1, 3, 5, 7, 9, 11];


// function maxheap(arr){

//   let n=arr.length;
//   let p=Math.floor((n/2)-1);

  

//   for(let i=p;i>=0;i--){
//     heapifydown(arr,n,i)
//   }

//   return arr;
// }

// function heapifydown(arr,n,i){


//   while(true){
//     let left=Math.floor((i*2)+1);
//     let right=Math.floor((i*2)+2);


//     let larger=i;

//     if(left<n && arr[left]>arr[larger]){
//       larger=left
//     }

//       if(right<n && arr[right]>arr[larger]){
//       larger=right
//     }


//     if(larger===i)break;

//     [arr[larger],arr[i]]=[arr[i],arr[larger]];

//     i=larger;

//   }


// }


// // console.log(maxheap(arr))


// //=====================sort in ascending order using heapsort


// let arr = [111, 3, 11, 7, 9, 11];


// function maxheap(arr){

//   let n=arr.length;
//   let p=Math.floor((n/2)-1);

  

//   for(let i=p;i>=0;i--){
//     heapifydown(arr,n,i)
//   }


//   for(let j=n-1;j>=0;j--){
//     [arr[j],arr[0]]=[arr[0],arr[j]];
//     heapifydown(arr,j,0)
//   }

//   return arr;
// }

// function heapifydown(arr,n,i){


//   while(true){
//     let left=Math.floor((i*2)+1);
//     let right=Math.floor((i*2)+2);


//     let larger=i;

//     if(left<n && arr[left]>arr[larger]){
//       larger=left
//     }

//       if(right<n && arr[right]>arr[larger]){
//       larger=right
//     }


//     if(larger===i)break;

//     [arr[larger],arr[i]]=[arr[i],arr[larger]];

//     i=larger;

//   }


// }


// console.log(maxheap(arr))

//=========================kth largest uusing heapsort



// let arr = [111, 3, 11, 7, 9, 12];


// function maxheap(arr,k){

//   let n=arr.length;
//   let p=Math.floor((n/2)-1);

  

//   for(let i=p;i>=0;i--){
//     heapifydown(arr,n,i)
//   }


//   for(let j=n-1;j>=n-k+1;j--){
//     [arr[j],arr[0]]=[arr[0],arr[j]];
//     heapifydown(arr,j,0)
//   }

//   return arr[0];
// }

// function heapifydown(arr,n,i){


//   while(true){
//     let left=Math.floor((i*2)+1);
//     let right=Math.floor((i*2)+2);


//     let larger=i;

//     if(left<n && arr[left]>arr[larger]){
//       larger=left
//     }

//       if(right<n && arr[right]>arr[larger]){
//       larger=right
//     }


//     if(larger===i)break;

//     [arr[larger],arr[i]]=[arr[i],arr[larger]];

//     i=larger;

//   }


// }


// console.log(maxheap(arr,3))

//========================implememnt tree and delete


// class Node{
//   constructor(data){
//     this.data=data;
//     this.left=null;
//     this.right=null;
//   }
// }


// class Tree{
//   constructor(){
//     this.root=null
//   }

//   insert(val){
//     let newNode=new Node(val);
//    if(this.root===null){
//       this.root=newNode;
//       return;
//    }

//    let node=this.root;

//   while(node!==null){
//      if(val%2===0){
//     if(node.left===null){
//       node.left=newNode;
//       return ;
//     }
//     node=node.left;
//    }else if(val%2!==0){
//       if(node.right===null){
//         node.right=newNode;
//         return;
//       }
//    node=node.right;
//    }
//   }
//   }


//   delete(val){
//     this.root=this.remove(this.root,val);
//   }


//   remove(node,val){
//   if(node===null)return null;

//     if(val%2===0 && val!==node.data){
//       node.left=this.remove(node.left,val);
//     }else if(val%2!==0  && val!==node.data){
//       node.right=this.remove(node.right,val);
//     }else if(val==node.data){
//       if(node.left===null && node.right===null){
//         return null;
//       }

//       if(node.left===null)return node.right;
//       if(node.right===null)return node.left;


//       let minNode=0;
//       if(val%2===0){
//         let minNode=this.findnodeleft(node.left);
//         node.data=minNode.data;
//         node.left=this.remove(node.left,minNode.data)
//       }else{
      
//         let minNode=this.findnoderight(node.right);
//         node.data=minNode.data;
//         node.right=this.remove(node.right,minNode.data)
//       }
//       }
//            return node;
//     }


//       findnodeleft(node){
//     if(node.left===null)return node;

//     return this.findnodeleft(node.left)
//   }

//     findnoderight(node){
//     if(node.right===null)return node;

//     return this.findnoderight(node.right)
//   }
//   }









// let t=new Tree();

// t.insert(1)
// t.insert(2)
// t.insert(14)
// t.insert(15)
// t.insert(18)
// t.insert(10)
// t.insert(122)


// t.delete(10)

// console.log(JSON.stringify(t.root,null,2))

//====================heap implementation

class Heap{
  constructor(){
    this.heap=[];

  }

  insert(val){
    this.heap.push(val);
    this.heapifyup()
  }

  heapifyup(){
    let i=this.heap.length-1;
    

    while(i>0){
      let p=Math.floor((i-1)/2);
      if(this.heap[p]<=this.heap[i])break;
      [this.heap[p],this.heap[i]]=[this.heap[i],this.heap[p]];

      i=p;
    }
  }

  extractmin(){
    let min=this.heap[0];
    this.heap[0]=this.heap.pop()
    this.heapifydown()
  }


  heapifydown(){
    let i=0;
    let n=this.heap.length
    while(true){
      let smallest=i;
      let left=Math.floor((n*2)+1);
      let right=Math.floor((n*2)+2);

      if(left<n  && this.heap[smallest]>this.heap[left]){
        smallest=left}


          if(left<n  && this.heap[smallest]>this.heap[left]){
        smallest=left
      }

      if(smallest=i)break;

      [this.heap[smallest],this.heap[i]]=[this.heap[i],this.heap[smallest]]

      i=smallest;
    }


   
    }
  }

