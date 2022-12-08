import { Container, Row, Col } from "react-bootstrap";
import classes from "./hero.module.css";
import Button from "../ui/button";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={classes.section}>
      <Container fluid className={classes.container}>
        <Row className="section-center">
          <Col md={6}>
            <div>
              <h1 className={classes.mainHeader}>EVERSTAR GLOBAL</h1>
              <h2 className={classes.subHeader}>Our mission</h2>
              <p className={classes.description}>
                To combine unique and critical ideas from Korea with Vietnam’s
                talented members.
              </p>
              <div>
                <Button>Learn more</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.imgContainer}>
              <img
                src="/images/home/hero/hero-des.png"
                alt="Hero Description"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
