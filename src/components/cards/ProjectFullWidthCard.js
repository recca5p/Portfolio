import clsx from 'clsx';
import Image from 'next/image';
const ProjectFullWidthCard = (props) => {
  return (
    <div
      className={clsx(
        'border-dashed border-[1px] border-blueTheme rounded-[20px]',
        'p-5',
      )}
    >
      <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row w-full">
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <div className='font-["SVN-Bold"] sm:text-[30px] text-[20px] text-blueTheme-dark'>
              {props.title}
            </div>
            <div className="font-['SVN-Regular'] sm:text-[20px] text-[12px'] text-blueTheme-dark py-4 pr-3">
              {props.description}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start pr-3">
            <div className="flex flex-col sm:flex-row gap-3 w-fit">
              {props.languages?.map((item, i) => (
                <div
                  key={i}
                  className={clsx(
                    'border-dashed border-[1px] border-blueTheme rounded-[4px]',
                    'text-[15px] font-[SVN-Regular] px-2 text-blueTheme-dark h-fit',
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                'bg-[#278EA5] hover:bg-[#1a515d] rounded-[4px]',
                "text-[white] px-5 text-[22px] font-['SVN-Regular'] h-fit",
              )}
            >
              Visit
            </a>
          </div>
        </div>
        <Image
          className="w-full lg:w-1/2 rounded-[20px] object-cover"
          src={props.img}
          draggable="false"
          width={500}
          height={500}
          alt="project_img"
        />
      </div>
    </div>
  );
};

export default ProjectFullWidthCard;
