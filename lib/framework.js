function compare(target, expectation) {
  if (target === expectation) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function toInclude(target, expectation) {
  for (let index = 0; index < target.length; index++) {
    if (target[index] === expectation) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
