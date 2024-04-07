type QNode<T> = {
    value: T,
    next?: QNode<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        let new_node: QNode<T> = {value: item} as QNode<T>;
        if (this.length === 0) {
            this.head = this.tail = new_node;
            this.tail!.next = new_node;
        } else {
            this.tail!.next = new_node;
            this.tail = new_node;
        }

        ++this.length;
    }
    deque(): T | undefined {
        if (this.length === 0) {
            return undefined
        }
        
        let node_to_deque: T | undefined = this.head?.value;
        this.head = this.head?.next

        --this.length;
        return node_to_deque
    } 
    peek(): T | undefined {
        return this.head?.value
    }
}