function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function increment(n) {
  n = n + 1
  return n
}

function decrement(n) {
  n = n - 1
  return n
}

function makeInt(n) {
  try {
    return parseInt(n, 10)
  } catch (error) {
      return NaN
    }
  }
}

function preserveDecimal(n) {
  try {
    return parseFloat(n, 10)
  } catch (error) {
    return NaN
  }
}
