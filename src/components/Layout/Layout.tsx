import { Children, ReactNode } from 'react';
import { MainHeader } from '../MainHeader/MainHeader';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainHeader />
      <br />
      {children}
    </>
  );
};
