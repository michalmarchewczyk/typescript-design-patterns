import {IIterator, StringCollection} from './Iterator';

describe('Iterator', () => {
	let collection: StringCollection, iterator:IIterator<string>;

	beforeEach(() => {
		collection = new StringCollection();
		collection.addItem('A');
		collection.addItem('B');
		collection.addItem('C');

		iterator = collection.getIterator();
	});

	it('should create collection', () => {
		expect(collection.getItems()).toEqual(['A', 'B', 'C']);
		expect(collection.getCount()).toBe(3);
	});

	it('should create iterator', () => {
		expect(iterator).toBeDefined();
		expect(iterator.current()).toBe('A');
		expect(iterator.key()).toBe(0);
	});

	it('should get next value', () => {
		const value:string = iterator.next();

		expect(value).toBe('A');
		expect(iterator.current()).toBe('B');
		expect(iterator.key()).toBe(1);
	});

	it('should rewind to starting position', () => {
		iterator.next();
		iterator.next();
		iterator.rewind();

		expect(iterator.current()).toBe('A');
		expect(iterator.key()).toBe(0);
	});

	it('should check if current position is valid', () => {
		iterator.next();
		const valid1 = iterator.valid();
		iterator.next();
		iterator.next();
		iterator.next();
		const valid2 = iterator.valid();

		expect(valid1).toBe(true);
		expect(valid2).toBe(false);
	});

	it('should return undefined if current position is invalid', () => {
		iterator.next();
		iterator.next();
		iterator.next();
		iterator.next();
		const value = iterator.current();
		const next = iterator.next();

		expect(value).not.toBeDefined();
		expect(next).not.toBeDefined();
	});

	it('should traverse collection', () => {
		const values:string[] = [];

		while(iterator.valid()){
			values.push(iterator.next());
		}

		expect(values).toEqual(['A', 'B', 'C']);
	});
});
