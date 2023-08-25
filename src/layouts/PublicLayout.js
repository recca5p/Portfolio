import Footer from './Footer';
import Header from './Header';

const PublicLayout = (props) => {
  return (
    <div className="w-full h-full flex justify-center blur-effect">
      <div className="px-[30px] w-full sm:px-[100px] max-w-[2000px] h-fit">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};
export default PublicLayout;
