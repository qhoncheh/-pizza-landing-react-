import React from 'react';
import type { SectionTitleProps } from '../../types';

const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  textColor = 'text-gray-400',
  borderColor = 'border-gray-300',
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-4 my-8 ${className}`}>
      <div className={`flex-grow border-t ${borderColor}`}></div>
      <h2 className={`text-xl font-semibold ${textColor}`}>{text}</h2>
      <div className={`flex-grow border-t ${borderColor}`}></div>
    </div>
  );
};

export default SectionTitle;
