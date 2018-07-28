import React from 'react';

import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => {
  return (
    <div>
      <h1>The Main Page</h1>
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
};

export default indexPage;
