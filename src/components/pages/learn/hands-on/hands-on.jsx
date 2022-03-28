import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import svgIllustration1 from './images/illustration1.svg';
import svgIllustration2 from './images/illustration2.svg';
import svgIllustration3 from './images/illustration3.svg';

const title = 'Get Hands-On With Cilium';

const HandsOn = () => {
  const { imageIllustration1, imageIllustration2 } = useStaticQuery(graphql`
    query {
      imageIllustration1: file(relativePath: { eq: "pages/learn/hands-on/thomasgraf.png" }) {
        childImageSharp {
          gatsbyImageData(width: 92, quality: 95)
        }
      }
      imageIllustration2: file(
        relativePath: { eq: "pages/learn/hands-on/thomasgraf-lizrice.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 172, quality: 95)
        }
      }
    }
  `);
  const items = [
    {
      imageData: {
        width: 384,
        height: 224,
        imageSrc: svgIllustration1,
        gatsbyImage: imageIllustration1,
        gatsbyImageWidth: 92,
        gatsbyImageHeight: 92,
        gatsbyImageX: 146,
        gatsbyImageY: 66,
      },
      name: 'Weekly Interactive Cilium Introduction and Live Q&A',
      text: 'With Thomas Graf, Cilium Co-Creator',
      buttons: [
        {
          url: 'https://calendly.com/cilium-events/cilium-introduction',
          title: 'Book your seat',
          isPopup: true,
          theme: 'primary-1',
        },
      ],
    },
    {
      imageData: {
        width: 384,
        height: 224,
        imageSrc: svgIllustration2,
        gatsbyImage: imageIllustration2,
        gatsbyImageWidth: 172,
        gatsbyImageHeight: 92,
        gatsbyImageX: 106,
        gatsbyImageY: 66,
      },
      name: 'Monthly Community InstallFest',
      text: 'Join us at our monthly InstallFest and learn how to setup and get started with Cilium.',
      buttons: [
        {
          url: 'https://calendly.com/cilium-events/cilim-installfest-emea',
          title: 'Join Europe',
          isPopup: true,
          theme: 'outline-gray-dark',
        },
        {
          url: 'https://calendly.com/cilium-events/cilium-installfest-na',
          title: 'Join Americas',
          isPopup: true,
          theme: 'outline-gray-dark',
        },
      ],
    },
    {
      svgData: {
        width: 592,
        height: 256,
        imageSrc: svgIllustration3,
      },
      name: 'Documentation & Tutorials',
      text: 'Quickly get started with Cilium. Read the documentation or use our interactive tutorial in a live environment.',
      buttons: [
        {
          url: 'https://docs.cilium.io/en/stable/',
          title: 'Documentation',
          target: '_blank',
          theme: 'outline-gray-dark',
        },
        {
          url: 'https://play.instruqt.com/isovalent',
          title: 'Tutorials',
          target: '_blank',
          theme: 'outline-gray-dark',
        },
      ],
    },
  ];

  return (
    <section className="mt-10 md:mt-20 lg:mt-32">
      <Container>
        <Heading className="text-center" tag="h2">
          {title}
        </Heading>
        <div className="grid grid-cols-1 gap-4 mt-6 md:gap-6 xl:gap-8 md:mt-10 lg:grid-cols-3 lg:mt-14">
          {items.map((item, index) => (
            <CardItem size="sm" {...item} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HandsOn;
