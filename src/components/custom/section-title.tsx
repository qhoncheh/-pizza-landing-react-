import type { SectionTitleProps } from '../../types';

const SectionTitle = ({ text, borderColor, className }: SectionTitleProps) => {
  
  return (
    <div className={`flex items-center gap-4 my-8 ${className}`}>
      <div className={`flex-grow border-t border-gray-400 ${borderColor}`}></div>
      <h2 className={`text-xl font-semibold`}>{text}</h2>
      <div className={`flex-grow border-t ${borderColor}`}></div>
    </div>
  );
};

export default SectionTitle;
