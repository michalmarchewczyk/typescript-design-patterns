class Context{
	constructor(private strategy: Strategy) {
	}

	public setStrategy(strategy: Strategy):void {
		this.strategy = strategy;
	}

	operation(value:number):string {
		return this.strategy.operation(value);
	}
}

interface Strategy {
	operation(value:number): string;
}

class ConcreteStrategyA implements Strategy {
	public operation(value:number): string {
		return 'A:' + value.toString();
	}
}

class ConcreteStrategyB implements Strategy {
	public operation(value:number): string {
		return 'B:' + value.toString();
	}
}

export {
	Context,
	ConcreteStrategyA,
	ConcreteStrategyB
};
