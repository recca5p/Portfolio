import Link from 'next/link';

const LearnMoreButton = (props) => {
  return (
    <Link href={props.url} className="py-4 sm:py-0">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </button>
    </Link>
  );
};

export default LearnMoreButton;
