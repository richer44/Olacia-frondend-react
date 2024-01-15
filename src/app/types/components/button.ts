export interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    full?: boolean;
    className?:string;
    icon?: string; 
    type: 'primary' | 'secondary' | 'danger' | 'green';
  }
  