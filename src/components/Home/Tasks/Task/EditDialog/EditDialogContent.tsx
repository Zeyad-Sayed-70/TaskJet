import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePickerDemo as DatePicker } from "@/components/ui/data-picker";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTasks } from "@/context/TaskProvider";
import useUpdateTask from "@/hooks/useUpdateTask";

const EditDialogContent = () => {
  const { task, setIsEditDialogOpen: setIsOpen } = useTasks();
  const [taskData, setTaskData] = useState<UpdateTask>({
    title: task?.title,
    describtion: task?.describtion,
    tags: task?.tags,
    duoDate: task?.duoDate,
    isCompleted: task?.isCompleted,
  });

  if (!task) return;

  const { handleSubmit } = useUpdateTask(task._id, taskData, setIsOpen);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit a task</DialogTitle>
      </DialogHeader>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            type="text"
            required
            value={taskData.title}
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="desc">Describtion</label>
          <Textarea
            id="desc"
            className="h-32"
            value={taskData.describtion}
            required
            onChange={(e) =>
              setTaskData({ ...taskData, describtion: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="tags">Tags</label>
          <Input
            id="tags"
            type="text"
            value={taskData.tags?.join(" ")}
            placeholder="ex: Web Food Work Study"
            required
            onChange={(e) =>
              setTaskData({
                ...taskData,
                tags: e.target.value.split(" "),
              })
            }
          />
        </div>
        <DatePicker taskData={taskData} setTaskData={setTaskData} />
        <div className="flex items-center space-x-2">
          <Checkbox
            id="completed"
            checked={taskData.isCompleted}
            onCheckedChange={(e) =>
              setTaskData({
                ...taskData,
                isCompleted: e as boolean,
              })
            }
          />
          <label
            htmlFor="completed"
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Completed Task
          </label>
        </div>
        <Button type="submit" className="w-fit ml-auto block mt-4">
          Update
        </Button>
      </form>
    </DialogContent>
  );
};

export default EditDialogContent;
