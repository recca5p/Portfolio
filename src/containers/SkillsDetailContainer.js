import { SkillCard } from '../components';
const SkillsDetailContainer = () => {
  return (
    <div className="w-full font-['SVN-Bold'] text-[20px] sm:text-[30px] py-[30px] lg:h-fit text-blueTheme-dark">
      <div className='font-["SVN-SemiBold"] text-blueTheme-dark'>Skills</div>
      <SkillCard />
    </div>
  );
};

export default SkillsDetailContainer;
