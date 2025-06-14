import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#335495] text-white pt-10 pb-4 border-t border-white/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row md:justify-between md:items-start gap-4 md:gap-0 pb-8 border-b border-white/20">
          {/* Logo y slogan */}
          <div className="flex flex-col items-center md:items-start md:w-1/ mb-8 md:mb-0 p-4">
            <Image src="/images/penta-blanco.svg" alt="Penta Logo" width={180} height={180} className="mb-2" />
          </div>
          {/* Contacto */}
          {/* <div className="flex flex-col items-center md:items-start md:w-1/4 mb-8 md:mb-0">
            <h5 className="text-2xl font-acumin-condensed-bold uppercase mb-2">CONTACTO</h5>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-acumin-regular text-base">Tel. (614) 423-4275</span>
            </div>
            <div className="flex items-center gap-2">
              
              <span className="font-acumin-regular text-base break-all">contacto@pentauniformes.com</span>
            </div>
          </div> */}

          {/* Sucursal Monterrey */}
          <div className="flex flex-col items-center md:items-start md:w-1/4 mb-8 md:mb-0">
            <h5 className="text-2xl font-acumin-condensed-bold uppercase mb-2">SUCURSAL MONTERREY</h5>
            <div className="mb-2">
              <p className="font-acumin-regular text-base">Av. Simón Bolívar 1438</p>
              <p className="font-acumin-regular text-base">Mitras Centro</p>
              <p className="font-acumin-regular text-base">Monterrey, N.L. CP 64460</p>
            </div>
            
          {/* Sucursal Chihuahua */}
          <div className="flex flex-col items-center md:items-start md:w-1/4 mb-8 md:mb-0">
            <h5 className="text-2xl font-acumin-condensed-bold uppercase mb-2">SUCURSAL CHIHUAHUA</h5>
            <div className="mb-2">
              <p className="font-acumin-regular text-base">Av. Mirador 7514-A</p>
              <p className="font-acumin-regular text-base">Col. Campestre Washington</p>
              <p className="font-acumin-regular text-base">Chihuahua, Chih. C.P. 31238</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/ojmSngfM84UH2jHt7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 bg-white text-[#335495] rounded-md hover:bg-gray-100 transition-colors mb-2 font-acumin-regular"
            >
              Ver en Google Maps
            </a>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-acumin-regular text-base">Tel. (614) 423-4275 y 423-4276</span>
            </div>
          </div>
          {/* Sucursal Juárez */}
          <div className="flex flex-col items-center md:items-start md:w-1/4">
            <h5 className="text-2xl font-acumin-condensed-bold uppercase mb-2">SUCURSAL JUÁREZ</h5>
            <div className="mb-2">
              <p className="font-acumin-regular text-base">Av. Ejército Nacional #6008</p>
              <p className="font-acumin-regular text-base">Col. Misiones del Portal</p>
              <p className="font-acumin-regular text-base">Juárez, Chih. CP 32528</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/ojmSngfM84UH2jHt7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 bg-white text-[#335495] rounded-md hover:bg-gray-100 transition-colors mb-2 font-acumin-regular"
            >
              Ver en Google Maps
            </a>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-acumin-regular text-base">Tel. (656) 396-0879 y 610-7278</span>
            </div>
          </div>
          
            <a 
              href="https://maps.app.goo.gl/BWJU3iPdrKUmBY2r9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 bg-white text-[#335495] rounded-md hover:bg-gray-100 transition-colors mb-2 font-acumin-regular"
            >
              Ver en Google Maps
            </a>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-acumin-regular text-base">Tel. (81) 8340-7031</span>
            </div>
          </div>
        </div>
        {/* Legal y derechos */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-2 text-sm text-white/80">
          <span className="font-acumin-regular text-sm">© {new Date().getFullYear()} PENTA. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline font-acumin-regular text-sm">Aviso de Privacidad</a>
            <a href="#" className="hover:underline font-acumin-regular text-sm">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 