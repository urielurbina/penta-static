'use client';

import { Button } from "@/components/Button";
import React, { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import CardPDF from '@/components/CardPDF';
import IndustryCard2 from "@/components/IndustryCard2";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

interface Catalog {
  title: string;
  coverImage: string;
  categories: string[];
  driveLink: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Location {
  branchName: string;
  address: string;
  googleMapsLink: string;
  phoneNumbers: string[];
}

interface PageContent {
  catalogs: Catalog[];
  faqs: FAQ[];
  locations: Location[];
}

interface ClientHomeProps {
  pageContent: PageContent;
}

interface Logo {
  src: string;
  alt: string;
}

interface LogoSliderProps {
  logos?: Logo[];
}

const defaultLogos: Logo[] = [
  { src: '/images/bigbang.webp', alt: 'Big Bang' },
  { src: '/images/mayork.webp', alt: 'Mayork' },
  { src: '/images/dickies.webp', alt: 'Dickies' },
  { src: '/images/portauthority.webp', alt: 'Port Authority' },
  { src: '/images/redkap.webp', alt: 'Red Kap' },
  { src: '/images/bibo.webp', alt: 'Bibo' },
  { src: '/images/gildan.webp', alt: 'Gildan' },
  { src: '/images/invasion.webp', alt: 'Invasion' },
  { src: '/images/yazbek.webp', alt: 'Yazbek' },
  { src: '/images/dacache.webp', alt: 'Dacache' },
  { src: '/images/dkps.webp', alt: 'DKPS' },
  { src: '/images/reimer.webp', alt: 'Reimer' },
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
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="max-h-full max-w-full object-contain block"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.webp"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface FAQAccordionProps {
  faqs: FAQ[];
}

function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md max-w-2xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={idx} className={idx !== faqs.length - 1 ? 'border-b border-gray-200' : ''}>
          <button
            className="w-full flex justify-between items-center py-5 px-6 text-left text-lg font-acumin-semibold text-gray-900 leading-[1.2] focus:outline-none hover:bg-gray-50 transition"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
          >
            {faq.question}
            <span className={`ml-4 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-5 text-gray-700 animate-fade-in">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ClientHome({ pageContent }: ClientHomeProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const images = [
    "/images/hero-image-1.webp",
    "/images/hero-image-2.webp",
    "/images/hero-image-3.webp",
    "/images/hero-image-4.webp",
    "/images/hero-image-5.webp"
  ];

  useEffect(() => {
    // Initialize AOS with smooth settings
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const interests = [];
    if (formData.get('uniformes')) interests.push('Uniformes');
    if (formData.get('catalogo')) interests.push('Catálogo completo');
    if (formData.get('mayoreo')) interests.push('Mayoreo');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          company: formData.get('company'),
          state: formData.get('state'),
          interests,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitStatus({
        type: 'success',
        message: '¡Gracias por contactarnos! Te responderemos pronto.',
      });
      e.currentTarget.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Error al enviar el formulario',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:h-screen md:max-h-[700px] flex items-center justify-center bg-primary text-white">
          <div className="absolute bottom-0 right-0 pointer-events-none w-full opacity-10 z-0">
            <Image
              src="/images/coinsa-texture.svg"
              alt="COINSA texture"
              className="w-full h-full object-contain"
              width={1200}
              height={200}
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.webp"
            />
          </div>
          <div className="containers z-10 py-8 md:py-0">
            <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8 md:gap-0">
              <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-center justify-center gap-6"> 
                <h1 className="text-7xl sm:text-6xl md:text-8xl font-acumin-condensed-bold uppercase text-center tracking-tight leading-none" data-aos="fade-zoom-in" data-aos-offset="0">
                  <div className="flex flex-col leading-none" aria-label="Uniformes para tu empresa">
                    <span>Uniformes</span>
                    <span className="text-5xl sm:text-6xl">para tu empresa</span>
                  </div>
                </h1>
                <p className="text-center max-w-md" data-aos="fade-zoom-in" data-aos-delay="200" data-aos-offset="0">
                  Contamos con un amplio catálogo de las mejores marcas en el mercado. Te asesoramos personalmente para encontrar el modelo ideal para tu equipo.
                </p>
                <Button 
                  href="#contacto"
                  variant="primary" 
                  size="lg" 
                  iconPosition="left"
                  className="w-fit"
                  data-aos="fade-zoom-in"
                  data-aos-offset="0"
                  data-aos-delay="400"
                >
                  Solicita tu cotización
                </Button>
              </div>
              <div className="relative w-full md:w-1/2 order-1 md:order-2 overflow-hidden" data-aos="fade-zoom-in" data-aos-offset="0">
                <div className="w-full h-full">
                  <Image
                    src={images[currentImageIndex]}
                    alt="Uniforme"
                    className="w-full min-h-[300px] object-cover transition-all duration-1000 ease-in-out"
                    width={800}
                    height={600}
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning ? 'scale(0.95)' : 'scale(1)'
                    }}
                    placeholder="blur"
                    blurDataURL="/images/blur-placeholder.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Slider */}
        <section className="pb-16 bg-white">
          <div className="mx-auto px-4 w-full">
            <LogoSlider />
          </div>
        </section>

        {/* Industries Section */}
        <section className="pb-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-6xl font-acumin-condensed-bold tracking-tight mb-2" data-aos="fade-zoom-in">UNIFORMES PARA CADA SECTOR</h2>
              <p className="text-gray-600 font-acumin-regular" data-aos="fade-zoom-in" data-aos-delay="200">
                Sabemos que cada industria tiene sus propias necesidades. Por eso, ofrecemos uniformes específicos para cada sector. Si tu empresa pertenece a alguno de estos sectores o a otro diferente, tenemos opciones adaptadas a tus necesidades específicas.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { img: "/images/hotelero.webp", alt: "Sector Hotelero y Turístico", title: "Hotelero y Turístico" },
                { img: "/images/manufactura.webp", alt: "Maquilas y Manufactura", title: "Maquilas y Manufactura" },
                { img: "/images/seguridad.webp", alt: "Servicios de Seguridad", title: "Servicios de Seguridad" },
                { img: "/images/oficinas.webp", alt: "Oficinas Corporativas", title: "Oficinas Corporativas" },
                { img: "/images/transporte.webp", alt: "Transporte y Logística", title: "Transporte y Logística" },
                { img: "/images/sector.webp", alt: "Sector Público", title: "Sector Público" }
              ].map((industry, index) => (
                <IndustryCard2 
                  key={index}
                  img={industry.img} 
                  alt={industry.alt} 
                  title={industry.title}
                  data-aos="fade-zoom-in"
                  data-aos-delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Catalogs Section */}
        <section id="catalogos" className="py-10 relative flex items-center justify-center bg-tertiary text-white overflow-hidden">
          <div className="absolute bottom-0 right-0 pointer-events-none w-full opacity-50">
            <Image
              src="/images/coinsa-texture.svg"
              alt="COINSA texture"
              className="w-full h-full object-contain"
              width={1200}
              height={200}
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.webp"
            />
          </div>
          <div className="containers relative z-10">
            <div className="w-full"> 
              <h2 className="mb-8 text-center uppercase text-6xl font-acumin-condensed-bold tracking-tight" data-aos="fade-zoom-in">
                Catálogos de las marcas que manejamos
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-3 mx-auto">
                {pageContent.catalogs.map((catalog, index) => (
                  <CardPDF
                    key={index}
                    imageSrc={catalog.coverImage}
                    imageAlt={`Catalogo ${catalog.title} COINSA`}
                    title={catalog.title}
                    externalLink={catalog.driveLink}
                    chips={catalog.categories}
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-8 bg-white mx-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full flex flex-col gap-6" data-aos="fade-zoom-in">
              <h2 className="font-acumin-condensed-bold uppercase text-center md:text-left hidden sm:block">
                <div className="flex flex-col" aria-label="Viste a tu equipo con el nivel que tu empresa merece">
                  <span className="text-7xl sm:text-6xl leading-[0.8] tracking-tight">Viste a tu equipo </span>
                  <span className="text-7xl sm:text-6xl leading-[0.8] tracking-tight">con el nivel que tu</span>
                  <span className="text-7xl leading-[0.8] tracking-tight">empresa merece</span>
                </div>
              </h2>

              <h2 className="font-acumin-condensed-bold uppercase text-left tracking-tight text-[3.25rem] leading-[0.8] tracking-tight sm:hidden">
                Viste a tu equipo con el nivel que tu empresa merece
              </h2>

              <div className="flex flex-col gap-2 max-w-lg">
                <p className="text-gray-700 text-left">
                  En COINSA sabemos lo importante que es que cada persona se sienta cómoda y segura con lo que usa día a día.
                </p>
                <p className="text-gray-700 text-left">
                  Por eso, trabajamos con las mejores marcas nacionales e internacionales, cuidando cada parte del proceso: desde la cotización hasta la entrega final.
                </p>
                <p className="text-gray-700 text-left">
                  Estamos aquí para ayudarte a encontrar el uniforme ideal.
                </p>
              </div>

              <Button 
                href="#contacto"
                variant="secondary"
                size="md"
                className="w-full sm:w-fit"
              >
                SOLICITA TU COTIZACIÓN
              </Button>
            </div>
            <div className="" data-aos="fade-left" data-aos-delay="300">
              <Image src="/images/team.webp" alt="Equipo COINSA" className="max-w-full h-auto" width={800} height={800} placeholder="blur" blurDataURL="/images/blur-placeholder.webp" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center py-8">
              <h2 className="font-acumin-condensed-bold uppercase text-center text-6xl text-black tracking-tight" data-aos="fade-zoom-in">MÁS DE 20 AÑOS</h2>
              <h3 className="font-acumin-condensed-bold uppercase text-center text-5xl mb-2 text-[#294a8a] tracking-tight" data-aos="fade-zoom-in" data-aos-delay="200">VISTIENDO A LAS EMPRESAS DE MÉXICO</h3>
              <p className="text-black mb-2 text-center font-acumin-regular text-lg" data-aos="fade-zoom-in" data-aos-delay="400">Nos eligen por nuestra experiencia, se quedan por nuestra atención.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                {
                  icon: "/images/cotizacion.svg",
                  title: "Cotización sin Compromiso",
                  description: "Podemos ayudarte a elegir el uniforme ideal según tus necesidades."
                },
                {
                  icon: "/images/personalizacion.svg",
                  title: "Aplicación de Logo",
                  description: "Incorporamos el logo de tu empresa con bordado, serigrafía, DTF, entre otros para dar identidad a los uniformes de tu equipo."
                },
                {
                  icon: "/images/cobertura.svg",
                  title: "Cobertura Nacional",
                  description: "Hacemos entregas a todo México. Pide por correo o teléfono y recibe directamente en tu empresa, sin complicaciones."
                },
                {
                  icon: "/images/precios.svg",
                  title: "Precios Competitivos",
                  description: "Surtimos pedidos de mayoreo o menudeo con los mejores precios de nuestro catálogo."
                },
                {
                  icon: "/images/amplio.svg",
                  title: "Amplio Catálogo",
                  description: "Somos distribuidores autorizados de las marcas Dickies, Mayork, Big Bang, Invasion, entre otras. Contamos con las líneas completas de las marcas."
                },
                {
                  icon: "/images/atencion.svg",
                  title: "Atención Personalizada",
                  description: "Contamos con sucursales en Chihuahua, Cd. Juárez y Monterrey. ¡Estamos para servirte!<br />Horario de atención de L-V 9:00 a 18:00 hrs."
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex flex-col items-center text-center p-8 border border-gray-300"
                  data-aos="fade-zoom-in"
                  data-aos-delay={index * 100}
                >
                  <Image src={feature.icon} alt={`${feature.title} icono`} className="w-16 h-16 mb-2" width={64} height={64} placeholder="blur" blurDataURL="/images/blur-placeholder.webp" />
                  <h4 className="mb-2 text-black font-acumin-semibold tracking-tight text-2xl">{feature.title}</h4>
                  <p className="text-gray-800 font-acumin-regular text-[1rem]" dangerouslySetInnerHTML={{ __html: feature.description }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contacto" className="w-full py-16 min-h-screen flex items-center justify-center bg-[#1F5092] relative">
          <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0">
            <Image
              src="/images/coinsa-texture.svg"
              alt="COINSA texture"
              className="w-full h-full object-cover"
              width={1200}
              height={200}
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.webp"
            />
          </div>
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
            <div className="flex flex-col gap-4 items-center sm:items-start" data-aos="fade-zoom-in">
              <span className="w-fit bg-[#1F5092] text-white text-sm font-acumin-semibold px-4 py-1 rounded-full mb-4 border border-white/30 uppercase">Contacto</span>
              
              <h2 className="text-center sm:text-left text-7xl font-acumin-condensed-bold uppercase text-white leading-[0.8]">Solicita tu cotización hoy mismo.</h2>
              
              <p className="text-white/90 mb-4 text-center sm:text-left max-w-lg font-acumin-regular text-lg">
                Déjanos tus datos y uno de nuestros asesores te contactará pronto para ayudarte a cotizar tu pedido.
              </p>
              
              <ul className="space-y-6">
                {[
                  {
                    title: "Respuesta Rápida",
                    description: "Te contactaremos en menos de 24 horas hábiles"
                  },
                  {
                    title: "Asesoría Personalizada",
                    description: "Un experto te ayudará a encontrar la mejor opción"
                  },
                  {
                    title: "Sin Compromiso",
                    description: "La cotización es totalmente gratuita"
                  }
                ].map((item, index) => (
                  <li key={item.title} className="flex items-start gap-3" data-aos="fade-zoom-in" data-aos-delay={index * 100}>
                    <span className="mt-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#5492C3] text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    <div>
                      <span className="font-acumin-semibold text-xl leading-none text-white">{item.title}</span>
                      <div className="font-acumin-regular text-white/90 text-sm">{item.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="" data-aos="zoom-in" data-aos-delay="300">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-4 w-full flex flex-col gap-4">
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label className="font-acumin-semibold text-[#1a3765] mb-1">Nombre y apellido</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="rounded px-4 py-3 border border-[#e5eaf1] focus:outline-none focus:ring-2 focus:ring-[#4cb6ef] text-gray-900 placeholder-gray-400 bg-white font-acumin-regular"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-acumin-semibold text-[#1a3765] mb-1">Correo</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded px-4 py-3 border border-[#e5eaf1] focus:outline-none focus:ring-2 focus:ring-[#4cb6ef] text-gray-900 placeholder-gray-400 bg-white font-acumin-regular"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-acumin-semibold text-[#1a3765] mb-1">Celular</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="rounded px-4 py-3 border border-[#e5eaf1] focus:outline-none focus:ring-2 focus:ring-[#4cb6ef] text-gray-900 placeholder-gray-400 bg-white font-acumin-regular"
                      placeholder="(XX) XXXX-XXXX"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-acumin-semibold text-[#1a3765] mb-1">Nombre de la compañía <span className="text-sm text-gray-500">(Opcional)</span></label>
                    <input
                      name="company"
                      type="text"
                      className="rounded px-4 py-3 border border-[#e5eaf1] focus:outline-none focus:ring-2 focus:ring-[#4cb6ef] text-gray-900 placeholder-gray-400 bg-white font-acumin-regular"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-acumin-semibold text-[#1a3765] mb-1">Estado <span className="text-sm text-gray-500">(Opcional)</span></label>
                    <select
                      name="state"
                      className="rounded px-4 py-3 border border-[#e5eaf1] focus:outline-none focus:ring-2 focus:ring-[#4cb6ef] text-gray-900 bg-white font-acumin-regular appearance-none pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231a3765%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_1rem]"
                    >
                      <option value="">Selecciona tu estado</option>
                      <option value="AGU">Aguascalientes</option>
                      <option value="BCN">Baja California</option>
                      <option value="BCS">Baja California Sur</option>
                      <option value="CAM">Campeche</option>
                      <option value="CHP">Chiapas</option>
                      <option value="CHH">Chihuahua</option>
                      <option value="CMX">Ciudad de México</option>
                      <option value="COA">Coahuila</option>
                      <option value="COL">Colima</option>
                      <option value="DUR">Durango</option>
                      <option value="GUA">Guanajuato</option>
                      <option value="GRO">Guerrero</option>
                      <option value="HID">Hidalgo</option>
                      <option value="JAL">Jalisco</option>
                      <option value="MEX">Estado de México</option>
                      <option value="MIC">Michoacán</option>
                      <option value="MOR">Morelos</option>
                      <option value="NAY">Nayarit</option>
                      <option value="NLE">Nuevo León</option>
                      <option value="OAX">Oaxaca</option>
                      <option value="PUE">Puebla</option>
                      <option value="QUE">Querétaro</option>
                      <option value="ROO">Quintana Roo</option>
                      <option value="SLP">San Luis Potosí</option>
                      <option value="SIN">Sinaloa</option>
                      <option value="SON">Sonora</option>
                      <option value="TAB">Tabasco</option>
                      <option value="TAM">Tamaulipas</option>
                      <option value="TLA">Tlaxcala</option>
                      <option value="VER">Veracruz</option>
                      <option value="YUC">Yucatán</option>
                      <option value="ZAC">Zacatecas</option>
                    </select>
                  </div>
                </div>
                <div className="mt-2">
                  <label className="font-acumin-semibold text-[#1a3765] mb-2 block">Estoy interesado en...</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 text-[#1a3765] font-acumin-regular">
                      <input name="uniformes" type="checkbox" className="accent-[#4cb6ef]" /> Uniformes
                    </label>
                    <label className="flex items-center gap-2 text-[#1a3765] font-acumin-regular">
                      <input name="catalogo" type="checkbox" className="accent-[#4cb6ef]" /> Catálogo completo
                    </label>
                    <label className="flex items-center gap-2 text-[#1a3765] font-acumin-regular">
                      <input name="mayoreo" type="checkbox" className="accent-[#4cb6ef]" /> Mayoreo
                    </label>
                  </div>
                </div>
                <Button 
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'ENVIANDO...' : 'SOLICITAR INFORMACIÓN'}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-16 bg-white flex items-center justify-center">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-6xl font-acumin-condensed-bold uppercase leading-none tracking-tight text-center text-[#294a8a] mb-2" data-aos="fade-zoom-in">PREGUNTAS FRECUENTES</h2>
            <p className="text-center text-lg text-[#294a8a] mb-6 font-acumin-regular leading-[1.2]" data-aos="fade-zoom-in" data-aos-delay="200">
              Estas son algunas de las preguntas más comunes al momento de adquirir uniformes. Si necesitas ayuda extra, también puedes escribirnos al (número).
            </p>
            <FAQAccordion faqs={pageContent.faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full flex items-center justify-center bg-[#1A4F96] pt-0">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center overflow-hidden">
            <div className="w-full md:w-1/2 flex items-end h-full bg-[#4697D8] sm:bg-transparent" data-aos="fade-zoom-in">
              <Image
                src="/images/equipo-uniforme.webp"
                alt="Equipo uniformado COINSA"
                className="w-auto h-full object-contain max-h-[400px]"
                width={800}
                height={800}
                style={{ maxHeight: '450px' }}
                placeholder="blur"
                blurDataURL="/images/blur-placeholder.webp"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white px-4 md:px-12 py-6 md:py-0" data-aos="fade-zoom-in">
              <h2 className="text-5xl font-acumin-condensed-bold uppercase mb-4 text-center leading-none">
                ¿LISTO PARA UNIFORMAR A TU EQUIPO?
              </h2>
              <p className="mb-6 text-lg text-center max-w-md font-acumin-regular leading-[1.2]">
                Solicita tu cotización sin compromiso y recibe atención personalizada para encontrar el uniforme ideal.
              </p>
              <Button 
                href="#contacto"
                variant="primary"
                size="md"
                className="w-full md:w-auto"
              >
                SOLICITAR COTIZACIÓN
              </Button>
            </div>
          </div>
        </section>

        {/* Logo Slider */}
        <section id="ubicaciones" className="bg-white">
          <div className="mx-auto px-4 w-full">
            <LogoSlider />
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
} 