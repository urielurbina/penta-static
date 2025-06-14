import React from 'react';

interface IndustryCardProps {
  img: string;
  alt: string;
  title: string;
  className?: string;
  'data-aos'?: string;
  'data-aos-delay'?: string | number;
  'data-aos-duration'?: string | number;
  'data-aos-offset'?: string | number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  img, 
  alt, 
  title, 
  className = '',
  'data-aos': dataAos,
  'data-aos-delay': dataAosDelay,
  'data-aos-duration': dataAosDuration,
  'data-aos-offset': dataAosOffset,
  ...props 
}) => {
  return (
    <div
      className={`relative rounded-md overflow-hidden shadow-sm flex items-end min-h-[180px] ${className}`}
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      aria-label={alt}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      data-aos-duration={dataAosDuration}
      data-aos-offset={dataAosOffset}
      {...props}
    >
      {/* Degradado oscuro encima de la imagen */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-gray-400/10 pointer-events-none mix-blend-multiply" />
      {/* Texto en la parte inferior izquierda */}
      <div className="z-10 p-4">
        <h4 className="text-white text-lg font-acumin-semibold leading-tight drop-shadow-md ">{title}</h4>
      </div>
    </div>
  );
};

export default IndustryCard; 