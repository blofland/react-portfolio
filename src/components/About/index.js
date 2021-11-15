import React from 'react';
import coverImage from "../../../src/assets/images/faceshot.jpg"


function About() {
  return (
   
    <section>
      <h1 id="about" className="headish column">About</h1>
      <div className="row">
      <img src={coverImage} className="my-2 column" style={{ width: 400,
      height: 510 }} alt="cover" />
      <p>Currently located in Utah. Been working as a nurse for the last 5 years and decided I wanted
      to try something new. <br/> Computers have always been interesting to me and the freedom of the tech <br/> industry also
      sounded extremely nice to me. Taking the coding bootcamp through University of Utah.</p></div>
    </section>
  );
}

export default About;