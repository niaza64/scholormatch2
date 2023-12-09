import React from 'react';
import Head from 'next/head';
import {NavBar} from "components/NavBar";
 

// import HeroSection from '../components/HeroSection';
// import FeatureSection from '../components/FeatureSection';
// import TestimonialSection from '../components/TestimonialSection';
// import Footer from '../components/Footer';
// import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <>
      <Head>
        <title>ScholarMatch - Connect Scholars and Students</title>
        <meta name="description" content="ScholarMatch - Find and post academic research opportunities." />
      </Head>
      <NavBar />
      <h1>This is scholarship</h1>
    </>
  );
}