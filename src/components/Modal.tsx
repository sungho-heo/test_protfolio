import React from "react";
import styles from "../scss/Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.Modal_overlay} onClick={onClose}>
        <div
          className={styles.Modal_content}
          onClick={(e) => e.stopPropagation()} // 내부 클릭시 닫히지 않게
        >
          {children}
          <button type="button" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
};
