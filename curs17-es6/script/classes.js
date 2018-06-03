class Person {
	constructor(data){
		this.firstName="" || data.firstName;
		this.lastName="" || data.lastName;
		this.age=0 || data.age;
		this.personWeight=0 || data.personWeight;
		this.personHeight=0 || data.personHeight;
	}

	get pres(){
		return this.presenting();
	}

	get personBMI(){
		return this.calcBMI();
	}

	presenting(){
		alert("Hello:"+this.firstName+" "+this.lastName+" and welcome ");
	}

	calcBMI(){
		return this.personWeight/(this.personHeight*this.personHeight);
	}
}


class PersonalData extends Person {
	presenting(){
		return "Hello:"+this.firstName+" "+this.lastName+" and welcome ";
	}
}
