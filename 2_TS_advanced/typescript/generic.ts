// Generic
const cars: string[] = ['ford', 'audi'] // лучше так, без generic
const cars2: Array<string> = ['ford', 'audi']

// ============ Применение Generic в промисах

// Укажем generic <string>...
const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve('Promise resolve')
  }, 2000)
})

// ... и теперь ts знает какой тип у data и можно использовать autocomplit при разработке
promise.then((data) => {
  console.log(data.toLowerCase().trim().toUpperCase())
})

// Указываем generic наследуемые от Object...
function mergeObject<T extends Object, R extends Object>(a: T, b: R): T & R {
  return Object.assign({}, a, b)
}

// ... теперь работает автокомплит + ts следит за типами параметров функции mergeObject.
const merged = mergeObject({ name: 'Vladilen' }, { age: 26 })
const merged2 = mergeObject({ model: 'Ford' }, { year: 2010 })

// Должен выдават ошибку, но почему-то не выдаёт... Разобраться в будщем!
//const merged3 = mergeObject('aaa', 'bbb')

console.log(merged.age)
console.log(merged2.model)
// console.log(merged3)

//==========

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `В этом объекте ${value.length} символов`,
  }
}

console.log(withCount('Привет Typescript'))
console.log(withCount(['I', 'am', 'array']))
// console.log(withCount(20))  // ошибка
console.log(withCount({ length: 20 })) // выведет 20, хотя мы и не планировали такое поведение., так что нужно быть внимательнее с generic и interface

//===============

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Vladilen',
  age: 26,
  job: 'Javscript',
}

console.log(getObjectValue(person, 'age'))
console.log(getObjectValue(person, 'age'))
console.log(person, 'job')
