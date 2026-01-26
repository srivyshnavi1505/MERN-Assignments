/*MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably */

import { courses } from "./data.js";
export let publishedCourses = courses.filter(c=>c.published);
export let sortedCourses = [...publishedCourses].sort((a,b)=>b.price-a.price);
export let courseTitles = publishedCourses.map(c=>({title:c.title,price:c.price}));
export let totalCourseValue = publishedCourses.reduce((t,c)=>t+c.price,0);
export let addCourse = newCourse => [...courses,newCourse];

