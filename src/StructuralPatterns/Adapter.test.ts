import {Adaptee, Adapter, Target} from './Adapter';

describe('Adapter', () => {
	it('should create and use Target class', () => {
		const target:Target = new Target();

		expect(target.operation()).toBe('Target operation');
	});

	it('should create and use Adapter class', () => {
		const adaptee = new Adaptee();
		const target:Target = new Adapter(adaptee);

		expect(target.operation).toBeDefined();
		expect(target.operation()).toBe('Adaptee operation');
	});
});
