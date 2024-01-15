export interface FAQData {
    id: string | number;
    question: string;
    answer: string;
    edit: JSX.Element;
    delete: JSX.Element;
  }


  export type FAQForm = {
    question: string;
    answer: string;
  }
 