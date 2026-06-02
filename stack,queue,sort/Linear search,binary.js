// What iis  a linear search

// "Linear Search is a sequential algorithm that checks every element in a list one by one until it finds the target. It's an $O(n)$ time complexity algorithm that is best used for unsorted data or small datasets where sorting overhead isn't worth it. It’s also the standard way to search through a Linked List since we don't have random access to elements


// 1. Time ComplexityThe time complexity of Linear Search is $O(n)$, where $n$ is the number of elements in the list.
// The space complexity of Linear Search is $O(1)$ (Constant Space)



// binary search

// "Binary Search is an efficient Divide and Conquer algorithm used to find a target element in a sorted data structure. Instead of checking every element one 

// . The Step-by-Step Logic (The "How")
// "The algorithm works by using three pointers: low, high, and mid.

// It calculates the mid point of the current range.

// If the mid element is the target, we return its index.

// If the target is smaller than the mid, we discard the right half by moving the high pointer to mid - 1.

// If the target is larger, we discard the left half by moving the low pointer to mid + 1.
// This process repeats until the target is found or the pointers cross."by one, it repeatedly halves the search space, which makes it significantly faster than Linear Search for large datasets."


// 3. Complexity (The Technical Stats)Time Complexity: * Worst/Average Case: $O(\log n)$. This is because we reduce the search area by half in every step.Best Case: $O(1)$ (if the target is the very first middle element we check).Space Complexity: * $O(1)$ for the iterative approach (using a while loop), which is usually preferred in interviews because it's more memory-efficient.





// binar search 
let Input=[10, 20, 30, 40];
let key = 30;

function binarysearch( Input,key){

    let left=0;
    let right=Input.length;


    while(left<=right){


        let mid=Math.floor((left+right)/2);

        if(Input[mid]===key){
            return mid;
        }else if(Input[mid]<key){
            left=mid+1;
        }else{
            right=mid-1;
        }

   return -1;

    }

}


console.log(binarysearch(Input,30))