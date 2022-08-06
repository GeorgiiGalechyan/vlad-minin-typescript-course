// Просто синтаксис. Классы создаются также как и в ES6, только с нюансами

class TypeScript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: TypeScript version is ${this.version} `
  }
}

// ============ Readonly - только для чтения

// К readonly полям и методам , можно получить доступ за пределами класса, но их значение нельзя изменить.
// Readonly поля иметоды не могут быть изменены вне класса, их необходимо либо инициализировать при объявлении, либо инициализировать внутри конструктора класса.

class Car {
  // readonly делает поле или метод доступным только для чтения в классе, типе или интерфейсе.
  readonly model: string
  readonly numberOfWheels: number = 4

  constructor(theModel: string) {
    this.model = theModel
  }

  // Выдаст ошибку, т.к. нельзя меняь readonly поле model даже внутренним методом
  /*renameModel(newModel:string):void {
    this.model = newModel
  }*/
}

const tesla = new Car('Tesla') // инициируем readonly свойство при создании объекта. Потом не изменишь.
console.log(tesla.model) // 'Tesla'

// Краткий формат записи конструктора с использование модификаторов TypeScript
class Car1 {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {} // это будет работать и при других модификаторов
}

//=========== Модификаторы
// Три вида мотификатороы: protected, public и private

class Animal {
  protected voice: string = '' // protected поля и свойства из вне класса видны только в классах-наследниках
  public color: string = 'black'

  // к private полям и методам нельзя будет обратиться извне при создании объекта данного класса.
  private go(): void {
    console.log('Go')
  }
}

const animal = new Animal()
// animal.voice - protected поле voice недоступно в объекте класса Animal, доступно только в классах наследниках
// animal.go   - private метод go недоступен в объекте класса Animal, доступно только в самом классе Animal
animal.color = 'white' // public поле color доступно в объекте класса Animal и классах наследниках, и в объектах классов наследников

class Cat extends Animal {
  // в класс доступно protected поле "voice" родительского класса Animals
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

// в пременной cat (istance класса Cat) - protected свойства класса уже не доступны.
// Мы можем работать с полем voice класса Animals только через метод setVoice в классе Cat
const cat = new Cat()

console.log(cat.color) // public поле color доступно в объекте класса Cat (объекте наследнике класса Animal)

//=========== Абсрактные классы и методы - ни во что не компилируются.

// Абстрактные классы нужны чтобы от них наследоваться...
// Класс, реализующий абстрактный класс, должен вызывать super()в конструкторе.
// Если абстрактный класс содердит абстрактный метод, то класс, реализующий абстрактный класс должен содержать реализацию всех абстрактных методов!

// Абстрактный класс
abstract class Component {
  constructor(public title: string) {} // конструктор в лаконичном виде благодаря модификатору

  // просто рандомный метод
  display(): void {
    console.log(this.title)
  }

  // абстрактные методы
  abstract render(): void
  abstract info(): string
}

// класс AppComponent наследуется от абстрактного класса Component.
// в этом классе мы должны прописать реализацию абстрактных методов render и info из родительского класса
class AppComponent extends Component {
  // реализация абстрактного метода render
  render(): void {
    console.log('Component om render.')
  }

  // реализация абстрактного метода info
  info(): string {
    return 'This is info.'
  }
}

// создаем объект реализующий класс AppComponent
const btn = new AppComponent('button')

// https://www.typescripttutorial.net/typescript-tutorial/typescript-abstract-classes/ - Отличный пример работы с абстрактными классами, методами и свойствами
