import * as React from 'react';
import Header from './Header';

class Page extends React.Component {
  public render() {
    return (
      <div>
        <Header></Header>
        {this.props.children}
      </div>
    );
  }
}

export default Page;