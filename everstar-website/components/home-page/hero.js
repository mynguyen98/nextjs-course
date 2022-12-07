import { Container, Row, Col } from 'react-bootstrap'
import classes from './hero.module.css'
import Button from '../ui/button'
import Image from 'next/image'
export default function Hero() {
  return (
    <section className={classes.section}>
      <Container fluid>
        <Row className='section-center'>
          <Col md={6}>
            <div>
              <h1>EVERSTAR GLOBAL</h1>
              <h2>Our mission</h2>
              <p>
                To combine unique and critical ideas from Korea with Vietnam’s
                talented members.
              </p>
              <div>
                <Button>Learn more</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Image
              src='/images/home/hero/hero-des.png'
              alt='Hero Description'
              width={569}
              height={524}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
