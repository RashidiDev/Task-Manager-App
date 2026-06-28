import { useTaskDB } from "@/context/TaskDBContext";
import EmptyTasks from "./emptyTasks";
import TaskComponent from "./task";

const Tasks = () => {
  const tasksDb = useTaskDB();
  const tasks = tasksDb?.tasks?.sort((a, b) => b.createdAt - a.createdAt);
  if (!tasks || tasks.length === 0) {
    return (
      <div>
        <EmptyTasks />
      </div>
    );
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
