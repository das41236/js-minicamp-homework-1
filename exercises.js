//Do not change any of the function names

function multiplyByTen(num) {
  // return num after multiplying it by ten
  var hi = num * 10;
  return hi;
}

function subtractFive(num) {
  // return num after subtracting five
  var hi = num - 5;
  return hi;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  if (str1.length == str2.length) {
    return true;
  }else {
    return false;
  }
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50) {
    return true;
  }else {
    return false;
  }
}

function add(x, y) {
  // add x and y together and return the value
  var hi = x + y;
  return hi;
}

function subtract(x, y) {
  // subtract y from x and return the value
  var hi = x - y;
  return hi;
}

function divide(x, y) {
  // divide x by y and return the value
  var hi = x / y;
  return hi;
}

function multiply(x, y) {
  // multiply x by y and return the value
  var hi = x * y;
  return hi;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  var hi = x % y;
  return hi;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  if (num % 2 == 0) {
    return true;
  }else {
    return false;
  }
}

function isOdd(num) {
  // return true if num is false
  // otherwise return false
  if (num % 2 != 0) {
    return true;
  }else {
    return false;
  }
}

function square(num) {
  // square num and return the new value
  var hi = Math.pow(num,2);
  return hi;
}

function cube(num) {
  // cube num and return the new value
  var hi = Math.pow(num,3);
  return hi;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  var hi = Math.pow(num, exponent);
  return hi;
}

function roundNumber(num) {
  // round num and return it
  return Math.round(num);
}

function roundUp(num) {
  // round num up and return it
  return Math.ceil(num,1);
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  var hi = str + '!';
  return hi;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  var hi = firstName + ' ' + lastName;
  return hi;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  var hi = 'Hello'+' ' + name + '!';
  return hi;
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  var hi = length * width;
  return hi;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  var hi = .5*base*height;
  return hi;
}

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  var hi = Math.round(Math.pow(radius, 2)*Math.PI);
    return hi;
}

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  var vol = length * width * height;
  return vol;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
