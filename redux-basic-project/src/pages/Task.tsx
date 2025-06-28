import { selectFilter, selectTasks } from "@/redux/features/counter/task/taskSlice";
import { useAppSelector } from "@/redux/hook"


export default function Task() {
  const task =useAppSelector(selectTasks) ;
  const filter =useAppSelector(selectFilter) ;
  console.log(task)
  console.log(filter)
  return (
    <div>
      i am task
    </div>
  )
}
