/**
 * Node class
 */
class ListNode {
    constructor(value = null, next = null) {
        this.value = value; // value
        this.next = next; // link to next node
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        if (this.head && this.tail) {
            const node = new ListNode(value, this.head);
            this.head = node;

        } else {
            const node = new ListNode(value);
            this.head = node;
            this.tail = node;
        }
        this.size++;
    }
    append(value) {
        if (this.head && this.tail) {
            const node = new ListNode(value);
            this.tail.next = node;
            this.tail = node;

        } else {
            const node = new ListNode(value);
            this.head = node;
            this.tail = node;
        }
        this.size++;
    }

    /**
     * 
     * @param {number} index 
     */
    at(index) {
        if (index >= this.size || index < 0)
            return undefined;

        var element = this.head;
        for (let i = 0; i < index; i++) {
            element = element.next;
        }
        return element;
    }

    pop() {
        if (this.head) {
            const popped = this.tail;
            if (this.head.next == null) {
                this.head = null;
                this.size--;
                return popped;
            }
            this.at(this.size - 2).next = null;
            var newTail = this.at(this.size - 2);
            this.tail = newTail;
            this.size--;
            return popped;
        }
        return undefined;
    }

    contains(value) {
        for (let i = 0; i < this.size; i++) {
            if (this.at(i).value === value)
                return true;
        }
        return false;
    }

    find(value) {
        if (!this.contains(value))
            return null;

        for (let i = 0; i < this.size; i++) {
            if (this.at(i).value === value)
                return i;
        }
    }

    insertAt(value, index) {
        if (index >= 0 && index <= this.size) {
            const node = new ListNode(value, this.at(index))
            if (index == 0) {
                this.head = node;
            } else if (index == this.size) {
                this.at(index - 1).next = node;
                this.tail = node;
            } else {
                this.at(index - 1).next = node;
            }
            this.size++;
        }
    }
    removeAt(index) {
        if (index >= 0 && index < this.size) {
            if (index == 0) {
                this.head = this.at(index + 1);
            } else if (index == this.size - 1) {
                this.at(index - 1).next = this.at(index).next;
                this.tail = this.at(index - 1);
            } else {
                this.at(index - 1).next = this.at(index).next;
            }
            this.size--;
        }
    }
    toString() {
        var first = this.head;
        var str = "";
        while (first) {
            str += `( ${first.value} ) -> `;
            first = first.next;
        }
        return str + "null";
    }
}


const linkedList = new LinkedList();

linkedList.append(5);
linkedList.append(2)
linkedList.prepend(3);
linkedList.append(6);
linkedList.prepend(1);