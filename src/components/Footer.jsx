import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* SECCIÓN PRINCIPAL DEL FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* COLUMNA 1: Sobre Nosotros */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              🛍️ TechStore
            </h3>
            <p className="text-sm mb-4">
              Tu tienda de tecnología de confianza. Ofrecemos los mejores productos 
              con garantía y envío gratuito.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#twitter"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#instagram"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-indigo-400 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-indigo-400 transition-colors">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-indigo-400 transition-colors">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-indigo-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Atención al Cliente */}
          <div>
            <h4 className="text-white font-semibold mb-4">Atención al Cliente</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-indigo-400 transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-indigo-400 transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#warranty" className="hover:text-indigo-400 transition-colors">
                  Garantía
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink:0 mt-1" />
                <span>Av. Principal 123, Ciudad, País</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink:0" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink:0" />
                <span>info@techstore.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-4">
              <h5 className="text-white text-sm font-semibold mb-2">
                Suscríbete al Newsletter
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-grow:1 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-indigo-500 text-white"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-r-md hover:bg-indigo-700 transition-colors">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA DE COPYRIGHT */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm">
            © {currentYear} TechStore. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;