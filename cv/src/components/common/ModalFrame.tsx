import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalFrameProps {
  children: ReactNode;
  className?: string;
  kicker: string;
  onClose: () => void;
  title: string;
}

export function ModalFrame({
  children,
  className = "",
  kicker,
  onClose,
  title,
}: ModalFrameProps) {
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div className={`contact-modal ${className}`} onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="section-kicker">{kicker}</p>
            <h2 className="modal-title">
              {title}
            </h2>
          </div>
          <button className="icon-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}
