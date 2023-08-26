const Footer = () => {
  return (
    <div className="w-full h-[30vh] flex justify-center items-end">
      <div className="text-blueTheme text-[8px] sm:text-[12px] py-4">
        © Copyright 2023{' '}
        <a className="text-blueTheme-dark" href="https://ericd.dev/">
          Eric Dang
        </a>
      </div>
    </div>
  );
};

export default Footer;
