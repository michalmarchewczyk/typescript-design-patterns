import {Handler, HandlerA, HandlerB} from './ChainOfResponsibility';

describe('Chain of Responsibility', () => {
	it('should create handler', () => {
		const handler:Handler = new HandlerA();
		handler.setNext(new HandlerB());

		expect(handler).toBeDefined();
	});

	it('should handle request', () => {
		const handler:Handler = new HandlerA();
		handler.setNext(new HandlerB());

		expect(handler.handle('R')).toBe('RARB');
	});
});
