//currying/ function curry

// Normal Function
// const add = (a, b) => a + b;

// curried
// const add = (a) =>(b)=> a + b;
// console.log(add(3)(5))

// function add(a){
//     return function(b){
//         return a + b
//     }
// }
// console.log(add(2))

// const totalPrice = (amount,discount)=> amount - amount * discount;

const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3)
console.log(withDiscount(100))
console.log(withDiscount(200))
