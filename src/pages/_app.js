import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.min.css";
import "@/vendors/flaticon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// extra css
import "@/styles/default.css";
import "@/styles/style.css";

config.autoAddCss = false


const MyApp = ({Component, pageProps}) => {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    );
};

export default MyApp;
