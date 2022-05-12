function Tree() {
    this.head = null;

    this.addNode = function(data) {
        const node = this.head;
        if (node === null) {
            this.head = new Node(data);
            return;
        }
        else {
            const helpSearch = function (node) {
                if (data > node.data) {
                    if (node.more === null) {
                        node.more = new Node(data);
                        return;
                    }
                    else if (node.more !== null) {
                        return helpSearch(node.more);
                    }
                }
                if (data <= node.data) {
                    if (node.less === null) {
                        node.less = new Node(data);
                        return;
                    }
                    else if (node.less !== null) {
                        return helpSearch(node.less);
                    }
                    else {
                        return null;
                    }
                }
            };
            return helpSearch(node);
        }
    }


    this.inOrder = function() {
        const helpPreOrder = function(node) {
            if (node !== null) {
                helpPreOrder(node.less);
                console.log(node.data);
                helpPreOrder(node.more);
                
            }
        }
        helpPreOrder(this.head);
    }
}


function Node(data, less = null, more = null) {
    this.less = less;
    this.data = data;
    this.more = more;
    
}

const tree = new Tree();

tree.addNode(10, tree.head);
tree.addNode(5, tree.head);
tree.addNode(15, tree.head);
tree.addNode(7, tree.head);
tree.addNode(9, tree.head);
tree.addNode(30, tree.head);
tree.addNode(22, tree.head);
tree.addNode(4, tree.head);
tree.addNode(18, tree.head);
tree.addNode(13, tree.head);

console.log(tree.inOrder());

//console.log(tree);