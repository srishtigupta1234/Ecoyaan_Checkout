import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {

  const [address, setAddress] = useState(null);

  return (
    <CheckoutContext.Provider value={{ address, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
};