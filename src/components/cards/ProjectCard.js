import Image from "next/image";
import clsx from "clsx";

const ProjectCard = (props) => {
  return (
    <div
      className={clsx(
        "w-[300px] h-[500px] lg:w-[600px] lg:h-[550px]",
        "border-2 border-blueTheme-dark rounded-[20px] text-blueTheme-dark mr-[50px]"
      )}
    >
      <div className="w-full h-full flex flex-col justify-between p-2">
        <div>
          <Image
            src={props.img}
            className="rounded-[20px] max-h-[300px]"
            alt="project_img"
            draggable="false"
            width={600}
            height={550}
          />
          <div className="text-[26px] p-3 font-['SVN-Bold']">{props.title}</div>
          <div className="text-[15px] px-3 font-['SVN-Regular']">
            {props.description}
          </div>
        </div>
        <div>
          <div className="w-full flex justify-between py-4">
            <div className="flex gap-3 w-fit">
              {props.languages?.map((item, i) => (
                <div
                  key={i}
                  className={clsx(
                    "border-dashed border-[1px] border-blueTheme rounded-[4px]",
                    "text-[15px] font-[SVN-Regular] px-2 text-blueTheme-dark h-fit"
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
                "border-dashed cursor-pointer border-[1px] border-blueTheme hover:bg-blueTheme rounded-[4px]",
                " text-blueTheme-dark mx-5 px-5 text-[22px] font-['SVN-Regular'] hover:font-['SVN-Bold']"
              )}
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
