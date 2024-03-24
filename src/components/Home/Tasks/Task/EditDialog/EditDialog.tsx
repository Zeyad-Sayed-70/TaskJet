"use client";
import React, { Suspense, lazy } from "react";
import { Dialog } from "@/components/ui/dialog";
import { useTasks } from "@/context/TaskProvider";

const EditDialogContent = lazy(() => import("./EditDialogContent"));

const EditDialog = () => {
  const { isEditDialogOpen: isOpen, setIsEditDialogOpen: setIsOpen } =
    useTasks();
  return (
    <>
      <Dialog open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
        <Suspense>{isOpen && <EditDialogContent />}</Suspense>
      </Dialog>
    </>
  );
};

export default EditDialog;
