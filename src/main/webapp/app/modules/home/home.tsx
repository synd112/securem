import './home.scss';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Col, Row, Button, Container, Card } from 'reactstrap';
import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <Container fluid className="px-md-5">
          <Row className="align-items-center">
            {/* Left content */}
            <Col md="7" className="hero-content">
              <div className="hero-text-wrapper">
                <span className="badge bg-primary">Premium Insurance</span>
                <h1 className="display-4 fw-bold mt-3">
                  <span className="text-primary">Drive</span> with Confidence
                </h1>
                <p className="lead mt-3">
                  Protect your vehicle and loved ones with <strong>Synd Tech Insurance</strong>
                </p>

                {account?.login ? (
                  <div className="welcome-box mt-4 p-3 border-start border-primary border-4 bg-light shadow-sm rounded">
                    <h4>
                      Welcome back, <span className="text-primary">{account.login}</span>
                    </h4>
                    <p className="mb-3">View your policy details or manage your account</p>
                    <div className="d-flex">
                      <Button color="primary" tag={Link} to="/account" className="me-3">
                        My Dashboard
                      </Button>
                      <Button color="light" tag={Link} to="/account/settings">
                        Settings
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="auth-actions">
                    <Alert color="info" className="mt-3">
                      <span>Already a customer?&nbsp;</span>
                      <Link to="/login" className="alert-link">
                        Sign in
                      </Link>
                    </Alert>

                    <Alert color="warning">
                      <span>Don&apos;t have an account yet?&nbsp;</span>
                      <Link to="/account/register" className="alert-link">
                        Get a free quote &amp; register
                      </Link>
                    </Alert>

                    <div className="cta-buttons mt-4">
                      <Button color="primary" size="lg" tag={Link} to="/account/register" className="me-3 pulse-button">
                        Get a Quote
                      </Button>
                      <Button color="outline-primary" size="lg" tag={Link} to="/contact">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Col>

            {/* Right image */}
            <Col md="5" className="image-col">
              <div className="image-wrapper position-relative">
                <div className="backdrop-circle position-absolute bg-light rounded-circle"></div>
                <img src="content/images/vehicle.png" alt="Vehicle Insurance" className="vehicle-img img-fluid" />
                {/* Subtle trust indicator below the image */}
                <div className="text-center mt-3">
                  <span className="text-muted small">
                    <span className="me-1" role="img" aria-label="star">
                      ⭐
                    </span>
                    Trusted by 99% of customers
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-4 bg-light mt-5">
        <Container>
          <Row className="text-center py-3">
            <Col md="4" className="mb-3 mb-md-0">
              <div className="stat-item">
                <div className="stat-icon fs-1 mb-2 text-primary">🛡️</div>
                <div className="stat-number fw-bold fs-2">15k+</div>
                <div className="stat-text text-muted">Protected Vehicles</div>
              </div>
            </Col>
            <Col md="4" className="mb-3 mb-md-0">
              <div className="stat-item">
                <div className="stat-icon fs-1 mb-2 text-primary">⚡</div>
                <div className="stat-number fw-bold fs-2">24h</div>
                <div className="stat-text text-muted">Fast Claim Processing</div>
              </div>
            </Col>
            <Col md="4">
              <div className="stat-item">
                <div className="stat-icon fs-1 mb-2 text-primary">⭐</div>
                <div className="stat-number fw-bold fs-2">4.9</div>
                <div className="stat-text text-muted">Customer Rating</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-4">Why Choose Synd Tech</h2>
          <div className="text-center mb-5">
            <div className="divider bg-primary mx-auto"></div>
          </div>

          <Row className="features mt-4 g-4">
            <Col md="4">
              <Card className="h-100 feature-card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon-wrapper mb-3 mx-auto">
                    <img src="content/images/shield.png" alt="Protection" width="60" />
                  </div>
                  <h4 className="card-title">Comprehensive Coverage</h4>
                  <p className="card-text text-muted">
                    Full protection against accidents, theft, and damages with customizable policy options.
                  </p>
                  <Link to="/services" className="text-decoration-none text-primary">
                    Learn more
                  </Link>
                </div>
              </Card>
            </Col>

            <Col md="4">
              <Card className="h-100 feature-card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon-wrapper mb-3 mx-auto">
                    <img src="content/images/fast.png" alt="Fast Claims" width="60" />
                  </div>
                  <h4 className="card-title">Quick Claim Settlement</h4>
                  <p className="card-text text-muted">
                    Hassle-free, transparent, and fast claims process with 24-hour settlement guarantee.
                  </p>
                  <Link to="/claims" className="text-decoration-none text-primary">
                    Learn more
                  </Link>
                </div>
              </Card>
            </Col>

            <Col md="4">
              <Card className="h-100 feature-card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon-wrapper mb-3 mx-auto">
                    <img src="content/images/support.png" alt="Support" width="60" />
                  </div>
                  <h4 className="card-title">24/7 Customer Support</h4>
                  <p className="card-text text-muted">
                    Our dedicated team is always available to assist you on the road whenever you need help.
                  </p>
                  <Link to="/support" className="text-decoration-none text-primary">
                    Learn more
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="text-center">
              <h2 className="mb-3">Ready to drive with confidence?</h2>
              <p className="lead mb-4">Get your personalized insurance quote in minutes and join thousands of satisfied drivers.</p>
              <Button color="light" size="lg" tag={Link} to="/account/register" className="px-5">
                Get Started Today
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
