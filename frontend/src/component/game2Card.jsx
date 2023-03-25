import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './dragonflyicon.png'
import { useNavigate } from 'react-router-dom'
import React, { Component }  from 'react';
function game2Card() {
    const navigate = useNavigate();
    function onbuttonpress(){
      navigate('/game2')
    }
  return (
    <Card style={{ width: '18rem' }}bg="dark">
      <Card.Img variant="top" src={image}  />
      <Card.Body >
        <Card.Title>Test Your Skill</Card.Title>
        <Card.Text>
          In this flappy bird inspired game you take control of a dragon flying through the caverns.
        </Card.Text>
        <Button variant="primary" onClick={onbuttonpress}>Play DragonFly</Button>
      </Card.Body>
    </Card>
  );
}

export default game2Card;