import React, { Suspense, lazy, useMemo } from "react";
import { useTasks } from "@/context/TaskProvider";
import EditDialog from "./Task/EditDialog/EditDialog";
import DeleteModal from "./Task/DeleteModal/DeleteModal";

const Task = lazy(() => import("./Task"));

const List = () => {
  const { tasks, filteredTasks } = useTasks();

  const tasksList = useMemo(() => {
    if (filteredTasks && filteredTasks.length > 0)
      return filteredTasks?.map((task) => <Task key={task._id} task={task} />);
    else return tasks?.map((task) => <Task key={task._id} task={task} />);
  }, [tasks, filteredTasks]);

  return (
    <div className="pt-8">
      <Suspense fallback={<h1>Loading...</h1>}>
        {tasks && tasks.length > 0 && tasksList}
      </Suspense>
      {tasks && tasks.length === 0 && (
        <h1 className="text-md font-semibold text-gray-500 text-center">
          Not Found Tasks
        </h1>
      )}
      <EditDialog />
      <DeleteModal />
    </div>
  );
};

export default List;
