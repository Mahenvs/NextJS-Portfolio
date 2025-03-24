import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  name = "unknown user",
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="  bg-opacity-50" />
      <DialogContent className=" flex items-center justify-center">
        <div className=" p-6 rounded-lg text-center max-w-sm w-full ">
          <h2 className="text-xl font-semibold mb-4">Success!</h2>
          Hey, {name?.trim()}
          {name?.trim().length !== 0 ? "! " : ""}
          {name?.trim().length !== 0 ? "Thanks for reaching out😀" : ""}
          <p>Your message has been sent successfully.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
