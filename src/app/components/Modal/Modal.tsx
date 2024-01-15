import React from "react";
import { RxCross2 } from "react-icons/rx";
import { ModalProps } from "@/app/types/components/modal";
import Button from "../Button/Button";

export const Modal: React.FC<ModalProps> = ({
  header,
  body,
  onClose,
  footerButtons,
  modalWidth,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className={`relative bg-white rounded-lg shadow-lg ${modalWidth}`}
      >
        <div className="flex justify-between p-4 border-b border-gray-200 items-center">
          {/* Header */}
          <div className="text-black text-lg font-bold leading-none">
            {header}
          </div>

          {/* Close Button */}
          <button
            className="p-2 focus:outline-none hover:bg-light-red rounded-full"
            onClick={onClose}
          >
            <RxCross2 size={18} color="#EB0F35" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">{body}</div>

        {/* Footer */}
        {footerButtons && (
          <div className="flex p-4 border-t border-gray-200 justify-center">
            {footerButtons.map((button, index) => (
              <Button
                type={button.type}
                key={index}
                className="px-4 py-2 mr-2 text-sm font-medium rounded-lg focus:outline-none w-[140px]"
                onClick={button.onClick}
                text={button.label}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
