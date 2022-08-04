// Пример № 1

function add(a: number, b: number): number {
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
interface MyPositionWithDefault extends MyPosition {
  z: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }

  if (a && !b) {
    return { x: a, y: undefined, z: `${a}` }
  }

  return { x: a, y: b }
}

console.log('Empty', position())
console.log('One param', position(42))
console.log('Two param', position(18, 15))
