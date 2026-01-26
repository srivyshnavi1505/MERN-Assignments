/*MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses */

  
import { cart,courses } from "./data.js";
export let mergedCart=cart.map(i=>{
  let c=courses.find(c=>c.id===i.courseId);
  return {...c,qty:i.qty};
});
export let cartTotal = mergedCart.reduce((t,i)=>t+i.price*i.qty,0);
export let increaseQty = (id) =>  cart.map(i=>i.courseId===id?{...i,qty:i.qty+1}:i);
export let removeFromCart = id => cart.filter(i=>i.courseId!==id);
export let allPaidCourses = mergedCart.every(i=>i.price>0);