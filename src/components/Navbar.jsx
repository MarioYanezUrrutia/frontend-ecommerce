import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    //Obtenemos funciones del contexto del carrito
    const { getCartItemCount, setIsCartOpen } = useCart();

    //Estado para el menú móvil (hamburguesa)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    //función para abrir el carrito
    const handleCartClick = () => {
        setIsCartOpen(true);
    };

    return(
        <nav className="bg-white shadow-md sticky top-0 z-40">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* LOGO - Lado izq */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
                            Tienda Tecnología
                        </h1>    
                    </div>  

                    {/* NAVEGACIÓN - centro */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                            Inicio
                        </a>
                        <a href="#products" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                            Productos
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                            Nosotros
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                            Contacto
                        </a>
                    </div>  

                    {/* CARRITO Y MENÚ MOVIL - Lado derecho */}
                    <div className="flex items-center gap-4">
                        { /* Botón de carrito */}
                        <button
                            onClick={handleCartClick}
                            className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
                            aria-label="Abrir carrito de compras"
                        >
                            <ShoppingCart size={24} />
                            {/* cantidad de items - solo si el carrito tiene productos */}
                            {getCartItemCount() > 0 &&(
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {getCartItemCount()}
                                </span>
                            )}
                        </button>

                        { /* Botón menú hamburguesa para moviles */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
                            aria-label="Abrir Menú"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />} 
                        </button>
                    </div>
                </div>

                {/* MENÚ MÓVIL - Desplegable */}
                {isMobileMenuOpen && (
                <div className="md:hidden pb-4 space-y-2">
                    <a href="#home" className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded transition-colors">
                        Inicio
                    </a>
                    <a href="#products" className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded transition-colors">
                        Productos
                    </a>
                    <a href="#about" className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded transition-colors">
                        Nosotros
                    </a>
                    <a href="#contact" className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded transition-colors">
                        Contacto
                    </a>
                </div>
                )}
            </div>
        </nav>
    );
};
export default Navbar;