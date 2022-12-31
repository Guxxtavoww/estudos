class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

new Person("teste").getName();
