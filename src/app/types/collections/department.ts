import { Dispatch, SetStateAction } from "react";

export interface DepartmentData {
  id: string | number;
  title: string;
  faqUrl: string;
  departmentName: string;
  members: number;
  email: string;
  message: string;
  edit: JSX.Element;
  delete: JSX.Element;
}

export interface DepartmentForm {
  title: string;
  faqUrl: string;
  department: string;
  members: number;
  email: string;
  message: string;
}

export interface DepartmentTabProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface UserData {
  id: string | number;
  name: string;
  department: string;
  email: string;
  adminAccess: string;
  analytics: JSX.Element;
  edit: JSX.Element;
  delete: JSX.Element;
}

export interface UserForm {
  name: string;
  department: string;
  email: string;
  adminAccess: string;
}
