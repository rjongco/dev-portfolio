import SocialLinks from '../Social/SocialLinks';
import { useDB } from '@/lib/hooks/use-db';

const Footer = () => {
  const data = useDB()
  const author = data.author
  return (
    <footer className="max-w-lg mx-auto mb-5 font-mono text-xs text-center">
      <SocialLinks className="flex justify-center gap-3 mb-3 md:hidden" />
      <a
        href={author.url}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-accent"
      >
        {`Design & Built by ${author.name}`}
      </a>
    </footer>
  );
};

export default Footer;
