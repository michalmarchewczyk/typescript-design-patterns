interface Mediator {
	notify(sender: BaseComponent, event: string): void;
}

class ConcreteMediator implements Mediator{
	constructor(private component1: Component1, private component2: Component2) {
		this.component1.setMediator(this);
		this.component2.setMediator(this);
	}

	public notify(sender: BaseComponent, event: string): void {
		if(event === 'A'){
			this.component2.operationA();
		}
		if(event === 'B'){
			this.component1.operationB();
			this.component2.operationB();
		}
	}
}

class BaseComponent {
	protected mediator: Mediator|null = null

	public setMediator(mediator: Mediator): void {
		this.mediator = mediator;
	}
}

class Component1 extends BaseComponent {
	public operationA():void {
		this.mediator?.notify(this, 'A');
	}

	public operationB(): void {
		this.mediator?.notify(this, 'C');
	}
}

class Component2 extends BaseComponent {
	public operationA():void {
		this.mediator?.notify(this, 'B');
	}

	public operationB(): void {
		this.mediator?.notify(this, 'C');
	}
}

export {
	Mediator,
	ConcreteMediator,
	BaseComponent,
	Component1,
	Component2,
};
