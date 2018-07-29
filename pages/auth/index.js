import React from 'react';
import User from '../../components/User';

const authIndexPage = props => {
  return (
    <div>
      <h1>The Auth Index Page - {props.appName}</h1>
      <User name="Kapil Sharma" age={24} />
    </div>
  );
};

authIndexPage.getInitialProps = context => {
  // console.log('context: ', context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Super App (Auth)' });
    }, 2000);
  });
  return promise;
};

export default authIndexPage;
