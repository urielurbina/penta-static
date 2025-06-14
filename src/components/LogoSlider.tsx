'use client';
import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

interface Logo {
  src: string;
  alt: string;
}

interface LogoSliderProps {
  logos?: Logo[];
}

const defaultLogos: Logo[] = [
    { src: '/images/assouluto.webp', alt: 'Assouluto' },
    { src: '/images/bibo.webp', alt: 'Bibo' },
    { src: '/images/bigbang.webp', alt: 'Big Bang' },
    { src: '/images/dacache.webp', alt: 'Dacache' },
    { src: '/images/dickies.webp', alt: 'Dickies' },
    { src: '/images/gildan.webp', alt: 'Gildan' },
    { src: '/images/invasion.webp', alt: 'Invasion' },
    { src: '/images/mayork.webp', alt: 'Mayork' },
    { src: '/images/redkap.webp', alt: 'Red Kap' },
];

const animation = { duration: 15000, easing: (t: number) => t };

const LogoSlider: React.FC<LogoSliderProps> = ({ logos = defaultLogos }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: true,
    slides: { perView: 7, spacing: 4 },
    breakpoints: {
      '(max-width: 1536px)': { slides: { perView: 6, spacing: 4 } },
      '(max-width: 1280px)': { slides: { perView: 5, spacing: 4 } },
      '(max-width: 1024px)': { slides: { perView: 4, spacing: 4 } },
      '(max-width: 768px)': { slides: { perView: 3, spacing: 4 } },
      '(max-width: 640px)': { slides: { perView: 2, spacing: 4 } },
      '(max-width: 480px)': { slides: { perView: 2, spacing: 4 } },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="relative">
      {/* Left gradient */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10"
        style={{ background: 'linear-gradient(to right, white 0%, transparent 100%)' }}
      />
      {/* Right gradient */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10"
        style={{ background: 'linear-gradient(to left, white 0%, transparent 100%)' }}
      />
      {/* The slider itself */}
      <div ref={sliderRef} className="keen-slider border-b border-gray-200">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center py-5"
            style={{ height: '100px', width: '100px' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;