interface Component {
	accept(visitor: Visitor): void;
}

class ConcreteComponentA implements Component {
	public accept(visitor: Visitor): void {
		visitor.visitConcreteComponentA(this);
	}

	public operation(): string {
		return 'A';
	}
}

class ConcreteComponentB implements Component {
	public accept(visitor: Visitor): void {
		visitor.visitConcreteComponentB(this);
	}

	public operation(): string {
		return 'B';
	}
}

interface Visitor {
	visitConcreteComponentA(element: ConcreteComponentA): string;
	visitConcreteComponentB(element: ConcreteComponentB): string;
}

class ConcreteVisitor1 implements Visitor {
	visitConcreteComponentA(element: ConcreteComponentA): string {
		return '1' + element.operation();
	}

	visitConcreteComponentB(element: ConcreteComponentB): string {
		return '1' + element.operation();
	}
}


class ConcreteVisitor2 implements Visitor {
	visitConcreteComponentA(element: ConcreteComponentA): string {
		return '2' + element.operation();
	}

	visitConcreteComponentB(element: ConcreteComponentB): string {
		return '2' + element.operation();
	}
}

export {
	Component,
	Visitor,
	ConcreteComponentA,
	ConcreteComponentB,
	ConcreteVisitor1,
	ConcreteVisitor2
};


