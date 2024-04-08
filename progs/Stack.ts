type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private top?: Node<T>;

    constructor() {
        this.top = undefined;
        this.length = 0;
    }

    push(item: T): void {
        let new_node: Node<T> = {value: item} as Node<T>;
        ++this.length; 
        if (!this.top) {
            this.top = new_node;
            return;
        }

        new_node.next = this.top;
        this.top = new_node;
    }
    pop(): T | undefined {
        if (!this.top) {
            return undefined;
        }
        --this.length;
        
        const val_to_return = this.top.value;
        this.top = this.top.next;

        return val_to_return;
    }
    peek(): T | undefined {
        return this.top?.value;
    }
}