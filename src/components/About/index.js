import React from 'react';
import coverImage from "../../../src/assets/images/faceshot.jpg"

function About() {
  return (
    <section>
      <h1 id="about">About</h1>
      <img src={coverImage} className="my-2" style={{ width: 400,
      height: 510 }} alt="cover" />
    </section>
  );
}

export default About;