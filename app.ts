/*
ES6 TypeScript #1 forEach Method
https://youtu.be/wmqmtFp7Ojk
*/
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// function sumNums(num: number): void {
//     sum += num
// }
// numbers.forEach(sumNums)
// console.log(sum)

/*
ES6 TypeScript #2 Map Method
https://youtu.be/npm5hsVrh1U
*/
// const cars = [
//     { model: 'Buick', price: 'cheap' },
//     { model: 'Camaro', price: 'expensive' },
// ]

// const prices = cars.map(function (car: {
//     model: string
//     price: string
// }): string {
//     return car.price
// })

// console.log(prices)

/*
ES6 TypeScript #3 Filter Method
https://youtu.be/pBJ9-8nKH38
*/
// const students = [
//     { name: 'Brad', major: 'Computer Science' },
//     { name: 'Sally', major: 'Art' },
//     { name: 'Michelle', major: 'Math' },
//     { name: 'Joe', major: 'Computer Science' },
//     { name: 'Karen', major: 'Computer Science' },
// ]

// const CSMajors = students.filter(function (student: {
//     name: string
//     major: string
// }): boolean {
//     return student.major === 'Computer Science'
// })

// console.log(CSMajors)

/*
ES6 TypeScript #4 Find Method
https://youtu.be/yaEaT1ctb0E
*/

// const students2 = [
//     { name: 'Brad', age: 19, major: 'Computer Science' },
//     { name: 'Sally', age: 20, major: 'Art' },
//     { name: 'Michelle', age: 22, major: 'Math' },
//     { name: 'Joe', age: 21, major: 'Computer Science' },
//     { name: 'Karen', age: 19, major: 'Computer Science' },
// ]

// const studentOver20 = students2.find(function (student: {
//     name: string
//     age: number
//     major: string
// }): string | undefined {
//     if (student.age > 20) {
//         return student.name
//     }
// })

// console.log(studentOver20)

/*
ES6 TypeScript #5 Every Method
https://youtu.be/k7SHXqLx0v4
*/

// const isEveryStudentOver20 = students2.every(function (student: {
//     name: string
//     age: number
//     major: string
// }): boolean {
//     return student.age > 20
// })

// console.log(isEveryStudentOver20)

/*
ES6 TypeScript #6 Some Method
https://youtu.be/DuQxPsaDKEs
*/

// const areSomeOver20 = students2.some(function (student: {
//     name: string
//     age: number
//     major: string
// }): boolean {
//     return student.age > 20
// })

// console.log(areSomeOver20)

/*
ES6 TypeScript #7 Reduce Method
https://youtu.be/S7-HMmZvaQg
*/

// const studentScores = [80, 90, 85, 75, 100]
// // Note: the below function is titled 'getAvg' in the video by accident 😀.
// // 'sumScores' is the correct name.
// function sumScores(total: number, currVal: number): number {
//     return total + currVal
// }
// const averageScore = studentScores.reduce(sumScores) / studentScores.length
// console.log(averageScore)

/*
ES6 TypeScript #8 Template Literals
https://youtu.be/rsokU8X12mk
*/

// function printCurrentDate(): string {
//     const month = new Date().getMonth()
//     // Note: in the video, the below variable is titled 'date' by accident 😀
//     const day = new Date().getDate()
//     const year = new Date().getFullYear()
//     return `Current date is ${month}/${day}/${year}`
// }

// console.log(printCurrentDate())

/*
ES6 TypeScript #9 const and let variables
https://youtu.be/l_aILr6-3ug
*/

// Example 1
// function printJob() {
//     {
//         let job = 'Engineer'
//         console.log(job)
//     }
//     console.log(job)
// }
// Example 2
// const runCodeBlock = true
// if(runCodeBlock) {
//   //let firstName = 'Scott'
//   const firstName = 'Scott'
//   firstName = 'Sara'

//   console.log(firstName);
// }
// Example 3
// const runCodeBlock = true
// if(runCodeBlock) {
//   console.log(firstName);
//   var firstName = 'Scott'
//   // let firstName = 'Scott'
// }
// Example 4
// var i = 24
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log('------')
// console.log(i)
// Example 5
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }

/*
ES6 TypeScript #10 Arrow Functions
https://youtu.be/Q5hIjXvfM7M
*/
// Example 1
// const add = (num1: number, num2: number): number => num1 + num2
// console.log(add(2, 3))

// Example 2
// const scores = [90, 88, 95]
// const numScores = scores.reduce((total: number, currVal: number): number => {
//     return total + currVal
// }, 0)
// console.log(numScores)

// Example 3
// const myClassroom = {
//     students: ['Sue', 'Steven', 'Maggie', 'Trent'],
//     subject: 'Math',
//     roster: function (): string[] {
//         return this.students.map((student: string): string => {
//             return `${student} is in Mr.C's ${this.subject} class`
//         })
//     },
// }
// console.log(myClassroom.roster())

// Example 4
// const profile = {
//     name: 'Alex',
//     //getName: () => `Name: ${this.name}`
//     // getName: function () {
//     //     return `Name is: ${this.name}`
//     // },
// }
// console.log(profile.getName())

/*
ES6 TypeScript #11 Rest and Spread Operators
https://youtu.be/5R3M8SCBgAU
*/
// Example 1
// function getSumOfNums(...nums: number[]) {
//     return nums.reduce(
//         (sum: number, currVal: number): number => sum + currVal,
//         0
//     )
// }
// console.log(getSumOfNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Example 2
// const maleStudents = ['Bob', 'Sammy', 'Joe']
// const femaleStudents = ['Melisa', 'Tara', 'Trina']
// const allStudents = [...maleStudents, ...femaleStudents]
// console.log(allStudents)

// Example 3
// const getHighestScore = (student: string, ...scores: number[]): string => {
//     return `${student}'s highest score is: ${Math.max(...scores)}`
// }
// console.log(getHighestScore('Scott', 90, 86, 79, 60, 91, 88, 85))

/*
ES6 TypeScript #12 Convert an ES5 Object Constructor to a Class
https://youtu.be/1FYGzjqIjTY
*/

// class Car {
//     year: number
//     model: string
//     make: string
//     constructor(year: number, model: string, make: string) {
//         this.year = year
//         this.model = model
//         this.make = make
//     }
//     start(): string {
//         return 'car started'
//     }
//     stop(): string {
//         return 'car stopped'
//     }
// }
// const modelS = new Car(2020, 'S', 'Tesla')
// console.log(modelS)
// console.log(modelS.start())

/*
ES6 TypeScript #13 Promises and Fetch
https://youtu.be/RsShpgaA3bQ
*/
// Example 1
// import fetch from 'node-fetch'

// fetch('https://swapi.dev/api/people/1')
//     .then((result) => result.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

// Example 2
// Note: Unlike the video, the below code reflects the latest version of the Star Wars API
// import axios from 'axios'

// axios
//     .get('https://swapi.dev/api/people/1')
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error))
