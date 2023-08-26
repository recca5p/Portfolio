import {
  ProfileDetailContainer,
  ExperienceDetailContainer,
  SkillsDetailContainer,
  ContactDetailContainer,
} from '@/src/containers';
import Head from 'next/head';
import image_intro from '../src/assets/backgrounds/introduce_pic.png';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>VTP | About</title>
        <meta
          name="description"
          content="Show more information about me!"
          key="desc"
        />
        <meta property="og:title" content="VTP-Portfolio's Website" />
        <meta
          property="og:description"
          content="Checkout VTP-Portfolio's Personal Website"
        />
        <meta property="og:description" content="Copyright by Eric Dang" />
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/introduce_pic_1.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileDetailContainer />
      <SkillsDetailContainer />
      <ExperienceDetailContainer />
      <ContactDetailContainer />
    </>
  );
};

export default AboutPage;
