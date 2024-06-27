import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards(props) {
  return (
    <div className='mx-3 mt-5'>
      <Card style={{ width: '18rem', maxHeight: '20rem' }}>
        <Card.Img variant="top" src={props.imageUrl} style={{ maxHeight: '10rem', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">{props.Readnews}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
