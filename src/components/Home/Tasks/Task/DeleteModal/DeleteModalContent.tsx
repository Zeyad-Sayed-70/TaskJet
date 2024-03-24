import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTasks } from "@/context/TaskProvider";
import useDeleteTask from "@/hooks/useDeleteTask";
import React from "react";

const DeleteModalContent = () => {
  const { setIsDeleteModalOpen: setIsOpen, task } = useTasks();
  const { handleDelete } = useDeleteTask((task as any)._id, setIsOpen);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you Sure you want to delete this task?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your task
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="mt-4">
        <Button variant={"outline"} onClick={() => setIsOpen(false)}>
          No
        </Button>
        <Button onClick={handleDelete}>Sure</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DeleteModalContent;
