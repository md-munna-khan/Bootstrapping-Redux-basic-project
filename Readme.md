Welcome to a power-packed module where concepts meet code!



In this stage of your Redux Reaper journey, we’re not just talking theory — we’re building. You’ll solidify your understanding of functional programming, dive into mutation control, and unlock advanced techniques like currying and Redux middleware.



Then we take it further — by combining Redux logic with modern UI tooling using Shadcn UI, React Router, and real-world component architecture. From creating modals, card views, and dark mode, to wiring up the Redux store with selector functions — this is where it all comes together.

By the end of this module, you'll see how clean architecture, functional programming, and scalable state management merge into a professional-grade UI.
## 22-1 Basics of Functional Programming.
- 1 we are use in redux pure function because redux maintain pure function in reducer = same input same output
- 2 we are avoid impure function
```js
//=================================  Pure Function ============================= ===
// same input same output
const add = (a,b)=> a + b;
console.log(add(1,4))
console.log(add(1,4))
console.log(add(1,4))
// =========================== impure Function =================================
let total = 0;// global function 
const addTotal = (amount)=>(total= total+ amount)
console.log(addTotal(4))
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
console.log(randomNumber(3))
```
![alt text](image.png)

## 22-2 Understanding mutation and ways to avoid it.
- mutation mean change to  real situation
![alt text](image.png)
- the problem is when i update employee2.name also update employee name
```js
const employee={
    name:"Munna",
    address:{
        country:"Bangladesh",
        city:"Dhaka"
    }
}

const employee2 = employee;
employee2.name = "Sazid"
console.log(employee)
console.log(employee2)
//{ name: 'Sazid', address: { country: 'Bangladesh', city: 'Dhaka' } }
//{name: 'Sazid', address: { country: 'Bangladesh', city: 'Dhaka' } }
```
- solution is spread operator
```js
const employee={
    name:"Munna",
    address:{
        country:"Bangladesh",
        city:"Dhaka"
    }
}


const employee2={
...employee,
name:"sazid",

}
console.log(employee)
console.log(employee2)
// { name: 'Munna', address: { country: 'Bangladesh', city: 'Dhaka' } }
// { name: 'sazid', address: { country: 'Bangladesh', city: 'Dhaka' } }
```
- data mutation problem
![alt text](image-2.png)
- solution 
![alt text](image-3.png) 
- redux behind the seen use immer for manage mutation
![alt text](image-4.png)
```js
import {produce} from "immer"
const employee={
    name:"Munna",
    address:{
        country:"Bangladesh",
        city:"Dhaka"
    }
}


const employee2=produce(employee,draft=>{
    draft.name="sollu"
})
console.log(employee)
console.log(employee2)
```
## 22-3 Function Currying

```js
//currying/ function curry

// Normal Function
// const add = (a, b) => a + b;

// curried
const add = (a) =>(b)=> a + b;
```
- problem maximum time call output
```js
// normal function
const totalPrice = (amount,discount)=> amount - amount * discount;


console.log(totalPrice(100,0.3))
console.log(totalPrice(300,0.3))
console.log(totalPrice(500,0.3))
// curring function
const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3)
console.log(withDiscount(100))
console.log(withDiscount(200))

```

![alt text](image-5.png)