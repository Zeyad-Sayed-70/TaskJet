import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTasks } from "@/context/TaskProvider";
import React from "react";

const DropMenuContent = ({ task }: { task: Task }) => {
  const { setIsDeleteModalOpen, setIsEditDialogOpen, setTask } = useTasks();
  return (
    <>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            setIsEditDialogOpen(true);
            setTask(task);
          }}
        >
          Edit Task
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setIsDeleteModalOpen(true);
            setTask(task);
          }}
          className="text-destructive"
        >
          Delete Task
        </DropdownMenuItem>
      </DropdownMenuContent>
    </>
  );
};

export default DropMenuContent;
