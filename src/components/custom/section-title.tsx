import type { SectionTitleProps } from '../../types';

const SectionTitle = ({ text, textColor, borderColor, className }: SectionTitleProps) => {
  
  return (
    <div className={`flex items-center gap-4 my-8 ${className}`}>
      <div className={`flex-grow border-t border-gray-400 ${borderColor}`}></div>
      <h2 className={`text-xl font-semibold text-gray-400 ${textColor}`}>{text}</h2>
      <div className={`flex-grow border-t ${borderColor}`}></div>
    </div>
  );
};

export default SectionTitle;
