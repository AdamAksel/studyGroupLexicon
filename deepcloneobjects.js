/*
three different ways to deepclone an object

1. JSON.stringify and JSON.parse,
good for nested objects but does not copy object methods.

syntax

let objectClone = JSON.parse(JSON.stringify(originalObject))

2. the spread operator, ..., good for object methods and shallow objects
but requires extra work to copy nested objects

syntax

let objectClone = {...originalObject}

if you have a nested object the syntax is this

let objectClone = {...originalObject, nestedObject: {...originalObject.nestedObject}}

3. Williams deepclone function, works on both nested objects and methods

syntax

function cloneValue(value) {
  let type = typeof value
  if (type === 'number' || type === 'string' || type === 'function') {
    return value
  }

  if (type === 'object') {
    if (Array.isArray(value)) {
      let array = [] // Skapar en ny array som vi lägger nya kopierade värden i
      for (let i = 0; i < value.length; i++) {
        array.push(cloneValue(value[i]))
      }
      return array
    } else {
      return deepClone(value)
    }
  }
}

function deepClone(object) {
  let copy = {}

  for (let key in object) {
    let clonedValue = cloneValue(object[key])
    copy[key] = clonedValue
  }

  return copy
}

let objectClone = deepClone(originalObject)

*/
