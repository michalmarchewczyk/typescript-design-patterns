class Product {
	public parts:string[] = [];
	public number = 0;
}

interface Builder {
	buildPartA():void;
	buildPartB(value:number):void;
	buildPartC():void;
	getProduct():Product;
}

class ConcreteBuilder implements Builder {
	private product:Product = new Product();

	constructor() {
		this.reset();
	}

	public reset():void {
		this.product = new Product();
	}

	public buildPartA():void {
		this.product.parts.push('partA');
	}

	public buildPartB(value: number):void {
		this.product.number = value;
	}

	public buildPartC():void {
		this.product.parts.push('partC');
	}

	getProduct():Product {
		return this.product;
	}

}

export default ConcreteBuilder;
export {
	Builder,
	Product
};
