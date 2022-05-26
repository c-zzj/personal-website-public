import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { selfie } from './index.module.css';

const IndexPage = () => {
  const spaceBetween = "pb-5";
  return (
    <Layout pageTitle="Zijun Zhao" current="Home">
      <StaticImage className="flex float-right h-36 w-36 md:h-72 md:w-72 rounded-full ml-3 mb-3"
        alt="a photo of myself along with my cat Daju" src="../images/selfie2.jpg" />
      <div className="text-lg container max-w-lg">
        <p className={spaceBetween}>
          <span className="tracking-widest text-7xl font-bold text-slate-900 mr-3 float-left">Hi</span>
          there! I'm Zijun Zhao, an incoming fourth year undergraduate in the Honours Mathematics and Computer Science program at McGill University.
        </p>
        <p className={spaceBetween}>
          In my first two years I studied a variety of courses under the Cognitive Science program. Thanks to Anush Tserunyan's
          excellent introductory course on&nbsp;
          <Link to="https://www.mcgill.ca/study/2020-2021/courses/math-318" target="_blank"
            className="text-cyan-700 hover:text-cyan-900">
            mathematical logic
          </Link>,
          I started to appreciate the beauty of math and decided to switch to math and comp sci for a more specialized route.
        </p>
        <p className={spaceBetween}>
          My current interests include machine learning, computer vision, compilers, computer systems, and web development.
          Right now I work at Citigroup Inc. as a software development intern.
        </p>
        <p className={spaceBetween}>
          You might have noticed the orange cat in the photo on the right. Her name is Daju, and you can check out the Daju tab for more about her.
        </p>
      </div>
    </Layout>
  )
};

export default IndexPage;
