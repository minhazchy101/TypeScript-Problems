// Problem 1:

function filterEvenNumbers (numbers: number[]): number[]{
    return numbers.filter(num => num % 2 === 0)
}
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

// Problem 2:
function reverseString(input: string): string{
    return input.split('').reverse().join('')
}
// console.log(reverseString("typescript"))


// Problem 3:
type StringOrNumber = string | number

 function checkType(input: StringOrNumber): StringOrNumber {
    if(typeof input === 'string') return "String";
    else return "Number";
 }
console.log(checkType(78))
