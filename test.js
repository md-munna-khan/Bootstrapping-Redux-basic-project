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