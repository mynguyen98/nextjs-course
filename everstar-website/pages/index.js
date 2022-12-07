import { Container, Row, Col } from 'react-bootstrap'

export default function CompanyPage() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <p>Yay, it's fluid!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Yay, it's fluid!</p>
          </Col>
          <Col>
            <p>Yay, it's fluid!</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
