import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import { IconButton } from '@mui/material';
import { FaUser, FaPaperPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const MessageForm = () => {
  const key = '6035590951:AAGR5OFQ-VjZp1wTSO-2I93iMWEzkLI7xyw';
  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });
  const { enqueueSnackbar } = useSnackbar();

  const onClickSubmit = (data) => {
    axios
      .post(
        `https://api.telegram.org/bot${key}/sendMessage`,
        {},
        {
          params: {
            chat_id: '1021528611',
            text: `name: ${data.fullname}\nemail: ${data.email}\nmessage: ${data.message}`,
          },
        },
      )
      .then((response) => {
        reset();
        enqueueSnackbar('Sent Successfully!', { variant: 'success' });
        return console.log(response);
      })
      .catch((error) => {
        return console.log(error);
      });
  };
  return (
    <form
      className="w-full h-full"
      method="POST"
      onSubmit={handleSubmit(onClickSubmit)}
    >
      <div className="flex flex-col sm:flex-row justify-between px-10 pt-6">
        <div className="flex w-[100%] sm:w-[45%] justify-center items-center gap-3">
          <FaUser className="text-blueTheme" />
          <input
            className="input_message"
            placeholder="Full name"
            {...register('fullname', {
              required: 'Please enter your full name',
            })}
          />
        </div>
        <div className="flex w-[100%] sm:w-[45%] justify-center pt-5 sm:pt-0 items-center gap-3">
          <MdEmail className="text-blueTheme" />
          <input
            className="input_message"
            placeholder="email"
            {...register('email', { required: 'Please enter your email' })}
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-[90%] px-10 py-5 sm:py-10">
        <textarea
          className="w-full textarea_message pl-3 mb-8"
          placeholder="Message"
          {...register('message')}
        ></textarea>
        <IconButton
          sx={{
            color: '#278EA5',
            borderRadius: '50%',
          }}
          size="large"
          type="submit"
        >
          <FaPaperPlane />
        </IconButton>
      </div>
    </form>
  );
};

export default MessageForm;
