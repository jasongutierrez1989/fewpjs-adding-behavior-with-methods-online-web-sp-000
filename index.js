class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  function speak(name) {
    return `${name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  function speak(name) {
    return `${name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  function speak(name, sex) {
    if (sex === 'male') {
      return `It's me! ${name}, the parrot!`;
    }
    else {
      return `${name} says squawk!`;
    }
  }
}
