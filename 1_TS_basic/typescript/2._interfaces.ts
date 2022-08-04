// Интерфейсы - ни во что не компилируются, нужны тлько на этапе разработки

interface Rect {
  readonly id: string // только для чтения, нельязя переназначить
  color?: string // Необязательный
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: `1234`,
  size: {
    width: 20,
    height: 30,
  },
  color: `#ccc`,
}

const rect2: Rect = {
  id: `12345`,
  size: {
    width: 10,
    height: 5,
  },
}

rect2.color = `black`

const rect3 = {} as Rect // объект типа Rect
const rect4 = <Rect>{} // объект типа Rect (старый тип записи)

// ===== Наследование интерфейсов =====

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: `123`,
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height
  },
}

// ===== Наследование Классов от Интерфейсов ======

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

// ===== Интерфейс для объекта, укторого будет большое количество ключей =====

interface Styles {
  [key: string]: string // специальный синтаксис
}

const css: Styles = {
  border: `1px solid black`,
  marginTop: `2px`,
  borderRadius: `5px`,
}
