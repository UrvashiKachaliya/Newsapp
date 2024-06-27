import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tesla from './Tesla';
import News from './News';

export default function Apple() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    let result = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-05-27&sortBy=publishedAt&apiKey=ef63a4bfd3864b15adac06ceaf6710cb",
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
    <>
    <News/>
  
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
    </>
  );
}
