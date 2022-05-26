import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SimpleReactLightBox, { SRLWrapper } from 'simple-react-lightbox';

const AboutPage = ({ data }: any) => {
    const spaceBetween = "pb-5";
    console.log(data)
    data.allFile.nodes.sort((a: any, b: any) => a.base.split('.')[0] - b.base.split('.')[0]);
    return (
        <Layout pageTitle="Daju" current="Daju">
            <p className={spaceBetween}>
                Daju was a wildcat before my family adopted her, and we started calling her Daju
                (which simply means ``big orange cat'' in Chinese)  when we first met her.
                Daju is a quiet cat and she loves being patted. She likes to rest at places where she can see us,
                and sometimes she would jump on our lap to sleep.
            </p>
            <p className={spaceBetween}>
                Since Daju had been a wildcat and our apartment is on the first floor and has a yard, we don't stop her from going out.
                During the day Daju often goes out for a walk or hunting - she has brought home a lot of prey for us: live mice, gechos, birds, frogs, and so on...
                We feel the love from her, though sometimes these little animals really cause headaches for us.
            </p>
            <p className={spaceBetween}>
                I will share photos of Daju aperiodically ; )
            </p>
            <SimpleReactLightBox>
                <SRLWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-4 py-6">{
                        data.allFile.nodes.map((node: any) => (
                            <p key={node.id} className="m-4">
                                <a href={node.publicURL}>
                                    <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base}
                                        className="rounded-lg active:brightness-50 hover:shadow-3xl"
                                        imgStyle={{ borderRadius: '0.5rem' }}
                                    />
                                </a>
                            </p>
                        ))
                    }
                    </div>
                </SRLWrapper>
            </SimpleReactLightBox>

        </Layout>
    )
}

export default AboutPage;

export const query = graphql`query {
allFile(
    filter: {sourceInstanceName: {eq: "daju"}}
  ) {
    nodes {
      id
      base
      publicURL
      childImageSharp {
        gatsbyImageData(
          height: 600
          width: 960
          transformOptions: {fit: COVER}
          placeholder: BLURRED
          webpOptions: {quality: 50}
        )
      }
    }
  }
}`;
