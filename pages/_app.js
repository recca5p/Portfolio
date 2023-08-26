import '@/styles/globals.css';
import Image from 'next/image';
import background from '../src/assets/backgrounds/minhanh_background.svg';
import { PublicLayout } from '@/src/layouts';
import NextNProgress from 'nextjs-progressbar';
import { SnackbarProvider } from 'notistack';

export default function App({ Component, pageProps }) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <NextNProgress />
      <div className="relative">
        <Image
          className="z-[-1] fixed top-0 left-0 object-cover w-[100vw] h-[100vh]"
          src={background}
          alt="bg-image"
        />
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      </div>
    </SnackbarProvider>
  );
}

export const runtime = 'edge'; // 'nodejs' (default) | 'edge'
