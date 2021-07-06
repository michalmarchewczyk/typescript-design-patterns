class Flyweight {
	constructor(private sharedState: any){
	}

	public operation(uniqueState:any): string {
		const s = JSON.stringify(this.sharedState);
		const u = JSON.stringify(uniqueState);
		return s + u;
	}
}


class FlyweightFactory {
	private flyweights: {[key: string]: Flyweight} = {};

	constructor(initialFlyweights: string[][]) {
		for(const state of initialFlyweights){
			this.flyweights[FlyweightFactory.getKey(state)] = new Flyweight(state);
		}
	}

	private static getKey(state: string[]): string {
		return state.join('_');
	}

	public getFlyweight(sharedState: string[]): Flyweight {
		const key = FlyweightFactory.getKey(sharedState);

		if(!(key in this.flyweights)){
			this.flyweights[key] = new Flyweight(sharedState);
		}

		return this.flyweights[key];
	}

	public listFlyweights(): Flyweight[] {
		const res:Flyweight[] = [];

		for (const key in this.flyweights) {
			res.push(this.flyweights[key]);
		}

		return res;
	}
}

export {
	Flyweight,
	FlyweightFactory
};
