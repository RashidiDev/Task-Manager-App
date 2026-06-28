import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function AddTasksButton() {
  return (
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
  );
}

export default AddTasksButton;
