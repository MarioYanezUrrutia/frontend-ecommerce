import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const ShoppingCart = () => {
    //Obtener todo lo que se requiere del contexto
    const {
        cart,
        isCartOpen,
        SetIsCartOpen,
        getCartTotal,
        clearCart,
        getCartItemCount
    } = useCart();

    //El cierre del carrito
    const handleClose = () =>{
        SetIsCartOpen(false);
    };

    //Manejador del Checkout
    const handleCheckout = () => {
        if (cart.length === 0) return;
        alert(`Procesando compra de ${getCartItemCount()} productos por $${getCartTotal().toFixed(2)}`);
        //Implementamos la lógica del pago
        clearCart();
        handleClose();
    };

    //Si el carrito no se encuentra abierto, entonces no se renderiza
    if (!isCartOpen) return null;

    return (
        <>
            {/* OVERLAY - Fondo oscuro que cubre la pantalla */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* PANEL DEL CARRITO - Se desliza desde la derecha */}
            <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col">
                
                {/* HEADER DEL CARRITO */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-indigo-600 text-white">
                <div className="flex items-center space-x-2">
                    <ShoppingBag size={24} />
                    <h2 className="text-xl font-bold">
                    Carrito ({getCartItemsCount()})
                    </h2>
                </div>
                
                <button
                    onClick={handleClose}
                    className="p-1 hover:bg-indigo-700 rounded-full transition-colors"
                    aria-label="Cerrar carrito"
                >
                    <X size={24} />
                </button>
                </div>

                {/* CONTENIDO DEL CARRITO */}
                <div className="flex-grow:1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                    // Carrito vacío
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <ShoppingBag size={64} strokeWidth={1} />
                    <p className="mt-4 text-lg font-medium">Tu carrito está vacío</p>
                    <p className="text-sm mt-2">¡Agrega productos para comenzar!</p>
                    </div>
                ) : (
                    // Lista de productos
                    <div className="space-y-2">
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    </div>
                )}
                </div>

                {/* FOOTER - RESUMEN Y CHECKOUT */}
                {cart.length > 0 && (
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                    
                    {/* Subtotal */}
                    <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                    </div>

                    {/* Envío */}
                    <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Envío:</span>
                    <span className="font-semibold text-green-600">Gratis</span>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center mb-4 pt-2 border-t border-gray-300">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-2xl font-bold text-indigo-600">
                        ${getCartTotal().toFixed(2)}
                    </span>
                    </div>

                    {/* Botones de acción */}
                    <button
                    onClick={handleCheckout}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-2"
                    >
                    Finalizar Compra
                    </button>

                    <button
                    onClick={clearCart}
                    className="w-full bg-white text-gray-700 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                    Vaciar Carrito
                    </button>
                </div>
                )}
            </div>
        </>
    );
};

export default ShoppingCart;

