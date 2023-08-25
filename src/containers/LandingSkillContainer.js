import {
  FaReact,
  FaAngular,
  FaDocker,
  FaJava,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import {
  TbBrandNextjs,
  TbBrandCSharp,
  TbSql,
  TbBrandMysql,
} from 'react-icons/tb';
import { DiMongodb, DiNodejsSmall, DiPython } from 'react-icons/di';
import { VscAzure } from 'react-icons/vsc';
import {
  SiRabbitmq,
  SiJira,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiCsharp,
} from 'react-icons/si';
import { SeeDetailButton } from '../components';
import clsx from 'clsx';
import { RiFlutterFill } from 'react-icons/ri';

const LandingSkillContainer = () => {
  const dataRow1 = [
    {
      title: 'React (Native)',
      logo: <FaReact />,
    },
    {
      title: 'NextJS',
      logo: <TbBrandNextjs />,
    },
    {
      title: 'Angular',
      logo: <FaAngular />,
    },
    {
      title: 'Flutter',
      logo: <RiFlutterFill />,
    },
  ];
  const dataRow2 = [
    {
      title: 'NodeJS',
      logo: <DiNodejsSmall />,
    },
    {
      title: 'Python',
      logo: <DiPython />,
    },
    {
      title: '.NET',
      logo: <SiCsharp />,
    },
    {
      title: 'Java',
      logo: <FaJava />,
    },
  ];
  const dataRow3 = [
    {
      title: 'Mongo',
      logo: <DiMongodb />,
    },
    {
      title: 'Mircosoft SQL',
      logo: <SiMicrosoftsqlserver />,
    },
    {
      title: 'PostgreSQL',
      logo: <SiPostgresql />,
    },
    {
      title: 'MySQL',
      logo: <TbBrandMysql />,
    },
  ];
  const dataRow4 = [
    {
      title: 'Git',
      logo: <FaGitAlt />,
    },
    {
      title: 'Azure',
      logo: <VscAzure />,
    },
    {
      title: 'Docker',
      logo: <FaDocker />,
    },
    {
      title: 'AWS',
      logo: <FaAws />,
    },
  ];
  return (
    <div className="w-full h-fit py-4 text-[20px] sm:text-[30px]">
      <div className="text-blueTheme-dark font-['SVN-Bold']">
        <span className="text-blueTheme-dark">#</span>Skills
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center font-['SVN-Regular'] py-[70px]">
        <div className="w-full flex flex-col sm:flex-row gap-4">
          {dataRow1.map((item, i) => (
            <div
              key={i}
              className={clsx(
                'w-full h-[200px] items-center justify-center flex flex-col cursor-pointer bg-blueTheme rounded-[10px]',
                "hover:font-['SVN-Bold'] hover:z-20",
              )}
            >
              <div className="text-[40px]" style={{ color: '#278EA5' }}>
                {item.logo}
              </div>
              <div className="text-[20px]">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="w-full hidden sm:flex flex-col sm:flex-row gap-4 pt-4">
          {dataRow2.map((item, i) => (
            <div
              key={i}
              className={clsx(
                'w-full h-[200px] items-center justify-center flex flex-col cursor-pointer bg-blueTheme rounded-[10px]',
                "hover:font-['SVN-Bold'] hover:z-20",
              )}
            >
              <div className="text-[40px]" style={{ color: '#278EA5' }}>
                {item.logo}
              </div>
              <div className="text-[20px]">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="w-full hidden sm:flex flex-col sm:flex-row gap-4 pt-4">
          {dataRow3.map((item, i) => (
            <div
              key={i}
              className={clsx(
                'w-full h-[200px] items-center justify-center flex flex-col cursor-pointer bg-blueTheme rounded-[10px]',
                "hover:font-['SVN-Bold'] hover:z-20",
              )}
            >
              <div className="text-[40px]" style={{ color: '#278EA5' }}>
                {item.logo}
              </div>
              <div className="text-[20px]">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="w-full hidden sm:flex flex-col sm:flex-row gap-4 pt-4">
          {dataRow4.map((item, i) => (
            <div
              key={i}
              className={clsx(
                'w-full h-[200px] items-center justify-center flex flex-col cursor-pointer bg-blueTheme rounded-[10px]',
                "hover:font-['SVN-Bold'] hover:z-20",
              )}
            >
              <div className="text-[40px]" style={{ color: '#278EA5' }}>
                {item.logo}
              </div>
              <div className="text-[20px]">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="pt-[80px] w-full">
          <SeeDetailButton url="/about" />
        </div>
      </div>
    </div>
  );
};

export default LandingSkillContainer;
