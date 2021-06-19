import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne || 'Web Developer, B-Boy (Break Dancer), Jiu Jitsu Practitioner.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'After teaching English in South Korea for 11 years, I have returned back home with a new set of goals to live my life to the fullest.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'As a Web Developer, I strive to deliver cutting edge features through aesthetic and intuitive user interfaces. The ideas of continual growth and improvement excite me, whether that means constantly learning or even solving problems in different ways.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I am always eager to tackle new challenges head on. There’s nothing more satisfying than shipping a meaningful product that will transform and elevate the user experience.'}
                </p>

                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
