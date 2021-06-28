import {Creator, CreatorA, CreatorB, Product} from './FactoryMethod';

describe('Factory Method', () => {
	it('should create Creator instance', () => {
		const creator:Creator = new CreatorA();

		expect(creator).toBeDefined();
	});

	it('should create product', () => {
		const creator:Creator = new CreatorA();
		const product:Product = creator.createProduct();

		expect(product.value).toBe(1);
		expect(product.operation()).toBe('Product A');
	});

	it('should create different product based on creator', () => {
		let creator:Creator = new CreatorA();
		const productA:Product = creator.createProduct();
		creator = new CreatorB();
		const productB:Product = creator.createProduct();

		expect(productA.value).toBe(1);
		expect(productA.operation()).toBe('Product A');

		expect(productB.value).toBe(2);
		expect(productB.operation()).toBe('Product B');
	});
});
