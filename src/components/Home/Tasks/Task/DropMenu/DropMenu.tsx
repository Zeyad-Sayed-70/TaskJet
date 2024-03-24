import { Suspense, lazy, useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropMenuContent = lazy(() => import("./DropMenuContent"));

const DropMenu = ({ task }: { task: Task }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
        <DropdownMenuTrigger>
          <TbDotsVertical size={20} />
        </DropdownMenuTrigger>
        <Suspense>
          <DropMenuContent task={task} />
        </Suspense>
      </DropdownMenu>
    </>
  );
};

export default DropMenu;
