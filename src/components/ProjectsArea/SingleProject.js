import React from "react";
import {Image} from "react-bootstrap";
import Link from "../Reuseable/Link";

const SingleProject = ({project = {}}) => {
    const {image, category, date, title, localization} = project;

    return (
        <div className="explore-projects-item mt-30">
            <div className="explore-projects-thumb">
                <Image src={image.src} alt="explore-projects"/>
            </div>
            <div className="explore-projects-content">
                <div className="item d-flex align-items-center">
                    <span>{category}</span>
                    <p>
                        <i className="fa fa-clock-o"></i> {date}
                    </p>
                </div>
                <Link href="/single-project">
                    <h3 className="title">{title}</h3>
                </Link>
                <div>
                    <span>{localization}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
