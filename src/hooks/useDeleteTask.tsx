import { useTasks } from "@/context/TaskProvider";
import { AppDispatch, RootState } from "@/redux/store";
import { reset } from "@/redux/tasks/slice";
import { deleteTask } from "@/redux/tasks/thunks";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const useDeleteTask = (id: string, setIsOpen: (isOpen: boolean) => void) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isError,
    isDeleteLoading: isLoading,
    isSuccess,
    message,
    task,
  } = useSelector((state: RootState) => state.task);
  const { tasks, setTasks } = useTasks();

  useEffect(() => {
    if (!isLoading && !isError && isSuccess) {
      if (task === null || !tasks) return;

      toast("Task has been deleted.");

      // update the task after updating
      const newTasks = tasks.filter((t) => {
        if (t._id !== id) return t;
      });

      setTasks(newTasks);

      // reset all states
      dispatch(reset());

      // close the dialog
      setIsOpen(false);
    }
  }, [isLoading, isSuccess, isError, task]);

  useEffect(() => {
    if (!isLoading && !isSuccess && isError) {
      toast(message);
    }
  }, [isLoading, isError, isSuccess]);

  function handleDelete() {
    dispatch(deleteTask(id));
  }

  return { handleDelete };
};

export default useDeleteTask;
