import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>GETFLIX</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search"> or Browse All</Link>
  </div>
);

export default Landing;
