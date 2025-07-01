import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog";

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
      <DialogContent showCloseButton={false} className="animate-in fade-in-0 zoom-in-95 flex flex-col items-center bg-white py-10 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>
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