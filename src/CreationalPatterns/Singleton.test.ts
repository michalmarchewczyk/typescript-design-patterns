import Singleton from './Singleton';

describe('Singleton', () => {
	it('should create instance', () => {
		const singleton:Singleton = Singleton.getInstance();

		expect(singleton).toBeDefined();
	});

	it('should always return the same instance', () => {
		const singleton1:Singleton = Singleton.getInstance();
		const singleton2:Singleton = Singleton.getInstance();

		expect(singleton1).toBe(singleton2);
	});

	it('should execute methods on instance', () => {
		const singleton1:Singleton = Singleton.getInstance();
		const singleton2:Singleton = Singleton.getInstance();
		singleton1.setValue(5);

		expect(singleton2.value).toBe(5);
	});
});
