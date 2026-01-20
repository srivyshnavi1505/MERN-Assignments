//ASSIGNMENT 1///////////////////////////////////////
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
/*
Tasks:
    
Use filter() to get only inStock products
Use map() to create a new array with:  { name, totalPrice }
Use reduce() to calculate grand total cart value
Use find() to get details of "Mouse"
Use findIndex() to find the position of "Keyboard" */
//filter()
let fil =  cart.filter(cartObj => cartObj.inStock==true )
console.log(fil) 

let mapres = cart.map(cartObj => {
    return { name : cartObj.name,
    totalprice : cartObj.price * cartObj.quantity 
    }
})
console.log(mapres)
//reduce() 

let red = cart.reduce((acc,cartObj)=> acc + cartObj.price * cartObj.quantity ,0)
console.log(red)

//find
let ffind = cart.find(cartObj => cartObj.name == "Mouse")
console.log(ffind)
//index
let ind= cart.find(cartObj => cartObj.name == "Keyboard")
console.log(ind)

///ASSIGNMENT 2 /////////////
/*Student Performance Dashboard

You are working on a college result analysis system.

Test Data: */
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
   /* 
1.filter() students who passed (marks ≥ 40)
2.map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D

   
3.reduce() to calculate average marks
4.find() the student who scored 92
5.findIndex() of student "Kiran"  */

//1.Filter 
let stupass =  students.filter(stuObj => stuObj.marks >= 40)
console.log(stupass) 
//2.map 
const gradedStudents = students.map(student => {
  let grade;

  if (student.marks >= 90) {
    grade = "A";
  } else if (student.marks >= 75) {
    grade= "B";
  } else if (student.marks>= 60) {
    grade = "C";
  } else {
    grade = "D";
  }

  return { ...student, grade: grade };
});

console.log(gradedStudents);
//3.reduce() -> avg marks 


const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks); 

//4 find 
const topStudent = students.find(student => student.marks === 92);

console.log(topStudent); 
 //5 findindex 
 const kiranIndex = students.findIndex(student => student.name === "Kiran");

console.log( kiranIndex); 

//ASSIGNMENT 3:
//-------------
//Employee Payroll Processor
//
//You are building a salary processing module in a company HR app.
//
//Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Tasks:
//    1. filter() employees from IT department
const itEmp=employees.filter(e=>e.department==="IT");
console.log("IT Employees:",itEmp);
//    2. map() to add:
//            netSalary = salary + 10% bonus
const netEmp=employees.map(e=>{
  e.netSalary=e.salary+e.salary*0.10;
  return e;});

console.log(netEmp);
//    3. reduce() to calculate total salary payout
const totalSal=employees.reduce((sum,e)=>sum+e.salary,0);
console.log("Total Salary",totalSal);
//    4. find() employee with salary 30000
const emp30k=employees.find(e=>e.salary===30000);
console.log("Employee with 30k salary:",emp30k);
//    5. findIndex() of employee "Neha"
const nehaIdx=employees.findIndex(e=>e.name==="Neha");
console.log("Index of Neha:",nehaIdx);



// ASSIGNMENT 4: Movie Streaming Platform
const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

function processMovies(movies) {
    const sciFiMovies = movies.filter(movie => {
        return movie.genre === "Sci-Fi";
    });
//map
    const moviesWithTitleRating = movies.map(movie => {
        return `${movie.title} (${movie.rating})`;
    });
    //reduce
    const averageRating = movies.reduce((sum, movie) => {
        return sum + movie.rating;
    }, 0) / movies.length;
//find
    const movieJoker = movies.find(movie => {
        return movie.title === "Joker";
    });
    //findindex
    const indexOfAvengers = movies.findIndex(movie => { return movie.title === "Avengers"; });

    return {
        sciFiMovies,
        moviesWithTitleRating,
        averageRating,
        movieJoker,
        indexOfAvengers
    };
}
const movieResults = processMovies(movies);
console.log(movieResults);

//ASSIGNMENT 5: 
//-------------
//Bank Transaction Analyzer
//
//You are building a bank statement summary.
//
//Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//Tasks:
//    1. filter() all credit transactions
const credits = transactions.filter(t => t.type === "credit");
console.log(credits);

//    2. map() to extract only transaction amounts
const amts = transactions.map(t => t.amount);
console.log(amts);

//    3. reduce() to calculate final account balance
const balance = transactions.reduce((bal, t) => {
  return t.type === "credit" ? bal + t.amount : bal - t.amount;
}, 0);
console.log(balance);

//    4. find() the first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");
console.log(firstDebit);

//    5. findIndex() of transaction with amount 10000*/
const idx10000 = transactions.findIndex(t => t.amount === 10000);
console.log(idx10000);