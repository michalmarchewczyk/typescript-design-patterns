
interface Subject {
	operation(): string;
}


class RealSubject implements Subject {
	public operation(): string {
		return 'A';
	}
}

class ProxySubject implements Subject {
	private realSubject:RealSubject = new RealSubject()

	constructor(){
	}

	operation():string {
		return this.realSubject.operation();
	}
}

export {
	Subject,
	ProxySubject
};



