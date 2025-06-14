import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-acumin-condensed-bold text-[#335495] mb-4">404</h1>
        <h2 className="text-2xl font-acumin-semibold text-gray-800 mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-8">Lo sentimos, la página que buscas no existe.</p>
        <Link 
          href="/"
          className="inline-block bg-[#335495] text-white px-6 py-3 rounded-md hover:bg-[#294a8a] transition-colors font-acumin-medium"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
} 