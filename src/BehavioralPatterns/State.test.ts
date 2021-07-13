import {ConcreteStateA, ConcreteStateB, Context} from './State';

describe('State', () => {
	it('should create context with state', () => {
		const state = new ConcreteStateA();
		const context = new Context(state);

		expect(state).toBeDefined();
		expect(context).toBeDefined();
	});

	it('should handle request with default state', () => {
		const state = new ConcreteStateA();
		const context = new Context(state);
		const spy1 = jest.spyOn(state, 'handle1');
		const spy2 = jest.spyOn(state, 'handle2');
		context.request2();
		context.request1();

		expect(spy1).toHaveBeenCalled();
		expect(spy2).toHaveBeenCalled();
	});

	it('should change state', () => {
		const state = new ConcreteStateA();
		const context = new Context(state);
		const spy1 = jest.spyOn(state, 'handle1');
		const spy2 = jest.spyOn(state, 'handle2');
		context.request1();
		context.request2();

		expect(spy1).toHaveBeenCalled();
		expect(spy2).not.toHaveBeenCalled();
	});

	it('should handle request with given state', () => {
		const state1 = new ConcreteStateA();
		const state2 = new ConcreteStateB();
		const context = new Context(state1);
		const spy1 = jest.spyOn(state2, 'handle1');
		const spy2 = jest.spyOn(state2, 'handle2');
		context.setState(state2);
		context.request1();
		context.request2();

		expect(spy1).toHaveBeenCalled();
		expect(spy2).toHaveBeenCalled();
	});

	it('should ignore state with no context', () => {
		const state1 = new ConcreteStateA();
		const state2 = new ConcreteStateB();

		expect(() => {
			state1.handle1();
			state1.handle2();
			state2.handle1();
			state2.handle2();
		}).not.toThrow();
	});
});
