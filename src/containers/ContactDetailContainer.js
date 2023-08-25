import { ContactMenu } from "../components";

const ContactDetailContainer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-fit items-center flex flex-col">
        <div className="font-['SVN-Bold'] text-[20px] text-[white] pt-[60px] pb-[30px] sm:text-[30px]">
          Contact me
        </div>
        <ContactMenu />
      </div>
    </div>
  );
};

export default ContactDetailContainer;
