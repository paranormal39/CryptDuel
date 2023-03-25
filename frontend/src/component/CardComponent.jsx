import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../component/TGD.png'
import { useNavigate } from 'react-router-dom'
import React, { Component }  from 'react';




function CardComponent() {
  const navigate = useNavigate();
function onbuttonpress(){
  navigate('/game1')
}
  return (
    <Card style={{ width: '18rem' }}bg="dark">
      <Card.Img variant="top" src={image}  />
      <Card.Body >
        <Card.Title>Looking For Developers</Card.Title>
        <Card.Text>
          want to earn some GXG with your wizard skills come and contribute to the Open Source Project 
        </Card.Text>
        <Button variant="primary" onClick={onbuttonpress} >Git Link</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;