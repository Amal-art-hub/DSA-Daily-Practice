// //

// //=================create a simple binary tree and find the lca of 5,7

// // class Node{
// //     constructor(data){
// //         this.data=data;
// //         this.left=null;
// //         this.right=null;
// //     }
// // }

// // let arr=[1,2,3,4,5,6,7,8];

// // function insert(arr){

// //     let root=new Node(arr[0]);

// //     let q=[root];

// //     let i=1;

// //     while(i<arr.length){

// //         let curr=q.shift();

// //         if(i<arr.length){
// //             curr.left=new Node(arr[i]);
// //             q.push(curr.left);
// //             i++;
// //         }

// //         if(i<arr.length){
// //             curr.right=new Node(arr[i]);
// //             q.push(curr.right);
// //             i++
// //         }

// //     }

// //     return root;

// // }
// // let root=insert(arr);
// // console.log(root);

// // function lca(root,p1,p2){

// //     if(root===null){
// //         return null;
// //     }

// //     if(p1<root.data  && p2<root.data){
// //         return lca(root.left,p1,p2);
// //     }

// //     if(p1>root.data )

// // }

// //=================create a bst and find smallest elemnt in bst

// // class Node{
// //     constructor(data){
// //         this.data=data;
// //         this.left=null;
// //         this.right=null;
// //     }
// // }

// // let arr= [10, 5, 15, 3, 7, 12, 18];

// // function insert(node,ele){
// //     if(node===null){
// //         return new Node(ele);
// //     };

// //     if(ele<node.data){
// //         node.left=insert(node.left,ele);
// //     }else{
// //         node.right=insert(node.right,ele);
// //     }

// //     return node;
// // }

// // function bst(arr){

// //     let root =null;
// //   for(let ele of arr){
// //       root=insert(root,ele)
// //   }

// //   return root;
// // }

// // function display(node){
// //     if(node===null)return;

// //     display(node.left);
// //     console.log(node.data);
// //     display(node.right);

// // }

// // let root=bst(arr);
// // // display(root);

// // //finding the smallest
// // // function smallest(node){
// // //     if(node===null)return null;

// // //     while(node.left !==null){
// // //         node=node.left;
// // //     }

// // //     return node.data;
// // // }

// // //finding the smallest by rescursion

// // function smallest(node){
// //     if(node===null)return null;

// //   if(node.left===null){
// //       return node.data;

// //   }

// //   return smallest(node.left);

// // }

// // console.log(smallest(root));

// //==========create simple tree and find the smallest elemet

// // class Node{
// // constructor(data){
// // this.data=data;
// // this.left=null;
// // this.right=null;
// // }
// // }

// // // let arr=[1,2,3,4,5,6,7,8];

// // // function Bt(arr){
// // // let root=new Node(arr[0]);

// // // let q=[root];
// // // let i=1;

// // // while(i<arr.length){

// // //     let curr=q.shift();

// // //     if(i<arr.length){
// // //         curr.left=new Node(arr[i])
// // //         q.push(curr.left)
// // //         i++;
// // //     }

// // //     if(i<arr.length){
// // //         curr.right=new Node(arr[i]);
// // //         q.push(curr.right);
// // //         i++;
// // //     }

// // // }

// // // return root

// // // }

// // // function small(node){
// // // if(node===null)return Infinity;

// // // let left=small(node.left);
// // // let right=small(node.right);

// // // return Math.min(node.data,left,right);

// // // }

// // // let root=Bt(arr);

// // // console.log(small(root))

// // ///==================create bst and find second larget element

// // class Node{
// // constructor(data){
// // this.data=data;
// // this.left=null;
// // this.right=null;
// // }
// // }

// // let arr= [10, 5, 15, 3, 7, 12, 18];

// // function insert(node,val){
// // if(node===null)return new Node(val);

// // ```
// // if(val<node.data){
// //     node.left=insert(node.left,val);
// // }else{
// //     node.right=insert(node.right,val);
// // }

// // return node;
// // ```

// // }

// // function print(node){
// // if(node===null){
// // return;
// // }

// // ```
// // print(node.left);
// // console.log(node.data);
// // print(node.right);
// // ```

// // }

// // function bst(arr){
// // let root=null;

// // ```
// // for(let val of arr){
// //     root=insert(root,val)
// // }

// // return root;
// // ```

// // }

// // let root=bst(arr);

// // // print(root);

// // //========find the second largest largest

// // // function slarg(root){
// // //     if(root===null ||(root.left===null && root.right===null)){
// // //         return "no second largest element"
// // //     }

// // //      let curr=root;

// // //   while(curr){

// // //          if(curr.right && curr.right.left ===null && curr.right.right===null){
// // //          return curr.data;
// // //      }

// // //      if(curr.right===null ){
// // //          let temp=curr.left;

// // //          while(temp.right!==null){
// // //              temp=temp.right;
// // //          }

// // //          return temp.data

// // //      }

// // //       curr=curr.right;

// // //   }

// // // }

// // // console.log(slarg(root))

// // //smallest and largest

// // // function largest(root){
// // //     if(root===null){
// // //         return "no tree";
// // //     }

// // //     let curr=root;

// // //     while(curr.left!==null){
// // //         curr=curr.left;
// // //     }

// // //     return curr.data;
// // // }

// // // console.log(largest(root))

// // //  function slarg(root){
// // //     if(root===null ||(root.left===null && root.right===null)){
// // //         return "no second smallest element"
// // //     }

// // //      let curr=root;

// // //   while(curr){

// // //          if(curr.left && curr.left.left ===null && curr.left.right===null){
// // //          return curr.data;
// // //      }

// // //      if(curr.left===null ){
// // //          let temp=curr.right;

// // //          while(temp.left!==null){
// // //              temp=temp.left;
// // //          }

// // //          return temp.data

// // //      }

// // //       curr=curr.left;

// // //   }

// // // }

// // // console.log(slarg(root))

// // //==================finding k th largest element

// // // function kthlarg(root,k){
// // // let count=0;
// // // let ans=null;

// // // function dfs(node){
// // //     if(node===null  ||  ans !==null){
// // //         return;
// // //     }

// // //     dfs(node.left);
// // //      count++;

// // //      if(count===k){
// // //          ans=node.data;
// // //          return;
// // //      }

// // //      dfs(node.right);
// // // }

// // // dfs(root);

// // // return ans;
// // // }

// // // console.log(kthlarg(root,1))

// // //=======================closest element to target

// // function clsest(root,tar){
// // let closest=root.data;

// // while(root !==null){
// // if(Math.abs(tar-root.data)<Math.abs(tar-closest)){
// // closest=root.data;
// // }

// // ```
// // if(tar<root.data){
// //     root=root.left
// // }else if(tar>root.data){
// //     root=root.right
// // }else{
// //     return root;
// // }
// // ```

// // }

// // return closest;

// // }

// // console.log(clsest(root,13))


// //=======creating bst and  inserting ,searching,deleteing,preorder,postorder,inorder

// let arr = [50, 30, 70, 20, 40, 60, 80];

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
    
//     insert(val){
        
//         let newNode=new Node(val)
//         if(this.root ===null){
//             this.root=newNode;
//             return;
//         }
        
//         let curr=this.root;
        
        
//         while(true){
            
//             if(val<curr.data){
//                 if(curr.left===null){
//                     curr.left=newNode;
//                     return;
//                 }
//                 curr=curr.left;
//             }else{
//                 if(curr.right===null){
//                     curr.right=newNode;
//                     return;
//                 }
//                 curr=curr.right;
//             }
            
            
            
            
            
//         }
        
        
        
     
        
//     }
    
    
    
//        preorder(node=this.root){
//             if(node===null)return;
            
//             console.log(node.data);
//             this.preorder(node.left);
//             this.preorder(node.right);
            
//         }
        
        
//         inorder(node=this.root){
//             if(node===null)return;
//             this.inorder(node.left);
//             console.log(node.data);
//             this.inorder(node.right);
//         }
        
        
        
//         search(val){
//             let curr=this.root;
            
//             while(curr){
//                 if(curr.data===val)return true;
                
                
//                 if(val<curr.data){
//                     curr=curr.left;
//                 }else{
//                     curr=curr.right;
//                 }
//             }
            
//             return false;
            
//         }
        
        
//         delete(value){
//             this.root=this.deleteNode(this.root,value);
//         }
        
        
//         deleteNode(node,value){
//             if(node===null)return null;
            
//             if(value<node.data){
//                 node.left=this.deleteNode(node.left,value)
//             }else if(value>node.data){
//                 node.right=this.deleteNode(node.right,value)
//             }else{
//                 if(!node.right && !node.left){
//                     return null
//                 }
                
//                 if(!node.left) return node.right;
//                 if(!node.right)return node.left;
                
                
                
//                 let minNode=this.minNode(node.right);
                
//                 node.data=minNode.data;
                
//                 node.right=this.deleteNode(node.right,minNode.data);
                
//             }
            
//             return node;
//         }
        
        
//         minNode(node){
//             while(node.left){
//                 node=node.left
//             }
//             return node;
//         }
        
    
    
// }

// let B=new bst();


// for(let val of arr){
//     B.insert(val);
// }

// // B.preorder();
// // B.inorder();
// // B.search(50);
// // console.log(B.search(90));

// B.delete(50);
// B.inorder();


// function isvalidate(root,min=-Infinity,max=Infinity){
 
//     if(root===null)return true;
    
//     if(root.data<=min ||root.data >=max){
//         return false;
//     }
    
//     return (
//         isvalidate(root.left,min,root.data)  && isvalidate(root.right,root.data,max)
        
//         )
// }







// function level(root){
//     if(root===null )return null;
    
//     let q=[root];
    
//     while(q.length>0){
//         let node=q.shift();
        
        
//         console.log(node.data);
//         if(node.left){
//             q.push(node.left)
//         }
        
//         if(node.right){
//             q.push(node.right);
//         }
        
        
//     }
// }

// level(B.root);

// console.log(isvalidate(B.root));


// /////////////////////////////2-06-2026
// //========create a bt from arr

// let arr = [1, 2, 3, 4, 5, 6, 7];

// class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
//         this.right=null;
        
//     }
// }

// function Bt(arr){
    
//     if(arr.length===0)return null;
    
//     let root=new Node(arr[0]);
//     let q=[root];
//     let i=1;
    
//     while(i<arr.length){
//         let node=q.shift();
        
//         if(i<arr.length){
//             node.left=new Node(arr[i++]);
//             q.push(node.left)
//         }
        
        
//         if(i<arr.length){
//             node.right=new Node(arr[i++]);
//             q.push(node.right)
//         }
//     }
    
//     return root;
// }

// function preorder(root){
//     if(root===null)return null;
    
//     console.log(root.data);
//     preorder(root.left);
//     preorder(root.right);
// }

// let root=Bt(arr);

// preorder(root)

// //==========create bst from array

//  let arr = [1, 2, 3, 4, 5, 6, 7];
// class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
//         this.right=null;
        
//     }
// }


// function insert(node,val){
//     if(node===null)return new Node(val);
    
//     if(val<node.data){
//         node.left=insert(node.left,val);
//     }else{
//         node.right=insert(node.right,val);
//     }
    
//     return node;
    
// }





// function bst(arr){
//     let root=null;
//     for(let ele of arr){
//          root=insert(root,ele)
//     }
    
//     return root;
// }

// function inorder(root){
//     if(root===null)return null;
    
    
//     inorder(root.left);
//     console.log(root.data);
//     inorder(root.right);
// }

// let root=bst(arr);
// inorder(root)



// //========create a bt from arr

// let arr = [1, 9, 10, 4, 11, 6, 7];
// class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
//         this.right=null;
        
//     }
// }

// function Bt(arr){
    
//     if(arr.length===0)return null;
    
//     let root=new Node(arr[0]);
//     let q=[root];
//     let i=1;
    
//     while(i<arr.length){
//         let node=q.shift();
        
//         if(i<arr.length){
//             node.left=new Node(arr[i++]);
//             q.push(node.left)
//         }
        
        
//         if(i<arr.length){
//             node.right=new Node(arr[i++]);
//             q.push(node.right)
//         }
//     }
    
//     return root;
// }

// function preorder(root){
//     if(root===null)return null;
    
//     console.log(root.data);
//     preorder(root.left);
//     preorder(root.right);
// }

// let root=Bt(arr);

// preorder(root)


//===========creating bst from array

 let arr = [1, 2, 3, 4, 5, 6, 7];
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
        
    }
}


function insert(node,val){
    if(node===null)return new Node(val);
    
    if(val<node.data){
        node.left=insert(node.left,val);
    }else{
        node.right=insert(node.right,val);
    }
    
    return node;
    
}





function bst(arr){
    let root=null;
    for(let ele of arr){
         root=insert(root,ele)
    }
    
    return root;
}

function inorder(root){
    if(root===null)return null;
    
    
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

let root=bst(arr);
// inorder(root)





// ====================================================== convert bt to bst





// function storvalue(root,arr){
//     if(root===null)return ;
    
//     storvalue(root.left,arr);
//     arr.push(root.data);
//     storvalue(root.right,arr);
// }



// function builtbst(root,arr,index){
    
//     if(root===null)return;
//     builtbst(root.left,arr,index);
//     root.data=arr[index.i++];
//     builtbst(root.right,arr,index);
// }






// function bstconv(root){
//     let arr=[];
    
//     storvalue(root,arr);
    
//     arr.sort((a,b)=>a-b);
    
//     builtbst(root,arr,{i:0})
    
//     return root;
    
// }

// function inorder(root){
//     if(root===null)return ;
    
//     inorder(root.left);
//     console.log(root.data);
//     inorder(root.right);
    
    
// }


//  root=bstconv(root);
// inorder(root);


//====================================================================================3-06-2026

//==============fincing second largest in the tree in bst

// function slrg(root){
//     if(!root || (!root.left && !root.right)){
//         return null;
//     }

//     let curr=root;
//     let parent=null;

//     while(curr.right){
//         parent=curr;
//         curr=curr.right;
//     }


// if(curr.left){
//     let temp=curr.left;

//     while(temp.right){
//         temp=temp.right;
//     }

//     return temp.data;
// }
    




//     return parent.data;



// }


// console.log(slrg(root))


//=============================k th largest node


function kth(root,k){
    let count=0;
    let ans=null;
    
    
    
    function dfs(node){
        if(node===null)return;
        
        dfs(node.left);
        
        count ++;
        
        if(count===k){
            ans=node.data;
            return ;
        }
        
        dfs(node.right);
    }
    
    
    dfs(root);
    
    
    return ans;
    
    
    
    
}

console.log(kth(root,2))