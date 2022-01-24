import React from "react";
import Card from "../Components/shared/Card";
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Us</h1>
        <p>this is a React App to leave feedback for a product or service </p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
