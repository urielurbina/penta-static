import React from 'react';

interface IndustryCardProps {
  img: string;
  alt: string;
  title: string;
  className?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ img, alt, title, className = '' }) => {
  return (
    <div className={`bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center border border-gray-100 ${className}`}>
      <div className="w-16 h-16 flex-shrink-0 p-2">
        <img src={img} alt={alt} className="object-cover w-full h-full rounded-md" />
      </div>
      <div className="flex-1 p-3 border-l border-gray-100">
        <h4 className="text-sm font-medium text-gray-800 leading-tight">{title}</h4>
      </div>
    </div>
  );
};

export default IndustryCard; 