import {Component1, Component2, ConcreteMediator} from './Mediator';

describe('Mediator', () => {
	it('should create Mediator', () => {
		const component1 = new Component1();
		const component2 = new Component2();
		const mediator = new ConcreteMediator(component1, component2);

		expect(mediator).toBeDefined();
	});

	it('should call simple event', () => {
		const component1 = new Component1();
		const component2 = new Component2();
		new ConcreteMediator(component1, component2);
		const spy = jest.spyOn(component2, 'operationA');

		component1.operationA();
		expect(spy).toHaveBeenCalled();
	});

	it('should call complex event', () => {
		const component1 = new Component1();
		const component2 = new Component2();
		new ConcreteMediator(component1, component2);
		const spy1 = jest.spyOn(component1, 'operationB');
		const spy2 = jest.spyOn(component2, 'operationB');

		component2.operationA();
		expect(spy1).toHaveBeenCalled();
		expect(spy2).toHaveBeenCalled();
	});

	it('should not call when no mediator', () => {
		const component1 = new Component1();
		const component2 = new Component2();
		const spy1 = jest.spyOn(component1, 'operationB');
		const spy2 = jest.spyOn(component2, 'operationB');

		component2.operationA();
		expect(spy1).not.toHaveBeenCalled();
		expect(spy2).not.toHaveBeenCalled();
	});

	it('calling all operations without mediator should not throw error', () => {
		const component1 = new Component1();
		const component2 = new Component2();
		const spy1 = jest.spyOn(component1, 'operationA');
		const spy2 = jest.spyOn(component1, 'operationB');
		const spy3 = jest.spyOn(component2, 'operationA');
		const spy4 = jest.spyOn(component2, 'operationB');

		component1.operationA();
		component1.operationB();
		component2.operationA();
		component2.operationB();

		expect(spy1).toHaveBeenCalledTimes(1);
		expect(spy2).toHaveBeenCalledTimes(1);
		expect(spy3).toHaveBeenCalledTimes(1);
		expect(spy4).toHaveBeenCalledTimes(1);
	});
});
