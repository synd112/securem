import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Col, Row, Button } from 'reactstrap';
import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <div className="home-page">
      <Row className="align-items-center">
        {/* Left content */}
        <Col md="7" className="text-section">
          <h1 className="display-4 text-primary fw-bold">Drive with Confidence</h1>
          <p className="lead">
            Protect your vehicle and your loved ones with <strong>Synd Tech Insurance</strong>
          </p>

          {account?.login ? (
            <Alert color="success">
              You are logged in as <strong>{account.login}</strong>.
            </Alert>
          ) : (
            <div>
              <Alert color="info">
                <span>Already a customer?&nbsp;</span>
                <Link to="/login" className="alert-link">
                  Sign in
                </Link>
              </Alert>

              <Alert color="warning">
                Don&apos;t have an account yet?&nbsp;
                <Link to="/account/register" className="alert-link">
                  Get a free quote &amp; register
                </Link>
              </Alert>
            </div>
          )}

          <div className="cta-buttons mt-4">
            <Button color="primary" size="lg" tag={Link} to="/account/register" className="me-3">
              Get a Quote
            </Button>
            <Button color="outline-primary" size="lg" tag={Link} to="/contact">
              Contact Us
            </Button>
          </div>
        </Col>

        {/* Right image */}
        <Col md="5" className="image-col">
          <img src="content/images/vehicle.png" alt="Vehicle Insurance" className="vehicle-img" />
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="features mt-5">
        <Col md="4" className="text-center">
          <img src="content/images/shield.png" alt="Protection" width="60" />
          <h4 className="mt-3">Comprehensive Coverage</h4>
          <p>Full protection against accidents, theft, and damages.</p>
        </Col>
        <Col md="4" className="text-center">
          <img src="content/images/fast.png" alt="Fast Claims" width="60" />
          <h4 className="mt-3">Quick Claim Settlement</h4>
          <p>Hassle-free, transparent, and fast claims process.</p>
        </Col>
        <Col md="4" className="text-center">
          <img src="content/images/support.png" alt="Support" width="60" />
          <h4 className="mt-3">24/7 Customer Support</h4>
          <p>Always here to assist you on the road</p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
