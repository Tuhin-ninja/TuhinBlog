// pages/about.jsx

import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <div className="p-5 max-w-2xl mx-auto font-sans">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company and team." />
      </Head>
      <h1 className="text-3xl text-gray-800">About Us</h1>
      <p className="mt-4">
        Welcome to our website! We are dedicated to providing the best service possible.
        Our team is made up of experienced professionals who are passionate about what they do.
      </p>
      <h2 className="text-2xl text-gray-600 mt-6">Our Mission</h2>
      <p className="mt-2">
        Our mission is to deliver high-quality products and services that exceed our customers' expectations.
      </p>
      <h2 className="text-2xl text-gray-600 mt-6">Our Team</h2>
      <p className="mt-2">
        We have a diverse team with a wide range of skills and backgrounds. Together, we work hard to achieve our goals.
      </p>
    </div>
  );
};

export default About;
