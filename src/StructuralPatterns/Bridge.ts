class Abstraction {
	constructor(protected implementation: Implementation) {
	}

	public operation(): string {
		return 'A: ' + this.implementation.operation();
	}
}

class ExtendedAbstraction extends Abstraction {
	public operation():string {
		return 'EA: ' + this.implementation.operation();
	}
}

interface Implementation {
	operation(): string;
}

class ConcreteImplementationA implements Implementation {
	public operation(): string {
		return 'ImplementationA';
	}
}

class ConcreteImplementationB implements Implementation {
	public operation(): string {
		return 'ImplementationB';
	}
}


export {
	Abstraction,
	ExtendedAbstraction,
	Implementation,
	ConcreteImplementationA,
	ConcreteImplementationB
};
