/*
// how to compare two objects if there are no methods and the object keys are in order, use JSON.stringify

syntax 

JSON.stringify(object1) === JSON.stringify(object2);


// custom function for comparing if two objects are the same, probably imperfect but servicable.

function deepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  console.log(keys1, keys2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (const key of keys1) {
    const val1 = obj1[key]
    const val2 = obj2[key]

  
    if (typeof val1 === 'function' && typeof val2 === 'function') {
      const isFunctionEqual = compareFunctions(val1, val2)
      if (isFunctionEqual === false) {
        return false
      }
    }
  
    const areObjects = isObject(val1) && isObject(val2)
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false
    }
  }
  return true
}
function isObject(object) {
  return (
    object != null &&
    (typeof object === 'object' || typeof object === 'function')
  )
}


function compareFunctions(func1, func2) {
  return func1.toString() == func2.toString()
}


console.log(deepEqual(object1, object2))
*/
