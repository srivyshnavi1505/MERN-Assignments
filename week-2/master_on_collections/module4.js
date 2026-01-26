/* 
MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably */
  import { roles } from "./data.js";
export let roleNames=Object.keys(roles);
export let studentCanDelete = roles.student.includes("delete");
export let allPermissions =  [...new Set(Object.values(roles).flat())];
export let addModerator = {...roles,moderator:["view","update"]};