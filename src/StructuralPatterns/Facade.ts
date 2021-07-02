class Facade {
	protected subsystem1: Subsystem1;
	protected subsystem2: Subsystem2;

	constructor(){
		this.subsystem1 = new Subsystem1();
		this.subsystem2 = new Subsystem2();
	}

	operation1():string {
		let res = '';
		res += this.subsystem1.operation1();
		res += this.subsystem2.operation1();
		return res;
	}

	allOperations():string {
		let res = '';
		res += this.subsystem1.operation1();
		res += this.subsystem2.operation1();
		res += this.subsystem1.operation2().toString();
		res += this.subsystem2.operation2().toString();
		return res;
	}
}


class Subsystem1 {
	operation1():string {
		return 'S1';
	}

	operation2():number  {
		return 1;
	}
}

class Subsystem2 {
	operation1():string {
		return 'S2';
	}

	operation2():number {
		return 2;
	}
}

export default Facade;
