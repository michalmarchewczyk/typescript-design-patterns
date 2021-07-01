import {Abstraction, ConcreteImplementationA, ConcreteImplementationB, ExtendedAbstraction} from './Bridge';

describe('Bridge', () => {
	it('should create implementation and abstraction', () => {
		const implementation = new ConcreteImplementationA();
		const abstraction = new Abstraction(implementation);

		expect(abstraction).toBeDefined();
	});

	it('should use given implementation', () => {
		const implementation = new ConcreteImplementationA();
		const abstraction = new Abstraction(implementation);

		expect(abstraction.operation()).toBe('A: ImplementationA');
	});

	it('should use extended abstraction', () => {
		const implementation = new ConcreteImplementationB();
		const abstraction = new ExtendedAbstraction(implementation);

		expect(abstraction.operation()).toBe('EA: ImplementationB');
	});
});
