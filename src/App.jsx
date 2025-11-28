import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';

// DATOS DE EJEMPLO - En producción vendrían del backend
const mockProducts = [
  {
    id: 1,
    name: 'Laptop Pro 15"',
    category: 'Laptops',
    description: 'Potente laptop con procesador i7, 16GB RAM y SSD de 512GB',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
    rating: 4.5,
    stock: 15,
    discount: 10
  },
  {
    id: 2,
    name: 'Auriculares Inalámbricos',
    category: 'Audio',
    description: 'Cancelación de ruido activa y 30 horas de batería',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    rating: 4.8,
    stock: 30
  },
  {
    id: 3,
    name: 'Smartphone X Pro',
    category: 'Smartphones',
    description: 'Pantalla OLED 6.5", cámara 108MP, 5G',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    rating: 4.7,
    stock: 8,
    discount: 15
  },
  {
    id: 4,
    name: 'Tablet Ultra',
    category: 'Tablets',
    description: 'Pantalla de 11", ideal para diseño y entretenimiento',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500',
    rating: 4.3,
    stock: 20
  },
  {
    id: 5,
    name: 'Smartwatch Fit',
    category: 'Wearables',
    description: 'Monitoreo de salud completo y GPS integrado',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    rating: 4.6,
    stock: 25
  },
  {
    id: 6,
    name: 'Teclado Mecánico RGB',
    category: 'Accesorios',
    description: 'Switches mecánicos, retroiluminación personalizable',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
    rating: 4.4,
    stock: 40
  },
  {
    id: 7,
    name: 'Mouse Gaming Pro',
    category: 'Accesorios',
    description: '16000 DPI, 8 botones programables',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    rating: 4.7,
    stock: 50
  },
  {
    id: 8,
    name: 'Monitor 4K 27"',
    category: 'Monitores',
    description: 'Resolución 4K, 144Hz, HDR10',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
    rating: 4.8,
    stock: 12,
    discount: 20
  }
];

function App() {
  //Estado para filtrar productos
  const [products] = useState(mockProducts);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar fijo en la parte superior */}
        <Navbar />

        {/*Carrito de compra*/}
        <ShoppingCart />

        {/* Contenido Principal de página web */}
        <main className="flex-grow:1">
          {/*Welcome section - Sección de bienvenida*/}
          <section className="bg-linear-to-r from-indigo-600 to-purple-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                Bienvenido a nuestra Tienda tecnológica
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100">
                Los mejores productos tecnológicos al mejor precio
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-lg">
                Explorar Productos
              </button>
            </div>
          </section>

          {/*Sección de productos*/}
          <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/*Título de la sección de productos*/}
            <div className='text-center mb-12'>
              <h2 >
                Nuestros Productos
              </h2>
              <p className='text-gray-600 text-lg'>
                Descubre las maravillas de productos que tenemos en stock
              </p>
            </div>

            {/*Grid de Productos*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/*Sección de Caracteristicas del producto*/}
          <section className='bg-white py-6'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className='p-6'>
                  <div className="text-indigo-600 text-4xl mb-4">🚚</div>
                    <h3 className='text-xl font-semibold mb-2'> Envío gratis</h3>
                      <p className='text-gray-600'>
                        En todos tus pedidos sin mínimo de compra.
                      </p>
                </div>

                <div className='p-6'>
                  <div className="text-indigo-600 text-4xl mb-4">🔒</div>
                    <h3 className='text-xl font-semibold mb-2'>Pago Seguro</h3>
                    <p className='text-gray-600'>
                      Protegemos tus datos con certificación SSL para una transacción segura
                    </p>
                </div>

                <div className="p-6">
                  <div className="text-indigo-600 text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-2">Garantía</h3>
                  <p className="text-gray-600">
                    30 días de garantía en todos los productos
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/*Footer*/}
        <Footer />
      </div>

    </CartProvider>
  );
}

export default App;
