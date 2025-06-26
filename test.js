// Pure Function

const add = (a, b) => a + b;
// console.log(add(1, 4));
// console.log(add(1, 4));
// console.log(add(1, 4));

// impure Function
// let total = 0; // maybe others function depended in total
// const addTotal = (amount) => (total = total + amount);
// console.log(addTotal(4));

// this is also impure function because every second he update it
const updateDate = () =>{
    new Date();
}

const randomNumber = (amount)=>{
return amount + Math.random()
}
console.log(randomNumber(3))
console.log(randomNumber(3))
console.log(randomNumber(3))