import React from 'react'
import Image1 from '../../assets/images/top5.jpg';
import Image2 from '../../assets/images/runbuddy.png';
import Image3 from '../../assets/images/weekender.png';
import Image4 from '../../assets/images/javaquiz.png';
import Image5 from '../../assets/images/test5.jpg';
import Image6 from '../../assets/images/test6.jpg';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col} from "react-bootstrap"

function Portfolio(props) {
    return <section>
     <div className="container1">
       <figure><a href="https://goat-meat.herokuapp.com/"><img src={Image1} label="Runbuddy" fluid style={{maxWidth: "100%"}}/></a> <figcaption>Top 5 <a href="https://github.com/browneli003/Top-5"></a>https://github.com/browneli003/Top-5  </figcaption></figure>
       <figure><a href="https://lernantino.github.io/run-buddy/"><img src={Image2} label="Runbuddy" fluid style={{maxWidth: "100%"}}/></a> <figcaption>RunBuddy https://github.com/blofland/run-buddy </figcaption></figure>
      </div>

      <div className="container1">
       <figure><a href="https://sdillon215.github.io/Weekender/"><img src={Image3} label="Runbuddy" fluid style={{maxWidth: "100%"}}/></a> <figcaption>Weekender https://github.com/blofland/Weekender</figcaption></figure>
       <figure><a href="https://blofland.github.io/code-quiz/"><img src={Image4} label="Runbuddy" fluid style={{maxWidth: "100%"}}/></a> <figcaption>JavaQuiz https://github.com/blofland/code-quiz   </figcaption></figure>
      </div>

      <div className="container1">
       <figure><a href="www.github.com"><img src={Image5} label="Runbuddy" fluid style={{maxWidth: "100%"}}/></a> <figcaption>Testing</figcaption></figure>
       <figure><a href="www.github.com"><img src={Image6} label="Runbuddy" fluid style={{maxWidth: "100%"}}/></a> <figcaption>Testing</figcaption></figure>
      </div>
      

  
</section>
}



export default Portfolio;



