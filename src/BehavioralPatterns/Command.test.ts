import {Command, CommandA, CommandAB, Receiver} from './Command';

describe('Command', () => {
	it('should create receiver', () => {
		const receiver = new Receiver();

		expect(receiver).toBeDefined();
	});

	it('should create simple command with receiver', () => {
		const receiver = new Receiver();
		const command:Command = new CommandA(receiver);

		expect(command).toBeDefined();
	});

	it('should execute simple command', () => {
		const receiver = new Receiver();
		const command:Command = new CommandA(receiver);
		const spyA = jest.spyOn(receiver, 'operationA');

		command.execute();
		expect(spyA).toHaveBeenCalled();
	});

	it('should execute complex command', () => {
		const receiver = new Receiver();
		const command:Command = new CommandAB(receiver);
		const spyA = jest.spyOn(receiver, 'operationA');
		const spyB = jest.spyOn(receiver, 'operationB');

		command.execute();
		expect(spyA).toHaveBeenCalled();
		expect(spyB).toHaveBeenCalled();
	});
});
