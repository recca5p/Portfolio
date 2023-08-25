import Link from 'next/link';
import { Logo } from '../components';
import { useRouter } from 'next/router';
const Header = () => {
  const router = useRouter();

  console.log(router.pathname);
  return (
    <div className="flex justify-between py-5 text-blueTheme-dark font-['SVN-SemiBold']">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-12">
        <Link
          href="/projects"
          className={`menu_style ${
            router.pathname === '/projects' && 'menu_style_active'
          }`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`menu_style ${
            router.pathname === '/about' && 'menu_style_active'
          }`}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
