
import { Sidebar, SocialLink } from '@/components';
import { useDB } from '@/lib/hooks/use-db';

const Email = () => {
  const data = useDB()
  const author = data.author
  return (
    <Sidebar side="right">
      <SocialLink
        href={`mailto:${author.email}`}
        className="[writing-mode:vertical-lr] font-mono tracking-widest text-xs"
      >
        {author.email}
      </SocialLink>
    </Sidebar>
  );
};

export default Email;
