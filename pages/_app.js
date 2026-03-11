import '../styles/global.css'
import { CheckoutProvider } from "../context/checkoutContext";

export default function App({ Component, pageProps }) {
  return (
    <CheckoutProvider>
      <Component {...pageProps} />
    </CheckoutProvider>
  );
}