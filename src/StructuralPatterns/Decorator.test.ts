import {Component, ConcreteComponent, ConcreteDecoratorA, ConcreteDecoratorB} from './Decorator';

describe('Decorator', () => {
	it('should create basic component', () => {
		const component:Component = new ConcreteComponent();

		expect(component.operation()).toBe('ConcreteComponent');
	});

	it('should add decorator to component', () => {
		const component:Component = new ConcreteComponent();
		const decoratedComponent = new ConcreteDecoratorA(component);

		expect(decoratedComponent.operation()).toBe('A(ConcreteComponent)');
	});

	it('should add multiple decorators to component', () => {
		const component:Component = new ConcreteComponent();
		const decoratedAComponent = new ConcreteDecoratorA(component);
		const decoratedABComponent = new ConcreteDecoratorB(decoratedAComponent);

		expect(decoratedABComponent.operation()).toBe('B(A(ConcreteComponent))');
	});
});
