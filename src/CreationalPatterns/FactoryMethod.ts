abstract class Creator {
	public abstract createProduct(): Product;
}

interface Product {
	value:number;
	operation():string;
}

class CreatorA extends Creator {
	public createProduct(): Product {
		return new ProductA();
	}
}

class CreatorB extends Creator {
	public createProduct(): Product {
		return new ProductB();
	}
}

class ProductA implements Product {
	public value = 1;
	operation(): string {
		return 'Product A';
	}
}

class ProductB implements Product {
	public value = 2;
	operation(): string {
		return 'Product B';
	}
}

export {
	Creator,
	CreatorA,
	CreatorB,
	Product
};
