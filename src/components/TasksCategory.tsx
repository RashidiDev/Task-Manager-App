import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories: string[] = ["All", "Completed", "Uncompleted"];

function TasksCategory() {
  if (!categories) {
    return (
      <Select defaultValue="all">
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Filter tasks by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
  return (
    <Select defaultValue={categories[0].toLowerCase()}>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Filter tasks by status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map(c => {
            if (!c.length) {
              return;
            }
            return (
              <SelectItem key={c} value={c.toLowerCase()}>
                {c}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default TasksCategory;
