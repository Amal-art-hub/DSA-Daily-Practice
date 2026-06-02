//Find the longest consecutive repeating characters in a string


let str="aaaabbaaccccddddd";

function op(str){
    let maxcha=str[0];
    let maxcount=0;

    let currcha=str[0];
    let currcount=0;

    for(let i=0;i<str.length;i++){
    
        if(str[i]===currcha){
            currcount++;
        }else{
            currcha=str[i];
            currcount=1;
        }

        if(currcount>maxcount){
            maxcount=currcount;
            maxcha=currcha
        }

    }

    return maxcha;
};

console.log(op(str));