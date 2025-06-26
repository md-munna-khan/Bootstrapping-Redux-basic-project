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
