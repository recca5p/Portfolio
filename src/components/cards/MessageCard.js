import { MessageForm } from "../index";
const MessageCard = () => {
  return (
    <div className="card_message_container w-[100%] lg:w-[70%] rounded-[30px] h-[100%] max-h-[600px] sm:h-[80%]">
      <MessageForm />
    </div>
  );
};

export default MessageCard;
