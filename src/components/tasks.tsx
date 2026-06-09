import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "./ui/button";
import { StickyNoteX } from "lucide-react";

const Tasks = () => {
  return (
    <div>
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <StickyNoteX />
          </EmptyMedia>
          <EmptyTitle>No Tasks</EmptyTitle>
          <EmptyDescription>No tasks found. create one now!</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="secondary">Add task</Button>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default Tasks;
