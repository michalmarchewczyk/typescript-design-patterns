import {ConcreteObserverA, ConcreteObserverB, ConcreteSubject} from './Observer';

describe('Observer', () => {
	it('should create subject', () => {
		const subject = new ConcreteSubject();

		expect(subject).toBeDefined();
	});

	it('should create observer', () => {
		const observer = new ConcreteObserverA();

		expect(observer).toBeDefined();
	});

	it('should attach observer', () => {
		const subject = new ConcreteSubject();
		const observer = new ConcreteObserverA();

		expect(() => {
			subject.attach(observer);
		}).not.toThrow();
	});

	it('should throw error when attaching observer twice', () => {
		const subject = new ConcreteSubject();
		const observer = new ConcreteObserverA();

		expect(() => {
			subject.attach(observer);
			subject.attach(observer);
		}).toThrow();
	});

	it('should detach observer', () => {
		const subject = new ConcreteSubject();
		const observer = new ConcreteObserverA();

		expect(() => {
			subject.attach(observer);
			subject.detach(observer);
		}).not.toThrow();
	});

	it('should throw error when detaching not attached observer', () => {
		const subject = new ConcreteSubject();
		const observer = new ConcreteObserverA();

		expect(() => {
			subject.detach(observer);
		}).toThrow();
	});

	it('should notify attached observer', () => {
		const subject = new ConcreteSubject();
		const observer = new ConcreteObserverA();
		const spy = jest.spyOn(observer, 'operation');
		subject.attach(observer);
		subject.notify();

		expect(spy).toHaveBeenCalledWith(subject.state);
	});

	it('should notify multiple observers', () => {
		const subject = new ConcreteSubject();
		const observer1 = new ConcreteObserverA();
		const observer2 = new ConcreteObserverB();
		const spy1 = jest.spyOn(observer1, 'operation');
		const spy2 = jest.spyOn(observer2, 'operation');
		subject.attach(observer1);
		subject.attach(observer2);
		subject.notify();

		expect(spy1).toHaveBeenCalledWith(subject.state);
		expect(spy2).toHaveBeenCalledWith(subject.state.toString());
	});

	it('shouldn\'t notify detached observer', () => {
		const subject = new ConcreteSubject();
		const observer = new ConcreteObserverA();
		const spy = jest.spyOn(observer, 'operation');
		subject.attach(observer);
		subject.detach(observer);
		subject.notify();

		expect(spy).not.toHaveBeenCalled();
	});

	it('should notify attached observer multiple times', () => {
		const subject = new ConcreteSubject();
		const observer = new ConcreteObserverA();
		const spy = jest.spyOn(observer, 'operation');
		subject.attach(observer);
		subject.notify();
		subject.notify();
		subject.notify();

		expect(spy).toHaveBeenCalledTimes(3);
	});
});
