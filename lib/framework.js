//

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log(`Passed: ${assertionToCheck}`);
    }
  }
}

// ============================================================================

// Results

class Results {
  constructor() {
    this.results = [];
    html = '';
  }
  print() {
    this.results.forEach(function(result) {

      html += '<div>';
      html += result[0]
      html += '</div>';

      html += '<div>';
      html += result[1];
      html += '</div>';

      html += '<div>';
      html += result[2];
      html += '</div>';

    });
    document.getElementByID('#test-results').innerHTML = this.html;
  }
}

// Descriptions

function describe(description, func) {
  return func();
}

function it(description, func) {
  return func();
}


// Expectations

function expect(target) {
  return new Expectation(target);
}

class Expectation {

  constructor(target) {
    this.target = target;
  }

  toEqual(expectation) {
    if (this.target === expectation) return true;
    return false;
  }

  toInclude(element) {
    this.target.forEach(function(item) {
      if (item === element) return true;
    });
    return false;
  }

}


// // Original testing framework developed with Vijay
//
// function compare(target, expectation) {
//   if (target === expectation) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
//
// function toInclude(target, expectation) {
//   for (let index = 0; index < target.length; index++) {
//     if (target[index] === expectation) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// }
