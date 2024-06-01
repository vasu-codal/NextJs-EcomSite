import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../Product/ProductCard";
import {
  getProductsFromLocal,
  setProductsToLocal,
} from "../../lib/commenFunctions";

type CartContextType = {
  cartTotalQty?: cartTotalQty;
  cartProducts?: Array<ProductType>;
  handleCartProduct: (product: ProductType) => void;
  handleCartProductQty: (product: ProductType, action: string) => void;
  removeCartProduct: (product: ProductType) => void;
  clearCart: () => void;
};

const initialState = {
  cartTotalQty: {
    totalQty: 0,
    totalAmount: 0,
  },
  cartProducts: [],
  handleCartProduct: () => {},
  removeCartProduct: () => {},
  handleCartProductQty: () => {},
  clearCart: () => {},
};

export const CartContext = createContext<CartContextType>(initialState);

interface Props {
  [propName: string]: any;
}

interface cartTotalQty {
  totalQty: number;
  totalAmount: number;
}

export const CartContextPropvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState<cartTotalQty>({
    totalQty: 0,
    totalAmount: 0,
  });
  const [cartProducts, setCartProducts] = useState<ProductType[]>();
  const handleCartProduct = useCallback((product: ProductType) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts ? [...prevCartProducts, product] : [product];
    });
  }, []);

  useEffect(() => {
    const cartproductFromLocal = getProductsFromLocal("cartProducts");
    if (cartproductFromLocal) {
      setCartProducts(cartproductFromLocal);
    }
  }, []);

  const handleCartProductQty = (product: ProductType, action: string) => {
    setCartProducts((prevCartProducts: any) => {
      const updatedCartProducts = prevCartProducts?.map(
        (prevProduct: ProductType) => {
          if (prevProduct.id === product.id) {
            const updatedQuantity =
              action === "increase"
                ? prevProduct?.quantity && prevProduct?.quantity + 1
                : action === "decrease"
                ? prevProduct?.quantity && prevProduct.quantity - 1
                : prevProduct.quantity;

            return {
              ...prevProduct,
              quantity: updatedQuantity,
              total: updatedQuantity
                ? (updatedQuantity * prevProduct.price)?.toFixed(2)
                : prevProduct.price,
            };
          }
          return prevProduct;
        }
      );
      return updatedCartProducts;
    });
  };

  const removeCartProduct = (product: ProductType) => {
    setCartProducts((prevCartProducts: any) => {
      return prevCartProducts.filter(
        (prevProduct: ProductType) => prevProduct?.id !== product?.id
      );
    });
  };

  const clearCart = () => {
    setCartProducts([]);
    setProductsToLocal("cartProducts", []);
  };

  useEffect(() => {
    setCartTotalQty({
      totalQty:
        cartProducts && cartProducts?.length > 0 ? cartProducts?.length : 0,
      totalAmount:
        cartProducts && cartProducts?.length > 0
          ? cartProducts?.reduce((acc: number, ele: ProductType) => {
              return ele && ele?.price ? acc + Number(ele?.total ?? 0) : acc;
            }, 0)
          : 0,
    });
    if (cartProducts && cartProducts?.length > 0) {
      setProductsToLocal("cartProducts", cartProducts);
    }
  }, [cartProducts]);

  const value = {
    cartTotalQty,
    cartProducts,
    handleCartProduct,
    handleCartProductQty,
    removeCartProduct,
    clearCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
