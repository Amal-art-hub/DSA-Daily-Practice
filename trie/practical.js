
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





