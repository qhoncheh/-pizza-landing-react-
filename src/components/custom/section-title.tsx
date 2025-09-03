import type { SectionTitleProps } from '../../types';

const SectionTitle = ({ text, className = '' }: SectionTitleProps) => {
  return (
    <div className={`flex items-center gap-4 my-8 ${className}`}>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#D2B57A] to-transparent rotate-180"></div>
      <h2 className="text-xl font-semibold text-gray-300">{text}</h2>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#D2B57A] to-transparent rotate-180"></div>
    </div>
  );
};

export default SectionTitle;
