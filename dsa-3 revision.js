class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;

    }
}

class bst{
    constructor(){
        this.root=null;
    }

insert(value){

    let newNode=new Node(value);
    if(this.root===null){
        this.root=newNode;
        return;

    }

    let curr=this.root;

    while(curr !==null){
        if(value<curr.data){
            if(curr.left===null){
                curr.left=newNode;
                return;
            }
            curr=curr.left;
        }else if(value>curr.data){
            if(curr.right===null){
                curr.right=newNode;
                return;
            }

            curr=curr.right;
        }else{
            return;
        }
    }
}


print(node=this.root){
    if(node===null)return ;

    this.print(node.left);
    console.log(node.data);
    this.print(node.right);
}

delete(value,node=this.root){
    if(node===null)return null;


    if(value<node.data){
        node.left=this.delete(value,node.left);
    }else if(value>node.data){
        node.right=this.delete(value,node.right);
    }else{


        if(node.left===null && node.right===null)return null;

        if(node.left===null)return node.right;
        if(node.right===null)return node.left;

        let minright=this.minNode(node.right);
        node.data=minright.data;

        node.right=this.delete(minright.data,node.right)



    }

    return node;
}

minNode(node){
    if(node===null)return;
   
    while(node.left!==null){
        node=node.left;
    }
    return node;
}


search(value,node=this.root){
    if(node===null)return false;

    if(value===node.data)return true;

    if(value<node.data)  return this.search(value,node.left)

        return this.search(value,node.right);
}


checkbst(node=this.root,min=-Infinity,max=Infinity){

    if(node===null)return true;

    if(node.data<=min || node.data >=max)return false;

    return (
        this.checkbst(node.left,min,node.data) && this.checkbst(node.right,node.data,max)
    )
}

}


let b=new bst();

b.insert(1)
b.insert(2)
b.insert(5)
b.insert(7)
b.insert(9)
b.insert(10)
b.insert(100)



b.delete(7)


b.print()

// console.log(b.search(10))

console.log(b.checkbst());