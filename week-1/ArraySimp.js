const temp = [32, 35, 28, 40, 38, 30, 42];
/* 1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28 */
    
    let res1 = temp.filter(temp => temp >35)
    console.log(res1)

    let res2 = temp.map(tempeObj =>  tempeObj*9/5 + 32)
    console.log(res2)

// avg 

const calculateAverage = (arr) => {
  
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

 
  let avg = sum / arr.length;

  return avg;
};


const averageValue = calculateAverage(temp);
console.log(averageValue); 

//find temp > 40
let res3 = temp.find(ele => ele > 40)
console.log(res3)
let res4 = temp.findIndex( ele =>ele == 28)
console.log(res4)

/////2

const courses = ["javascript", "react", "node", "mongodb", "express"];

/*
Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
    */

    let r1 = courses.filter(courses => courses.length >5 )
    console.log(r1)

    let r2 = courses.map(courseObj => courseObj.toUpperCase() ) 
    console.log(r2)

    let r3 = courses.reduce((accum , elem)=> accum + "|" + elem.toUpperCase())
    console.log(r3)

    let r4 = courses.find(ele => ele == "react")

    console.log(r4)
    let r5 = courses.findIndex(course => course =="node")
    console.log(r5)

    ///3
    const marks= [ 78,92 , 35 , 88 , 40 , 67];


const passMarks = marks.filter(mark => mark >= 40);
const marksWithGrace = marks.map(mark => mark + 5);
const highestMark = marks.reduce((max, mark) => (mark > max ? mark : max), marks[0]);
const firstFail = marks.find(mark => mark < 40);
const indexOf92 = marks.findIndex(mark => mark === 92);

console.log("Pass Marks:", passMarks);
console.log("Marks with Grace:", marksWithGrace);
console.log("Highest Mark:", highestMark);
console.log("First Mark Below 40:", firstFail);
console.log("Index of 92:", indexOf92);
