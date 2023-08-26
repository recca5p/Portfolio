import Image from 'next/image';
import ExportPDFContainer from './ExportPDFContainer';
const ProfileDetailContainer = () => {
  return (
    <>
      <div className="w-full h-[100vh] py-4 text-[15px] sm:text-[30px]">
        <div className='font-["SVN-SemiBold"] text-blueTheme-dark'>Details</div>
        <div className="flex flex-col lg:flex-row items-center h-full w-full justify-center">
          <Image
            className="w-[200px] sm:w-[400px]"
            src={'https://www.linkpicture.com/q/photo_2023-08-27_02-10-49.jpg'}
            width={200}
            height={200}
          />
          <div className='font-["SVN-LightItalic"] pt-[20px] lg:pt-0 w-[70%] text-[12px] sm:text-[20px] text-[white]'>
            <div className="indent-8 text-justify">
              I have a passion for new designs and technologies. I am willing to
              learn new techniques and show my ability to work under pressure to
              deliver on project targets.
            </div>
            <div className="indent-8 text-justify">
              Having experience in management gives me an overview of the
              project timeline and producing output become the most valuable.
            </div>
            <ExportPDFContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetailContainer;
