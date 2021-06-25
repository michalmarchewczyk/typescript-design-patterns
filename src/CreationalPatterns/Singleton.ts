class Singleton {
	private static instance:Singleton;

	private constructor(public value:number = 0){}

	public static getInstance():Singleton {
		Singleton.instance ??= new Singleton();
		return Singleton.instance;
	}

	setValue(value:number):void{
		this.value = value;
	}
}

export default Singleton;
