import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AddTaskDialog from "./addTaskDialog";

function AddTasksButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <AddTaskDialog>
          <Button>
            <Plus />
          </Button>
        </AddTaskDialog>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add task</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default AddTasksButton;
