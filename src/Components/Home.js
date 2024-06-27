import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './Cards';
import AppleImage from "../Images/applee.jpeg";
import teslaImage from "../Images/tesla.jpg";
import techCrunchImage from "../Images/techcrunch.jpeg";
import News from './News';
import Headlines from './Headlines';
import { Link } from 'react-router-dom';


export default function Home(props) {
  return (
    <>
      <News />
      <Container>
        <Row>
          <Col lg={4}>
            <Link to="/apple" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Cards
                title="Apple News"
                description="Stay updated with the latest news and updates from Apple."
                imageUrl={AppleImage}
                Readnews="Read More"
              />
            </Link>
          </Col>

          <Col lg={4}>
            <Link to="/tesla" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Cards
                title="Tesla News"
                description="Explore the latest developments and news from Tesla."
                imageUrl={teslaImage}
                Readnews="Read More"
              />
            </Link>
          </Col>

          <Col lg={4}>
            <Link to="/techcrunch" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Cards style={{color:"inherit"}}
                title="Tech Crunch News"
                description="Discover the latest articles and updates from Tech Crunch."
                imageUrl={techCrunchImage}
                Readnews="Read More"
              />
            </Link>
          </Col>
        </Row>
        <Headlines />
      </Container>
    </>
  );
}
