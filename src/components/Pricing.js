import React from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa";
import { Button } from "./Button";
import { IoLogoJavasript } from "react-icons/io";
import { IconContext } from "react-icons/lib";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Core Languages</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaHtml5 />
                  </div>
                  <h3>Start</h3>
                  <h4>HTML</h4>
                  <p>{"<Hyper Text Markup Language>"}</p>
                  <ul className="pricing__container-features">
                    <li>100 Transactions</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 Limit</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaCss3 />
                  </div>
                  <h3>Start</h3>
                  <h4>CSS</h4>
                  <p>{"{Cascading Style Sheets}"}</p>
                  <ul className="pricing__container-features">
                    <li>1000 Transactions</li>
                    <li>3.5% Cash Back</li>
                    <li>$100,000 Limit</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaJsSquare />
                  </div>
                  <h3>Start</h3>
                  <h4>JavaScript</h4>
                  <p></p>
                  <ul className="pricing__container-features">
                    <li>Unlimited Transactions</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
