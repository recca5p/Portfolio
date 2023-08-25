import clsx from "clsx";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const ExportButton = () => {
  return (
    <a
      className={clsx(
        "border-dashed border-[1px] border-blueTheme rounded-[10px]",
        "p-[10px] flex justify-center items-center cursor-pointer",
        "text-[16px] font-['SVN-Bold'] text-[white] sm:text-[25px]"
      )}
      href="/files/CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="pr-2">
        <BsFileEarmarkPdfFill />
      </span>
      Export CV
    </a>
  );
};

export default ExportButton;
