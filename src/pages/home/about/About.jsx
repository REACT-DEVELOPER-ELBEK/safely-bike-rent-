import React from "react";
import "../../normalize/Normalize.scss";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__wrapper">
          <h2>Why safely?</h2>
          <div className="about__cards">
            <div className="about__card">
              <p>
                At safely, we prioritize your safety above all else. Our
                women-only cab booking service is designed to provide you with a
                secure and comfortable travel experience.
              </p>
            </div>
            <div className="about__card">
              <p>
                Experience the ultimate convenience with safely. All our drivers
                undergo strict background checks. We offer a range of services
                tailored to meet the diverse needs of modern women on the move.
              </p>
            </div>
            <div className="about__card">
              <p>
                At safely, we are committed to providing exceptional customer
                support. Our dedicated team is available round-the-clock to
                assist you with any queries or concerns you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
