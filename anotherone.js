let ptr = 0;

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(data) {
        let n = new Node(data, this.head);
        this.head = n;
    }

    searchnodes(queery) {
        ptr = this.head;
        while (ptr != null) {
            if (ptr.data == queery) {
                return "yes";
            }else {
                ptr = ptr.next;
            }
        }
        return 'no';
    }
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

ll = new LinkedList();

ll.addNode('pig');
ll.addNode('doggy');
ll.addNode('kitty');
ll.addNode('puppy');
ll.addNode('cat');

console.log(ll.searchnodes('cat'));

console.log(ll);