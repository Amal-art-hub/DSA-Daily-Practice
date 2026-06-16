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


class TrieNode{
    constructor(){
        this.children={};
        this.isEnd=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }


insert(word){
    let node=this.root;

    for(let char of word){
        if(!node.children[char]){
            node.children[char]=new TrieNode();
        }
        node=node.children[char]
    }

    node.isEnd=true;
}


search(word){

    let node=this.root;

    for(let cha of word){
        if(!node.children[cha]){
            return false;
        }
        node=node.children[cha]
    }

    return node.isEnd;

}


print(){
    this.dfs(this.root,"");
}

dfs(node,word){
    if(node.isEnd){
        console.log(word);
    }

    for(let char in node.children){
        this.dfs(node.children[char],word+char)
    }
}


autocomplete(prefix){

    let node=this.root;

    for(let cha of prefix){
        if(!node.children[cha]){
            return []
        }

        node=node.children[cha];
    }

    let result=[];


let dfs=(node,word)=>{
    if(node.isEnd){
        result.push(word)
    }

    for(let cha in node.children){
        dfs(node.children[cha],word+cha)
    }
}

dfs(node,prefix)

return result;
}


delete(word){
    this.dfsd(this.root,word,0);
}

dfsd(node,word,i){

if(i===word.length){
    if(!node.isEnd){
        return false;
    }

    node.isEnd=false;
    return Object.keys(node.children).length===0;
}

let cha=word[i];

if(!node.children[cha]){
    return false;
}

let letdeletecha=this.dfsd(node.children[cha],word,i+1);

if(letdeletecha){
    delete node.children[cha]

    return(
        Object.keys(node.children).length===0  && !node.isEnd
    )
}

return false;




}


}


let t=new Trie();

t.insert("amal");
t.insert("amalk");
t.insert("amall");
t.insert("kaal");
t.insert("al");

// t.print();

console.log(t.autocomplete("am"))


t.delete("kaal");
t.print();