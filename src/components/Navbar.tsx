import Link from 'next/link';
import { Button } from './Button';

export default function Navbar() {
  return (
    <>
      {/* Banner de contacto, solo visible en md+ */}
      <div className="hidden md:flex w-full bg-[#4a4b4f] text-white text-sm font-acumin-regular ">
        <div className="container mx-auto flex w-full">
          <div className="flex-1 flex items-center justify-center py-2 border-r border-white/30">
            <a href="mailto:contacto@pentamx.com" className="underline hover:text-[#4cb6ef] transition">contacto@pentamx.com</a>
          </div>
          <div className="flex-1 flex items-center justify-center py-2 border-r border-white/30">
            Monterrey: <a href="tel:+528183407031" className=" ml-1 underline hover:text-[#4cb6ef] transition">(81) 8340 7031</a>
          </div>
          <div className="flex-1 flex items-center justify-center py-2 border-r border-white/30">
            Chihuahua: <a href="tel:+526144234275" className=" ml-1 underline hover:text-[#4cb6ef] transition">(614) 423-4275</a>
          </div>
          <div className="flex-1 flex items-center justify-center py-2">
            Cd. Juárez: <a href="tel:+526563973890" className="ml-1 underline hover:text-[#4cb6ef] transition">(656) 397-3890</a>
          </div> 
          
        </div>
      </div>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-inline items-center justify-between ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/penta-logo.svg" alt="Penta Logo" className="h-12 w-auto md:hidden lg:block" />
            <img src="/images/penta-logo-md.svg" alt="Penta Logo" className="h-12 w-auto hidden md:block lg:hidden" />
          </Link>
          {/* Links */}
          <div className="flex gap-8 items-center justify-end font-acumin-semibold tracking-tight">
            <Link href="#catalogos" className="hidden md:inline-flex text-[#294a8a] hover:text-[#1a3765] transition">Cátalogos</Link>
            <Link href="#faq" className="hidden md:inline-flex text-[#294a8a] hover:text-[#1a3765] transition">Preguntas Frecuentes</Link>
            <Link href="#ubicaciones" className="hidden md:inline-flex text-[#294a8a] hover:text-[#1a3765] transition">Ubicaciones</Link>


            <Button 
              href="https://wa.me/528120170564?text=Hola,%20me%20gustaría%20cotizar%20uniformes" 
              variant="primary"
              icon={<img src="/images/whatsapp-icon.svg" alt="WhatsApp" className="h-5 w-5" />}
              iconPosition="left"
              size="md"
              className="bg-green-500 hover:bg-green-600"
            >
              Cotiza por WhatsApp
            </Button>
          </div>

        </div>

        {/* Mobile menu (optional, hamburger) */}
      </nav>
    </>
  );
} 