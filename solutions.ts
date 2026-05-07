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
// console.log(checkType(78))

//Problem 4:
const getProperty = <T, K extends keyof T>(obj: T, key: K)=>{
     return obj[key]; 
    }
const user = { id: 1, name: "John Doe", age: 21 };

// console.log(getProperty(user, "name"));

// Problem 5:
interface Book {
     title: string;
  author: string;
  publishedYear: number;
}


function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead : true
    }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook))



//Problem 6: 
class Person {
    name: string
    age:  number

    constructor(
        name: string,
    age:  number){
        this.name = name,
        this.age = age

    }
}

class Student extends Person {
    grade: string

    constructor(
         name: string,
         age:  number,
          grade: string
    ){
        super(name, age)
        this.grade = grade
    }

    getDetails (): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

//Problem 7:

function getIntersection(num1: number[], num2:number[]): number[]{
    return num1.filter((num) => num2.includes(num));
}

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
