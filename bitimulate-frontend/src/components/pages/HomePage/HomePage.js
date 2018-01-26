import React, { Component } from 'react';
import { Header, PageTemplate, PolyBackground } from 'components';

export class HomePage extends Component {
  render() {
    return (
      <PageTemplate
        header={<Header />}
      >
        <PolyBackground>

        </PolyBackground>
      </PageTemplate>
    );
  }
}

export default HomePage;
