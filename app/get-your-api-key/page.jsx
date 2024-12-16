import React from 'react';

const GetApiKey = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold  mb-10'>How to Use API Keys</h1>
      <h4 className='text-xl font-bold my-3'>February 06, 2024</h4>
      <p className='text-lg my-5 '>
        <span className='text-bold'>Server-side APIs</span> allow developers to
        access data made available by third-party companies and organizations.
        To use this data, developers can create applications that make requests
        to URLs, or endpoints, provided by those third-party organizations—and
        in turn, the endpoints respond with the requested data.
      </p>
      <h3 className='text-2xl font-bold my-6'>API Developer options</h3>
      <h4 className='text-lg'>
        Some APIs allow developers to request data without any credentials;
        others require an API key, to prevent users from making too many
        requests, potentially disrupting a websites ability to function.
      </h4>
      <p className='text-lg my-5'>
        In time, youll learn how to create these requests on the back end of
        your application, to avoid exposing your key to other users. But for the
        purposes of this guide, youll include an API key in a URL that you'll
        use in your JavaScript code on the front end.
      </p>
      <h1 className='text-5xl font-bold my-5'>Request an API Key</h1>
      <p className='text-lg my-5'>
        Before you start working with the OpenWeather API, you'll need to
        request an API key. To do that, visit the OpenWeather signup page and
        create an account.
      </p>
      <h3 className='text-2xl font-bold my-6'>General options</h3>
      <p className='text-lg my-5'>
        Tap <span className=' font-bold'>Quick ettings developer tisles</span>{' '}
        to add selected developer options to your Quick Settings panel.
      </p>
      <p className='text-lg my-5'>
        After you've created your account, if you are redirected to a page with
        several secondary headings (such as New Products, Services, and API
        Keys), click on API Keys. If you aren't redirected to that page, click
        on your username in the upper right-hand corner of the window, to
        display a drop-down menu. From this menu, select My API Keys. You'll
        receive a message that you can generate as many API keys as necessary
        for your subscription. In this case, though, you'll only need to
        generate one key.
      </p>
    </div>
  );
};

export default GetApiKey;
