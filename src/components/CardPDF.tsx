import { Button } from './Button';

interface CardPDFProps {
  imageSrc: string;
  imageAlt: string;
  externalLink: string;
  title?: string;
  chips?: string[];
  'data-aos'?: string;
  'data-aos-delay'?: number;
}

export default function CardPDF({ 
  imageSrc, 
  imageAlt, 
  externalLink, 
  title,
  chips = [],
  'data-aos': dataAos, 
  'data-aos-delay': dataAosDelay 
}: CardPDFProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-between bg-white p-2 sm:p-2 rounded-lg" data-aos={dataAos} data-aos-delay={dataAosDelay}>
      <div className="w-full">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="aspect-square sm:aspect-square object-cover rounded-sm w-full" 
        />
        {title && (
          <h3 className="text-lg font-acumin-semibold text-center mt-2 mb-1 text-gray-700">{title}</h3>
        )}
        {chips.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center mt-1 mb-2">
            {chips.map((chip, index) => (
              <span 
                key={index}
                className="inline-block px-2 py-0.5 text-xs font-acumin-regular bg-gray-100 text-gray-700 rounded-full"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
      <Button 
        href={externalLink} 
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="sm" 
        fullWidth
        icon={<img src="/images/external.svg" alt="External link" className="w-4 h-4" />}
        iconPosition="right"
      >
        VER CATÁLOGO
      </Button>
    </div>
  );
} 