abstract class Component {
	protected parent:Component|null = null;

	public setParent(parent: Component|null):void {
		this.parent = parent;
	}

	public getParent(): Component|null {
		return this.parent;
	}

	public add(component: Component):void {}

	public remove(component: Component):void {}

	abstract operation(): string;
}

class Leaf extends Component{
	public operation(): string {
		return 'Leaf';
	}
}

class Composite extends Component {
	protected children: Component[] = [];

	public add(component: Component):void {
		this.children.push(component);
		component.setParent(this);
	}

	public remove(component: Component):void {
		this.children = this.children.filter(c => c !== component);
		component.setParent(null);
	}

	public operation(): string {
		return '{' + this.children.map(c => c.operation()).join(',') + '}';
	}
}


export {
	Component,
	Leaf,
	Composite
};
