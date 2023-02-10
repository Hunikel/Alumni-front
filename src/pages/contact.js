import ContactFormArea from "@/components/ContactArea/ContactFormArea";
import ContactInfoArea from "@/components/ContactArea/ContactInfoArea";
import ContactMap from "@/components/ContactArea/ContactMap";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      <PageTitle title="Contact" />
      <ContactFormArea />
      <ContactInfoArea />
      <ContactMap />
    </Layout>
  );
};

export default Contact;
