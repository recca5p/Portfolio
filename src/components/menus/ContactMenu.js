import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiGitlab } from 'react-icons/fi';
import { LINKS } from '../../enums/urls';
const ContactMenu = () => {
  return (
    <>
      <ul className="flex list-none gap-5">
        <li>
          <a
            href={LINKS.LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="contact-menu-container"
          >
            <FaLinkedinIn className="contact-menu-icon" />
          </a>
        </li>
        <li>
          <a
            href={LINKS.GITHUB}
            target="_blank"
            rel="noreferrer"
            className="contact-menu-container"
          >
            <FiGithub className="contact-menu-icon hover:bold" />
          </a>
        </li>
        {/* <li>
          <a
            href={LINKS.GITLAB}
            target="_blank"
            rel="noreferrer"
            className="contact-menu-container"
          >
            <FiGitlab className="contact-menu-icon" />
          </a>
        </li> */}
      </ul>
    </>
  );
};

export default ContactMenu;
