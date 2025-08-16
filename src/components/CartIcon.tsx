import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { state } = useCart();

  return (
    <Button variant="outline" size="sm" asChild className="relative">
      <Link to="/cart">
        <ShoppingBag className="h-4 w-4" />
        {state.totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-kola text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {state.totalItems}
          </span>
        )}
      </Link>
    </Button>
  );
};

export default CartIcon;