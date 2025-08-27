function fizzbuzzSwitch(num) {
  let condition = (num % 3 === 0) * 1 + (num % 5 === 0) * 2;

  switch (condition) {
    case 3:
      return "FizzBuzz";
    case 1:
      return "Fizz";
    case 2:
      return "Buzz";
    default:
      return num;
  }
}

module.exports = fizzbuzzSwitch;
