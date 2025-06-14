import React from 'react';
import IndustryCard from './IndustryCard';

export default function Industries() {
  return (
    <section className="section-spacing bg-white py-16">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">UNIFORMES PARA CADA SECTOR</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Sabemos que cada industria tiene sus propias necesidades. Por eso, ofrecemos uniformes específicos para cada sector. Si tu empresa pertenece a alguno de éstos, tenemos opciones para ti.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <IndustryCard img="/images/hotelero.webp" alt="Sector hotelero y turístico" title="SECTOR HOTELERO Y TURÍSTICO" />
          <IndustryCard img="/images/manufactura.webp" alt="Maquilas y manufactura" title="MAQUILAS Y MANUFACTURA" />
          <IndustryCard img="/images/seguridad.webp" alt="Servicios de seguridad" title="SERVICIOS DE SEGURIDAD" />
          <IndustryCard img="/images/oficinas.webp" alt="Oficinas corporativas" title="OFICINAS CORPORATIVAS" />
          <IndustryCard img="/images/transporte.webp" alt="Transporte y logística" title="TRANSPORTE Y LOGÍSTICA" />
          <IndustryCard img="/images/transporte.webp" alt="Dependencias guvernamentales" title="DEPENDENCIAS GUVERNAMENTALES" />
        </div>
      </div>
    </section>
  );
} 