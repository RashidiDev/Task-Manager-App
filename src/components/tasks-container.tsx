import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Tasks from "./tasks";
import TasksCategory from "./TasksCategory";

const TasksContainer = () => {
  return (
    <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6">
      <div className="mb-10 flex items-center justify-between">
        <TasksCategory />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button>
              <Plus />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add task</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <Tasks />
    </div>
  );
};

export default TasksContainer;
