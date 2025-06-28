
import TaskCard from "@/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/counter/task/taskSlice";
import { useAppSelector } from "@/redux/hook"


export default function Task() {
  const task =useAppSelector(selectTasks) ;
  const filter =useAppSelector(selectFilter) ;
  console.log(task)
  console.log(filter)
  return (
    <div>
   <div>
       <h1>Tasks</h1>
   </div>
  {
    task.map(task=><TaskCard task={task}/>)
  }
    </div>
  )
}
