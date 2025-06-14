import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | PENTA',
  description: 'Aviso de privacidad de PENTA Uniformes - Información sobre el manejo de datos personales',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Aviso de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString('es-MX')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-600 mb-4">
              En PENTA Uniformes, recopilamos información que usted nos proporciona directamente a través de nuestro formulario de contacto y otros canales de comunicación, incluyendo:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Nombre de la empresa</li>
              <li>Información de la sucursal o ubicación</li>
              <li>Información adicional que usted decida compartir en el mensaje</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso de la Información</h2>
            <p className="text-gray-600 mb-4">
              La información recopilada se utiliza para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Procesar y responder a sus solicitudes de cotización</li>
              <li>Proporcionar información sobre nuestros productos y servicios</li>
              <li>Gestionar pedidos y entregas</li>
              <li>Enviar actualizaciones sobre nuevos catálogos y promociones</li>
              <li>Mejorar nuestros servicios y atención al cliente</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Protección de Datos</h2>
            <p className="text-gray-600 mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Encriptación de datos sensibles</li>
              <li>Acceso restringido a la información personal</li>
              <li>Monitoreo regular de nuestros sistemas de seguridad</li>
              <li>Capacitación de nuestro personal en el manejo de datos personales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compartir Información</h2>
            <p className="text-gray-600 mb-4">
              Su información personal puede ser compartida con:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Proveedores de servicios de entrega y logística</li>
              <li>Autoridades fiscales y gubernamentales cuando sea requerido por ley</li>
              <li>Proveedores de servicios de tecnología que nos ayudan a operar nuestro sitio web</li>
            </ul>
            <p className="text-gray-600 mb-4">
              No vendemos ni rentamos su información personal a terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Derechos ARCO</h2>
            <p className="text-gray-600 mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar sus datos personales</li>
              <li>Cancelar sus datos personales</li>
              <li>Oponerse al tratamiento de sus datos personales</li>
              <li>Revocar su consentimiento para el tratamiento de sus datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Estas tecnologías nos ayudan a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Recordar sus preferencias</li>
              <li>Analizar el uso del sitio web</li>
              <li>Mejorar nuestros servicios</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Puede controlar el uso de cookies a través de la configuración de su navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Para ejercer sus derechos ARCO o para cualquier consulta sobre este aviso de privacidad, puede contactarnos a través de:
            </p>
            <p className="text-gray-600">
              Correo electrónico: contacto@coinsa.com.mx<br />
              Teléfono: (614) 423-4275<br />
              WhatsApp: (614) 423-4275<br />
              Dirección: Av. Mirador 7514-A Col. Campestre Washington, Chihuahua, Chih. C.P. 31238
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 
