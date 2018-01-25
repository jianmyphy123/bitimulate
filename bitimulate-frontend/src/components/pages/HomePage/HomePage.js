import React, { Component } from 'react';
import { Header, PageTemplate } from 'components';

export class HomePage extends Component {
  render() {
    return (
      <PageTemplate
        header={<Header />}
        responsive
      >
        HomePage!
      </PageTemplate>
    );
  }
}

export default HomePage;
