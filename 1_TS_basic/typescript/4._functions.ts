// Пример № 1

function sumTwoNum(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

// Перегрузка функии
interface MyPosition {
  x: number | undefined
  y: number | undefined
}

// Перекрытие интерфейсов,один интерфейс ссылается а другой
interface MyPositionWithDef extends MyPosition {
  def: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDef
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }

  if (a && !b) {
    // Здесь было  return { x: a, y: undefined, def: a.toString() }, но выдавало ошибку.
    //Пришлось убрать Из реализации def
    return { x: a, y: undefined }
  }

  return { x: a, y: b }
}

console.log('Empty', position())
console.log('One params', position(42))
console.log('Two params', position(10, 15))
