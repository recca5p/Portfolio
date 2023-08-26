import { MessageCard } from '../components';

const SendMessagesContainer = () => {
  return (
    <div className="w-full font-['SVN-Bold'] text-[20px] sm:text-[30px] py-[30px] h-[100vh] text-blueTheme-dark">
      <div className="py-5 sm:py-0">
        <span className="text-blueTheme">#</span>Send Messages
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <MessageCard />
      </div>
    </div>
  );
};

export default SendMessagesContainer;
