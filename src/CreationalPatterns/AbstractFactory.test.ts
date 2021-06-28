import {AbstractProductA, AbstractProductB, ConcreteFactory1, ConcreteFactory2} from './AbstractFactory';

describe('AbstractFactory', () => {
	it('should create factory', () => {
		const factory = new ConcreteFactory1();

		expect(factory).toBeDefined();
	});

	it('should create products', () => {
		const factory = new ConcreteFactory1();
		const productA:AbstractProductA = factory.createProductA();
		const productB:AbstractProductB = factory.createProductB();

		expect(productA.operation()).toBe('Product A 1');
		expect(productB.operation()).toBe(1);
	});

	it('should create different products with different factories', () => {
		const factory1 = new ConcreteFactory1();
		const productA1:AbstractProductA = factory1.createProductA();
		const productB1:AbstractProductB = factory1.createProductB();

		const factory2 = new ConcreteFactory2();
		const productA2:AbstractProductA = factory2.createProductA();
		const productB2:AbstractProductB = factory2.createProductB();

		expect(productA1.operation()).toBe('Product A 1');
		expect(productB1.operation()).toBe(1);

		expect(productA2.operation()).toBe('Product A 2');
		expect(productB2.operation()).toBe(2);
	});
});
