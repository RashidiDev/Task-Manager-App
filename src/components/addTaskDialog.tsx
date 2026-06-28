import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTaskDB } from "@/context/TaskDBContext";

import { type JSX, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

function AddTaskDialog({ children }: { children: JSX.Element }) {
  const tasksDb = useTaskDB();
  const { pending } = useFormStatus();
  const [error, setError] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  function addTask(formData: FormData) {
    const name = formData.get("name")?.toString().trim();
    const description = formData.get("description")?.toString().trim();
    const createdAt = Date.now();
    if (!name) {
      setError("Task name is required");
      return;
    }

    const task = {
      name,
      description,
      completed: false,
      isImportant: false,
      createdAt,
    };

    tasksDb?.addTask(task).catch(() => {
      setError("Failed to add task");
      return;
    });

    setError(null);

    closeRef.current?.click();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add new Task</DialogTitle>
          <DialogDescription>
            Create new tasks to keep track of them easily!
          </DialogDescription>
        </DialogHeader>
        <form action={addTask}>
          <FieldGroup>
            {error && <div className="text-sm text-red-500">{error}</div>}
            <Field>
              <Label htmlFor="name">Task Name</Label>
              <Input id="name" name="name" placeholder="Do homework" required />
            </Field>
            <Field>
              <Label htmlFor="description">Task Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Finish english class homework for tomorrow."
              />
            </Field>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={pending}>
                {pending ? "Adding Task" : "Add Task"}
              </Button>
            </DialogFooter>
          </FieldGroup>
        </form>
        <DialogClose ref={closeRef} style={{ display: "none" }} />
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskDialog;
