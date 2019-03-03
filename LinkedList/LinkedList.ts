class LinkedNode<T> {
    public _elem: T;
    public next: LinkedNode<T> | null;

    constructor(elem: T) {
        this._elem = elem;
        this.next = null;
    }

    getelem(): T {
        return this._elem;
    }
}

class LinkedList<T> {
    private head: LinkedNode<T> | null = null;
    private len = 0;

    constructor(headElement?: LinkedNode<T>) {
        this.head = headElement || null;
    }

    public get(pos: number){
        if (pos > -1 && pos < this.len && this.head) {
            let current = this.head;
            let previous: LinkedNode<T> = current;
            let index = 0;
            while (index++ < pos && current.next) {
                previous = current;
                current = current.next;
            }
            return current;
        } else {
            return null;
        }
    }
    public size(): number {
        return this.len;
    }
    public append(elem: T) {
        let node = new LinkedNode(elem);
        let current: LinkedNode<T>;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }

    public remove(pos: number): LinkedNode<T> | null {
        if (pos > -1 && pos < this.len && this.head) {
            let current = this.head;
            let previous: LinkedNode<T> = current;
            let index = 0;

            if (pos === 0) {
                this.head = current.next;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.len--;
            return current;
        } else {
            return null;
        }
    }


    public add(elem: T, pos: number) {
        if (pos > -1 && pos < this.len && this.head) {
            let current = this.head;
            let index = 0;
            let previous = current;
            let node = new LinkedNode(elem);

            if (pos == 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.len++;
            return true;
        } else {
            return false;
        }
    }

    public toString() {
        var current = this.head;
        var str = '';
        while (current) {
            str = str + " " + current._elem;
            current = current.next;
        }
        return str;
    }
}