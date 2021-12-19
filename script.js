class User {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	seyHello(){
		console.log('Name: ' + this.name);
		console.log('Age: ' + this.age);
	}
}

const kraiviks = new User('Kraiviks', 25);

kraiviks.seyHello();