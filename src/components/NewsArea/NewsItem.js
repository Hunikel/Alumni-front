import React from "react";
import { Col, Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const NewsItem = ({ news = {}, index = 0, newsTwo = false }) => {
  const { image, date, admin, title, image2 } = news;
  const newImage = newsTwo && image2 ? image2 : image;
  const isEven = (index + 1) % 2 === 0;

  return (
    <Col lg={newsTwo ? 4 : 3} md={newsTwo ? 7 : 6}>
      <div
        className={`news-item mt-30${
          !newsTwo && isEven ? " d-flex flex-column flex-md-column-reverse" : ""
        }`}
      >
        <div className="news-thumb">
          <Image
            src={newImage.src}
            alt="news"
          />
        </div>
        <div className="news-content">
          <span>{date}</span>
          <h3 className="title">{title}</h3>
          <Link href="/single-news">
            <i className="flaticon-next"></i>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default NewsItem;
