import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


export default function Headlines() {
    const title="Top Headlines From India";

    const [news, setNews] = useState([]);

    useEffect(() => {
      fetchNews();
    }, []);
  
    async function fetchNews() {
      let result = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ef63a4bfd3864b15adac06ceaf6710cb",
        {
          method: "GET",
  
        }
      );
      result = await result.json();
      console.log("message", result);
      if (result) {
        setNews(result.articles);
      }
    }
  return (
    <div>
      <marquee behavior="scroll" direction="left" loop="3">
        <h1 className='text-danger mt-5'>{title} &nbsp;&nbsp; {title} &nbsp;&nbsp;  {title}  </h1>
        </marquee>

        <Container >
        <Row>
          {news.map((article) => (
            <Col  md={4} className="mb-4 mt-5">
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={article.urlToImage} alt="News Image" style={{ maxHeight: '10rem', objectFit: 'cover' }} />
                <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                  </div>
                  <Button variant="primary" href={article.url} target="_blank">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
