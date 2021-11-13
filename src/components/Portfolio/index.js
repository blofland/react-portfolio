import React from 'react'
import Image1 from '../../assets/images/test1.jpg';
import Image2 from '../../assets/images/test2.jpg';
import Image3 from '../../assets/images/test3.jpg';
import Image4 from '../../assets/images/test4.jpg';
import Image5 from '../../assets/images/test5.jpg';
import Image6 from '../../assets/images/test6.jpg';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Row, Col} from 'react-bootstrap/'






function Portfolio(props) {
    return <header>
<Row>
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image1}/>
  <Card.Body>
    <Card.Title>Project 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Github</Button>
  </Card.Body>
</Card></Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image2}/>
  <Card.Body>
    <Card.Title>Project 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Github</Button>
  </Card.Body>
</Card></Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image3}/>
  <Card.Body>
    <Card.Title>Project 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Github</Button>
  </Card.Body>
</Card></Col>
</Row>
<Row>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image4}/>
  <Card.Body>
    <Card.Title>Project 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Github</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image5}/>
  <Card.Body>
    <Card.Title>Project 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Github</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image6}/>
  <Card.Body>
    <Card.Title>Project 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Github</Button>
  </Card.Body>
</Card></Row>



    </header>
}



export default Portfolio;