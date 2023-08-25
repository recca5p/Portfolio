import { HiCode } from 'react-icons/hi';
import { ImDatabase } from 'react-icons/im';
import { SiReact } from 'react-icons/si';
import { RxDashboard } from 'react-icons/rx';
import Card from 'react-animated-3d-card';

const SkillCard = () => {
  let skills = require('../../data/skills.json');
  const iconsArray = [
    {
      component: <HiCode />,
    },
    {
      component: <ImDatabase />,
    },
    {
      component: <SiReact />,
    },
    {
      component: <RxDashboard />,
    },
  ];
  return (
    <>
      <div className="w-full flex sm:hidden flex-wrap justify-center h-[90%] items-center py-[60px] gap-6">
        {skills?.data?.map((skill, i) => (
          <div
            className=" rounded-[20px] border-dashed border-[1px] w-full h-[500px] border-blueTheme"
            key={skill.title}
          >
            <div className="py-3 text-[white] text-[24px] flex justify-center items-center gap-2">
              {iconsArray[i].component}
              <div className="font-['SVN-Regular']">{skill.title}</div>
            </div>
            {skill.items.map((item, idx) => (
              <div key={idx} className=" px-4 font-['SVN-Regular'] text-[20px]">
                &#x2022; {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full hidden sm:flex flex-wrap justify-center h-[90%] items-center py-[60px] gap-6">
        {skills?.data?.map((skill, i) => (
          <Card
            className="border-dashed border-[1px] border-blueTheme"
            shineStrength={0.05}
            key={skill.title}
            style={{
              width: '300px',
              height: '500px',
              background: 'transparent',
              border: 'dashed 1px #21E6C1',
              cursor: 'pointer',
            }}
          >
            <div className="py-3 text-[white] text-[24px] flex justify-center items-center gap-2">
              {iconsArray[i].component}
              <div className="font-['SVN-Regular']">{skill.title}</div>
            </div>
            {skill.items.map((item, idx) => (
              <div key={idx} className=" px-4 font-['SVN-Regular'] text-[20px]">
                &#x2022; {item}
              </div>
            ))}
          </Card>
        ))}
      </div>
    </>
  );
};

export default SkillCard;
