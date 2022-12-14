// Generic позволяют использовать типы в качестве формальных параметров.

// В кратком курсе от Владилема Минина Generic очень скупо описаны. Наверное они будут более подробно описаны в advanced курсе.

// Из синтаксиса всё более-менее понятно
const arrayOfNumbers: Array<number> = [1, 2, 3, 4]
const arrayOfString: Array<string> = ['Hello', 'Georgi']

// Создаем функцию, которая принимает и возвращает массив состоящий из элементов одного и того же типа. Это может быть массив строк, чисел итд, но на входе и выходе типы должны совпадать.
function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

// Вызывается без ошибок
reverse(arrayOfNumbers) // принимает массив чисел
reverse(arrayOfString) // принимает массив строк
