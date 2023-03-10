import footerData from "@/data/siteFooter";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import FooterList from "./FooterList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

const { bg, logo, text, author, year, links, socials, text2, shape } =
  footerData;

const SiteFooter = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <footer
      className="footer-area "
      style={{ backgroundColor: `#131f45` }}
    >
      <Container>
        <Row>
          <Col lg={6} md={8} sm={10}>
            <div className="footer-about mt-30">
              <Link href="/">
                <Image src={logo.src} alt="" />
              </Link>
              <p>{text}</p>
              <ul>
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <a href={href}>
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <FooterList title="Liens utiles" list={links.slice(0, 5)} />
          <Col lg={4} md={6} sm={8}>
            <div className="footer-newsletter mt-30">
              <div className="footer-title">
                <h4 className="title">Newsletter</h4>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                  <button>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </button>
                </div>
              </form>
              <p>{text2}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="footer-copyright text-center">
              <p>
                ?? Copyright {year} by {author}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default SiteFooter;
