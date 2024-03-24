import { useTasks } from "@/context/TaskProvider";
import { AppDispatch, RootState } from "@/redux/store";
import { reset } from "@/redux/tasks/slice";
import { createTask } from "@/redux/tasks/thunks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const useCreateTask = (
  taskData: CreateTask,
  setIsOpen: (isOpen: boolean) => void
) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isError,
    isCreateLoading: isLoading,
    isSuccess,
    task,
    message,
  } = useSelector((state: RootState) => state.task);
  const { tasks, setTasks } = useTasks();

  useEffect(() => {
    if (!isLoading && !isError && isSuccess) {
      if (task === null || !tasks) return;

      toast("Task has been created.");

      // Add the new task to tasks array
      const newTasks = [{ ...task }, ...tasks];
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(createTask(taskData));
  }

  return { handleSubmit };
};

export default useCreateTask;
