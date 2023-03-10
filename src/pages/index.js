import AboutArea from "@/components/AboutArea/AboutArea";

import ClientArea from "@/components/ClientArea/ClientArea";
import FaqArea from "@/components/FaqArea/FaqArea";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import PortfolioArea from "@/components/PortfolioArea/PortfolioArea";
import React from "react";

const Home = () => {
    return (
        <Layout>
            <NewsArea className="news-2-area" newsTwo/>
            <AboutArea/>
            <PortfolioArea/>
            <FaqArea/>
            <ClientArea/>

        </Layout>
    );
};

export default Home;
