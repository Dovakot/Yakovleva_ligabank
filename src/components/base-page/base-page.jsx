import React from 'react';

import ContentWrapper from './content-wrapper/content-wrapper';
import Header from '../ui/header/header';
import Footer from '../ui/footer/footer';

function BasePage(props) {
  return (
    <>
      <Header />
      <ContentWrapper {...props} />
      <Footer />
    </>
  );
}

export default BasePage;
