function fizzBuzz(i) {

    if (typeof i !== 'number') 
        return 'Wrong argument';

    if (i % 3 === 0 && i % 5 === 0)
        return 'FizzBuzz';

    if (i % 3 === 0) 
        return 'Fizz';

    if (i % 5 === 0)
        return 'Buzz';

    fizzBuzz(i);
};

console.log(fizzBuzz(6)); //Fizz
console.log(fizzBuzz(20)); //Buzz
console.log(fizzBuzz(30)); //FizzBuzz
console.log(fizzBuzz(12)); //12
console.log(fizzBuzz(false)); //Wrong argument