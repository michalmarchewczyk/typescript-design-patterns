interface Command {
	execute(): void;
}


class CommandA implements Command {
	constructor(private receiver: Receiver) {
	}

	public execute(): void {
		this.receiver.operationA();
	}
}

class CommandAB implements Command {
	constructor(private receiver: Receiver) {
	}

	public execute(): void {
		this.receiver.operationA();
		this.receiver.operationB();
	}
}


class Receiver {
	public operationA():string {
		return 'A';
	}

	public operationB():string {
		return 'B';
	}
}


export {
	Command,
	CommandA,
	CommandAB,
	Receiver,
};
