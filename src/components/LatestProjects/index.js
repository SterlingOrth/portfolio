import React from "react";
import Card from "../Hero/UI/Card";
import SmallHeading from "../Hero/UI/SmallHeading";
import MediumHeading from "../Hero/UI/MediumHeading";
import Matrix from "../../assets/projects/Matrix.webp";
import Button from "../Hero/UI/Button";
import "./style.css";

function LatestProjects() {
  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <Card className="flexRow flexColumn align-center justify-sb">
        <div data-aos="fade-up-right" className="projectPortfolioContainer">
          <SmallHeading text="Portfolio" />
          <MediumHeading text="Latest Projects" />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            <Button label="Portfolios" />
          </div>
        </div>
        <div data-aos="fade-up-left" className="projectImgContainer">
          <img src={Matrix} alt="#" />
        </div>
      </Card>
    </div>
  );
}

export default LatestProjects;