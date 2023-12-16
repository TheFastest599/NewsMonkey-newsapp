import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-1" style={{ marginTop: '90px' }}>
          About Us
        </h1>
      </div>
      <div className="row">
        <p className="display-6">
          NewsMonkey is a news app that provides the latest news from all over
          the world. It is a progressive web app that is built using React.js
          and Bootstrap. It uses the News API to fetch the latest news from
          various news sources. It is a responsive web app that works on all
          devices.
        </p>
      </div>
    </div>
  );
}

export default About;
