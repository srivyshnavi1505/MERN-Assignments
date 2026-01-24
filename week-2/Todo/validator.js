/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist

Requirements:
     Create a modular todo app with 3 separate files:
        i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }
                        */
let title = "abcs"

export function validateTitle(title){
    if(title.length===0){
        return "title cannot be empty";
    }
    if(title.length < 3){
      return "title must be more than 3 char";
    }
}

//2
export function validatePriority(priority) {
const validPriorities = ["low", "medium", "high"];
if (!validPriorities.includes(priority)) {
return "Priority must be low, medium, or high";
}
return true;
}
 // 3. Validate due date (must be future date)
export function validateDueDate(date) {
const dueDate = new Date(date);
const today = new Date();
if (isNaN(dueDate)) {
return "Invalid date";
}
if (dueDate <= today) {
return "Due date must be in the future";
}
return true;
}


                      /*

       ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions

      iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
*/
