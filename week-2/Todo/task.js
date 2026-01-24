
import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];
let taskId = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
const titleResult = validateTitle(title);
if (titleResult !== true) return titleResult;


const priorityResult = validatePriority(priority);
if (priorityResult !== true) return priorityResult;


const dateResult = validateDueDate(dueDate);
if (dateResult !== true) return dateResult;


const newTask = {
id: taskId++,
title: title,
priority: priority,
dueDate: dueDate,
completed: false
};

tasks.push(newTask);
return "Task added successfully";
}
// 2. Get all tasks
export function getAllTasks() {
return tasks;
}
// 3. Mark task as complete
export function completeTask(id) {
const task = tasks.find(t => t.id === id);
if (!task) {
return "Task not found";
}

task.completed = true;
return "Task marked as completed";
}