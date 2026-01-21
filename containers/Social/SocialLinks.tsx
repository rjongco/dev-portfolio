
import { SocialIcon } from '@/components';
import { useDB } from '@/lib/hooks/use-db';
import { SocialSectionType } from '@/lib/types/sections';

const SocialLinks = ({ className = '' }: { className?: string }) => {
  const data = useDB()
  const author = data.author
  const socialSection: SocialSectionType = {
    socialLinks: [
      {
        icon: 'tabler:brand-github',
        url: author.github,
      },
      {
        icon: 'mdi:instagram',
        url: author.instagram,
      },
      {
        icon: 'lucide:linkedin',
        url: author.linkedin,
      },
      {
        icon: 'lucide:facebook',
        url: author.facebook,
      },
    ],
  };
  
  const { socialLinks } = socialSection;
  return (
    <ul className={className}>
      {socialLinks.map(({ icon, url }) => (
        <SocialIcon key={url} icon={icon} url={url} />
      ))}
    </ul>
  );
};

export default SocialLinks;
