import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface CustomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children?: React.ReactNode;
}

export default function CustomDialog({
  open,
  onOpenChange,
  title,
  children,
}: CustomDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="border-none flex flex-col items-center bg-white rounded-xl w-[280px]">
        <DialogHeader>
          {title ? (
            <DialogTitle className="text-center text-lg font-bold">
              {title}
            </DialogTitle>
          ) : (
            <DialogTitle>
              <VisuallyHidden>Dialog</VisuallyHidden>
            </DialogTitle>
          )}
        </DialogHeader>
        <DialogDescription aria-hidden />
        {children}
        {/* <input
          className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-4"
          placeholder={placeholder}
          value={inputValue}
          onChange={e => onInputChange(e.target.value)}
        />
        <button
          className="w-1/2 h-[40px] bg-black text-white font-bold rounded-xl mt-6"
          onClick={onSubmit}
        >
          {buttonText}
        </button> */}
      </DialogContent>
    </Dialog>
  );
}