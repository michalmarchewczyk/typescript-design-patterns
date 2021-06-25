class Singleton {
	private static instance:Singleton;
	public value = 0;

	private constructor(){}

	public static getInstance():Singleton {
		Singleton.instance ??= new Singleton();
		return Singleton.instance;
	}

	setValue(value:number):void{
		this.value = value;
	}
}

export default Singleton;
