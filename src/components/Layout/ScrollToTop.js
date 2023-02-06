import useScroll from "@/hooks/useScroll";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const { scrollTop } = useScroll(100);

  return (
    <ScrollLink
      to="wrapper"
      smooth={true}
      duration={500}
      id="backToTop"
      className="go-top-area d-inline cursor-pointer"
    >
      <div className="go-top-wrap">
        <div className="go-top-btn-wrap">
          <div className={`go-top go-top-btn${scrollTop ? " active" : ""}`}>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
      </div>
    </ScrollLink>
  );
};

export default ScrollToTop;
