import Slider from 'react-slick';

import ProjectCard from '../cards/ProjectCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectsCarousel = () => {
  let projects = require('../../data/projects.json');
  return (
    <Slider
      className="py-[80px] h-[700px]"
      {...{
        autoplay: true,
        speed: 500,
        dots: true,
        variableWidth: true,
      }}
    >
      {projects?.data?.map((item, i) => (
        <ProjectCard
          key={i}
          img={item.img}
          url={item.url}
          title={item.name}
          description={item.description}
          languages={item.languages}
        />
      ))}
    </Slider>
  );
};

export default ProjectsCarousel;
