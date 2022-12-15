import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./DataSection.css";

export default function DataSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__data-section" : "home__data-section darkBg"}
      >
        <div className="container">
          <div className="row home__data-row">
            <div className="col">
              <div className="home__data-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__data-subtitle"
                      : "home__data-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/sign-up">
                  <Button  buttonSize='btn--wide' buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
                <div className="home__data-img-wrapper">
                    <img src={img} alt={alt} className="home__data-img" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
