import {AbstractClass, ConcreteClass1, ConcreteClass2} from './TemplateMethod';

describe('Template Method', () => {
	it('should create ConcreteClass', () => {
		const concreteClass1:AbstractClass = new ConcreteClass1();
		const concreteClass2:AbstractClass = new ConcreteClass2();

		expect(concreteClass1).toBeDefined();
		expect(concreteClass2).toBeDefined();
	});

	it('should call template method with overwritten methods', () => {
		const concreteClass:AbstractClass = new ConcreteClass1();
		const result = concreteClass.templateMethod();

		expect(result).toBe('BR1');
	});

	it('should call template method with overwritten methods (with hooks)', () => {
		const concreteClass:AbstractClass = new ConcreteClass2();
		const result = concreteClass.templateMethod();

		expect(result).toBe('BR2H2');
	});
});
