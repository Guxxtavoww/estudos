import React, { useEffect, useRef } from "react";

import useClickOutside from "../../hooks/useClickOutside";

interface IModalProps {
  handleClose: () => void;
  closeWhenClickOutside?: boolean;
}

const Modal: React.FC<IModalProps> = ({
  handleClose,
  closeWhenClickOutside,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const isClickedOutside = useClickOutside(modalRef);

  useEffect(() => {
    if (isClickedOutside && !!closeWhenClickOutside) {
      handleClose();
    }
  }, [isClickedOutside, handleClose, closeWhenClickOutside]);

  return (
    <div className="modalWrapper">
      <div className="modal" ref={modalRef}>
        <span>me mama</span>
      </div>
    </div>
  );
};

export default Modal;
