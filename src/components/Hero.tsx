import { Button } from "./Button";

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[700px] flex items-center justify-center bg-primary text-white">
      <div className="flex flex-row items-center justify-center mx-auto text-center max-w-screen-xl px-5">
        <div className="flex flex-col items-left justify-center w-1/2"> 
          <h1 className="mb-6 text-left">
            Uniformes <br /> para tu empresa
          </h1>
          <p className="md:text-xl mb-8 text-left">
          Contamos con un amplio catálogo de las mejores marcas en el mercado. Te asesoramos personalmente para encontrar el modelo ideal para tu equipo.
          </p>
          <Button 
            href="/contact"
            variant="primary" 
            size="lg" 
            iconPosition="left"
          >
            Solicita tu cotización gratuita
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <img src="images/Lay Flat Clothes Navy Background 1.webp" alt="Uniforme" className="h-full" />
        </div>
      </div>
    </section>
  )
} 