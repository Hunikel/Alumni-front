import AboutArea from "@/components/AboutArea/AboutArea";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";
import ClientArea from "@/components/ClientArea/ClientArea";
import FaqArea from "@/components/FaqArea/FaqArea";
import HeaderTwo from "@/components/Header/HeaderTwo";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import NextBigThing from "@/components/NextBigThing/NextBigThing";
import PortfolioArea from "@/components/PortfolioArea/PortfolioArea";
import TechArea from "@/components/TechArea/TechArea";
import React from "react";

const Home = () => {
    return (
        <Layout>
            <HeaderTwo/>
            <NewsArea className="news-2-area" newsTwo/>
            <AboutArea/>
            <PortfolioArea/>
            <FaqArea/>
            <ClientArea/>

        </Layout>
    );
};

export default Home;
