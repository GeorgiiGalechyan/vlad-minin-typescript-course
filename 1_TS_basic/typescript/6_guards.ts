// Types Guard (охранники типов или ограничители типов) позволяют сузить тип переменной в условном блоке.

// У Владилена неплохо всё разжевано, идёт от js к ts, но всё-таки возьму пример из учебника по typescript, там примеры с классами выглядят поинтереснее.

//=========== Пример № 1 - просто чтобы понять что такое Types Guard и с чем его едят. ===========

type alphanimeric = string | number // определим тип alphanimeric - свой буквенно-цифровой тип

// создаем функцию, принимающую аргументы типа alphanimeric, т.е. string или number
function add(a: alphanimeric, b: alphanimeric): alphanimeric {
  // логика, если number
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }

  // логика, если string
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b)
  }

  // если оба условия не соблюдаются, пробрасываем ошибку
  throw new Error()
}

//=========== Пример № 2 - уже более интересная реализация механизма Types Guard. ===========

// класс покупатель
class Customer {
  // Разрешен ли кредит?
  isCreditAllowed(): boolean {
    ///...
    return true
  }
}

// класс поставщик
class Supplier {
  // Находится ли в шорт-листе?
  isInShortList(): boolean {
    //...
    return true
  }
}

// определяем свой тип BusinessPartner, который модет быть классом Customer или Supplier
type BusinessPartner = Customer | Supplier

// Функция signContract (подписать контракт) принимает аргументы
function signContract(partner: BusinessPartner) {
  let message: string

  // Задаем логику для случая, когда partner принадлежит классу Customer
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue'
  }

  // Задаем логику для случая, когда partner принадлежит классу Supplier
  if (partner instanceof Supplier) {
    message = partner.isInShortList
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further'
  }

  // иначе, возвращаем message
  return message
}

// создаем объект, реализующий класс Customer
const OOO_Romashka: BusinessPartner = new Customer()

// Вызываем функцию signContract и в качестве аргумента передаём объект OOO_Romashka
signContract(OOO_Romashka) // 'Sign a new contract with the customer'
