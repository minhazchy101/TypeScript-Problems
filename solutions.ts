function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0)
}

function reverseString(input: string): string {
    return input.split('').reverse().join('')
}




type StringOrNumber = string | number

function checkType(input: StringOrNumber): StringOrNumber {
    if (typeof input === 'string') return "String";
    else return "Number";
}

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };


interface Book {
    title: string;
    author: string;
    publishedYear: number;
}


function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true
    }
}


class Person {
    name: string
    age: number

    constructor(
        name: string,
        age: number) {
        this.name = name,
            this.age = age

    }
}

class Student extends Person {
    grade: string

    constructor(
        name: string,
        age: number,
        grade: string
    ) {
        super(name, age)
        this.grade = grade
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}



function getIntersection(num1: number[], num2: number[]): number[] {
    return num1.filter((num) => num2.includes(num));
}


