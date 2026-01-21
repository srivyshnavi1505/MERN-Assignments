/* Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/
 const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };         


let userCop = {... user }
//2.i
console.log(userCop.name = " ram");
userCop.theme
console.log(user)
console.log(userCop)

//Hands-On 2: Deep Copy (Isolation & Safety Use Case)
//---------------------------------------------------


                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
/*
🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged */
         let copyorder = structuredClone(order ) ;
         console.log(copyorder)
         copyorder.customer.address.city = "guwahati "
         copyorder.items[0].price = 85000

         console.log(copyorder.customer.address.city)
         console.log(copyorder.items[0].price)
         console.log(copyorder)
         console.log(order)


