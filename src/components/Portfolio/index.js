import React from 'react'
import Image1 from '../../assets/images/top5.jpg';
import Image2 from '../../assets/images/runbuddy.png';
import Image3 from '../../assets/images/weekender.png';
import Image4 from '../../assets/images/javaquiz.png';
import Image5 from '../../assets/images/dataverse.jpg';
import Image6 from '../../assets/images/test6.jpg';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col} from "react-bootstrap"

function Portfolio(props) {
    return <section>
      <h1  className="headish">Portfolio</h1>
      <p>Click on image to be taken to live page.</p>
     <div className="container1">
       <figure><a href="https://goat-meat.herokuapp.com/"><img src={Image1} className="pimage" fluid style={{maxWidth: "100%"}}/></a> <figcaption>Top 5 <a href="https://github.com/browneli003/Top-5">GitHub</a>  </figcaption></figure>
       <figure><a href="https://lernantino.github.io/run-buddy/"><img src={Image2} className="pimage" fluid style={{maxWidth: "100%"}}/></a> <figcaption>RunBuddy <a href="https://github.com/blofland/run-buddy">Github</a></figcaption></figure>
      </div>

      <div className="container1">
       <figure><a href="https://sdillon215.github.io/Weekender/"><img src={Image3} className="pimage" fluid style={{maxWidth: "100%"}}/></a> <figcaption>Weekender <a href ="https://github.com/blofland/Weekender">GitHub</a></figcaption></figure>
       <figure><a href="https://blofland.github.io/code-quiz/"><img src={Image4} className="pimage" fluid style={{maxWidth: "100%"}}/></a> <figcaption>JavaQuiz <a href ="https://github.com/blofland/code-quiz">GitHub</a>   </figcaption></figure>
      </div>

      <div className="container1">
       <figure><a href="https://gentle-temple-58806.herokuapp.com/"><img src={Image5} className="pimage" fluid style={{maxWidth: "100%"}}/></a> <figcaption>Dataverse <a href ="https://github.com/Zunaty/dataverse">Github</a></figcaption></figure>
       <figure><a href="www.github.com"><img src={Image6} className="pimage" fluid style={{maxWidth: "100%"}}/></a> <figcaption>Testing</figcaption></figure>
      </div>
      

  
</section>
}



export default Portfolio;



