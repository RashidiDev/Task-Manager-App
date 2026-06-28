import AddTasksButton from "./addTasksButton";
import Tasks from "./tasks";
import TasksCategory from "./TasksCategory";

const TasksContainer = () => {
  return (
    <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6">
      <div className="mb-10 flex items-center justify-between">
        <TasksCategory />

        <AddTasksButton />
      </div>
      <Tasks />
    </div>
  );
};

export default TasksContainer;
