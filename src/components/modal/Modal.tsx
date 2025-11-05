import React from "react";
import styles from "../../scss/Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div role="dialog" aria-modal="true" style={{ display: "block" }}>
        <div className={styles.Modal_overlay} onClick={onClose}>
          <div
            className={styles.Modal_content}
            onClick={(e) => e.stopPropagation()} // 내부 클릭시 닫히지 않게
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
