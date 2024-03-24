import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePickerDemo as DatePicker } from "@/components/ui/data-picker";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import useCreateTask from "@/hooks/useCreateTask";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const DialogContentChild = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [taskData, setTaskData] = useState<CreateTask>({
    userId: "",
    title: "",
    describtion: "",
    tags: [],
  });
  const { userData } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userData) {
      setTaskData({ ...taskData, userId: userData._id });
    }
  }, [userData, taskData]);

  const { handleSubmit } = useCreateTask(taskData, setIsOpen);

  return (
    <DialogHeader>
      <DialogTitle className="mb-6">Create a New Task</DialogTitle>
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
        <DatePicker taskData={taskData} setTaskData={setTaskData as any} />
        <Button type="submit" className="w-fit ml-auto block mt-4">
          Create
        </Button>
      </form>
    </DialogHeader>
  );
};

export default DialogContentChild;
