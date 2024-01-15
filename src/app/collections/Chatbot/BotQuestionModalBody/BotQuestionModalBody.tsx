import { InputField } from "@/app/components/InputField/InputField";
import { Label } from "@/app/components/Label/Label";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { BotQuestionModalBodyProps } from "@/app/types/collections/chatbot";
import React from "react";

export const BotQuestionModalBody: React.FC<BotQuestionModalBodyProps> = ({
  formData,
  formErrors,
  handleInputChange,
}) => {
  return (
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2 w-full mb-4">
          <Label title="Keyword/Message*" />
          <InputField
            type="text"
            name="keyword"
            placeholder="Enter Keyword/Message"
            onChange={handleInputChange}
            value={formData.keyword}
          />
          <span className="text-red text-xs">{formErrors.keyword}</span>
        </div>
        <div className="flex flex-col gap-2 w-full mb-4">
          <Label title="Chat Widgets (Select all that apply)*" />
          <InputField
            type="text"
            name="widget"
            placeholder="Talk with us"
            onChange={handleInputChange}
            value={formData.widget}
          />
          <span className="text-red text-xs">{formErrors.widget}</span>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex flex-col gap-3">
          <Label title="Answer*" />
          <Textarea
            value={formData.answer}
            onChange={handleInputChange}
            placeholder="Write Answer"
            rows={4}
            name="answer"
          />
          <span className="text-red text-xs">{formErrors.answer}</span>
        </div>
      </div>
    </div>
  );
};
