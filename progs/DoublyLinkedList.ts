type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private tail?: Node<T>;
    private head?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        let new_node: Node<T> = {value: item} as Node<T>
        ++this.length;
        if (!this.head) {
            this.tail = this.head = new_node;
            return;
        }

        new_node.next = this.head;
        this.head.prev = new_node;
        this.head = new_node;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        let new_node: Node<T> = {value: item} as Node<T>
        ++this.length;
        let counter = 1;
        let curr_node = this.head;
        while (counter != idx) {
            ++counter;
            curr_node = curr_node?.next;
        }

        let after_curr = curr_node?.next;
        curr_node?.next = new_node;
    }
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}