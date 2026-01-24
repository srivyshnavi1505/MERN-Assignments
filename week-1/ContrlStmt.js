//smart login status engine 
// store result in  message , return message 
let isLoggedIn = false; // initial login status
let isProfileComplete = false; // initial profile completion status

function login() {
    let message = "";

    if (!isLoggedIn) {
        message = "Please login";
    } else {
        if (isProfileComplete) {
            message = "Welcome back";
        } else {
            message = "Complete profile";
        }
    }

    return message;
}

let message = login();
console.log(message);

//2nd que
  //course pice tag labler 
let price = 1299;

function courseLabeler(price) {
    if (price < 500) {
        return "Budget course";
    } else if (price >= 500 && price <= 1000) {
        return "Standard course";
    } else {
        return "Premium course";
    }
}

let label = courseLabeler(price);
console.log(label); // Premium course


//3rd que
/*
Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

Tasks:
   1. If both conditions are true → "Enroll Now"
   2. O;therwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message  */

   //1.
   let hasPaid = true;
let hasCompletedBasics = false;

// Using if-else
let enrollMessage;
if (hasPaid && hasCompletedBasics) {
    enrollMessage = "Enroll Now";
} else {
    enrollMessage = "Complete Requirements";
}
console.log(enrollMessage);

// Using ternary operator
let enrollMessageTernary = (hasPaid && hasCompletedBasics) ? "Enroll Now" : "Complete Requirements";
console.log(enrollMessageTernary);

