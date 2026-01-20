//1
 const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log(user.name)
console.log(user.email)
user.lastLogin = "2026-01-01"
delete user.isActive
user.role = "admin"
console.log(Object.keys(user ))

//2
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let sum = 0
//Calculate total marks
for( let i in marks){
    sum +=marks[i];
}
//Calculate average marks
let avg =  sum / (Object.keys(marks).length)

console.log(avg)
console.log( sum)
marks.computer = "90 " //Add a new subject computer: 90
Object.keys(marks)

//3
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

console.log(settings.theme)
console.log(settings.autoSave)
// 1. Toggle theme
settings.theme = settings.theme === "light" ? "dark" : "light"
// 2. Turn autoSave to true
settings.autoSave = true
// 3. Remove notifications
delete settings.notifications
// 4. Freeze settings
Object.freeze(settings)
// Try modifying after freeze (will not work)
settings.language = "fr"
settings.theme = "light"
console.log(settings)
console.log(Object.keys(settings))

    