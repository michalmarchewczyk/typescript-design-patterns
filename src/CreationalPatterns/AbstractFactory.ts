interface AbstractFactory {
	createProductA(): AbstractProductA;
	createProductB(): AbstractProductB;
}

interface AbstractProductA {
	operation():string;
}

interface AbstractProductB {
	value:number;
	operation():number;
}

class ConcreteProductA1 implements AbstractProductA {
	operation():string {
		return 'Product A 1';
	}
}

class ConcreteProductA2 implements AbstractProductA {
	operation(): string {
		return 'Product A 2';
	}
}

class ConcreteProductB1 implements AbstractProductB {
	public value = 1;
	operation():number {
		return this.value;
	}
}

class ConcreteProductB2 implements AbstractProductB {
	public value = 2;
	operation():number {
		return this.value;
	}
}


class ConcreteFactory1 implements AbstractFactory {
	public createProductA(): AbstractProductA {
		return new ConcreteProductA1();
	}

	public createProductB(): AbstractProductB {
		return new ConcreteProductB1();
	}
}

class ConcreteFactory2 implements AbstractFactory {
	public createProductA(): AbstractProductA {
		return new ConcreteProductA2();
	}

	public createProductB(): AbstractProductB {
		return new ConcreteProductB2();
	}
}


export {
	AbstractFactory,
	ConcreteFactory1,
	ConcreteFactory2,
	AbstractProductA,
	AbstractProductB
};
