import Head from "next/head";
import React from "react";
import OffCanvasMenu from "../Header/OffCanvasMenu";
import SearchPopup from "../Header/SearchPopup";
import SiteFooter from "../SiteFooter/SiteFooter";
import ScrollToTop from "./ScrollToTop";
import HeaderTwo from "@/components/Header/HeaderTwo";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>ENSIIE - Alumni</title>
            </Head>
            <main id="wrapper" className="animated fadeIn">
                <HeaderTwo/>
                {children}
                <SiteFooter/>
            </main>
            <OffCanvasMenu/>
            <SearchPopup/>
            <ScrollToTop/>
        </>
    );
};

export default Layout;
