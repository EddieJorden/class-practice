class Person {
	constructor(name, mood, race, height) {
		this.name = name;
		this.mood = mood;
		this.race = race;
		this.height = height;
	}
	introduce() {
		console.log(
			'hi my name is ' +
				this.name +
				' I am ' +
				this.race +
				' I am ' +
				this.height
		);
	}
}

const joolie = new Person('Joolie', 'great', 'russian', '5ft 3in');
console.log(joolie);
joolie.introduce();
