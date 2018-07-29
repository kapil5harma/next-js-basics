import React, { Component } from 'react';

import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
  static getInitialProps(context) {
    // console.log('context: ', context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: 'Super App' });
      }, 2000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>
          Go to{' '}
          <Link href="/auth">
            <a>Auth</a>
          </Link>{' '}
          (using next/link)
        </p>
        <button onClick={() => Router.push('/auth')}>
          Go to Auth (using next/router)
        </button>
      </div>
    );
  }
}

export default IndexPage;
