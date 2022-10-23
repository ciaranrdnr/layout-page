import React from 'react';
import Head from 'next/head'
import Header from './header';
import Footer from './footer';
import Main from './main';

interface IProps {
 children: React.ReactNode;
}

const Layout = ({
  children,
}: IProps) => {
  return (
    <div >
      <Head>
        <title>Blibli</title>
        <meta name="description" content="Blibli layout page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};
export default Layout;