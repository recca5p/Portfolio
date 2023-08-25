import {
  LandingMainContainer,
  LandingSkillContainer,
  ProjectsMainContainer,
  SendMessagesContainer,
  ExperienceMainContainer,
} from '@/src/containers';
import Head from 'next/head';
import image_intro from '../src/assets/backgrounds/introduce_pic.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>VTP-Portfolio</title>
        <meta
          name="description"
          content="This personal website introduces all the works and information about Vo Tan Phat."
          key="desc"
        />
        <meta property="og:title" content="VTP-Portfolio's Website" />
        <meta
          property="og:description"
          content="Checkout VTP-Portfolio's Personal Website"
        />
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/introduce_pic_1.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:description" content="Copyright by Eric Dang" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingMainContainer />
      <LandingSkillContainer />
      <ProjectsMainContainer />
      <ExperienceMainContainer />
      {/* <SendMessagesContainer /> */}
    </>
  );
}
