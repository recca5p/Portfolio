import { ProjectsCarousel, SeeDetailButton } from '../components';

const ProjectsMainContainer = () => {
  return (
    <div className="w-full font-['SVN-Bold'] text-[20px] sm:text-[30px] py-[30px] h-fit text-blueTheme-dark">
      <div>
        <span className="text-blueTheme-dark">#</span>Projects
      </div>
      <ProjectsCarousel />
      <SeeDetailButton url="/projects" />
    </div>
  );
};

export default ProjectsMainContainer;
