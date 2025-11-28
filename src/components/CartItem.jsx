import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
    //Obtenemos las funciones del contexto
    const { updateQuantity, removeFromCart } = useCart();

    //calcula el subtotal para este item
    const subtotal = item.price * item.quantity;

    //Manejadores de eventos cantidad carrito
    const handleIncrement = () =>{
        updateQuantity(item.id, item.quantity + 1);
    }

    const handleDerement = () =>{
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        }else{
            removeFromCart(item.id);
        }
    }

    const handleRemove = () => {
        removeFromCart(item.id);
    }


    return (
        <div className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0">
      
        {/* IMAGEN DEL PRODUCTO */}
        <div className="w-20 h-20 flex-shrink:0 bg-gray-100 rounded-md overflow-hidden">
            <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            />
        </div>

        {/* INFORMACIÓN Y CONTROLES */}
        <div className="flex-grow:1">
            
            {/* Nombre y categoría */}
            <div className="flex justify-between items-start mb-2">
            <div>
                <h4 className="font-semibold text-gray-800 text-sm">
                {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                {item.category}
                </p>
            </div>
            
            {/* Botón eliminar */}
            <button
                onClick={handleRemove}
                className="text-red-500 hover:text-red-700 transition-colors p-1"
                aria-label={`Eliminar ${item.name} del carrito`}
            >
                <Trash2 size={18} />
            </button>
            </div>

            {/* CONTROLES DE CANTIDAD Y PRECIO */}
            <div className="flex items-center justify-between">
            
            {/* Controlador de cantidad */}
            <div className="flex items-center border border-gray-300 rounded-md">
                <button
                onClick={handleDecrement}
                className="p-1 hover:bg-gray-100 transition-colors"
                aria-label="Disminuir cantidad"
                >
                <Minus size={16} />
                </button>
                
                <span className="px-3 py-1 text-sm font-medium min-w-\[2rem]\ text-center">
                {item.quantity}
                </span>
                
                <button
                onClick={handleIncrement}
                className="p-1 hover:bg-gray-100 transition-colors"
                aria-label="Aumentar cantidad"
                >
                <Plus size={16} />
                </button>
            </div>

            {/* Precio y subtotal */}
            <div className="text-right">
                <p className="text-sm font-bold text-gray-800">
                ${subtotal.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500">
                ${item.price.toFixed(2)} c/u
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CartItem;