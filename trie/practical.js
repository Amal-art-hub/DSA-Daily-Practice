
//=========storing and printing words
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
        
        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch]=new TrieNode();
            }
            node=node.children[ch];
        }
    node.isEnd=true;    
        
    }
    
    print(node=this.root,word=""){
        
        if(node.isEnd){
            console.log(word);
        };
        
        for(let ch in node.children){
            this.print(node.children[ch],word+ch);
        }
        
        
    }
    
    
    search(word){
        let node=this.root;
        
        for(let ch of word){
            if(!node.children[ch]){
                return false;
            }
            
            node=node.children[ch]
        }
        
        return node.isEnd;
    }
        
    
    prefix(word){
        let node=this.root;
        
        for(let ch of word){
            if(!node.children[ch]){
                return false;
            }
            
            node=node.children[ch]
        }
        
        return true;
    }


    autocomplete(prefix){
         let node=this.root;

         for(let ch of prefix){
            if(!node.children[ch]){
                return [];
            }

            node=node.children[ch];
         }

         let result=[];

      function dfs(cnode,word){


            if(cnode.isEnd){
                result.push(word);
            }

            for(let ch in cnode.children){
                dfs(cnode.children[ch],word+ch)
            }
        }
         dfs(node,prefix);

       
return result;
    }
    
    
    
}   


let tr=new Trie();

tr.insert("cat");
tr.insert("car");
// tr.print();


// console.log(tr.search("ca"));
// console.log(tr.prefix("ca"))

console.log(tr.autocomplete("ca"));

//===================create a trie and fin out longest prefix


class TrieNode{
    constructor(){
        this.children={};
        this.isEnd=null;
        
    }
}



class trie{
    constructor(){
        this.root=new TrieNode();
    }
    
    insert(word){
        let node=this.root;
        
        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch]=new TrieNode();
                
            }
            
            node=node.children[ch];
        }
        
        
        node.isEnd=true;
        
    }
    
    
    longestCommprefix(word){
        let node=this.root;
        
        
        let prefix="";
        
        
        while(Object.keys(node.children).length===1 && !node.isEnd){
            let ch=Object.keys(node.children)[0]
            prefix +=ch;
            node=node.children[ch];
        }
        
        return prefix;
    }
    
    
    
}







let tr=new trie();
tr.insert("cat");
tr.insert("catman");

console.log(tr.longestCommprefix());





//============7-06-2026
///===================implementation of trie with insert,search,startwith,autocomlte

class TrieNode{
    constructor(){
        this.children={};
        this.endOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    
    insert(word){
        let curr=this.root;
        
        for(let cha of word){
            if(!curr.children[cha]){
                curr.children[cha]=new TrieNode();
            }
            curr=curr.children[cha]
        }
        
        curr.endOfWord=true;
        
    }
    
    search(word){
        
        let curr =this.root;
        
        for(let cha of word){
            if(!curr.children[cha]){
                return false;
            }
            
            curr=curr.children[cha];
            
        }
        
        return curr.endOfWord;
        
        
    }
    
    
    startwith(prefix){
        let curr=this.root;
        
        for(let cha of prefix){
            if(!curr.children[cha]){
                return false;
            }
            curr=curr.children[cha];
        }
        
        return true;
    }
    
    autocomplte(prefix){
        let curr=this.root;
        
        for(let cha of prefix){
            if(!curr.children[cha]){
                return [];
            }
            curr=curr.children[cha];
        }
        
        let result=[];
        
        this.dfs(curr,prefix,result);
        return result
    }
    
    
    dfs(node,word,result){
        if(node.endOfWord){
            result.push(word)
        }
        
        for(let char in node.children){
            this.dfs(node.children[char],word+char,result)
        }
    }
    
}


let tr=new Trie();
tr.insert("cat");
tr.insert("caten");
tr.insert("cot")

// console.log(tr.search("caj"));
console.log(tr.autocomplte("ca"))
console.log(tr.startwith("co"))


///==============longest prefix

class TrieNode{
    constructor(){
        this.children={};
        this.endOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    
    insert(word){
        let curr=this.root;
        
        for(let cha of word){
            if(!curr.children[cha]){
                curr.children[cha]=new TrieNode();
            }
            curr=curr.children[cha]
        }
        
        curr.endOfWord=true;
        
    }
    
    search(word){
        
        let curr =this.root;
        
        for(let cha of word){
            if(!curr.children[cha]){
                return false;
            }
            
            curr=curr.children[cha];
            
        }
        
        return curr.endOfWord;
        
        
    }
    
    
    startwith(prefix){
        let curr=this.root;
        
        for(let cha of prefix){
            if(!curr.children[cha]){
                return false;
            }
            curr=curr.children[cha];
        }
        
        return true;
    }
    
    autocomplte(prefix){
        let curr=this.root;
        
        for(let cha of prefix){
            if(!curr.children[cha]){
                return [];
            }
            curr=curr.children[cha];
        }
        
        let result=[];
        
        this.dfs(curr,prefix,result);
        return result
    }
    
    
    dfs(node,word,result){
        if(node.endOfWord){
            result.push(word)
        }
        
        for(let char in node.children){
            this.dfs(node.children[char],word+char,result)
        }
    }
    
}


let tr=new Trie();
tr.insert("catel");
tr.insert("caten");
tr.insert("caty")

// console.log(tr.search("caj"));
// console.log(tr.autocomplte("ca"))
// console.log(tr.startwith("co"))




function long(node){
    let curr=node;
    let result="";
    
    while(true){
        let keys=Object.keys(curr.children);
        
        if(keys.length !==1 ||curr.endOfWord){
            break;
        }
        
        let ch=keys[0];
        result +=ch;
        
        curr=curr.children[ch];
        
    }
    
    return result;
}


console.log(long(tr.root))

//===============impementing the trie


class Node{
    constructor(){
        this.childNode={};
        this.isEnd=false;

    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let node=this.root;

        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch]=new Node();
            }
            node=node.children[ch];
        }

        node.isEnde=true;

    }



    search(word){
        let node=this.root;


        for(let ch of word){
            if(!node.children[ch]){
                return false;
            }

            node=node.children[ch]
        }

        return node.isEnd===true;

    }

    startwith(word){
        let node
    }


}