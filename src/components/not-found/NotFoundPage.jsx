import React from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-center" style={{ padding: '60px 20px' }}>
    <Helmet>
      <title>Page Not Found - Saintfield Baptist Church</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <h1>404</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default NotFoundPage;
