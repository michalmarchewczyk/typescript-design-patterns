import Facade from './Facade';

describe('Facade', () => {
	it('should create Facade', () => {
		const facade = new Facade();

		expect(facade).toBeDefined();
	});

	it('should call operation on subsystems', () => {
		const facade = new Facade();

		expect(facade.operation1()).toBe('S1S2');
	});

	it('should call multiple operations on subsystems', () => {
		const facade = new Facade();

		expect(facade.allOperations()).toBe('S1S212');
	});
});
