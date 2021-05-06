import Head from 'next/head'
import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Section from "../components/Section/Section";
import styles from './index.module.sass'

export default function Home() {
  const renderSections = () => {
    const sectionsList = [
      {
        isReverse: true,
        isGrey: false,
        title: 'Your try personality revealed',
        text: 'We use your writing and social media profiles to build you a detailed and accurate personality report.',
        buttonText: 'Get Free Analysis',
        imageContent: () => <Image src="/brain.svg" alt="brain" width={400} height={280} layout="fixed"/>,
        onButtonClick: () => {},
      },
      {
        isReverse: false,
        isGrey: true,
        title: 'What Your Words Say About You',
        text: 'Your writing is a sample of how you think. Studying the patterns we\'ve found in the way certain people of certain personalities use words, we can use your writing to determine using data, what kind of personality you have exactly.',
        buttonText: 'Find out more',
        onButtonClick: () => {},
      },
      {
        isReverse: false,
        isGrey: false,
        title: 'Data Driven and Scientific',
        text: 'Using data science and natural language processing, we\'re able to predict your personality based on the most popular personality model used in the psychology community, the Five Factor Personality model.',
        buttonText: 'Find out more',
        imageContent: () => <div className={styles.sectionImage} />,
        onButtonClick: () => {},
      },
      {
        isReverse: true,
        isGrey: true,
        title: 'Easy to Use',
        text: 'Faster than any other personality analysis out there. Just choose where you want us to analyze, your twitter, Facebook, or copy and paste your blog. We\'ll have it analyzed in seconds.',
        buttonText: 'Try it out',
        imageContent: () => <img src="/hand.svg" alt="hand" className={styles.sectionImage} />,
        onButtonClick: () => {},
      },
      {
        isReverse: false,
        isGrey: false,
        title: 'Detailed Personality Reports',
        text: 'Free reports include your personality profile, including your 5 major traits, values, and needs and text summary as well as a graph representation of who you are.',
        buttonText: 'Try it out',
        imageContent: () => <Image src="/hand.svg" alt="hand" width={400} height={280} layout="fixed"/>,
        onButtonClick: () => {},
      },
      {
        isReverse: false,
        isGrey: true,
        title: 'Discover who you are',
        buttonText: 'Get Free Analysis',
        onButtonClick: () => {},
      },
    ];

    return sectionsList.map(section => <Section {...section} />)
  };

  return (
    <Layout>
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {renderSections()}
        </main>
      </>
    </Layout>
  )
}
