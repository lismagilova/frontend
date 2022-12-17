class Node{
    constructor(n) {
        this.n= n;
        this.left = null;
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    add(n) {
    const newNode = new Node(n)
        if (this.root === null) {
            this.root = newNode;
            return
        }
        let curNode = this.root;
        while (curNode) {
            if (newNode.n < curNode.n) {
                if (!curNode.left) {
                    curNode.left = newNode;
                    return
                }
                curNode = curNode.left
            }
            else {
                if (!curNode.right) {
                    curNode.right = newNode;
                    return
                }
                curNode = curNode.right
            }
        }
    }
    order(node, call) {
        if(!node){
            return
        }
        if(call) {
            call(node)
        }
        this.order(node.left, call);
        this.order(node.right, call)
    }

    DFS(call) {
            return this.order(this.root, call)
    }

    BFS(call) {
        const q = [this.root];
        while (q.length) {
            const node = q.shift();
            call(node);
            if(node.left) {
                q.push(node.left)
            }
            if(node.right) {
                q.push(node.right)
            }
        }

    }
}


let myTree = new Tree();
myTree.add(10);
myTree.add(11);
myTree.add(1);
myTree.add(7);
console.log(myTree);


myTree.DFS((node)=>{
    console.log(node.n)
});


myTree.BFS((node)=>{
    console.log(node.n)
});