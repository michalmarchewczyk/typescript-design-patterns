class Target {
	public operation():string {
		return 'Target operation';
	}
}


class Adaptee {
	public operations():string[] {
		return ['Adaptee operation'];
	}
}

class Adapter extends Target {
	constructor(public adaptee: Adaptee) {
		super();
	}

	public operation(): string {
		return this.adaptee.operations()[0];
	}
}


export {
	Target,
	Adapter,
	Adaptee
};
