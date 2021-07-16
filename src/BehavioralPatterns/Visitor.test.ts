import {
	Component,
	ConcreteComponentA,
	ConcreteComponentB,
	ConcreteVisitor1,
	ConcreteVisitor2,
	Visitor
} from './Visitor';

describe('Visitor', () => {
	it('should create component', () => {
		const component:Component = new ConcreteComponentA();

		expect(component).toBeDefined();
	});

	it('should create visitor', () => {
		const visitor:Visitor = new ConcreteVisitor1();

		expect(visitor).toBeDefined();
	});

	it('component should accept visitor', () => {
		const component:Component = new ConcreteComponentA();
		const visitor:Visitor = new ConcreteVisitor1();

		expect(() => {
			component.accept(visitor);
		}).not.toThrow();
	});

	it('should call correct visitor method', () => {
		const componentA:Component = new ConcreteComponentA();
		const componentB:Component = new ConcreteComponentB();
		const visitor:Visitor = new ConcreteVisitor1();
		const spy1 = jest.spyOn(visitor, 'visitConcreteComponentA');
		const spy2 = jest.spyOn(visitor, 'visitConcreteComponentB');
		componentA.accept(visitor);
		componentB.accept(visitor);
		componentB.accept(visitor);

		expect(spy1).toHaveBeenCalledTimes(1);
		expect(spy2).toHaveBeenCalledTimes(2);
		expect(spy1).toHaveReturnedWith('1A');
		expect(spy2).toHaveReturnedWith('1B');
	});

	it('should accept different visitors', () => {
		const componentA:Component = new ConcreteComponentA();
		const componentB:Component = new ConcreteComponentB();
		const visitor1:Visitor = new ConcreteVisitor1();
		const visitor2:Visitor = new ConcreteVisitor2();
		const spy1 = jest.spyOn(visitor1, 'visitConcreteComponentA');
		const spy2 = jest.spyOn(visitor2, 'visitConcreteComponentA');
		const spy3 = jest.spyOn(visitor1, 'visitConcreteComponentB');
		const spy4 = jest.spyOn(visitor2, 'visitConcreteComponentB');
		componentA.accept(visitor1);
		componentA.accept(visitor2);
		componentB.accept(visitor1);
		componentB.accept(visitor2);

		expect(spy1).toHaveReturnedWith('1A');
		expect(spy2).toHaveReturnedWith('2A');
		expect(spy3).toHaveReturnedWith('1B');
		expect(spy4).toHaveReturnedWith('2B');
	});
});
