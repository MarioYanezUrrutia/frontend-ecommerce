import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

//Hook personalizado
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe usarse dentro del CartProvider')
    }
    return context;
}

//Provider: Provee la información de los distintos datos del carrito
export const CartProvider = ({ children }) => {
    //Estado del carrito (Productos)
    const [cart, setCart] = useState([]);
    //Estado para mostrar u ocultar el carrito
    const [isCartOpen, setIsCartOpen] = useState(false);

    //Agregar al carrito
    const addToCart = (product) => {
        setCart(prevCart => {
            //Verificar si existe el producto en el carrito
            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem){
                //si la variable existingItem viene con información, aumentamos la cantidad.
                return prevCart.map(item =>
                    item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }
            //Si no existe, lo agregamos con cantidad 1
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    //Función: Remover producto del carrito
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    };

    //Función: Actualizar cantidad de un producto.
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1){
            removeFromCart(productId);
            return;
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                ? { ...item, quantity: newQuantity }
                : item
            )
        );
    };

    //Función: Vaciar el carrito completamente.
    const clearCart = () => {
        setCart([])
    };

    //Función: Calcular el total de los items del carrito
    const getCartItemCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    //Función: Calcular el total del precio del carrito
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Objeto con todos los valores y funciones que queremos compartir a los componentes y páginas
    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount,
        isCartOpen,
        setIsCartOpen
    }

    //Proveemos el contexto a todos los componentes hijos.
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};