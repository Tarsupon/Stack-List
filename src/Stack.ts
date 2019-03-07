export class StackNode<T>{
    public _data: T;
    public next: StackNode<T> | null;

    constructor(data: T){
        this._data = data;
        this.next = null;
    }
}

export class Stack<T>{

    private top: StackNode<T> | null = null;
    private _size: number = 0;
    constructor(topElement?: StackNode<T>) {
        this.top = topElement || null;
    }

    public push(item: T): void {
        let node = new StackNode(item);
        node.next = this.top;
        this.top = node;
        this._size++;
    }
    public pop(): any {
        if(!this.top){
            return null;
        } else{
            let res = this.top;
            this.top = this.top.next;
            this._size--;
            return res._data;
        }
    }

    public toString(): string {
        var current = this.top;
        var str: string = '';
        while (current) {
            str = str + " " + current._data;
            current = current.next;
        }
        return str;
    }
    public size(): number {
        return this._size;
    }
}
