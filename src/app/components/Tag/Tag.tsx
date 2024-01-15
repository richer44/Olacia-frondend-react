import { TagProps } from '@/app/types/components/tag';
import React from 'react';

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className="p-2 font-medium rounded-md bg-dull-blue text-[12px] bg-opacity-10 w-fit h-fit">
      {text}
    </div>
  );
};

export default Tag;
