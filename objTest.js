function LinkedList() {
    this.head = null;

    this.addNode = function(data) {
        let newNode = new Node(data, this.head);
        this.head = newNode;
    }
}

function Node(data, next) {
    this.data = data;
    this.next = next;
}

let ll = new LinkedList();
ll.addNode('dog');
ll.addNode('cat');
ll.addNode('pig');

console.log(ll);