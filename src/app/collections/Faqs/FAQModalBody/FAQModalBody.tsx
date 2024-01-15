import { InputField } from "@/app/components/InputField/InputField";
import { Label } from "@/app/components/Label/Label";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { FAQForm } from "@/app/types/collections/faq";
import { ModalBodyProps } from "@/app/types/components/modal";
import React from "react";

export const FAQModalBody: React.FC<ModalBodyProps<FAQForm>> = ({
  formData,
  formErrors,
  handleInputChange,
}) => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <div className="flex flex-col gap-2 w-full">
        <Label title="Question*" />
        <InputField
          type="text"
          name="question"
          placeholder="Enter FAQ Question"
          onChange={handleInputChange}
          value={formData.question}
        />
        <span className="text-red text-xs">{formErrors.question}</span>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Label title="Answer*" />
        <Textarea
          value={formData.answer}
          onChange={handleInputChange}
          placeholder="Enter FAQ Answer"
          rows={4}
          name="answer"
        />
        <span className="text-red text-xs">{formErrors.answer}</span>
      </div>
    </div>
  );
};
