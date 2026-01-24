

import { addTask, getAllTasks, completeTask } from "./task.js";


// 1. Add some tasks
console.log(addTask("Study JavaScript", "high", "2026-02-10"));
console.log(addTask("Complete assignment", "medium", "2026-02-05"));


// 2. Display all tasks
console.log("All Tasks:");
console.log(getAllTasks());


// 3. Complete a task
console.log(completeTask(1));


// 4. Display all tasks again
console.log("Updated Tasks:");
console.log(getAllTasks());