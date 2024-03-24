import { AppDispatch, RootState } from "@/redux/store";
import { reset } from "@/redux/tasks/slice";
import { getAllTasks } from "@/redux/tasks/thunks";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "./AuthProvider";

type TaskContextTpye = {
  tasks: Task[] | null;
  setTasks: (tasks: Task[]) => void;
  filteredTasks: Task[] | null;
  setFilteredTasks: (tasks: Task[]) => void;
  task: Task | undefined;
  setTask: (tasks: Task) => void;
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isEditDialogOpen: boolean) => void;
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (isDeleteModalOpen: boolean) => void;
};

const TaskContext = createContext<TaskContextTpye | undefined>(undefined);

export const useTasks = (): TaskContextTpye => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within an TasksProvider");
  }
  return context;
};

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);
  const [task, setTask] = useState<Task>();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const {
    isFetchLoading: isLoading,
    isSuccess,
    tasks: resTasks,
  } = useSelector((state: RootState) => state.task);
  const { authToken } = useAuth();

  useEffect(() => {
    if (authToken) dispatch(getAllTasks(authToken));
  }, [authToken]);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setTasks(resTasks);

      // reset all states
      dispatch(reset());
    }
  }, [isLoading]);

  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        filteredTasks,
        setFilteredTasks,
        tasks,
        isEditDialogOpen,
        isDeleteModalOpen,
        setTasks,
        setIsEditDialogOpen,
        setIsDeleteModalOpen,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
