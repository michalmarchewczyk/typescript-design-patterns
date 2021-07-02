interface Component {
	operation(): string;
}

class ConcreteComponent implements Component {
	public operation(): string {
		return 'ConcreteComponent';
	}
}

class Decorator implements Component {

	constructor(protected component: Component){}

	public operation(): string {
		return this.component.operation();
	}
}


class ConcreteDecoratorA extends Decorator {
	public operation(): string {
		return `A(${super.operation()})`;
	}
}

class ConcreteDecoratorB extends Decorator {
	public operation(): string {
		return `B(${super.operation()})`;
	}
}

export {
	Component,
	ConcreteComponent,
	Decorator,
	ConcreteDecoratorA,
	ConcreteDecoratorB
};
