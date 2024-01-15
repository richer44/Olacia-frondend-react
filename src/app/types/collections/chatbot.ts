export interface ChatbotData {
    id: string | number;
    keyword: string;
    answer: string;
    widget: string;
    edit: JSX.Element;
    delete: JSX.Element;
  }


  type ChatbotForm = {
    keyword: string;
    widget: string;
    answer: string;
  }
  export interface BotQuestionModalBodyProps {
    formData: ChatbotForm;
    formErrors: ChatbotForm;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }