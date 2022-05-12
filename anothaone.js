class LinkedList {
    constructor() {
        this.ptr = null;
        this.head = null;
    }



    addNode(data) {
        const n = new node(data, this.head);
        this.head = n;
    }

    searchLinkedList(q) {
        this.ptr = this.head;
        while (this.ptr != null) {
            if (this.ptr.data == q) {
                return 't';
            }
            this.ptr = this.ptr.next;
        }
        return 'f';
    }

}

class node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

const ll = new LinkedList();

ll.addNode(55);
ll.addNode(66);
ll.addNode(77);

console.log(ll.searchLinkedList(78));

console.log(ll);