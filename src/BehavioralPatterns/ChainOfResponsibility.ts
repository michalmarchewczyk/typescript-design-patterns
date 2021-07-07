interface Handler {
	setNext(handler: Handler): Handler;

	handle(request: string): string;
}

abstract class AbstractHandler implements Handler {
	private nextHandler: Handler|null = null;

	public setNext(handler: Handler): Handler {
		this.nextHandler = handler;

		return handler;
	}

	public handle(request: string):string {
		if(this.nextHandler){
			return this.nextHandler.handle(request);
		}

		return '';
	}
}


class HandlerA extends AbstractHandler {
	public handle(request: string): string {
		return request + 'A' + super.handle(request);
	}
}

class HandlerB extends AbstractHandler {
	public handle(request: string): string {
		return request + 'B' + super.handle(request);
	}
}

export {
	AbstractHandler,
	HandlerA,
	HandlerB,
	Handler
};

