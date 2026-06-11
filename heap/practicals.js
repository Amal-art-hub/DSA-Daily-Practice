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

    
// // }









// // function buildminheap(arr){
    
    
// //     let n=arr.length;
    
    
// //     let lastpara=Math.floor(n/2)-1;
    
// //     for(i=lastpara;i>=0;i--){
// //         heapifyd(arr,n,i);
// //     }
    
// //     return arr;
// // }


// // console.log(buildminheap(arr))





// //===========find the k the largest element

// // let arr = [3, 2, 1, 5, 6, 4];
// // let k = 2;

// // class Minheap{
// //   constructor(){
// //       this.heap=[];
// //   }
  
  
// //   insert(num){
// //       this.heap.push(num);
// //       this.heapifyup();
// //   }
  
  
    
// //   heapifyup(){
// //       let index=this.heap.length-1;
      
// //       while(index>0){
// //           let parent=Math.floor((index-1)/2);
          
          
// //           if(this.heap[parent]>this.heap[index]){
// //               [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]];
              
// //               index=parent;
// //           }else{
// //               break;
// //           }
// //       }
// //   }
  
  
  
// //   remove(){
      
// //       if(this.heap.length===1)return this.heap.pop();
      
      
// //       let min=this.heap[0];
      
// //       this.heap[0]=this.heap.pop();
      
      
      
// //       this.heapifydown();
// //       return min;
      
// //   }
  
// //   heapifydown(){
      
// //      let index=0;
     
// //      let length=this.heap.length;
     

     
     
// //      while(true){
// //           let left=index*2+1;
// //       let right=index*2+2;
      
      
// //            let smallest=index;
      
// //       if(left<length  && this.heap[left]<this.heap[smallest]){
// //           smallest=left;
// //       }
      
        
// //       if(right<length  && this.heap[right]<this.heap[smallest]){
// //           smallest=right;
// //       }
      
      
        
// //      if(smallest !==index){
// //          [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]];
// //          index=smallest;
// //      }else{
// //          break;
// //      }
      
// //      }
   
      
      
// //   }
  
  
// //   peek(){
// //      return this.heap[0];
// //   }
    
// // }



// // function kth(arr,k){
// //     let mheap=new Minheap();
    
// //     for(let num of arr){
// //         mheap.insert(num);
        
        
// //             if(mheap.heap.length>k){
// //         mheap.remove()
// //     }
// //     }
    

    
    
// //     return mheap.peek()
// // }




// // console.log(kth(arr,2));





// //===========find the k the smallest element

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
          
          
//           if(this.heap[parent]<this.heap[index]){
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
      
//       if(left<length  && this.heap[left]>this.heap[smallest]){
//           smallest=left;
//       }
      
        
//       if(right<length  && this.heap[right]>this.heap[smallest]){
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


// //=============convert any arry or minheap into maxheap

// let arr = [1, 3, 5, 7, 9, 8];



// function heapifydown(arr,n,i){
//     let largest=i;
    
    
//     let left=Math.floor((i*2)+1);
//     let right=Math.floor((i*2)+2);
    
    

    
//     if(left<n  &&  arr[largest]<arr[left]){
//         largest=left
//     }
    
    
    
//     if(right<n  &&  arr[largest]<arr[right]){
//         largest=right
//     }
    
    
//     if(largest !==i){
//         [arr[largest],arr[i]]=[arr[i],arr[largest]]
//         heapifydown(arr,n,largest);
        
//     }
// }

// function cmax(arr){
//     let n=arr.length;
//     let lpara=Math.floor((n/2)-1);
    
//     for(let i=lpara;i>=0;i--){
//         heapifydown(arr,n,i)
//     }
    
//     return arr;
// }


// console.log(cmax(arr));

// //=================heap sort
// let arr=[1,3,2,5,4];


// function heapifydown(arr,n,i){
    
//     let left=Math.floor((i*2)+1)
        
//     let right=Math.floor((i*2)+2)
//     let larg=i
    
//     if(left<n && arr[left]>arr[larg]){
       
//         larg=left
//     }
    
    
//        if(right<n && arr[right]>arr[larg]){
       
//         larg=right;
//     }
    
    
//     if(larg !==i){
//         [arr[larg],arr[i]]=[arr[i],arr[larg]];
//         heapifydown(arr,n,larg)
//     }
    
    
// }






// function hsort(arr){
//     let n=arr.length;
//     let par=Math.floor((n/2)-1);
    
//     for(let i=par;i>=0;i--){
//         heapifydown(arr,n,i)
//     }
    
//     for( i=n-1;i>=0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]];
        
        
//         heapifydown(arr,i,0);
//     }
    
//     return arr;
// }

// console.log(hsort(arr));



// //=========================3-06-2026
// //implementation of min heap


// class Minheap{
//     constructor(){
//         this.heap=[];
        
//     }
    
    
//     insert(value){
    
//     this.heap.push(value);
//     this.heapifyup();
    
// }
    
    
//     heapifyup(){
//         let index=this.heap.length-1;
        
//         while(index>0){
//             let parent=Math.floor((index-1)/2);
            
//             if(this.heap[parent]<=this.heap[index]){
//                 break;
//             }
            
//             [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]];
            
//             index=parent;
            
//         }
//     }
    
    
//     extractMin(){
//         if(this.heap.length===0){
//             return null;
//         }
        
//         if(this.heap.length===1){
//             return  this.heap.pop()
//         };
        
//         let min=this.heap[0];
        
//         this.heap[0]=this.heap.pop();
        
//         this.heapifydown();
        
//         return min;
//     }
    
    
//     heapifydown(){
        
//         let index=0;
        
//         while(true){
//             let left=2*index+1;
//             let right=2*index+2;
            
//             let smallest=index;
            
//             if(left<this.heap.length && this.heap[left]<this.heap[smallest]){
//                 smallest=left;
//             }
            
//             if(right<this.heap.length && this.heap[right]<this.heap[smallest]){
//                 smallest=right
//             }
            
//             if(smallest===index)break;
            
            
//             [this.heap[smallest],this.heap[index]]=
//             [this.heap[index],this.heap[smallest]]
            
//             index=smallest;
            
//         }
        
//     }
    
    
    
// }


// let h=new Minheap();

// h.insert(2)
// h.insert(4)
// h.insert(20)
// h.insert(6)
// h.insert(8)


// console.log(h.heap);


// console.log(h.extractMin());


// let arr= [10, 5, 20, 2, 8];

// //======================================
// // Output: [2, 5, 20, 10, 8]

// //converting array to min heap


// function minheap(arr){
//     let n=arr.length;
//     for(let i=Math.floor((n/2)-1);i>=0;i--){
//         heapifydown(arr,i,n);
//     }
    
//     return arr;
// }



// function heapifydown(arr,i,n){
    
//     while(true){
//         let left=Math.floor((2*i)+1);
//         let right=Math.floor((2*i)+2);
        
//         let smallest=i;
        
//         if(left<n && arr[left]<arr[smallest]){
//             smallest=left;
//         }
        
//         if(right<n && arr[right]<arr[smallest]){
//             smallest=right;
//         }
        
        
//         if(smallest===i)break;
        
        
//         [arr[smallest],arr[i]]=[arr[i],arr[smallest]];
        
//         i=smallest;
        
        
//     }
    
// }

// console.log(minheap(arr));

// //============heap implementation

// class Maxheap{
//     constructor(){
//         this.heap=[];
        
//     }
    
//     insert(value){
//         this.heap.push(value);
//         this.heapifyup();
//     }
    
    
//     heapifyup(){
        
//         let index=this.heap.length-1;
        
//         while(index>0){
//             let parent=Math.floor((index-1)/2);
            
//             if(this.heap[parent] >= this.heap[index]) break;
            
//              [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]];
             
//              index=parent;
//         }
        
//     }
    
//     delete(){
//         if(this.heap.length===0)return null;
//         if(this.heap.length===1)return this.heap.pop();
        
//         let max=this.heap[0];
//         this.heap[0]=this.heap.pop();
//         this.heapifydown();
//         return max;
//     }
    
    
//     heapifydown(){
        
        
//         let index=0;
//         let length=this.heap.length;
        
        
//         while(true){
//             let n=this.heap.length;
//             let left=Math.floor(index*2+1);
//             let right=Math.floor(index*2+2);
            
//             let largest=index;
            
//             if(left < n && this.heap[left]>this.heap[largest]){
//                 largest=left;
//             }
            
//             if(right < n && this.heap[right]>this.heap[largest]){
//                 largest=right;
//             }
            
//             if(largest===index){
//              break;
//             }
            
//                [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]]
            
//             index=largest;
//         }
        
//     }
    
    
    
// }



// let h=new Maxheap();

// h.insert(1);
// h.insert(2)
// h.insert(4)
// h.insert(5)
// h.insert(9)

// // console.log(h.heap);

// h.delete()
// console.log(h.heap);

// //=============kth largest elemet


// class MinHeap{

//     constructor(){

//         this.heap=[];



//     }



// insert(value){

//     this.heap.push(value);

//     this.heapifyup()

// }



// heapifyup(){

//     let n=this.heap.length

//     let index=n-1



// while(index>0){

//     let parent=Math.floor((index-1)/2);



// if(this.heap[parent]<=this.heap[index]){

   

// break;

// }



//   [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]];

//      index=parent;



// }



// }



// delete(){

//     let n=this.heap.length;

//     if(this.heap.length===0)return null;

//     if(this.heap.length===1)return this.heap.pop();

    

//     let min=this.heap[0];

//     this.heap[0]=this.heap.pop();



//     this.heapifydown();



//     return min;

// }







// heapifydown(){

// let index=0;

// let n=this.heap.length;







// while(true){

//     let smallest=index;

//     let left=Math.floor(2*index+1);

//     let right=Math.floor(2*index+2);



//     if(left<n && this.heap[left]<this.heap[smallest]){

//         smallest=left;

//     }

//     if(right<n && this.heap[right]<this.heap[smallest]){

//         smallest=right;

//     }



//     if(smallest===index)break;



//     [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]];



// //     index=smallest

// // }



// // }



// // peek(){

// //     return this.heap[0];

// // }



// // }







// // var findKthLargest = function(nums, k) {



// //     let H=new MinHeap()



// //     for(let num of nums){

// //         H.insert(num);



// //         if(H.Heap.length>k){

// //             H.delete()

// //         }

// //     }



// //     return H.peek()

    

// // };

// //===============================heap implementation

// class MinHeap{
//     constructor(){
//         this.heap=[];
       
//     }

//     insert(value){
//    this.heap.push(value);
//    this.heapifyup()
//     }

//     heapifyup(){
//         let index=this.heap.length-1;

//         while(index>0){
//             let parent=Math.floor((index-1)/2);

//             if(this.heap[parent]<this.heap[index]) break;

//             [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]];

//             index=parent;
//         }


//     }


//     delete(){
//         let min=this.heap[0];


//         this.heap[0]=this.heap.pop();

//         let index=0;
//         let n=this.heap.length;

//         while(true){
//             let left=Math.floor((index*2)+1);
//              let right=Math.floor((index*2)+2);

//           let smallest=index;

//           if(left<n && this.heap[left]< this.heap[smallest]){
//             smallest=left
//           }
          
//           if(right<n && this.heap[right]< this.heap[smallest]){
//             smallest=right
//           }

//           if(smallest===index)break;

//             [this.heap[smallest],this.heap[index]] = [this.heap[index],this.heap[smallest]];
//             index=smallest

//         }


//     }

//     print(){
//         console.log(this.heap);
//     }
// }


// let h=new MinHeap()

// h.insert(1)
// h.insert(4)
// h.insert(18)
// h.insert(11)
// h.insert(12)
// h.insert(10)
// h.delete()
// h.print()



//=================heap sort

let arr=[1,4,2,6,3,9];


function heapsort(arr){

    let n=arr.length;

    let p=Math.floor((n/2)-1);

    for(let i=p;i>=0;i--){
        heappifydown(arr,n,i)
    }

for(let j=arr.length-1;j>=0;j--){

    [arr[0],arr[j]]=[arr[j],arr[0]];


    heappifydown(arr,j,0);

}


return arr;
}



function heappifydown(arr,n,i){

    while(true){

        let largest=i;
        let left=Math.floor((i*2)+1)
        let right=Math.floor((i*2)+2)

        if(left<n  && arr[left]>arr[largest]){
            largest=left;
        }
        
        if(right<n  && arr[right]>arr[largest]){
            largest=right;
        }

        if(largest===i)break;

        [arr[largest],arr[i]]=[arr[i],arr[largest]];


        i=largest



    }

}


console.log(heapsort(arr))