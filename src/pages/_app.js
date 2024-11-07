import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuProvider } from "@/contexts/MenuContext";

export default function App({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}
