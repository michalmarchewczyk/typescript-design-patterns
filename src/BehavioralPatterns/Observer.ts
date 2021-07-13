interface Subject {
	state:number;

	attach(observer: Observer): void;

	detach(observer: Observer): void;

	notify(): void;
}


class ConcreteSubject implements Subject {
	public state = 0;

	private observers: Observer[] = [];

	public attach(observer: Observer): void {
		if(this.observers.includes(observer)){
			throw new Error('Observer is already attached');
		}
		this.observers.push(observer);
	}

	public detach(observer: Observer): void {
		if(!this.observers.includes(observer)){
			throw new Error('Observer is not attached');
		}
		this.observers = this.observers.filter(o => o !== observer);
	}

	public notify(): void {
		this.observers.forEach(observer => {
			observer.update(this);
		});
	}
}

interface Observer {
	update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
	public update(subject: Subject): void {
		this.operation(subject.state);
	}
	public operation(n:number): number {
		return n;
	}
}

class ConcreteObserverB implements Observer {
	public update(subject: Subject): void {
		this.operation(subject.state.toString());
	}
	public operation(s:string): string {
		return s;
	}
}


export {
	ConcreteSubject,
	ConcreteObserverA,
	ConcreteObserverB
};
