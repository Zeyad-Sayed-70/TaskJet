"use client";
import React, { Suspense, lazy, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IoAdd } from "react-icons/io5";

const DialogContentChild = lazy(() => import("./DialogContentChild"));

const CreateTaskDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
      <DialogTrigger className="flex items-center gap-1 text-md py-2 px-4 rounded-lg bg-primary text-gray-50 font-medium hover:opacity-80 transition-all duration-300">
        <IoAdd size={20} /> Add Task
      </DialogTrigger>
      <DialogContent>
        <Suspense fallback={<h1 className="h-[500px]">Loading...</h1>}>
          <DialogContentChild setIsOpen={setIsOpen} />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
