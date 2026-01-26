import { getActiveUsers, getActiveUserNames, AdminExists } from "./module1.js";
import { publishedCourses, totalCourseValue } from "./module2.js";
import { mergedCart, cartTotal } from "./module3.js";
import { roleNames, allPermissions } from "./module4.js";

console.log("Active Users:", getActiveUsers());
console.log("Active User Names:", getActiveUserNames());
console.log("Admin Exists:", AdminExists());
console.log("Published Courses:", publishedCourses);
console.log("Total Course Value:", totalCourseValue);
console.log("Merged Cart:", mergedCart);
console.log("Cart Total:", cartTotal);
console.log("Role Names:", roleNames);
console.log("All Permissions:", allPermissions);
