import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { StickyNoteX } from "lucide-react";
import AddTaskDialog from "./addTaskDialog";

function EmptyTasks() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <StickyNoteX />
        </EmptyMedia>
        <EmptyTitle>No Tasks</EmptyTitle>
        <EmptyDescription>No tasks found. create one now!</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <AddTaskDialog>
          <Button variant="secondary">Add task</Button>
        </AddTaskDialog>
      </EmptyContent>
    </Empty>
  );
}

export default EmptyTasks;
