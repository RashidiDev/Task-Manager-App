import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TasksContainer = () => {
  return (
    <div className="mx-auto mt-10 flex max-w-4xl items-center justify-between px-4 sm:px-6">
      <Select defaultValue="all">
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Filter tasks by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="uncompleted">Uncompleted</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

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
  );
};

export default TasksContainer;
