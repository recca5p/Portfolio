import { ProjectFullWidthCard } from '@/src/components';
import Head from 'next/head';
import image_intro from '../src/assets/backgrounds/introduce_pic.png';

const ProjectsPage = () => {
  let projects = require('../src/data/projects.json');
  return (
    <>
      <Head>
        <title>VTP-Portfolio | Projects</title>
        <meta
          name="description"
          content="All the projects was displayed in this website"
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
      <div className="w-full py-[60px] h-fit flex flex-col items-center gap-10">
        {projects?.data?.map((item, i) => (
          <ProjectFullWidthCard
            key={i}
            img={item.img}
            title={item.name}
            url={item.url}
            description={item.description}
            languages={item.languages}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
