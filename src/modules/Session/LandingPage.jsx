import React from 'react';
import { Page } from 'components';
import VSLogo from 'img/vs_footer.png';
import './styles/LandingPage.less';

const LandingPage = () => {
  document.body.setAttribute('class', '');
  return (
  <Page className="LandingPage-container bg-vs-gradient">
    <Page.ContentWrapper>
      <div className="text-center">
        <img src={VSLogo} role="presentation" />
      </div>
    </Page.ContentWrapper>
  </Page>
  );
};

export default LandingPage;
