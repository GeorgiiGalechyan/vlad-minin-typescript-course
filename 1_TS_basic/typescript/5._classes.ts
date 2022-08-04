// Просто синтаксис. Классы создаются также как и в ES6, только с нюансами.

class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

class Car {
  readonly model: string // readonly - только чтение, нельзя переписать вне конструктура
  readonly numberOfWheels: number = 4 // readonly - нельзя менять вне конструктора

  constructor(theModel: string) {
    this.model = theModel
  }
}

class Car1 {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {}
}

// Модификаторы в классах
// Модификаторы - protected, private, public
class Animal {
  // доступен в классе Animal и в классах, которые от него наследуются.
  // Но недоступен в instance (экземпляр)
  protected voice: string = ''

  // Доступен везде
  public color: string = 'black'

  // private - доступны только в самом классе Animal
  private go() {
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()

cat.setVoice('test')
console.log(cat.color)

// Абстрактные классы
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log(`Component on render`)
  }

  info(): string {
    return `This is info`
  }
}
