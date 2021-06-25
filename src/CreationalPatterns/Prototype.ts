class Prototype {
	constructor(public value = 0, public array:number[] = []) {
	}

	public clone():this {
		const clone = Object.create(this);

		clone.array = [...this.array];

		return clone;
	}
}

export default Prototype;
