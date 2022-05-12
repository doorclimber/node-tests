let ptr = null;

class LinkedList2 {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertHead(data) {
        const newNode = new node(data, this.head);
        this.head = newNode;
        this.length++;
    }

    searchList(q) {
        ptr = this.head;
        for (let i = 0; i < this.length; i++){
            if (ptr.data == q){
                return 'yes';
            }else {
                ptr = ptr.next;
            }
        }
        return 'no';
    }
}

class node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

let ll2 = new LinkedList2();
ll2.insertHead('frog');
ll2.insertHead('squirrel');
ll2.insertHead('Anton');
ll2.insertHead('reef');
ll2.insertHead('dug');

let answer = ll2.searchList('anton');

console.log(answer);
