import {ConcreteStrategyA, ConcreteStrategyB, Context} from './Strategy';

describe('Strategy', () => {
	it('should create context with strategy', () => {
		const strategy = new ConcreteStrategyA();
		const context = new Context(strategy);

		expect(strategy).toBeDefined();
		expect(context).toBeDefined();
	});

	it('handle operations with current strategy', () => {
		const strategy = new ConcreteStrategyA();
		const context = new Context(strategy);
		const result:string = context.operation(5);

		expect(result).toBe('A:5');
	});

	it('should change strategy', () => {
		const strategy1 = new ConcreteStrategyA();
		const strategy2 = new ConcreteStrategyB();
		const context = new Context(strategy1);
		const result1:string = context.operation(5);
		context.setStrategy(strategy2);
		const result2:string = context.operation(5);

		expect(result1).toBe('A:5');
		expect(result2).toBe('B:5');
	});

});
