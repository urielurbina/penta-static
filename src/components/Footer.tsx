import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#335495] text-white pt-10 pb-4 border-t border-white/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/20">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/penta-blanco.svg" alt="Penta Logo" width={180} height={180} className="mb-2" />
          </div>
         
          {/* Sucursal Monterrey */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-xl lg:text-2xl font-acumin-condensed-bold uppercase mb-2 text-center md:text-left">SUCURSAL MONTERREY</h5>
            <div className="mb-2 text-center md:text-left">
              <p className="font-acumin-regular text-sm lg:text-base">Av. Simón Bolívar 1438</p>
              <p className="font-acumin-regular text-sm lg:text-base">Mitras Centro</p>
              <p className="font-acumin-regular text-sm lg:text-base">Monterrey, N.L. CP 64460</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/BWJU3iPdrKUmBY2r9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-3 py-2 bg-white text-[#335495] rounded-md hover:bg-gray-100 transition-colors mb-2 font-acumin-regular text-sm"
            >
              Ver en Google Maps
            </a>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-acumin-regular text-sm lg:text-base">Tel. (81) 8340-7031</span>
            </div>
          </div>

          {/* Sucursal Chihuahua */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-xl lg:text-2xl font-acumin-condensed-bold uppercase mb-2 text-center md:text-left">SUCURSAL CHIHUAHUA</h5>
            <div className="mb-2 text-center md:text-left">
              <p className="font-acumin-regular text-sm lg:text-base">Av. Lombardo Toledano #1601 Local C y D</p>
              <p className="font-acumin-regular text-sm lg:text-base">Col. Plomeros</p>
              <p className="font-acumin-regular text-sm lg:text-base">Chihuahua, Chih. C.P. 31370</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/4A8tTuXrmyFDbKN18" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-3 py-2 bg-white text-[#335495] rounded-md hover:bg-gray-100 transition-colors mb-2 font-acumin-regular text-sm"
            >
              Ver en Google Maps
            </a>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-acumin-regular text-sm lg:text-base">Tel. (614) 423-4275 y 423-4276</span>
            </div>
          </div>

          {/* Sucursal Juárez */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-xl lg:text-2xl font-acumin-condensed-bold uppercase mb-2 text-center md:text-left">SUCURSAL JUÁREZ</h5>
            <div className="mb-2 text-center md:text-left">
              <p className="font-acumin-regular text-sm lg:text-base">Av. de la Raza #5988 - Local 2</p>
              <p className="font-acumin-regular text-sm lg:text-base">Col. Misiones San Miguel</p>
              <p className="font-acumin-regular text-sm lg:text-base">Juárez, Chih. CP 32519</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/mwSPDLPS8b43KFrC9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-3 py-2 bg-white text-[#335495] rounded-md hover:bg-gray-100 transition-colors mb-2 font-acumin-regular text-sm"
            >
              Ver en Google Maps
            </a>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-acumin-regular text-sm lg:text-base">Tel. (656) 397-3890</span>
            </div>
          </div>
        </div>

        {/* Legal y derechos */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-sm text-white/80">
          <span className="font-acumin-regular text-sm text-center md:text-left">© {new Date().getFullYear()} PENTA. Todos los derechos reservados.</span>
          <div className="flex gap-4 flex-wrap justify-center md:justify-end">
            <a href="#" className="hover:underline font-acumin-regular text-sm">Aviso de Privacidad</a>
            <a href="#" className="hover:underline font-acumin-regular text-sm">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 