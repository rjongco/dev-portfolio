'use client'
import { Email, Footer, Navbar, Social } from '@/containers';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {

  return (
    <div className={className}>
      <Navbar />
      <main
        className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg w-screen flex flex-col`}
      >
        {children}
      </main>
      <Footer />
      <Social />
      <Email />
    </div>
  );
};

export default Layout;
