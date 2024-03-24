import React, { Suspense, lazy } from "react";
import { Dialog } from "@/components/ui/dialog";
import { useTasks } from "@/context/TaskProvider";

const DeleteModalContent = lazy(() => import("./DeleteModalContent"));

const DeleteModal = () => {
  const { isDeleteModalOpen: isOpen, setIsDeleteModalOpen: setIsOpen } =
    useTasks();
  return (
    <Dialog open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
      <Suspense>{isOpen && <DeleteModalContent />}</Suspense>
    </Dialog>
  );
};

export default DeleteModal;
