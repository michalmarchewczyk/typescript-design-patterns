import ConcreteBuilder, {Builder, Product} from './Builder';

describe('Builder', () => {
	it('should create builder instance', () => {
		const builder:Builder = new ConcreteBuilder();

		expect(builder).toBeDefined();
	});

	it('should return new empty produt', () => {
		const builder:Builder = new ConcreteBuilder();
		const product:Product = builder.getProduct();

		expect(product).toBeDefined();
		expect(product.parts).toHaveLength(0);
		expect(product.number).toBe(0);
	});

	it('should create product with parts', () => {
		const builder:Builder = new ConcreteBuilder();
		builder.buildPartA();
		builder.buildPartB(5);
		const product:Product = builder.getProduct();

		expect(product.parts).toEqual(['partA']);
		expect(product.number).toBe(5);
	});
});
