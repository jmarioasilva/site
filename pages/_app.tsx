import type { AppProps } from 'next/app';
import "./styles.css";
import {register} from "Swiper/element/bundle"


register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}