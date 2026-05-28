// //============insert in minheap

// // let heap=[2, 5, 8, 10, 15, 20, 30];


// // function heapify(heap){
    
// //     heap.push(1);
// //     let i=heap.length-1;
    
    
// //     while(i>0){
// //         let para=Math.floor((i-1)/2);
        
// //         if(heap[i]<heap[para]){
// //             [heap[para],heap[i]]=[heap[i],heap[para]]
        
// //         i=para;
            
// //         }else{
// //             break
// //         }
        
        
// //     }
    
// //     return heap;
// // }

// // console.log(heapify(heap));

// //===============delete the elem from maxheap

// // let heap=[50,40,30,20];

// // function heapfy(heap){
    
// //     if(heap.length===0)return null;
    
    
    
// //     let root=heap[0];
    
// //      heap[0]=heap[heap.length-1];
// //      heap.pop();
     
     
// //      let i=0;
     
// //      while(true){
         
         
// //         let left=Math.floor((i*2)+1);
// //         let right=Math.floor((i*2)+2);
// //         let  smallest=i;
        
// //         if(left<heap.length  && heap[left]>heap[smallest]){
// //             smallest=left
// //         }
           
// //         if(right<heap.length  && heap[right]>heap[smallest]){
// //             smallest=right
// //         }
        
        
// //         if(smallest===i)break;
        
// //         [heap[i],heap[smallest]]=[heap[smallest],heap[i]];
// //         i=smallest
         
// //      }
     
// //      return {"heap": heap,
// //          "deleted":root
// //      }
    
// // }



// // console.log(heapfy(heap));




// //============insert in minheap

// // let heap=[2, 5, 8, 10, 15, 20, 30];


// // function heapify(heap){
    
// //     heap.push(1);
// //     let i=heap.length-1;
    
    
// //     while(i>0){
// //         let para=Math.floor((i-1)/2);
        
// //         if(heap[i]<heap[para]){
// //             [heap[para],heap[i]]=[heap[i],heap[para]]
        
// //         i=para;
            
// //         }else{
// //             break
// //         }
        
        
// //     }
    
// //     return heap;
// // }

// // console.log(heapify(heap));

// //===============delete the elem from maxheap

// // let heap=[50,40,30,20];

// // function heapfy(heap){
    
// //     if(heap.length===0)return null;
    
    
    
// //     let root=heap[0];
    
// //      heap[0]=heap[heap.length-1];
// //      heap.pop();
     
     
// //      let i=0;
     
// //      while(true){
         
         
// //         let left=Math.floor((i*2)+1);
// //         let right=Math.floor((i*2)+2);
// //         let  smallest=i;
        
// //         if(left<heap.length  && heap[left]>heap[smallest]){
// //             smallest=left
// //         }
           
// //         if(right<heap.length  && heap[right]>heap[smallest]){
// //             smallest=right
// //         }
        
        
// //         if(smallest===i)break;
        
// //         [heap[i],heap[smallest]]=[heap[smallest],heap[i]];
// //         i=smallest
         
// //      }
     
// //      return {"heap": heap,
// //          "deleted":root
// //      }
    
// // }



// // console.log(heapfy(heap));



// //=============build a minheap 
// let arr = [40, 10, 30, 5, 20];


// function heapifyd(arr,n,i){
//     let smallest=i;
    
//     let left=i*2+1;
//     let right=i*2+2;
    
    
//     if(left<n  &&  arr[left]<arr[smallest]){
//         smallest=left;
//     }

//        if(right<n  &&  arr[right]<arr[smallest]){
//         smallest=right;
//     }


//     if(smallest !==i){
//         [arr[smallest],arr[i]]=[arr[i],arr[smallest]];
//         heapifyd(arr,n,smallest)
//     }

    
// }









// function buildminheap(arr){
    
    
//     let n=arr.length;
    
    
//     let lastpara=Math.floor(n/2)-1;
    
//     for(i=lastpara;i>=0;i--){
//         heapifyd(arr,n,i);
//     }
    
//     return arr;
// }


// console.log(buildminheap(arr))





//===========find the k the largest element

// let arr = [3, 2, 1, 5, 6, 4];
// let k = 2;

// class Minheap{
//   constructor(){
//       this.heap=[];
//   }
  
  
//   insert(num){
//       this.heap.push(num);
//       this.heapifyup();
//   }
  
  
    
//   heapifyup(){
//       let index=this.heap.length-1;
      
//       while(index>0){
//           let parent=Math.floor((index-1)/2);
          
          
//           if(this.heap[parent]>this.heap[index]){
//               [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]];
              
//               index=parent;
//           }else{
//               break;
//           }
//       }
//   }
  
  
  
//   remove(){
      
//       if(this.heap.length===1)return this.heap.pop();
      
      
//       let min=this.heap[0];
      
//       this.heap[0]=this.heap.pop();
      
      
      
//       this.heapifydown();
//       return min;
      
//   }
  
//   heapifydown(){
      
//      let index=0;
     
//      let length=this.heap.length;
     

     
     
//      while(true){
//           let left=index*2+1;
//       let right=index*2+2;
      
      
//            let smallest=index;
      
//       if(left<length  && this.heap[left]<this.heap[smallest]){
//           smallest=left;
//       }
      
        
//       if(right<length  && this.heap[right]<this.heap[smallest]){
//           smallest=right;
//       }
      
      
        
//      if(smallest !==index){
//          [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]];
//          index=smallest;
//      }else{
//          break;
//      }
      
//      }
   
      
      
//   }
  
  
//   peek(){
//      return this.heap[0];
//   }
    
// }



// function kth(arr,k){
//     let mheap=new Minheap();
    
//     for(let num of arr){
//         mheap.insert(num);
        
        
//             if(mheap.heap.length>k){
//         mheap.remove()
//     }
//     }
    

    
    
//     return mheap.peek()
// }




// console.log(kth(arr,2));





//===========find the k the smallest element

let arr = [3, 2, 1, 5, 6, 4];
let k = 2;

class Minheap{
  constructor(){
      this.heap=[];
  }
  
  
  insert(num){
      this.heap.push(num);
      this.heapifyup();
  }
  
  
    
  heapifyup(){
      let index=this.heap.length-1;
      
      while(index>0){
          let parent=Math.floor((index-1)/2);
          
          
          if(this.heap[parent]<this.heap[index]){
              [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]];
              
              index=parent;
          }else{
              break;
          }
      }
  }
  
  
  
  remove(){
      
      if(this.heap.length===1)return this.heap.pop();
      
      
      let min=this.heap[0];
      
      this.heap[0]=this.heap.pop();
      
      
      
      this.heapifydown();
      return min;
      
  }
  
  heapifydown(){
      
     let index=0;
     
     let length=this.heap.length;
     

     
     
     while(true){
          let left=index*2+1;
      let right=index*2+2;
      
      
           let smallest=index;
      
      if(left<length  && this.heap[left]>this.heap[smallest]){
          smallest=left;
      }
      
        
      if(right<length  && this.heap[right]>this.heap[smallest]){
          smallest=right;
      }
      
      
        
     if(smallest !==index){
         [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]];
         index=smallest;
     }else{
         break;
     }
      
     }
   
      
      
  }
  
  
  peek(){
     return this.heap[0];
  }
    
}



function kth(arr,k){
    let mheap=new Minheap();
    
    for(let num of arr){
        mheap.insert(num);
        
        
            if(mheap.heap.length>k){
        mheap.remove()
    }
    }
    

    
    
    return mheap.peek()
}




console.log(kth(arr,2));


//=============convert any arry or minheap into maxheap

let arr = [1, 3, 5, 7, 9, 8];



function heapifydown(arr,n,i){
    let largest=i;
    
    
    let left=Math.floor((i*2)+1);
    let right=Math.floor((i*2)+2);
    
    

    
    if(left<n  &&  arr[largest]<arr[left]){
        largest=left
    }
    
    
    
    if(right<n  &&  arr[largest]<arr[right]){
        largest=right
    }
    
    
    if(largest !==i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]]
        heapifydown(arr,n,largest);
        
    }
}

function cmax(arr){
    let n=arr.length;
    let lpara=Math.floor((n/2)-1);
    
    for(let i=lpara;i>=0;i--){
        heapifydown(arr,n,i)
    }
    
    return arr;
}


console.log(cmax(arr));