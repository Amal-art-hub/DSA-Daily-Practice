//============insert in minheap

// let heap=[2, 5, 8, 10, 15, 20, 30];


// function heapify(heap){
    
//     heap.push(1);
//     let i=heap.length-1;
    
    
//     while(i>0){
//         let para=Math.floor((i-1)/2);
        
//         if(heap[i]<heap[para]){
//             [heap[para],heap[i]]=[heap[i],heap[para]]
        
//         i=para;
            
//         }else{
//             break
//         }
        
        
//     }
    
//     return heap;
// }

// console.log(heapify(heap));

//===============delete the elem from maxheap

let heap=[50,40,30,20];

function heapfy(heap){
    
    if(heap.length===0)return null;
    
    
    
    let root=heap[0];
    
     heap[0]=heap[heap.length-1];
     heap.pop();
     
     
     let i=0;
     
     while(true){
         
         
        let left=Math.floor((i*2)+1);
        let right=Math.floor((i*2)+2);
        let  smallest=i;
        
        if(left<heap.length  && heap[left]>heap[smallest]){
            smallest=left
        }
           
        if(right<heap.length  && heap[right]>heap[smallest]){
            smallest=right
        }
        
        
        if(smallest===i)break;
        
        [heap[i],heap[smallest]]=[heap[smallest],heap[i]];
        i=smallest
         
     }
     
     return {"heap": heap,
         "deleted":root
     }
    
}



console.log(heapfy(heap));