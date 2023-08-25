import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
const SeeDetailButton = (props) => {
  return (
    <Link
      href={props.url}
      className="w-full sm:pr-[100px] flex justify-center sm:justify-end"
    >
      <div className="detail_btn">
        <span className="btn__circle"></span>
        <span className="btn__white-circle">
          <AiOutlineArrowRight />
        </span>
      </div>
    </Link>
  );
};

export default SeeDetailButton;
