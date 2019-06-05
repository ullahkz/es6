class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(this.name + " is walking");
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log(this.name + " is teaching");
  }
}

const person = new Person("kazi");

person.walk();

const teacher = new Teacher("Thofa", "MSc");

teacher.walk();
