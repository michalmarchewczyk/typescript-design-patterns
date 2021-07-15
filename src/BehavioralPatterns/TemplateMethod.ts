abstract class AbstractClass {
	protected state = '';

	public templateMethod(): string {
		this.state = '';
		this.baseOperation1();
		this.requiredOperation1();
		this.hook1();
		return this.state;
	}

	protected baseOperation1(): void {
		this.state += 'B';
	}

	protected abstract requiredOperation1(): void;

	protected hook1(): void {}
}

class ConcreteClass1 extends AbstractClass {
	protected requiredOperation1():void {
		this.state += 'R1';
	}
}

class ConcreteClass2 extends AbstractClass {
	protected requiredOperation1():void {
		this.state += 'R2';
	}

	protected hook1(): void {
		this.state += 'H2';
	}
}

export {
	AbstractClass,
	ConcreteClass1,
	ConcreteClass2
};
