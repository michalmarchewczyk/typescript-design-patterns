class Context {
	constructor(private state: State){
		this.state.setContext(this);
	}

	public setState(state: State): void {
		this.state = state;
		this.state.setContext(this);
	}

	public request1(): void {
		this.state.handle1();
	}

	public request2(): void {
		this.state.handle2();
	}
}

abstract class State {
	protected context: Context|null = null;

	public setContext(context: Context):void {
		this.context = context;
	}

	public abstract handle1(): void;

	public abstract handle2(): void;
}

class ConcreteStateA extends State {
	public handle1(): void {
		this.context?.setState(new ConcreteStateB());
	}

	public handle2(): void {
	}
}

class ConcreteStateB extends State {
	public handle1(): void {
	}

	public handle2(): void {
		this.context?.setState(new ConcreteStateA());
	}
}

export {
	Context,
	ConcreteStateA,
	ConcreteStateB
};
