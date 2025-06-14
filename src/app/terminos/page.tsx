import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | PENTA',
  description: 'Términos y condiciones de uso de los servicios de PENTA Uniformes',
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString('es-MX')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-600 mb-4">
              Al acceder y utilizar los servicios de PENTA Uniformes, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción de los Servicios</h2>
            <p className="text-gray-600 mb-4">
              PENTA Uniformes proporciona servicios de venta y distribución de uniformes empresariales, incluyendo:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Venta de uniformes empresariales de las mejores marcas</li>
              <li>Personalización de uniformes con logos empresariales</li>
              <li>Asesoría en la selección de uniformes</li>
              <li>Servicio de cotización y entrega a nivel nacional</li>
              <li>Distribución de catálogos de marcas autorizadas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso del Sitio Web</h2>
            <p className="text-gray-600 mb-4">
              Al utilizar nuestro sitio web, usted acepta:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Proporcionar información precisa y veraz en el formulario de contacto</li>
              <li>No utilizar el sitio para fines ilegales o no autorizados</li>
              <li>No interferir con el funcionamiento del sitio</li>
              <li>No intentar acceder a áreas restringidas del sitio</li>
              <li>Utilizar los catálogos y recursos disponibles solo para fines informativos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propiedad Intelectual</h2>
            <p className="text-gray-600 mb-4">
              Todo el contenido presente en este sitio web, incluyendo textos, gráficos, logotipos, imágenes, catálogos y software, es propiedad de PENTA Uniformes o de sus marcas asociadas y está protegido por las leyes de propiedad intelectual. Los catálogos y materiales de las marcas son utilizados con autorización.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cotizaciones y Pedidos</h2>
            <p className="text-gray-600 mb-4">
              Las cotizaciones proporcionadas a través de nuestro sitio web o por otros medios son válidas por 15 días hábiles. Los precios pueden variar según la cantidad, personalización y disponibilidad de productos. Los pedidos se procesarán una vez confirmada la cotización y recibido el pago correspondiente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
            <p className="text-gray-600 mb-4">
              PENTA Uniformes no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios. Nos comprometemos a proporcionar información precisa sobre nuestros productos, pero no podemos garantizar la disponibilidad inmediata de todos los artículos mostrados en los catálogos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modificaciones</h2>
            <p className="text-gray-600 mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Ley Aplicable</h2>
            <p className="text-gray-600 mb-4">
              Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de México, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a través de:
            </p>
            <p className="text-gray-600">
              Correo electrónico: contacto@coinsa.com.mx<br />
              Teléfono: (614) 423-4275<br />
              WhatsApp: (614) 423-4275
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 