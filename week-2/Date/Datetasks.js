/*---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss */
//1. Create a Date object for current date & time.
/*/* get date components 
getFullYear() //year(2026)
getMonth() //month(0-11)
getDate() //day of month(1-31)
getDay() //day of week(0-6)
getHours() //hours(0-23)
getMinutes() //minutes(0-59)
getSeconds() //seconds(0-59)
getMilliseconds() //milliseconds(0-999)
getTime() //millisecond
*/

let d1 = new Date(Date.now());
console.log(d1.toString())

//2. Extract and display:
 //  * Year

 console.log(d1.getFullYear())
// * Month (human readable)
const months = ["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"];

console.log(months[d1.getMonth()])
// * Date

console.log(d1.getDate())
//* Day of week
const days = ["mon","tue","wed","thurs","fri","sat"];

let d5 = new Date();
console.log(days[d1.getDay()])

//* Hours, minutes, seconds */
let d6 = new Date(2026,0,21);
console.log(d6)


//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)


      let enrollmentDeadline = new Date("2026-01-20");

/*
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed" */
     if(d1<enrollmentDeadline){
        console.log("Enrollment Open");
     }else{
        console.log("Enrollment Closed");
     }

/*2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid */
   let inputDate = "2026-02-30";
let dateObj = new Date(inputDate);
if (dateObj.toString() === "Invalid Date") {
  console.log("Invalid Date");
} else {
  console.log("Valid Date");   // wrong , getting wrong output :(
}

////Assignment 3: Age Calculator (Intermediate)
//-------------------------------------------
//Input:
let dob=new Date("2006-11-01")
let current=new Date()

//Tasks:
//        1. Calculate exact age in years
let age=current.getFullYear()-dob.getFullYear()
let mDiff=current.getMonth()-dob.getMonth()
if(mDiff<0||(mDiff===0&&current.getDate()<dob.getDate())){
  age--
}
console.log(age)


// assignment done 