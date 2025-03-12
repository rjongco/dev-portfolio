import { Button, Wrapper } from '@/components';

import { getSectionAnimation } from '@/components/animations';
import { useDB } from '@/lib/hooks/use-db';

const Contact = () => {
  const data = useDB()
  const author = data.author
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {"what's next"}
      </p>
      <h2 className="heading-secondary !mb-5">{"get in touch"}</h2>
      <div dangerouslySetInnerHTML={{ __html: author.spill }}></div>

      <Button type="link" size="lg" href={`mailto:${author.email}`} center className="mt-12">
        Say Hello
      </Button>
    </Wrapper>
  );
};

export default Contact;
