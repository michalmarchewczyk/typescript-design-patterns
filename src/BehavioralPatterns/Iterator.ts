interface IIterator<T> {
	current(): T;

	next(): T;

	key(): number;

	valid(): boolean;

	rewind(): void;
}

interface Aggregator {
	getIterator(): IIterator<string>;
}

class ConcreteIterator implements IIterator<string> {
	constructor(private collection:StringCollection){
	}

	private position = 0;

	public rewind():void {
		this.position = 0;
	}

	public current(): string {
		return this.collection.getItems()[this.position];
	}

	public key(): number {
		return this.position;
	}

	public next(): string {
		const item = this.collection.getItems()[this.position];
		this.position += 1;
		return item;
	}

	public valid(): boolean {
		return this.position < this.collection.getCount();
	}
}

class StringCollection implements Aggregator {
	private items: string[] = [];

	public getItems(): string[] {
		return this.items;
	}

	public getCount(): number {
		return this.items.length;
	}

	public addItem(item: string): void {
		this.items.push(item);
	}

	public getIterator(): IIterator<string> {
		return new ConcreteIterator(this);
	}
}

export {
	IIterator,
	Aggregator,
	StringCollection,
	ConcreteIterator
};
