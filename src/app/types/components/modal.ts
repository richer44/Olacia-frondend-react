import { Dispatch, SetStateAction } from "react";
import { DepartmentForm } from "../collections/department";

export type ModalProps = {
    header: string;
    body: React.ReactNode;
    onClose: () => void;
    footerButtons: {
      label: string;
      onClick: () => void;
      type: 'primary' | 'secondary' | 'danger' | 'green';
    }[];
    modalWidth?: string;
  };

  export interface ModalBodyProps<T> {
    formData: T;
    formErrors: T | any;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setFormData?: Dispatch<SetStateAction<T>>;
  }