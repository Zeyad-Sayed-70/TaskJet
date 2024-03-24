import { useTasks } from "@/context/TaskProvider";
import { AppDispatch, RootState } from "@/redux/store";
import { reset } from "@/redux/tasks/slice";
import { updateTask } from "@/redux/tasks/thunks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const useUpdateTask = (
  id: string,
  taskData: UpdateTask,
  setIsOpen: (isOpen: boolean) => void
) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isError,
    isUpdateLoading: isLoading,
    isSuccess,
    message,
    task,
  } = useSelector((state: RootState) => state.task);
  const { tasks, setTasks } = useTasks();

  useEffect(() => {
    if (!isLoading && !isError && isSuccess) {
      if (task === null || !tasks) return;

      toast("Task has been updated.");

      // update the task after updating
      const newTasks = tasks.map((t) => {
        if (t._id === task._id) t = task;

        return t;
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id) dispatch(updateTask({ newTask: taskData, id }));
  }

  return { handleSubmit };
};

export default useUpdateTask;
