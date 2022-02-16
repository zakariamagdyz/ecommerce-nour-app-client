import { createContext, useState, useContext } from "react";

export const OrderData = createContext();

const OrderContext = ({ children }) => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (operator) => {
    if (operator === "+") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    }
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <OrderData.Provider
      value={{
        color,
        size,
        quantity,
        handleQuantity,
        handleSize,
        setSize,
        setColor,
      }}
    >
      {children}
    </OrderData.Provider>
  );
};

export default OrderContext;

export const useOrderData = () => {
  return useContext(OrderData);
};
