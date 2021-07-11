class Originator {
	constructor(private state: string){
	}

	getState(): string {
		return this.state;
	}

	public operation(): void {
		this.state = this.getRandomString();
	}

	private getRandomString():string {
		return Math.random().toString(36).substring(4);
	}

	public save(): Memento {
		return new ConcreteMemento(this.state);
	}

	public restore(memento: Memento): void {
		this.state = memento.getState();
	}
}

interface Memento {
	getState(): string;
	getDate(): Date;
}

class ConcreteMemento implements Memento {
	private readonly date: Date;

	constructor(private state: string){
		this.date = new Date();
	}

	getState(): string {
		return this.state;
	}

	getDate(): Date {
		return this.date;
	}
}

class Caretaker {
	private mementos: Memento[] = [];

	constructor(private originator: Originator){
	}

	public backup(): void{
		this.mementos.push(this.originator.save());
	}

	public undo(): void {
		const memento = this.mementos.pop();
		if(!memento) return;

		this.originator.restore(memento);
	}

	public showHistory(): Memento[] {
		return this.mementos;
	}
}

export {
	Originator,
	Caretaker
};
