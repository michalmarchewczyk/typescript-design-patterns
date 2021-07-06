import {Flyweight, FlyweightFactory} from './Flyweight';

describe('Flyweight', () => {
	it('should create flyweight factory', () => {
		const factory:FlyweightFactory = new FlyweightFactory([]);

		expect(factory).toBeDefined();
	});

	it('should create flyweight factory with flyweights', () => {
		const factory:FlyweightFactory = new FlyweightFactory([
			['A', 'red'],
			['B', 'blue'],
		]);

		expect(factory.listFlyweights()).toEqual([
			{sharedState: ['A', 'red']},
			{sharedState: ['B', 'blue']}
		]);
	});

	it('should add flyweight to empty factory', () => {
		const factory:FlyweightFactory = new FlyweightFactory([]);
		factory.getFlyweight(['A', 'red']);

		expect(factory.listFlyweights()).toEqual([
			{sharedState: ['A', 'red']},
		]);
	});

	it('should use existing flyweight instead of creating new one', () => {
		const factory:FlyweightFactory = new FlyweightFactory([]);
		factory.getFlyweight(['A', 'red']);
		factory.getFlyweight(['A', 'red']);

		expect(factory.listFlyweights()).toEqual([
			{sharedState: ['A', 'red']},
		]);
	});

	it('should call operation with unique state', () => {
		const factory:FlyweightFactory = new FlyweightFactory([]);
		const flyweight:Flyweight = factory.getFlyweight(['A', 'red']);

		expect(flyweight.operation(['1'])).toBe('["A","red"]["1"]');
	});
});
