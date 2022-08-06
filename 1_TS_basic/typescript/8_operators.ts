// В этом разделе будут рассмотрены некоторые вспомогательные операторы

interface IPerson {
  name: string
  age: number
}

type PersonKeys = keyof IPerson // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

// сздаем тип, наследуемся от типа с исключением каких-то полей
type UserKeysNiMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' , 'email'
type UserKeysNiMeta2 = Pick<User, 'name' | 'email'> // 'name' , 'email'

let u1: UserKeysNiMeta1 = 'name'
u1 = 'email'
// u1 = 'qqq'   // выдаст error, т.к. u1 может иметь только знаения 'name' , 'email'
