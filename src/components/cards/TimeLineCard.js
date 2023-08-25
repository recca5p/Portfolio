import clsx from "clsx";

const TimeLineCard = (props) => {
  const { data } = props
  return (
    <div
      className={clsx(
        "w-full h-fit",
        "border-dashed border-[1px] border-blueTheme rounded-[20px]"
      )}
    >
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div className='font-["SVN-Bold"]'>{data.position}</div>
          <div className='font-["SVN-Italic"] text-[24px] whitespace-nowrap'>{data.timeline}</div>
        </div>
        <div className="flex justify-between w-full">
          <div className='w-full text-[24px] font-["SVN-SemiBold"] text-blueTheme'>
            {data.company}
          </div>
          <div className='font-["SVN-LightItalic"] text-[20px] w-[10%] flex justify-end whitespace-nowrap'>{data.location}</div>
        </div>
        <div className='w-full font-["SVN-Regular"] py-4 text-[15px] sm:text-[25px]'>
          {
            data?.description?.map((item, i) => 
            <p key={i}>&#x2022; {item}</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default TimeLineCard;
