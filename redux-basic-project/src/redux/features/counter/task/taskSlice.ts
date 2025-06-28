import type { iTask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState{
    task:iTask[]
}
const initialState :InitialState={
    task:[
        {
        id:"ewrwerwe",
        title:"Initialize frontend",
        description:"Create Home page",
        duaDate:"2025-12",
        isCompleted:false,
        priority:"High"
   
}, 
        {
        id:"ewrwerwe",
        title:"Create Github Repo",
        description:"Create Home page",
        duaDate:"2025-12",
        isCompleted:false,
        priority:"High"
   
}] };

const taskSlice = createSlice({
name:"task",
initialState,
reducers:{

}
});

export default taskSlice.reducer;