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

import { type JSX } from "react";

function AddTaskDialog({ children }: { children: JSX.Element }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add new Task</DialogTitle>
            <DialogDescription>
              Create new tasks to keep track of them easily!
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Task Name</Label>
              <Input id="name" name="name" placeholder="Do homework" />
            </Field>
            <Field>
              <Label htmlFor="description">Task Description</Label>
              <Input
                id="description"
                name="username"
                placeholder="Finish english class homework for tomorrow."
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add Task</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default AddTaskDialog;
