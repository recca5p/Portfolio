import { TimeLineCard } from "../components";

const ExperienceDetailContainer = () => {
  let experiences = require("../data/experience.json")
  return (
    <div className="w-full font-['SVN-Bold'] text-[20px] sm:text-[30px] py-[30px] lg:h-fit text-[white]">
      <div className='font-["SVN-SemiBold"] text-blueTheme-dark pb-[60px]'>
        Experiences
      </div>
      <div className="flex flex-col gap-[40px]">
      {
        experiences?.data?.map( (item, i) => 
          <TimeLineCard key={i} data = {item} />
      )}
      </div>
    </div>
  );
};

export default ExperienceDetailContainer;
