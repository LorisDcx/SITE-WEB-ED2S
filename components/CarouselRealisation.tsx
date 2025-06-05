import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: '/realisations/Dallettes sur plots.png',
    alt: 'Dallettes sur plots',
  },
  {
    src: '/realisations/Membrane EPDM.png',
    alt: 'Membrane EPDM',
  },
  {
    src: '/realisations/Platelage Bois.JPG',
    alt: 'Platelage Bois',
  },
  {
    src: '/realisations/Végétalisation.JPG',
    alt: 'Végétalisation',
  },
];

interface CarouselRealisationProps {
  large?: boolean;
}

export default function CarouselRealisation({ large }: CarouselRealisationProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, paused]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setPaused(true);
  };
  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setPaused(true);
  };
  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setPaused(true);
  };

  return (
    <div className={`relative w-full ${large ? 'max-w-7xl' : 'max-w-3xl'} mx-auto`}>
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg group flex items-center justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{aspectRatio: '16/9'}}
      >
        {/* Bande orange gauche */}
        {current > 0 && (
          <div className="absolute left-0 top-1/5 bottom-1/5 w-2 bg-orange-500 rounded-full z-20" style={{height: '60%', top: '20%'}} />
        )}
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current].src}
            src={images[current].src}
            alt={images[current].alt}
            className={`w-full max-w-full object-cover h-[38vw] min-h-[350px] max-h-[600px] md:rounded-2xl rounded-lg shadow-lg bg-white ${large ? '' : 'h-48'}`}
            style={{aspectRatio: '16/9'}}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </AnimatePresence>
        {/* Bande orange droite */}
        {current < images.length - 1 && (
          <div className="absolute right-0 top-1/5 bottom-1/5 w-2 bg-orange-500 rounded-full z-20" style={{height: '60%', top: '20%'}} />
        )}

        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white rounded-full p-2 shadow-lg transition"
          aria-label="Image précédente"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white rounded-full p-2 shadow-lg transition"
          aria-label="Image suivante"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-primary border-primary' : 'bg-white border-gray-300'} transition`}
              aria-label={`Aller à l'image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Caption */}
      <div className="text-center mt-4 text-gray-800 font-semibold text-lg">
        {images[current].alt}
      </div>
    </div>
  );
}
