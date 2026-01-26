/*E-Commerce Shopping Cart System :
      Building a shopping cart like Amazon or Flipkart*/


  const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];

export  function getProductById(Id) {

    return products.find(p => p.id === Id);
}

                          
  export function getAllProducts() {
// Return all products
return products;
  }

export function getProductsByCategory(category) {
// Filter products by category
return products.filter(prodObj => prodObj.category === category);

}
 
 export function searchProducts(query) {
// Search products by name (case-insensitive)
return products.filter(prodObj => prodObj.name.toLowerCase().includes(query.toLowerCase()))
}
export function checkStock(productId, quantity) {
 // Check if product has enough stock
 const prod = getProductById( productId);
 return prod && prod.stock >= quantity;
 // Return true/false
  }

export function reduceStock(productId, quantity) {
  //doubt : given array is const , how do we modify?? either change it to let or not modify anuthing/?
}


   
