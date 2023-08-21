import React from "react";
import Card from "../Components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Us</h1>
        <p>This is a React App to leave feedback for a Product or Service </p>
        <p>Version: 1.0.0</p>

        <button className="btn btn-primary btn:hover">
          <Link className="link" to="/">Back To Home</Link>
        </button>
      </div>
    </Card>
  );
}

export default AboutPage;
