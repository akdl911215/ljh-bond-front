import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import investmentImage from '../../assets/img/investment.jpg'; // Path to your image
import financialKnowledgeImage from '../../assets/img/financialKnowledge.jpg'; // Path to your image
import youtubeImage from '../../assets/img/youtube.jpg'; // Path to your image
const InvestPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path:any) => {
    navigate(path);
  };

  return (
    <div className="container mt-4">
      <Row>
        <Col md={12} className="mb-4">
          <Card className="text-center">
            <Row noGutters>
              <Col md={6}>
                <Card.Img variant="top" src={investmentImage} alt='investment' />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Investment Information</Card.Title>
                  <Card.Text>
                    Discover the basics of investing and how to get started.
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleNavigate('/investment')}>더보기</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} className="mb-4">
          <Card className="text-center">
            <Row noGutters>
              <Col md={6}>
                <Card.Img variant="top" src={financialKnowledgeImage} alt='financial' />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Financial Knowledge</Card.Title>
                  <Card.Text>
                    Enhance your financial literacy with our comprehensive guides.
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleNavigate('/financial-knowledge')}>더보기</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} className="mb-4">
          <Card className="text-center">
            <Row noGutters>
              <Col md={6}>
                <Card.Img variant="top" src={youtubeImage} alt='youtube'/>
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>YouTube Connection</Card.Title>
                  <Card.Text>
                    Watch our curated financial advice videos on YouTube.
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleNavigate('/youtube')}>더보기</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InvestPage;