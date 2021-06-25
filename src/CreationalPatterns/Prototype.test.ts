import Prototype from './Prototype';

describe('Prototype', () => {
	it('should create instance', () => {
		const object = new Prototype();

		expect(object).toBeDefined();
	});

	it('should clone itself', () => {
		const object = new Prototype();
		const clone = object.clone();

		expect(clone).toBeDefined();
		expect(clone).not.toBe(object);
	});

	it('should copy values', () => {
		const object = new Prototype(5);
		const clone = object.clone();

		expect(clone.value).toBe(5);
	});

	it('should not copy array reference', () => {
		const object = new Prototype(5, [6]);
		const clone = object.clone();

		expect(clone.array).not.toBe(object.array);
	});

	it('should copy array values', () => {
		const object = new Prototype(5, [6]);
		const clone = object.clone();

		expect(clone.array[0]).toBe(6);
	});
});
