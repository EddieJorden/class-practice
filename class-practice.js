class Person {
	constructor(name, mood, race) {
		this.name = name;
		this.mood = mood;
		this.race = race;
	}
	introduce() {
		console.log('hi my name is ' + this.name + ' and I am ' + this.race);
	}
}

const johnny = new Person('Johnny', 'happy', 'arian');
console.log(johnny);
johnny.introduce();

const joolie = new Person('Joolie', 'great', 'russian');
console.log(joolie);
joolie.introduce();
