import Image from 'next/image';
import { ContactMenu, LearnMoreButton } from '../components';
const LandingMainContainer = () => {
  return (
    <div className="w-full h-fit lg:h-[calc(100vh-74px)] flex flex-col lg:flex-row">
      <div className='font-["SVN-Bold"] flex flex-col text-[40px] sm:text-[60px] text-[white]  w-[100%] lg:w-[45%]'>
        <div className="w-full">
          <div className="text-blueTheme">Welcome,</div>
          <div className="text-blueTheme">
            I&apos;m <span className="text-blueTheme-dark">Tan Phat Vo</span>
          </div>
          <div className='font-["SVN-Regular"] text-[15px] sm:text-[30px] text-blueTheme'>
            a
            <span className='font-["SVN-SemiBold"] text-blueTheme-dark'>
              {' '}
              Fullstack Developer
            </span>
          </div>
          <LearnMoreButton url="/about" />
        </div>
        <div className="w-full h-full flex items-center">
          <div className="flex items-center w-full gap-5">
            <div className="border-dashed border-t-[1px] w-[10%] border-blueTheme"></div>
            <ContactMenu />
            <div className="border-dashed border-t-[1px] w-full border-blueTheme"></div>
          </div>
        </div>
      </div>
      <div className="w-[100%] lg:w-[55%] my-[200px] lg:my-[0px] h-full flex justify-center items-center">
        <div className="w-[65%] md:w-[50%] relative">
          <div className="liquid-shape"></div>
          <Image
            src={'https://www.linkpicture.com/q/hoodieMan.png'}
            className="min-w-[200px] sm:min-w-[400px]"
            alt="hoodieMan"
            width={400}
            height={400}
          />
          <div className="liquid-shape2"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingMainContainer;
