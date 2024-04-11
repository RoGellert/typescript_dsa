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
        if (idx === this.length - 1) {
            this.prepend(item);
            return;
        }

        if (idx === this.length - 1) {
            this.append(item);
            return;
        }

        let new_node: Node<T> = {value: item} as Node<T>
        ++this.length;
        if (!this.head || !this.tail) {
            this.tail = this.head = new_node;
            return;
        }
        
        let counter = 0;
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