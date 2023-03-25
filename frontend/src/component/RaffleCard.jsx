import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './rafflepic.png'
import { useNavigate } from 'react-router-dom'
import React, { Component }  from 'react';




function raffleCard() {
  const navigate = useNavigate();
function onbuttonpress(){
  
}
  return (
    <Card style={{ width: '18rem' }}bg="dark">
      <Card.Img variant="top" src={image}  />
      <Card.Body >
        <Card.Title>Cast Your Vote </Card.Title>
        <Card.Text>
         cast your vote on future game catgeroys 
        </Card.Text>
        <Button variant="primary" onClick={onbuttonpress} >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default raffleCard;