import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
    //Función que se obtinene del contexto llamada addToCart
    const { addToCart } = useCart();

    //Función para agregar el producto al carrito
    const handleAddToCart = () => { 
        addToCart(product)

    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        
            {/* IMAGEN DEL PRODUCTO */}
            <div className="relative h-64 bg-gray-100 overflow-hidden group">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Badge de descuento (opcional) */}
                {product.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
                    -{product.discount}%
                </div>
                )}
            </div>
            {/* INFORMACIÓN DEL PRODUCTO */}
            <div className="p-4 flex flex-col flex-grow:1">
                
                {/* Categoría */}
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                {product.category}
                </p>

                {/* Nombre del producto */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {product.name}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow:1">
                {product.description}
                </p>

                {/* Rating (estrellas) */}
                <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, index) => (
                        <Star
                        key={index}
                        size={16}
                        className={index < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }
                        />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                        ({product.rating})
                    </span>
                </div>
                {/* SECCIÓN DE PRECIO Y BOTÓN */}
                <div className="flex items-center justify-between mt-auto">
                    <div>
                        {/* Precio con descuento */}
                        {product.discount ? (
                        <div>
                            <p className="text-2xl font-bold text-indigo-600">
                            ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-400 line-through">
                            ${product.price}
                            </p>
                        </div>
                        ) : (
                        <p className="text-2xl font-bold text-indigo-600">
                            ${product.price}
                        </p>
                        )}
                    </div>

                    {/* Botón agregar al carrito */}
                    <button
                        onClick={handleAddToCart}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2 font-medium"
                        aria-label={`Agregar ${product.name} al carrito`}
                    >
                        <ShoppingCart size={18} />
                        <span className="hidden sm:inline">Agregar</span>
                    </button>
                </div>

                {/* Stock disponible */}
                {product.stock < 10 && product.stock > 0 && (
                <p className="text-xs text-orange-500 mt-2">
                    ¡Solo quedan {product.stock} unidades!
                </p>
                )}
                
                {product.stock === 0 && (
                <p className="text-xs text-red-500 mt-2 font-semibold">
                    Agotado
                </p>
                )}
            </div>        
        </div>        
    );
};
export default ProductCard;