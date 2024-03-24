"use client";
import Chip from "@/components/Common/Chip";
import { formatDate } from "@/lib/formatDate";
import React, { memo } from "react";
import DropMenu from "./DropMenu/DropMenu";

const Task = memo(({ task }: { task: Task }) => {
  return (
    <>
      <div className="@container rounded-md p-4 px-6 bg-gray-50 hover:bg-gray-100 cursor-pointer mb-2">
        <div className="flex justify-between">
          <h2
            className={`flex items-center text-md font-semibold text-gray-800`}
          >
            <span className={`${task.isCompleted ? "line-through" : ""}`}>
              {task.title}
            </span>
            {task.isCompleted && (
              <span className="p-1 rounded-md bg-green-500 text-xs ml-2">
                Completed
              </span>
            )}
          </h2>
          <span className="flex items-center gap-4 text-gray-600 text-sm">
            {task.duoDate ? formatDate(new Date(task.duoDate)) : ""}
            <DropMenu task={task} />
          </span>
        </div>
        <div>
          <p className="text-md my-4 mb-6 text-gray-600">{task.describtion}</p>
          <div className="flex gap-2 mt-2">
            {task.tags.map((tag, ind) => (
              <Chip key={ind} value={tag} bgColor="bg-cyan-800" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default Task;
